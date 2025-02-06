# levl-01-auth-basic-email-pass
# Basic Authentication Application

This is a **Basic Authentication** application using **email** and **password** for user authentication, with **PostgreSQL** as the database for storing user credentials. This demo application shows how to set up a simple authentication system using Node.js and Express.

## Features

- **User Registration**: Register a user with an email and password.
- **User Login**: Log in using email and password.
- **PostgreSQL Database**: User credentials are stored in a PostgreSQL database.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/) (version 12.x or higher)

## Installation and Setup

### 1. Install Node.js, npm, and PostgreSQL

Make sure **Node.js**, **npm**, and **PostgreSQL** are installed on your system.

- **Install Node.js and npm**: Follow the installation guide on [Node.js website](https://nodejs.org/en/).
- **Install PostgreSQL**: Follow the installation guide on [PostgreSQL website](https://www.postgresql.org/download/).

### 2. Clone the repository

Clone this repository to your local machine:

```bash
git clone https://github.com/vishwjeet-ujgare/levl-01-auth-basic-email-pass.git
cd levl-01-auth-basic-email-pass
```

### 3. Install Node.js dependencies

Run the following command to install the necessary Node.js dependencies:

```bash
npm install
```

### 4. Set up PostgreSQL Database

#### 4.1 Create the PostgreSQL database

1. Open your terminal and log into PostgreSQL:

```bash
psql -U postgres
```

2. Create the database `auth_l1`:

```sql
CREATE DATABASE auth_l1;
```

3. Switch to the newly created database:

```bash
psql -U postgres -d auth_l1
```

#### 4.2 Create the `users` table

Run the following SQL command to create a table where the user data (email and password) will be stored:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

### 5. Update Database Configuration

1. In your project folder, open the `index.js` (or the file where your database connection is set up).
2. Find the database configuration section and update it with your PostgreSQL database credentials:

```js
const dbConfig = {
  user: "postgres",
  password: "your_password",  // Replace with your PostgreSQL password
  host: "localhost",
  port: 5432,
  database: "auth_l1",  // Database name created earlier
};
```

> **Note**: Replace `"your_password"` with your PostgreSQL password.

### 6. Run the Application

Once everything is set up, you can run the application by executing:

```bash
npm start
```

This will start the Express server, and your application will be available at `http://localhost:5000`.





