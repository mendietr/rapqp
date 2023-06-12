const express = require("express");
const router = express.Router();
const passport = require('passport');
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
    
    res.render("home", {users});
});

router.get("/db", async (req, res) =>
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
    res.redirect("/db");
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
    res.redirect("/db");
});

router.get("/dup/:id", async (req, res) =>
{
    const {id} = req.params;
    const user = await User.findById(id);
    res.render("userdup", {user});
});

router.post("/dup/:id", async (req, res) =>
{
    const {id} = req.params;
    await User.updateOne({_id: id}, req.body);
    res.redirect("/db");
});

router.get("/delete/:id", async (req, res) =>
{
    const {id} = req.params;
    const user = await User.deleteOne({_id: id});
    res.redirect("/db");
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

router.get("/psw/:id", async (req, res) =>
{   const { id } = req.params;
    const pars = await Par.findById(id);
    console.log(pars);
    res.render("psw", {pars});
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

// router.get('/signup', (req, res, next) => {
//     res.render('signup');
//   });
  
//   router.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/profile',
//     failureRedirect: '/signup',
//     failureFlash: true
//   })); 
  
//   router.get('/signin', (req, res, next) => {
//     res.render('signin');
//   });
  
  
//   router.post('/signin', passport.authenticate('local-signin', {
//     successRedirect: '/profile',
//     failureRedirect: '/signin',
//     failureFlash: true
//   }));
  
//   router.get('/profile',isAuthenticated, (req, res, next) => {
//     res.render('user');
//   });
  
//   router.get('/logout', (req, res, next) => {
//     req.logout((err) => {
//         if (err) {
//           return next(err);
//         }
//     res.redirect('/signin');
//   });
// });
  
  
//   function isAuthenticated(req, res, next) {
//     if(req.isAuthenticated()) {
//       return next();
//     }
  
//     res.redirect('/signin')
//   }

router.post('/db/submit', (req, res) => {
    const bd1 = req.body.db1; 
    const URI ='mongodb+srv://' + bd1 +
      ':HHnOQn2B4iVtEdOU@cluster0.pgfsbij.mongodb.net/rapqp?retryWrites=true&w=majority';
      console.log(bd1)
      mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
        .then(() => {
          console.log("Conexión exitosa a la base de datos");
        })
        .catch(error => {
          console.log("Error al conectar a la base de datos:", error);
        });
        res.redirect("/db");
    
  });
  


// Exports
module.exports = router