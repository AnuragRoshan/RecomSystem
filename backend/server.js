const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const wishlistController = require("./Routes/wishlist.controller")
// const User = require("./Models/user");
const authRoutes = require("./Routes/auth")
//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoDB = "mongodb+srv://anurag:anurag@recomsystem.joqqr.mongodb.net/recomsystem?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  autoIndex: true,
  keepAlive: true,
  useUnifiedTopology: true,

  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,

})
  .then(() => console.log("**********" + "Mongodb Connected" + "**********")
  ).catch(err => console.log("Error: " + err))

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes

app.use("/", authRoutes);

// app.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) throw err;
//     if (!user) res.send("No User Exists");
//     else {
//       req.logIn(user, (err) => {
//         if (err) throw err;
//         res.send("Successfully Authenticated");
//         console.log(req.user);
//       });
//     }
//   })(req, res, next);
// });
// app.post("/register", (req, res) => {
//   User.findOne({ username: req.body.username }, async (err, doc ) => {
//     if (err) throw err;
//     if (doc) res.send("User Already Exists");
//     if (!doc ) {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);

//       const newUser = new User({
//         username: req.body.username,
//         email:req.body.email,
//         password: hashedPassword,
//       });
//       await newUser.save();
//       res.send("User Created");
//     }
//   });
// });
// app.get("/user", (req, res) => {
// res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
// });
//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server Has Started on PORT ${PORT}`);
});
