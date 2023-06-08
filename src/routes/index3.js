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

const createRoute = async (path, model, view) => {
    router.get(path, async (req, res) => {
      try {
        const data = await model.find();
        console.log(data);
        res.render(view, { data });
      } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
      }
    });
  };

createRoute("/", User, "users");
createRoute("/org", Org, "orgs");
createRoute("/cust", Cus, "custs");
createRoute("/par", Par, "pars");
createRoute("/ope", Ope, "opes");
createRoute("/chr", Chr, "chrcs");
createRoute("/fme", Fme, "fmeas");
// createRoute("/chr", Chr, "chrcs");
// createRoute("/cust", Cus, "custs");
// createRoute("/cust", Cus, "custs");

const createSubmitRoute = async (path, model, redirectPath) => {
    router.post(path, async (req, res) => {
      try {
        const data = new model(req.body);
        await data.save();
        res.redirect(redirectPath);
      } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
      }
    });
  };

createSubmitRoute("/submit", User, "/org");
createSubmitRoute("/org/submit", Org, "/cust");
createSubmitRoute("/cust/submit", Cus, "/par");
createSubmitRoute("/par/submit", Par, "/ope");
createSubmitRoute("/ope/submit", Ope, "/chr");
createSubmitRoute("/chr/submit", Chr, "/fme");
createSubmitRoute("/fme/submit", Fme, "/");
// createSubmitRoute("/cust/submit", Cus, "/cust");
// createSubmitRoute("/cust/submit", Cus, "/cust");
// createSubmitRoute("/cust/submit", Cus, "/cust");

const createEditRoute = async (path, model, view) => {
    router.get(path, async (req, res) => {
      try {
        const { id } = req.params;
        const data = await model.findById(id);
        res.render(view, { data });
      } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
      }
    });
  };

createEditRoute("/edit/:id", User, "edit");
createEditRoute("/org/edit/:id", Org, "orgedit");
createEditRoute("/cust/edit/:id", Cus, "custedit");
createEditRoute("/par/edit/:id", Par, "orgedit");
createEditRoute("/ope/edit/:id", Ope, "operedit");
createEditRoute("/org/edit/:id", Chr, "chrcedit");
createEditRoute("/fme/edit/:id", Fme, "fmeaedit");
// createEditRoute("/org/edit/:id", Org, "orgedit");
// createEditRoute("/edit/:id", User, "edit");
// createEditRoute("/org/edit/:id", Org, "orgedit");

// const createEditRoute = async (path, model, view) => {
//     router.get(path, async (req, res) => {
//       try {
//         const { id } = req.params;
//         const data = await model.findById(id);
//         res.render(view, { data });
//       } catch (error) {
//         console.error(error);
//         res.status(500).send("Error occurred");
//       }
//     });
//   };
  
//   createEditRoute("/edit/:id", User, "edit");
// createEditRoute("/org/edit/:id", Org, "orgedit");
// createEditRoute("/cust/edit/:id", Cus, "edit");
// createEditRoute("/par/edit/:id", Par, "partedit");
// createEditRoute("/ope/edit/:id", Ope, "operedit");
// createEditRoute("/chr/edit/:id", Chr, "chrcedit");
// createEditRoute("/fme/edit/:id", Fme, "fmeaedit");
// // createEditRoute("/org/edit/:id", Org, "orgedit");
// // createEditRoute("/edit/:id", User, "edit");
// // createEditRoute("/org/edit/:id", Org, "orgedit");

const createUpdateRoute = async (path, model, redirectPath) => {
    router.post(path, async (req, res) => {
      try {
        const { id } = req.params;
        await model.updateOne({ _id: id }, req.body);
        res.redirect(redirectPath);
      } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
      }
    });
  };
  
  createUpdateRoute("/update/:id", User, "/");
createUpdateRoute("/org/update/:id", Org, "/org");
createUpdateRoute("/cust/update/:id", Cus, "/cust");
createUpdateRoute("/par/update/:id", Par, "/par");
createUpdateRoute("/ope/update/:id", Ope, "/ope");
createUpdateRoute("/chr/update/:id", Chr, "/chr");
createUpdateRoute("/fme/update/:id", Fme, "/fme");
// createUpdateRoute("/org/update/:id", Org, "/org");
// createUpdateRoute("/update/:id", User, "/");
// createUpdateRoute("/org/update/:id", Org, "/org");

const createDeleteRoute = async (path, model, redirectPath) => {
    router.get(path, async (req, res) => {
      try {
        const { id } = req.params;
        const result = await model.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
          res.redirect(redirectPath);
        } else {
          throw new Error("Item not found");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
      }
    });
  };

  createDeleteRoute("/delete/:id", User, "/");
createDeleteRoute("/org/delete/:id", Org, "/org");
createDeleteRoute("/cust/delete/:id", Cus, "/cust");
createDeleteRoute("/par/delete/:id", Par, "/par");
createDeleteRoute("/ope/delete/:id", Ope, "/ope");
createDeleteRoute("/chr/delete/:id", Chr, "/chr");
createDeleteRoute("/fme/delete/:id", Fme, "/fme");
// createDeleteRoute("/org/delete/:id", Org, "/org");
// createDeleteRoute("/delete/:id", User, "/");
// createDeleteRoute("/org/delete/:id", Org, "/org");

module.exports = router;