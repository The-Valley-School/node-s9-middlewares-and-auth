const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creamos el schema del coche
const carSchema = new Schema(
  {
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: false,
    },
    model: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 40,
    },
    plate: {
      type: String,
      required: false,
      trim: true,
      minLength: 3,
      maxLength: 20,
    },
    power: {
      type: Number,
      required: false,
      min: 5,
      max: 2000,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);
module.exports = { Car };
