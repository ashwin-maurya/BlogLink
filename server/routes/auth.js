const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validator, validationResult } = require("express-validator");
const bycrypt = require("bcryptjs");
var fetchuser = require("../middleware/fetchuser");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "YouwillDieforThat";
//ROUTE:1 Create a user using : POST "/api/auth/createuser". No login required

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // If there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check wether the user with this email exists already
    try {
      let success = false;
      console.log(req.body.email);
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "Sorry a user with this email already exists",
        });
      }
      const salt = await bycrypt.genSalt(10);
      let secPass = await bycrypt.hash(req.body.password, salt);

      //create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      //   console.log(jwtData)
      success = true;

      res.json({ success: success, authtoken: authtoken, UserID: user.id });
      // console.log(res.json)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Sever error,Something  in the way");
    }
    // .then(user=>res.json(user)).catch(err=>{
    //     console.log(err)
    //     res.json({error:'please enter a unique value for email',message:err.message})
    // })
  }
);

//ROUTE:2 Authenticate a user using : POST "/api/auth/login". No login required

router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let success = false;
      // console.log(user)
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordcompare = await bycrypt.compare(password, user.password);
      if (!passwordcompare) {
        return res.status(400).json({
          success: success,
          error: "Please try to login with correct credentials",
        });
      }
      success = true;
      const payload = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(payload, JWT_SECRET);
      //   console.log(jwtData)
      res.json({ success: true, authtoken: authtoken, UserID: user.id });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Sever error,Something in the way");
    }
  }
);

// ROUTE:3 Get loggedin user details susing : POST "/api/auth/getuser".  login required
router.get("/getCurrentuser", fetchuser, async (req, res) => {
  try {
    const userID = req.user.id;
    const user = await User.findById(userID);

    console.log(user);

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internl server error ,SOmething in the way");
  }
});

// ROUTE:4 Logout user using : POST "/api/auth/logout". login required
// router.post("/logout", fetchuser, async (req, res) => {
//   try {
//     const user = req.user;

//     // You should add the user's token to the blacklist here.
//     // For simplicity, I'll use an array as a blacklist in this example.
//     // In a production environment, use a more secure storage option.
//     blacklist.push(user.token);

//     res.json({ success: true, message: "Logged out successfully" });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server error, Something went wrong");
//   }
// });

module.exports = router;
