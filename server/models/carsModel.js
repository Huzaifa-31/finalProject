const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
  //info

  car_make: {
    type: String,
  },

  car_model: {
    type: String,
  },
  car_varient: {
    type: String,
  },

  //info details

  fuel_avg: {
    type: Number,
  },

  seats: {
    type: Number,
  },

  bags: {
    type: String,
    //1 large bag / 3 small bags etc
  },

  body_type: {
    //SUV/
    type: String,
  },
  //overview
  color: {
    type: String,
  },

  engine_type: {
    //1500cc
    type: String,
  },

  transmission: {
    //auto or manual
    type: String,
  },

  car_image: {
    //revaluate later when on netlify
    type: String,
  },

  //description

  discription: {
    //discription of the car
    type: String,
    default: "...",
  },
  rent_price: {
    //price per day
    type: Number,
  },
  userid: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Cars = mongoose.model("Car", CarSchema);

module.exports = Cars;
