# Seat Booking System

## Table of Contents
- [Objective](#objective)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Code Structure](#code-structure)
- [Approach](#approach)
- [Assumptions](#assumptions)
- [Edge Cases](#edge-cases)
- [License](#license)

## Objective
The objective of this project is to create a seat booking system similar to BookMyShow using HTML, CSS, jQuery, and SQL. The system manages seat availability and updates the interface in real-time.

## Requirements
- **HTML & CSS:**
  - Create a webpage with 5 boxes labeled A1, A2, A3, A4, and A6.
  - A5 should be displayed as blocked.
  - A1 and A4 should be shown as booked.
  - A2, A3, and A6 should be available for booking.
  - Hovering over any available box should highlight it.

- **jQuery:**
  - Implement functionality to allow users to book available seats.
  - Reflect changes immediately after booking.
  - Handle seat availability on page refresh.

- **SQL:**
  - Design a simple database schema to manage seat availability.
  - Implement necessary queries to update seat status in the database.

- **User Interaction:**
  - Users should be able to book seats by clicking on available boxes.
  - Update the UI to reflect booked seats in real-time.
  - Indicate hover state for booking consideration.

- **Node.js and Express.js**
  - Backend for interacting with the database.
    
## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/seat-booking-system.git
   cd seat-booking-system

2. **Install dependencies:**
```bash
npm install
```

3. **Set up the database:**

 -Import the database.sql file into your MySQL server.
 -Ensure you have a .env file with the following content:

```bash
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=seat_booking_system
```
4. **Start the server:**

```bash
node server.js
```

## **Usage**
1.Open your browser and navigate to http://localhost:3000.
2.You will see the seat booking system interface.
3.Hover over available seats to see the hover effect.
4.Click on available seats to book them. The status will update in real-time.

## **Database Schema**
The database schema consists of a single table named seats:

```bash
CREATE DATABASE seat_booking_system;

USE seat_booking_system;

CREATE TABLE seats (
    seat_id VARCHAR(2) PRIMARY KEY,
    status ENUM('available', 'booked', 'blocked') NOT NULL
);

INSERT INTO seats (seat_id, status) VALUES
('A1', 'booked'),
('A2', 'available'),
('A3', 'available'),
('A4', 'booked'),
('A5', 'blocked'),
('A6', 'available');
```

## **Code Structure**
-index.html: Main HTML file that defines the structure of the seat booking system.
-styles.css: CSS file that styles the seat booking system.
-script.js: jQuery script that manages seat interactions and AJAX requests.
-server.js: Node.js server script that handles routing and database operations.
-database.sql: SQL script to set up the database and initial seat statuses.

## **Approach**

1.HTML & CSS:

-Defined the structure and styles for the seat booking system, including hover effects and initial seat statuses.


2.jQuery:

-Implemented functions to handle hover effects and seat booking actions.
-Used AJAX to communicate with the server and update seat statuses in real-time.


3.SQL:

-Designed a simple database schema to store seat statuses.
-Implemented queries to update seat statuses upon booking.


## **Assumptions**
-The initial state of the seats is predefined and stored in the database.
-The server is responsible for managing seat statuses and updating the database.
-The client communicates with the server via AJAX for real-time updates.


## **Edge Cases**
-Concurrency: Handled by ensuring the database is updated atomically during seat booking.
-Page Refresh: The seat statuses are fetched from the server upon page load to ensure consistency.

## **License**
-This project is licensed under the MIT License.
