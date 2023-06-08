const express = require("express");
const router = express.Router();
const Cus = require("../models/cust.js");
const Par = require("../models/part.js");
const Ope = require("../models/oper.js");
const Chr = require("../models/chrc.js");
const Fme = require("../models/fmea.js");

const ruta = (Chr, chr, req, res, chrs, chrcs) => {
    router.get("/chr", async (req, res) => {
        const fmeas = await Chr.find();
        console.log(fmeas);
        res.render("chrcs", { fmeas });
      });
    };


router.get("/fme", async (req, res) =>
{
    const fmeas = await Fme.find();
    console.log(fmeas);
    res.render("fmeas", {fmeas});
});

router.post("/fme/submit", async (req, res) =>
{   console.log(new Fme(req.body));
    const fmeas = new Fme(req.body);
    await fmeas.save();
    res.redirect("/fme/");
});

router.post("/fme/update/:id", async (req, res) =>
{
    const {id} = req.params;
    await Fme.updateOne({_id: id}, req.body);
    res.redirect("/fme");
});

router.get("/fme/edit/:id", async (req, res) =>
{
    const {id} = req.params;
    const fmeas = await Fme.findById(id);
    res.render("fmeaedit", {fmeas});
});

router.get("/fme/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const fmeas = await Fme.deleteOne({_id: id});
    res.redirect("/fme/");
});

router.get("/fme/:id", async (req, res) => {
    const { id } = req.params;
    const fme = await Chr.findById(id);
    res.render("fmea", {fme});
    
});


// Exports
module.exports = router;