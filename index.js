const express = require('express');
const session = require("express-session");
const req = require('express/lib/request');
const fs = require("fs");

const app = express()

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('./public'), session({
    secret: "extra text that no one will guess",
    name: "wazaSessionID",
    resave: false,
    saveUninitialized: true
}));
app.get("/main", function (req, res) {
    if (!req.session.loggedIn) {
        res.redirect("/");
    }

});
app.get("/admin", function (req, res) {
    if (!req.session.loggedIn) {
        res.redirect("/");
    }
});
app.get("/loginpage", function (req, res) {
    let profile = fs.readFileSync("./public/login.html", "utf8");

    res.send(profile);

});
app.get("/signup", function (req, res) {
    let profile = fs.readFileSync("./public/signup.html", "utf8");

    res.send(profile);

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


const mysql = require("mysql2");


// var db_config = {
//     host: "us-cdbr-east-05.cleardb.net",
//     user: "b2baee19e53680",
//     password: "d53c023c",
//     database: "heroku_c9a2f09ca67205f"
// };
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
var db_config = {
    host: "localhost",
    user: "root",
    password: "",
<<<<<<< Updated upstream
    database: "bridgethegap"
=======
    database: "journalentriestest"
>>>>>>> Stashed changes
};
var connection = mysql.createPool(db_config);

// Notice that this is a "POST"
app.post("/login", function (req, res) {
    res.setHeader("Content-Type", "application/json");

    authenticate(req.body.email, req.body.password,
        function (userRecord, isadmin) {
            if (userRecord == null) {
                res.send({
                    status: "fail",
                    msg: "User account not found."
                });
            } else {
                req.session.loggedIn = true;
                req.session.email = userRecord.email;
                req.session.name = userRecord.name;
                if (isadmin) {
                    res.send({
                        status: "admin",
                        msg: "Logged in."
                    });
                } else {
                    res.send({
                        status: "success",
                        msg: "Logged in.",
                        sessionid: userRecord.ID
                    });
                }
            }
        });

});
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

app.post("/signup", function (req, res) {
    res.setHeader("Content-Type", "application/json");

    let allPages = '{ "meditation": "no", "yoga": "no", "journal": "no", "resources": "no", "nutrition": "no", "walks": "no", "exercise": "no", "sleeping-habits": "no"}';
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
                connection.query(userRecords, [recordValues]);
                connection.query("SELECT * FROM user",
                    function (error, results, fields) {
                        if (error) {
                            console.log(error);
                        }
                        console.log(results);
                    }
                );
                authenticate(req.body.email, req.body.password,
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

        }
    );


});

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
async function init() {
    const mysql = require("mysql2/promise");
    // const connection = await mysql.createConnection({
    //     host: "us-cdbr-east-05.cleardb.net",
    //     user: "b2baee19e53680",
    //     password: "d53c023c",
    //     database: "heroku_c9a2f09ca67205f",
    //     multipleStatements: true
    // });
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        multipleStatements: true
    });
    //DROP DATABASE IF EXISTS bridgethegap;

    const createDBAndTables = `
<<<<<<< Updated upstream
        CREATE DATABASE IF NOT EXISTS bridgethegap;
        use bridgethegap;
        CREATE TABLE IF NOT EXISTS user (
        ID int NOT NULL AUTO_INCREMENT,
        name varchar(30),
        email varchar(30),
        password varchar(30),
        favoritepages varchar(800),
=======
    CREATE DATABASE IF NOT EXISTS journals;
        use journals;
        CREATE TABLE IF NOT EXISTS user (
        ID int NOT NULL AUTO_INCREMENT,
        title varchar(50),
        entry varchar(250),
        user_id int, 
>>>>>>> Stashed changes
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

    // ----- Journal Entry feature: Creating a Journal Entry into our journals database -----------------------------

    app.post("/createJournalEntry", function (req, res) {
        const id = req.body.id;
        const title = req.body.title;
        const entry = req.body.entry;
        const user_id = req.body.user_id;
        
      // Inserts information into "users" section of journals database
        connection.query("INSERT INTO journals WHERE users (id, title, entry, user_id"), [id, title, entry, user_id],
            function (error, results, fields) {
                if (error) {
                    console.log(error);
                }
                res.send(results);
            }
    });
   // -------Journal Entry feature: Delete a Journal Entry from our journals database-----------------------------

   app.post("/deleteJournalEntry", function (req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const entry = req.body.entry;
    const user_id = req.body.user_id;
    
  // Retireves journal entry information into "users" section of journals database
    connection.query("DELETE from journals WHERE id= ? AND user id= ? (id, user_id"), [id, user_id],
        function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            res.send(results);
        }
});
//-------------------------------------------------------------------------------------------------------------

    if (rows.length == 0) {

        let userRecords = "insert into admin (name, email, password) values ?";
        let recordValues = [
            ["Admin", "admin@bridgethegap.ca", "verysecretivepassword"]
        ];
        await connection.query(userRecords, [recordValues]);
    }
    console.log("run_test")
}

// process.env.PORT is the port Heroku gives
app.listen(3000, init);