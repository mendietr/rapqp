const express = require("express");
const router = express.Router();
const Cus = require("../models/cust.js");


router.get("/cust", async (req, res) =>
{
    const custs = await Cus.find();
    console.log(custs);
    res.render("index2", {custs});
});

router.post("/cust/submit", async (req, res) =>
{   console.log(new Cus(req.body));
    const custs = new Cus(req.body);
    await custs.save();
    res.redirect("/cust/");
});

router.post("/cust/update/:id", async (req, res) =>
{
    const {id} = req.params;
    await Cus.updateOne({_id: id}, req.body);
    res.redirect("/cust");
});

router.get("/cust/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const custs = await Cus.findById(id);
    res.render("edit2", {custs});
});

router.get("/cust/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const custs = await Cus.deleteOne({_id: id});
    res.redirect("/cust/");
});


// Exports
module.exports = router;