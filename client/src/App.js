import React from "react";
// import Navbarpage from "./components/Navbarpage";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/signinup/Signinup";
import SignInUpContainer from "./container";

import Carpost from "./components/Carpost";

import { Routes, Route } from "react-router-dom";
import Hometmp from "./components/hometmp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signinup" element={<SignInUpContainer />} />

        <Route path="/" element={<Hometmp />} />

        <Route path="/carpost" element={<Carpost />} />
      </Routes>

      {/* <Navbarpage /> */}
    </>
  );
}

export default App;
