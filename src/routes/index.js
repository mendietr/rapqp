const express = require("express");
const router = express.Router();
const User = require("../models/exps.js");
const Org = require("../models/orgs.js");
const Cus = require("../models/cust.js");
const Par = require("../models/part.js");
const Ope = require("../models/oper.js");
const Chr = require("../models/chrc.js");
const Fme = require("../models/fmea.js");

const mongoose = require("mongoose")

router.get("/", async (req, res) =>
{
    const users = await User.find();
    
    res.render("users", {users});
});

router.get("/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const user = await User.findById(id);
    res.render("edit", {user});
});

router.get("/org/:id", async (req, res) => {
    const { id } = req.params;
    const orgs = await Org.findById(id);
    res.render("org", {id: id});
    
});

router.post("/org/submit", async (req, res) =>
{   
    const orgs = new Org(req.body);
    await orgs.save();
    res.redirect("/org");
});

router.get("/org", async (req, res) =>
{
    const orgs = await Org.find();
    console.log(orgs);
    res.render("orgs", {orgs});
});

router.get("/org/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const orgs = await Org.findById(id);
    res.render("orgedit", {orgs});
});

router.get("/org/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const orgs = await Org.deleteOne({_id: id});
    res.redirect("/org");
});

router.get("/cust/:id", async (req, res) => {
    const { id } = req.params;
    const org= await Org.findById(id);
    res.render("cust", {org});
});

router.post("/cust/submit", async (req, res) =>
{   
    const cust = new Cus(req.body);
    await cust.save();
    res.redirect("/cust");

});

router.get("/cust", async (req, res) =>
{
    const cust = await Cus.find();
    console.log(cust);
    res.render("custs", {cust});
});



router.post("/submit", async (req, res) =>
{   
    const user = new User(req.body);
    await user.save();
    res.redirect("/");
});



router.get("/cust/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const cust = await Cus.findById(id);
    res.render("custedit", {cust});
});

router.get("/cus/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const cust = await Cus.deleteOne({_id: id});
    res.redirect("/cust/");
});


router.post("/cus/update/:id", async (req, res) =>
{
    const {id} = req.params;
    await Cus.updateOne({_id: id}, req.body);
    res.redirect("/cust");
});


router.post("/org/update/:id", async (req, res) =>
{
    const {id} = req.params;
    await Org.updateOne({_id: id}, req.body);
    res.redirect("/org");
});

router.post("/update/:id", async (req, res) =>
{
    const {id} = req.params;
    await User.updateOne({_id: id}, req.body);
    res.redirect("/");
});

router.get("/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const user = await User.deleteOne({_id: id});
    res.redirect("/");
});

router.get("/par", async (req, res) =>
{
    const pars = await Par.find();
    console.log(pars);
    res.render("parts", {pars});
});

router.post("/par/submit", async (req, res) =>
{   console.log(new Par(req.body));
    const custs = new Par(req.body);
    await custs.save();
    res.redirect("/par/");
});

router.post("/par/update/:id", async (req, res) =>
{
    const {id} = req.params;
    await Par.updateOne({_id: id}, req.body);
    res.redirect("/par");
});

router.get("/par/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const pars = await Par.findById(id);
    res.render("partedit", {pars});
});

router.get("/par/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const pars = await Par.deleteOne({_id: id});
    res.redirect("/par/");
});

router.get("/par/:id", async (req, res) => {
    const { id } = req.params;
    const cus = await Cus.findById(id);
    res.render("part", {cus});
    
});

router.get("/ope", async (req, res) =>
{
    const opes = await Ope.find();
    console.log(opes);
    res.render("opers", {opes});
});

router.get("/flowchart", async (req, res) =>
{
    const opes = await Ope.find();
    console.log(opes);
    res.render("flowchart2", {opes});
});

router.get("/pcp", async (req, res) =>
{
    const opes = await Ope.find();
    console.log(opes);
    res.render("PCP", {opes});
});

router.get("/fmea", async (req, res) =>
{
    const opes = await Ope.find();
    console.log(opes);
    res.render("pfmea", {opes});
});

router.post("/ope/submit", async (req, res) =>
{   console.log(new Ope(req.body));
    const parts = new Ope(req.body);
    await parts.save();
    res.redirect("/ope/");
});

router.post("/ope/update/:id", async (req, res) =>
{
    const {id} = req.params;
    await Ope.updateOne({_id: id}, req.body);
    res.redirect("/ope");
});

router.get("/ope/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const opes = await Ope.findById(id);
    res.render("operedit", {opes});
});

router.get("/ope/edit/f/:id", async (req, res) =>
{
    const {id} = req.params;
    const opes = await Ope.findById(id);
    res.render("flowchart", {opes});
});

router.get("/ope/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const opes = await Ope.deleteOne({_id: id});
    res.redirect("/ope/");
});

router.get("/ope/:id", async (req, res) => {
    const { id } = req.params;
    const par = await Par.findById(id);
    res.render("oper", {par});
});

router.get("/chr", async (req, res) =>
{
    const chrc = await Chr.find();
    console.log(chrc);
    res.render("chrcs", {chrc});
});

router.post("/chr/submit", async (req, res) =>
{   console.log(new Chr(req.body));
    const chrcs = new Chr(req.body);
    await chrcs.save();
    res.redirect("/chr/");
});

router.post("/chr/update/:id", async (req, res) =>
{
    const {id} = req.params;
    await Chr.updateOne({_id: id}, req.body);
    res.redirect("/chr");
});

router.get("/chr/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const chrs = await Chr.findById(id);
    res.render("chrcedit", {chrs});
});

router.get("/chr/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const chrs = await Chr.deleteOne({_id: id});
    res.redirect("/chr/");
});

router.get("/chr/:id", async (req, res) => {
    const { id } = req.params;
    const ope = await Ope.findById(id);
    res.render("chrc", {ope});
    
});





// Exports
module.exports = router;