const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "droner5678",
    database: "eksamensprojekt"
})

app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO users (username, password) VALUES (?,?)", [username, password],
        (err, result) => {
        console.log(err);
        })
})
