const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log("error:" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    console.log("error:" + err);
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    age: req.body.age,
  });
  try {
    const user1 = await user.save();
    res.json(user1);
  } catch (err) {
    console.log("error:" + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    (user.firstName = req.body.firstName),
      (user.lastName = req.body.lastName),
      (user.gender = req.body.gender),
      (user.age = req.body.age);
    const user2 = await user.save();
    res.json(user2);
  } catch (err) {
    console.log("error:" + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const user2 = await user.remove();
    res.json("user deleted");
  } catch (err) {
    console.log("error:" + err);
  }
});
module.exports = router;
