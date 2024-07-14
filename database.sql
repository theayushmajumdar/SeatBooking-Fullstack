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
