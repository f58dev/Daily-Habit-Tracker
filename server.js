require("dotenv").config();
require("./config/database");
const express = require("express");
const app = express();

const methodOverride = require("method-override");
const morgan = require("morgan");
const session = require('express-session');
const MongoStore = require("connect-mongo");
const isSignedIn = require("./middleware/is-signed-in.js");
const passUserToView = require("./middleware/pass-user-to-view.js");

// Controllers
const authController = require("./controllers/auth.js");
const habitsController = require('./controllers/habits.js');

// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : "3000";

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan('dev'));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);

app.use(passUserToView);

// Public routes
app.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect(`/users/${req.session.user._id}/habits`);
  } else {
    res.render('index.ejs');
  }
});

app.use("/auth", authController);

// Protected routes
app.use(isSignedIn);
app.use('/users/:userId/habits', habitsController);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
