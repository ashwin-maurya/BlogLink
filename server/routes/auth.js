const express = require("express");
const User = require("../models/User");
const Userdetail = require("../models/UserDetails");
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let success = false;
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
        username: req.body.username,
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
      success = true;

      res.json({ success: success, authtoken: authtoken, UserID: user.id });
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

//ROUTE:1 Create a user using : POST "/api/auth/createuser". No login required

router.post(
  "/googlesignup",
  [body("email", "Enter a valid Email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let success = false;
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "Sorry a user with this email already exists",
        });
      }
      //create a new user
      user = await User.create({
        username: req.body.username,
        name: req.body.name,
        password: "",
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;

      res.json({ success: success, authtoken: authtoken, UserID: user.id });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Sever error,Something  in the way");
    }
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
      res.json({ success: true, authtoken: authtoken, UserID: user.id });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Sever error,Something in the way");
    }
  }
);

router.post(
  "/googlelogin",
  [body("email", "Enter a valid Email").isEmail()],
  async (req, res) => {
    // If there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email } = req.body;
    try {
      let success = false;
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      success = true;
      const payload = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(payload, JWT_SECRET);
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
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internl server error ,SOmething in the way");
  }
});

// ROUTE:3 Get loggedin user details susing : POST "/api/auth/getuser".  login required
router.get("/getCurrentuserDetails/:userID", async (req, res) => {
  try {
    const userID = req.params.userID; // Access username from query parameter
    const userDetail = await Userdetail.findOne({ userID: userID });
    res.json(userDetail);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error, Something in the way");
  }
});

router.get("/getuser", async (req, res) => {
  try {
    const username = req.query.username;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error.message);

    res.status(500).send("Internal server error, something went wrong");
  }
});

router.get("/userexist", async (req, res) => {
  try {
    const email = req.query.email;
    // Use findOne to find a user by their username
    const user = await User.findOne({ email: email });

    if (user) {
      res.json({ status: true });
    } else {
      res.json({ status: false });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error, something went wrong");
  }
});
router.get("/userdetailexist", async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await Userdetail.findOne({ userID: userID });

    if (user) {
      res.json({ status: true });
    } else {
      res.json({ status: false });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error, something went wrong");
  }
});

router.post("/adduserdetail", fetchuser, async (req, res) => {
  try {
    const {
      userID,
      description,
      work,
      education,
      location,
      profileImg,
      bannerImg,
    } = req.body;
    console.log(userID);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let existingUserDetails = await Userdetail.findOne({ userID });

    if (existingUserDetails) {
      return res.status(409).json({ message: "User details already exist." });
    }

    const newUserDetails = new Userdetail({
      userID,
      description,
      work,
      education,
      location,
      profileImg,
      bannerImg,
    });

    const createdUserDetails = await newUserDetails.save();
    res.json(createdUserDetails);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error, S1omething went wrong");
  }
});

router.put("/updateuserdetail/:userID", fetchuser, async (req, res) => {
  let success = false;
  try {
    const { description, work, education, location } = req.body;
    const { userID } = req.params;

    const updatedUserDetails = {};
    if (description) {
      updatedUserDetails.description = description;
    }
    if (work) {
      updatedUserDetails.work = work;
    }
    if (education) {
      updatedUserDetails.education = education;
    }
    if (location) {
      updatedUserDetails.location = location;
    }

    let existingUserDetails = await Userdetail.findOne({ userID });

    if (!existingUserDetails) {
      return res.status(404).json({ msg: "User details not found" });
    }

    existingUserDetails = await Userdetail.findOneAndUpdate(
      { userID },
      { $set: updatedUserDetails },
      { new: true }
    );

    success = true;
    res.json({ success, updatedUserDetails });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error, Something went wrong");
  }
});

// adding profile/bannerimg
router.post(
  "/addimg",
  fetchuser,

  async (req, res) => {
    try {
      const { key, imgUrl, UserID } = req.body;

      let details = await Userdetail.findOne({ UserID: UserID });
      if (!details) {
        return res.status(404).send("not found");
      }

      details = await Userdetail.findOneAndUpdate(
        { UserID: UserID },
        { $set: { [key]: imgUrl } },
        { new: true }
      );

      res.json({ details });
    } catch (error) {
      console.log("errro dfkvjdfkv");
      console.error(error.message);
      res.status(500).send("Internal Sever error,Something in the way");
    }
  }
);

module.exports = router;
