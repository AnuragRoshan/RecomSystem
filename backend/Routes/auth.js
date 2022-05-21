const router = require("express").Router();
const User = require("../Models/user");

const bcrypt = require("bcryptjs");
const passport = require("passport");


// Signup

router.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) { throw err; }
        if (doc) res.send("User Already Exists");
        // if (email.length < 5) res.send("length of email is too short`")
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Created");
        }
    });
});

// LOGIN
router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists").json({error:"User doesnt exist"});
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.status(200).json(user);
                console.log("SUCCESSFULLY LOGGED IN");
            });
        }
    })(req, res, next);
});

router.post("/addtoWatchlist", (req, res, next) => {
   
});



module.exports = router;