import React, { useState } from "react";
import "./stylein.css";

const SignIn = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [isDisable, setIsDisable] = useState(true);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const obj = { email: userInput.email, password: userInput.password };
    const response = await fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const json = await response.json();
    console.log(json);
  };

  const change = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    if (e.target.value === "") {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  };

  return (
    <>
      <style>
        {
          "body {background-color:#080710} .background { width: 430px; height: 520px; position: absolute ; transform: translate(-50% -50%); left: 50%; top: 50%;z-index: -100}"
        }
      </style>
      <div>
        <div className="backgroundin">
          <div className="shapein"></div>
          <div className="shapein"></div>
        </div>
        <form className="formin" onSubmit={handleSignIn}>
          <h3>Sign In Here</h3>

          <label className="labelin" for="username">
            Email
          </label>
          <input
            className="inputin"
            type="email"
            placeholder="Email"
            id="username"
            onChange={change}
            name="email"
            value={userInput.email}
          />

          <label className="labelin" for="password">
            Password
          </label>
          <input
            className="inputin"
            type="password"
            placeholder="Password"
            id="password"
            onChange={change}
            name="password"
            value={userInput.password}
          />
          <button className="btnin" type="submit" disabled={isDisable}>
            Sign In
          </button>
          <div className="row pt-3 me-0 ">
            <p className="  col-8">New User?</p>
            <a className="text-center col " href="/">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
