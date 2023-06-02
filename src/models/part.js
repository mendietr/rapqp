const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema
({
    "us1": "String",
    "or1": "String",
    "cu1": "String",
    "pa1": "String",
    "pa2": "String",
    "pa3": "String",
    "pa4": "String",
    "pa5": "String",
    "pa6": "String",
    "pa7": "String",
    "pa8": "String",
    "pa9": "String",
    "pa10": "String",
    "pa11": "String",
    "pa12": "String",
  }
  );

module.exports = mongoose.model("part", partSchema);