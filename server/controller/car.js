const Cars = require("../models/carsModel");

const postCar = async (req, res) => {
  try {
    const {
      car_make,
      car_model,
      car_varient,
      fuel_avg,
      seats,
      bags,
      body_type,
      color,
      engine_type,
      transmission,
      car_image,
      discription,
      rent_price,
    } = req.body;
    const cars = await Cars.create({
      car_make,
      car_model,
      car_varient,
      fuel_avg,
      seats,
      bags,
      body_type,
      color,
      engine_type,
      transmission,
      car_image,
      discription,
      rent_price,
    });
    res.status(200).json(cars);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = { postCar };
