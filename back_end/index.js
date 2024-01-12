// dependancies

const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(express.json());
app.use(cors())

app.listen (3002, () => {
    console.log('Server is running port 3002')
})

// create database (mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Admin@12345',
    database: 'plan',
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.post ('/register', (req, res) => {
    // get variables from the form
    const sentEmail = req.body.Email;
    const sentUsername = req.body.Username;
    const sentPassword = req.body.Password;

    // lets create SQL statement to inser the user to the database table Users
    const SQL = 'INSERT INTO user (email, username, password) VALUE (?,?,?)';

    const Values = [sentEmail, sentUsername, sentPassword];

    //Query to execute the SQL statement started above
    db.query(SQL, Values, (err, results) => {
        if(err) {
            res.send(err);
        } else {
            console.log('User created successfully!');
            res.send({message: 'User Added'});
        }
    }) 
})