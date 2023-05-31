const express = require("express");
const router = express.Router();
const User = require("../models/exps.js");
const Org = require("../models/orgs.js");
const mongoose = require("mongoose")

router.get("/org/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const org = await Org.findById(id);
    res.render("index2", { id: id });
});

router.get("/org", async (req, res) =>
{
    const orgs = await Org.find();
    console.log(orgs);
    res.render("orgreg", {orgs});
});

router.post("/org/submit", async (req, res) =>
{   console.log(new Org(req.body));
    const orgs = new Org(req.body);
    await orgs.save();
    res.redirect("/org");
});

router.post("/org/update/:id", async (req, res) =>
{
    const {id} = req.params;
    await Org.updateOne({_id: id}, req.body);
    res.redirect("/org");
});


router.get("/org/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const orgs = await Org.findById(id);
    res.render("edit2", {orgs});
});

router.get("/org/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const orgs = await Org.deleteOne({_id: id});
    res.redirect("/org");
});

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




// Exports
module.exports = router;