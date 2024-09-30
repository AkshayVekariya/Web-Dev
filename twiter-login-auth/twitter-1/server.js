const express = require('express');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const session = require('express-session');
const crypto = require('crypto');

const app = express();

// Generate a random session secret key
const sessionSecret = crypto.randomBytes(64).toString('hex');

// Middleware for sessions
app.use(session({
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true
}));

// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration for Twitter OAuth
passport.use(new TwitterStrategy({
    consumerKey: 'YOUR_CONSUMER_KEY',
    consumerSecret: 'YOUR_CONSUMER_SECRET',
    callbackURL: "http://localhost:3000/auth/twitter/callback"
}, (token, tokenSecret, profile, done) => {
    // Handle user profile data
    return done(null, profile);
}));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// Route to initiate Twitter authentication
app.get('/auth/twitter', passport.authenticate('twitter'));

// Route to handle Twitter authentication callback
app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect or respond as needed
        res.redirect('/');
    });

// Route handler for the root URL
app.get(['/', '/login/twitter'], (req, res) => {
    res.send('Hello, World! This is the Twitter login page.');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Session secret key: ${sessionSecret}`);
});
