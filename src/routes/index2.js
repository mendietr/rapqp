const express = require("express");
const router = express.Router();
const Org = require("../models/orgs.js");


router.get("/", async (req, res) =>
{
    const orgs = await Org.find();
    console.log(orgs);
    res.render("index2", {orgs});
});

router.post("/submit", async (req, res) =>
{   console.log(new Org(req.body));
    const org = new Org(req.body);
    await org.save();
    res.redirect("/");
});

router.post("/update/:id", async (req, res) =>
{
    const {id} = req.params;
    await Org.updateOne({_id: id}, req.body);
    res.redirect("/");
});


router.get("/done/:id", async (req, res) =>
{
    const {id} = req.params;
    const org = await Org.findById(id);
    user.status = !org.status;
    await org.save();
    res.redirect("/");
});

router.get("/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const org = await Org.findById(id);
    res.render("edit2", {org});
});

router.get("/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const org = await Org.deleteOne({_id: id});
    res.redirect("/");
});


// Exports
module.exports = router;