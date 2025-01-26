# Daily Habit Tracker

A web application for tracking daily habits. This app allows users to sign up, log in, and create, edit, view, and delete their habits.

## Features

- **User Authentication**
  - Sign up and sign in functionality
  - Secure password handling

- **Habit Management**
  - Add new habits
  - Edit existing habits
  - View a list of habits
  - View details of a specific habit
  - Delete habits

- **Reusable Components**
  - Navbar and partial views for better code organization

## Project Structure

```plaintext
.
├── config
│   └── database.js          # Database configuration
├── controllers
│   ├── auth.js              # Authentication-related controllers
│   └── habits.js            # Habit-related controllers
├── middleware
│   ├── is-signed-in.js      # Middleware to check if user is signed in
│   └── pass-user-to-view.js # Middleware to pass user data to views
├── models
│   └── user.js              # User schema and model
├── node_modules             # Node.js modules
├── views
│   ├── auth
│   │   ├── sign-in.ejs      # Sign-in page
│   │   └── sign-up.ejs      # Sign-up page
│   ├── habits
│   │   ├── edit.ejs         # Edit habit page
│   │   ├── index.ejs        # Habits list page
│   │   ├── new.ejs          # Add new habit page
│   │   └── show.ejs         # Habit details page
│   └── partials
│       ├── _navbar.ejs      # Navbar partial
│       └── index.ejs        # Shared partials
├── .env                     # Environment variables
├── .gitignore               # Ignored files for Git
├── package-lock.json        # NPM dependency lock file
├── package.json             # NPM project configuration
├── README.md                # Project documentation (this file)
└── server.js                # Main server file
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd daily-habit-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following variables:

   ```plaintext
   PORT=3000
   MONGODB_URI=<your-mongodb-connection-string>
   SESSION_SECRET=<your-session-secret>
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript Templates)
- **Database**: MongoDB
- **Authentication**: Express-session, bcrypt

## Routes

### Authentication Routes

| Method | Endpoint     | Description          |
|--------|--------------|----------------------|
| GET    | `/sign-in`   | Sign-in page         |
| POST   | `/sign-in`   | Sign-in action       |
| GET    | `/sign-up`   | Sign-up page         |
| POST   | `/sign-up`   | Sign-up action       |
| GET    | `/logout`    | Logout action        |

### Habit Routes

| Method | Endpoint      | Description             |
|--------|---------------|-------------------------|
| GET    | `/habits`     | List all habits         |
| GET    | `/habits/new` | New habit form          |
| POST   | `/habits`     | Create a new habit      |
| GET    | `/habits/:id` | View details of a habit |
| GET    | `/habits/:id/edit` | Edit habit form    |
| PUT    | `/habits/:id` | Update an existing habit|
| DELETE | `/habits/:id` | Delete a habit          |

## Future Enhancements

- Add a dashboard with habit progress tracking.
- Implement habit reminders via email or notifications.
- Improve UI/UX with modern frontend frameworks.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Feel free to contribute by submitting issues or pull requests!
