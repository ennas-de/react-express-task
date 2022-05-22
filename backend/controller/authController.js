import bcrypt from "bcrypt";
import User from "../model/User.js";
import mongoose from "mongoose";

export const registerController = async (req, res) => {
  // console.log(req.body);
  // check if username already exists
  const user = await User.find({ username: req.body.username });
  if (user.length >= 1) return res.status(403).json("Username Already Taken!");

  try {
    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);

    //creating new user instance
    const ValidatedUser = new User({
      username: req.body.username,
      password: hashPass,
    });

    try {
      // saving new user to db and returning a response
      const savedUser = ValidatedUser.save();
      savedUser && res.status(200).json("Registered Successfully!");
    } catch (err) {
      // if error with saving to db
      err && res.status(401).json("Registration Failed!");
    }
  } catch (error) {
    // if error with the validation
    error && res.status(500).json(error);
  }
};

export const loginController = async (req, res) => {
  try {
    // console.log(req.body);
    // first, lets find the user from the db
    const user = await User.findOne({ username: req.body.username });
    // if no user is found
    !user && res.status(404).json("User Not Found!");
    // do validations
    const validatedUser = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // if wrong password, response with an error message
    !validatedUser && res.status(403).json("Wrong credentials!");

    // remove password from the response object
    const { password, ...others } = user._doc;
    validatedUser && res.status(200).json(others);
  } catch (error) {}
};
