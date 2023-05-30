const express = require("express");
const router = express.Router();
const User = require("../models/exps.js");


router.get("/", async (req, res) =>
{
    const users = await User.find();
    console.log(users);
    res.render("index", {users});
});

router.post("/submit", async (req, res) =>
{   console.log(new User(req.body));
    const user = new User(req.body);
    await user.save();
    res.redirect("/");
});

router.post("/update/:id", async (req, res) =>
{
    const {id} = req.params;
    await User.updateOne({_id: id}, req.body);
    res.redirect("/");
});


router.get("/done/:id", async (req, res) =>
{
    const {id} = req.params;
    const user = await User.findById(id);
    user.status = !user.status;
    await user.save();
    res.redirect("/");
});

router.get("/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const user = await User.findById(id);
    res.render("edit", {user});
});

router.get("/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const user = await User.deleteOne({_id: id});
    res.redirect("/");
});

router.get("/org/:id", async (req, res) =>
{
    const {id} = req.params;
    const user = await User.findById(id);
    res.render("index2", {user});
});


// Exports
module.exports = router;