const express = require('express');
const session = require("express-session");
const mysql = require("mysql2");
const fs = require("fs");
const app = express();

// ----- Middle ware -----------------------------
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(session({
    secret: "extra text that no one will guess",
    name: "wazaSessionID",
    resave: false,
    saveUninitialized: true
}));

function auth(req, res, next) {
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect('/index.html');
    }
}

// ----- Routes -----------------------------
app.get(/^\/html\//i, auth); // Check all links containing /html/ to make sure users logged in.

app.get("/html/admin.html", auth, function (req, res, next) {
    console.log(req.session.name);
    if (req.session.name != 'Admin') { // Ensure only admin is viewing this site and block users from typing url.
        res.redirect('/html/main.html');
    } else {
        next();
    }
});

app.get("/loginpage", function (req, res) {
    if (req.session.loggedIn) { // Check if users are already logged in.
        res.redirect('/html/main.html');
    } else {
        let profile = fs.readFileSync("./public/login.html", "utf8");
        res.send(profile);
    }
});
app.get("/signup", function (req, res) {
    if (req.session.loggedIn) { // Check if users are already logged in.
        res.redirect('/html/main.html');
    } else {
        let profile = fs.readFileSync("./public/signup.html", "utf8");
        res.send(profile);
    }
});
app.get("/logout", function (req, res) {
    if (req.session) {
        req.session.destroy(function (error) {
            if (error) {
                res.status(400).send("Unable to log out")
            } else {
                // session deleted, redirect to home
                let profile = fs.readFileSync("./public/signedout.html", "utf8");
                res.send(profile);
            }
        });
    }
});


// ----- Database Configuration -----------------------------
var db_config = {
    host: "us-cdbr-east-05.cleardb.net",
    user: "b2baee19e53680",
    password: "d53c023c",
    database: "heroku_c9a2f09ca67205f"
};
// var db_config = {
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "bridgethegap"
// };
var connection = mysql.createPool(db_config);

// ----- Post Methods -----------------------------
app.post("/login", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    // Check if user exists in the database
    authenticate(req.body.email, req.body.password,
        function (userRecord, isadmin) {
            if (userRecord == null) { //Not found users email/password
                res.send({
                    status: "fail",
                    msg: "User account not found."
                });
            } else {
                req.session.loggedIn = true;
                req.session.email = userRecord.email;
                req.session.name = userRecord.name;
                if (isadmin) { // Account matches admin credentials
                    res.send({
                        status: "admin",
                        msg: "Logged in."
                    });
                } else {
                    res.send({ // Regular user account
                        status: "success",
                        msg: "Logged in.",
                        sessionid: userRecord.ID
                    });
                }
            }
        });

});

/**
 * Sends the email and name of users for the admin page
 */
app.post("/getuseraccounts", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    connection.query("SELECT name, email FROM user",
        function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            res.send(results);
        }
    );
});
/**
 * Sends the specified users' favorited list from database
 */
app.post("/checkFavoritePageStatus", function (req, res) {
    connection.query("SELECT favoritepages FROM user WHERE ID = ?", [req.body.userid],
        function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            res.send(results);
        }
    );
});
/**
 * Sets the specified users' favorited list to database
 */
app.post("/changeUserFavoritePageStatus", function (req, res) {
    connection.query("UPDATE user SET favoritepages = ? WHERE ID = ?", [req.body.newData, req.body.userid],
        function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            res.send(results);
        }
    );
});
/**
 * Sends the specified users' name to be displayed on main page
 */
app.post("/getUserName", function (req, res) {
    connection.query("SELECT name FROM user WHERE ID = ?", [req.body.userid],
        function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            res.send(results);
        }
    );
});
/**
 * Inserts a new journal entry into the journals table
 */
app.post("/createJournalEntry", function (req, res) {
    //Inserts information into "users" section of journals database
    let userRecords = "insert into journals (title, entry, user_id) values ?";
    let recordValues = [
        [req.body.contentTitle, req.body.contentEntry, req.body.contentUID]
    ];
    connection.query(userRecords, [recordValues]);
    res.send("success");
});
/**
 * Sends the specified users' journal entries
 */
app.post("/readJournalEntry", function (req, res) {
    connection.query("SELECT ID, title, entry FROM journals WHERE user_id = ?", [req.body.userid],
        function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            res.send(results);
        }
    );
});
/**
 * Removes the specified journal entry from journal table
 */
