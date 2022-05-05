const express = require('express');
const session = require("express-session");
const fs = require("fs");


const app = express()
// const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: 'us-cdbr-east-05.cleardb.net',
//     user: 'ba23755ea94897',
//     password: '000cc533',
//     database: 'heroku_8cd9f1c41e90292'
// })

// Going to be used for heroku
let http = require('http');
let url = require('url');
const https = require('https');


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
app.get("/loginpage", function (req, res) {
    let profile = fs.readFileSync("./public/login.html", "utf8");

    res.send(profile);

});
app.get("/logout", function (req, res) {

    if (req.session) {
        req.session.destroy(function (error) {
            if (error) {
                res.status(400).send("Unable to log out")
            } else {
                // session deleted, redirect to home
                res.redirect("/");
            }
        });
    }
});
// Notice that this is a "POST"
app.post("/login", function (req, res) {
    res.setHeader("Content-Type", "application/json");

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
                    msg: "Logged in."
                });
            }
        });

});
app.post("/signup", function (req, res) {
    res.setHeader("Content-Type", "application/json");

    const mysql = require("mysql2");
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "bridgethegap"
    });
    connection.connect();
    let userRecords = "insert into user (name, email, password) values ?";
    let recordValues = [
        [req.body.uname, req.body.email, req.body.password]
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
});

function authenticate(email, pwd, callback) {

    const mysql = require("mysql2");
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "bridgethegap"
    });
    connection.connect();
    connection.query(
        //'SELECT * FROM user',
        "SELECT * FROM user WHERE email = ? AND password = ?", [email, pwd],
        function (error, results, fields) {

            if (error) {
                console.log(error);
            }
            if (results.length > 0) {
                // email and password found
                return callback(results[0]);
            } else {
                // user not found
                return callback(null);
            }

        }
    );

}
async function init() {
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        multipleStatements: true
    });
    const createDBAndTables = `CREATE DATABASE IF NOT EXISTS bridgethegap;
        use bridgethegap;
        CREATE TABLE IF NOT EXISTS user (
        ID int NOT NULL AUTO_INCREMENT,
        name varchar(30),
        email varchar(30),
        password varchar(30),
        PRIMARY KEY (ID));`;
    await connection.query(createDBAndTables);

}
// process.env.PORT is the port Heroku gives
app.listen(process.env.PORT || 3000, init);







