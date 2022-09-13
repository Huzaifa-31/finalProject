import React, { useState } from "react";

const carpost = () => {
  const [car_make, setCar_make] = useState("");
  const [car_modal, setCar_modal] = useState("");
  const [car_varient, setcar_Varient] = useState("");
  const [fule_avg, setFule_avg] = useState("");
  const [seats, setSeats] = useState("");
  const [bags, setBags] = useState("");
  const [body_type, setBody_type] = useState("");
  const [color, setColor] = useState("");
  const [engine_type, setEngine_type] = useState("");
  const [transmission, setTransmission] = useState("");
  const [car_image, setCar_image] = useState("");
  const [discription, setDiscription] = useState("");
  const [rent_price, setRent_price] = useState("");

  return (
    <>
      <div className="main container">
        <div className="car_info">
          <form>
            <label>Car Information</label>
            <input type="file" />

            <label> Car make</label>
            <input type="text" />

            <label> Car Model</label>
            <input type="text" />

            <label> Car Varient</label>
            <input type="text" />
          </form>
        </div>
        <div className="post_stuc">
          <label>Car Fuel Avg</label>
          <input type="text" />

          <label>Car Body Type</label>
          <input type="text" />

          <label>Number of Car Seats</label>
          <input type="number" />

          <label>Number of Car Bags</label>
          <input type="number" />

          <label>Car Color</label>
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default carpost;
