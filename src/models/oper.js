const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const operSchema = new Schema
({
    "us1": "String",
    "or1": "String",
    "cu1": "String",
    "pa1": "String",
    "op1": "String",
    "op2": "String",
    "op3": "String",
    "op4": "String",
    "op5": "String",
    "op6": "String",
    "op7": "String",
    "op8": "String"
  }
  );

module.exports = mongoose.model("oper", operSchema);