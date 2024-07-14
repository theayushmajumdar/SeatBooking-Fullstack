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

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/seat-booking-system.git
   cd seat-booking-system
