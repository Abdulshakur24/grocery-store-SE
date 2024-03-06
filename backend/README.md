# Setting Up the Grocery Store Backend

This guide will assist you in getting the grocery store backend operational on your local machine.

## Prerequisites

Before proceeding, ensure that the following are installed on your machine:

- **Node.js and npm:** [Download here](https://nodejs.org/en/download)

## Installation

1. Navigate to the backend's directory.
2. Install project dependencies:
   ```bash
   yarn install
   ```
   This command installs all required libraries and dependencies specified in the project's `package.json` file.

## Create the Database (MySQL)

The backend employs Prisma as its Object-Relational Mapping (ORM) for MySQL. Follow these steps to set it up:

1. **Create a `.env` file:**

   - Create a file named `.env` in the root directory of your `backend` project.

2. **Add the database connection string:**

   - Include the following line in your `.env` file, replacing placeholders with your MySQL credentials and database name:
     ```env
     DATABASE_URL="mysql://<username>:<password>@<hostname>:<port>/<database_name>"
     ```
     - **Example:**
       ```env
       DATABASE_URL="mysql://root:mypassword@localhost:3306/grocery_store"
       ```

3. **Create the database:**

   - Open your MySQL terminal or client.
   - Connect to your MySQL server using your credentials.
   - Execute the following SQL command to create the database:
     ```sql
     CREATE DATABASE grocery_store;
     ```

4. **Initialize Prisma migrations:**
   - Navigate to your project's backend directory in your terminal.
   - Run the following command to initialize Prisma migrations:
     ```bash
     yarn prisma migrate dev
     ```

## Running the Backend

Upon completing the installation and database setup, initiate the backend server with the following command in your terminal:

```bash
yarn start
```

The development server will start, and the backend will be accessible at `http://localhost:8070` by default.
