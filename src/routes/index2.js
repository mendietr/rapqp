const express = require("express");
const router = express.Router();
const Cus = require("../models/cust.js");
const Par = require("../models/part.js");
const Ope = require("../models/oper.js");
const Chr = require("../models/chrc.js");
const Fme = require("../models/fmea.js");

router.get("/chr", async (req, res) =>
{
    const chrs = await Chr.find();
    console.log(chrs);
    res.render("chrcs", {chrs});
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
    const chr = await Ope.findById(id);
    res.render("chrc", {chr});
    
});


// Exports
module.exports = router;