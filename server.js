const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle seat booking
app.post('/bookSeat', (req, res) => {
    const seatId = req.body.seatId;
    const query = 'UPDATE seats SET status = ? WHERE seat_id = ?';

    connection.query(query, ['booked', seatId], (err, result) => {
        if (err) throw err;
        res.json({ status: 'success' });
    });
});

// Route to get seat data
app.get('/seats', (req, res) => {
    const query = 'SELECT * FROM seats';
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
