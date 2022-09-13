import React, { useState } from "react";
import "./style.css";

const SignIn = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [isDisable, setIsDisable] = useState(true);

  // const handelTrue = (value) => {
  //   setIsDisable(value);
  // };

  const handelChange = (e) => {
    e.preventDefault();

    console.log(userInput);
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
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handelChange}>
        <h3>Sign In Here</h3>

        <label for="username">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="username"
          onChange={change}
          name="email"
          value={userInput.email}
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={change}
          name="password"
          value={userInput.password}
        />
        <button type="submit" disabled={isDisable}>
          Sign In
        </button>
        <div className="row pt-3 me-0 ">
          <p className="  col-8">New User?</p>
          <a className="text-center col " href="/">
            Sign Up
          </a>
        </div>
      </form>
    </>
  );
};

export default SignIn;
