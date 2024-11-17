# Contacts Management App

## Description

This project is a **Contacts Management App** built using React.js, Node.js, and Express. It allows users to perform CRUD operations on a list of contacts. Users can add, update, delete, and view details of contacts stored in a database.

The app features a **user-friendly UI** for managing contacts, and it's connected to a backend server that interacts with a database to persist contact data.

## Features

- **View Contacts**: Display a list of all contacts in a table with pagination.
- **Add Contact**: Add new contacts to the database.
- **Edit Contact**: Modify existing contact information.
- **Delete Contact**: Remove contacts from the database.

## Technologies Used

- **Frontend**: React.js, Material UI
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **API**: RESTful API for contact management
- **State Management**: React useState, useEffect hooks
- **Package Manager**: npm


# Challenges and Solutions:
  ## Challenge: Handling controlled inputs in React
  ### Solution: I encountered an issue where the form inputs were initially uncontrolled (values were undefined) and later became controlled. I ensured the inputs were always controlled by setting initial state values to empty strings in the formData.
  
  ## Challenge: Phone number field validation
  ### Solution: I had a problem with the phone number field, where the server rejected null values. I implemented validation on the frontend to ensure the phone number field is not empty before sending the data to the server.

   ## Challenge:  Handling frontend using MUI
  ### Solution:This was my first project using the Material UI (MUI) library, and I encountered several challenges during both the setup and usage. Initially, I struggled with understanding the component structure, customization, and how to integrate MUI components with the existing React setup.  To overcome these challenges, I dedicated time to reading through the official MUI documentation and exploring various tutorials and articles. Because of this the project took more time than normal.

## Setup Instructions

Follow these steps to set up the project on your local machine:

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MySQL** (for the database)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/contacts-management-app.git
   cd contacts-management-app

2. **Install backend dependencies
   ```bash
   npm install
3. **Install frontend dependencies
   ```bash
   cd frontend
   npm install
4.Set up the MySQL database:

Create a new database in MySQL (e.g., contacts_db).
Run the following SQL script to set up the database schema:
    ```sql
    
    CREATE TABLE contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(100),
      lastName VARCHAR(100),
      email VARCHAR(100),
      phone VARCHAR(15),
      company VARCHAR(100),
      jobTitle VARCHAR(100)
    );
5. Run the backend server:
    ```bash
    npm start
6. Run the frontend server:
    ```bash
    cd frontend
    npm start
