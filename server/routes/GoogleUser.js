const express = require("express");
const GoogleUser = require("../models/GoogleUser");
const router = express.Router();
const { body, validator, validationResult } = require("express-validator");
const bycrypt = require("bcryptjs");
// var fetchuser = require('../middleware/fetchuser')
var jwt = require("jsonwebtoken");
const JWT_SECRET = "TheJWTSECRETis";

router.post(
  "/createGoogleuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
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
      let user = await GoogleUser.findOne({ email: req.body.email });
      if (!user) {
        //create a new user
        user = await GoogleUser.create({
          name: req.body.name,

          email: req.body.email,
        });
        const data = {
          user: {
            id: user.id,
          },
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;

        res.json({ success: success, authtoken: authtoken });
        // console.log(res.json)
        //   console.log(jwtData)
      } else {
        res.json({ status: "userAlreadyExists" });
      }
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
module.exports = router;