app.post("/deleteJournalEntry", function (req, res) {
    connection.query("DELETE FROM journals WHERE ID = ?", [req.body.jID],
        function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            res.send("success");
        }
    );
});
/**
 * Adds new user to users table
 */
app.post("/signup", function (req, res) {
    res.setHeader("Content-Type", "application/json");

    let allPages = '{ "meditation": "no", "yoga": "no", "journal": "no", "resources": "no", "nutrition": "no", "walks": "no", "music": "no", "sleeping_habits": "no", "self_assessment_quiz": "no"}';
    connection.query(
        "SELECT * FROM user WHERE email = ?", [req.body.email],
        function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            if (results.length > 0) {
                // EMAIL ALREADY EXISTS
                res.send({
                    status: "fail",
                    msg: "Email already in use"
                });
            } else {
                let userRecords = "insert into user (name, email, password, favoritepages) values ?";
                let recordValues = [
                    [req.body.uname, req.body.email, req.body.password, allPages]
                ];
                connection.query(userRecords, [recordValues], function (error) {
                    if (error) {
                        console.log(error);
                    } else {
                        authenticate(req.body.email, req.body.password, //Double check to ensure new user was inserted into the user table
                            function (userRecord) {
                                if (userRecord == null) {
                                    res.send({
                                        status: "fail",
                                        msg: "User account not found."
                                    });
                                } else {
                                    req.session.loggedIn = true;
                                    req.session.email = userRecord.email;
                                    req.session.name = userRecord.name;

                                    res.send({
                                        status: "success",
                                        msg: "Logged in.",
                                        sessionid: userRecord.ID
                                    });

                                }
                            });
                    }
                });
            }
        }
    );
});
/**
 * Checks the email and password to find a match in the users table
 * @param {String} email Email to be checked
 * @param {String} pwd Password to be checked
 * @param {Function} callback Callback function to send results to
 */
function authenticate(email, pwd, callback) {
    connection.query( // Check for admin account first
        "SELECT * FROM admin WHERE email = ? AND password = ?", [email, pwd],
        function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            if (results.length > 0) {
                return callback(results[0], true);
            } else { // Check User table
                connection.query(
                    "SELECT * FROM user WHERE email = ? AND password = ?", [email, pwd],
                    function (error, results, fields) {
                        if (error) {
                            console.log(error);
                        }
                        if (results.length > 0) {
                            // email and password found
                            return callback(results[0], false);
                        } else {
                            // user not found
                            return callback(null, false);
                        }

                    }
                );
            }
        }
    );
}

/**
 * Initializes the user,admin,jounal tables in the database
 */
async function init() {
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host: "us-cdbr-east-05.cleardb.net",
        user: "b2baee19e53680",
        password: "d53c023c",
        database: "heroku_c9a2f09ca67205f",
        multipleStatements: true
    });
    // const connection = await mysql.createConnection({
    //     host: "localhost",
    //     user: "root",
    //     password: "",
    //     multipleStatements: true
    // });
    //DROP DATABASE IF EXISTS bridgethegap;

    const createDBAndTables = `
        CREATE TABLE IF NOT EXISTS user (
        ID int NOT NULL AUTO_INCREMENT,
        name varchar(30),
        email varchar(30),
        password varchar(30),
        favoritepages varchar(800),
        PRIMARY KEY (ID)
        );
        CREATE TABLE IF NOT EXISTS journals (
            ID int NOT NULL AUTO_INCREMENT,
            title varchar(50),
            entry varchar(800),
            user_id int, 
            PRIMARY KEY (ID)
        );
        CREATE TABLE IF NOT EXISTS admin (
            ID int NOT NULL AUTO_INCREMENT,
            name varchar(30),
            email varchar(30),
            password varchar(30),
            PRIMARY KEY (ID)
            );`;
    await connection.query(createDBAndTables);

    const [rows, fields] = await connection.query("SELECT * FROM admin");

    if (rows.length == 0) {

        let userRecords = "insert into admin (name, email, password) values ?";
        let recordValues = [
            ["Admin", "admin@bridgethegap.ca", "verysecretivepassword"]
        ];
        await connection.query(userRecords, [recordValues]);
    }

}

app.use(express.static('./public'));
app.use(function (req, res, next) {
    res.status(404);

    res.redirect('/404.html');
});
// process.env.PORT is the port Heroku gives
app.listen(process.env.PORT || 3000, init);