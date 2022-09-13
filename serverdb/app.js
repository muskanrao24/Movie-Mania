const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");

const User = require("./models/User");

const authenticateUser = require("./middlewares/authenticateUser");

const app = express();

require('./startup/db')();
require('./startup/middleware')(app);

// cookie session
app.use(
  cookieSession({
    keys: ["randomStringASyoulikehjudfsajk"],
  })
);

// route for serving frontend files
app
  .get("/", (req, res) => {
    res.render("index");
  })
  .get("/login", (req, res) => {
    res.render("login");
  })
  .get("/register", (req, res) => {
    res.render("register");
  })

  .get("/home", authenticateUser, (req, res) => {
    res.render("home", { user: req.session.user });
  });


// route for handling post requests
app
  .post("/login", async (req, res) => {
    const { email, password } = req.body;

    // check for missing filds
    if (!email || !password) return res.status(400).send("Please enter all the fields");

    const doesUserExits = await User.findOne({ email });

    if (!doesUserExits) return res.status(400).send(`User with email ${email} doesn't exists. Please Sign up first.`);

    const doesPasswordMatch = await bcrypt.compare(
      password,
      doesUserExits.password
    );

    if (!doesPasswordMatch) return res.status(400).send("Wrong password");

    // else he\s logged in
    req.session.user = {
      email,
    };
    res.status(200).send("Login successful");

    // res.redirect("/home");
  })
  .post("/register", async (req, res) => {
    const { firstName, lastName, email, password, gender, timestamp } = req.body;
    console.log(req.body);

    // check for missing fields
    if (!firstName || !lastName || !email || !password || !gender) return res.status(400).send("Please enter all the required fields");

    const doesUserExitsAlreay = await User.findOne({ email });

    if (doesUserExitsAlreay) return res.status(400).send("A user with that email already exits please try another one!");

    // lets hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    const latestUser = new User({ firstName, lastName, email, password: hashedPassword, gender, timestamp });

    latestUser
      .save()
      .then(() => {
        res.status(200).send("registered account!");
        // res.redirect("/login");
      })
      .catch((err) => console.log(err));
  })
  .post("/fetchUser", async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      console.log(user)
      return res.status(404).send("User not found");
    } else {
      return res.status(200).send(user);
    }
  });

//logout
app.get("/logout", authenticateUser, (req, res) => {
  req.session.user = null;
  res.redirect("/login");
});

// server config
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started listening on port: ${PORT}`);
});
