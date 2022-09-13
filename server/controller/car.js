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
// const postCar = async (req, res) => {
//   const {
//     car_make,
//     car_model,
//     car_varient,
//     fuel_avg,
//     seats,
//     bags,
//     body_type,
//     color,
//     engine_type,
//     transmission,
//     car_image,
//     discription,
//     rent_price,
//   } = req.body;
//   console.log(req.body);
//   if (
//     !car_make ||
//     !car_model ||
//     !car_varient ||
//     !fuel_avg ||
//     !seats ||
//     !bags ||
//     !body_type ||
//     !color ||
//     !engine_type ||
//     !transmission ||
//     !car_image ||
//     !discription ||
//     !rent_price
//   ) {
//     return res.status(422).json({ error: "please fill the data properly" });
//   }

//   try {
//     const car = new Cars({
//       car_make,
//       car_model,
//       car_varient,
//       fuel_avg,
//       seats,
//       bags,
//       body_type,
//       color,
//       engine_type,
//       transmission,
//       car_image,
//       discription,
//       rent_price,
//     });

//     await car.save();

//     res.status(201).json({ message: "car stored successfuly" });
//   } catch (err) {
//     console.log(err + "errrrrrror");
//   }
// };
module.exports = { postCar };
