import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import "./signup.css";
// import "./style.css";

const SignUp = () => {
  const [fullname, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmationPassword, setConfirmationPassword] = React.useState("");

  // const navigate = useNavigate();

  const newUser = {
    name: fullname,
    email: email,
    password: password,
    cpassword: confirmationPassword,
  };

  const handleCLickSignup = async (e) => {
    e.preventDefault();

    console.log(newUser);

    const url = "http://localhost:3000/signup";

    if (password === confirmationPassword) {
      try {
        const response = await fetch(url, {
          method: "POST",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(newUser),
        });

        const userData = await response.json();
        console.log(userData);

        if (response.ok) {
          // navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmationPassword("");
    }
  };

  return (
    <>
      <div className="signup">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <form>
          <h3>Sign Up Here</h3>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Full name"
            value={fullname}
            required
            onChange={(e) => setFullName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="name@gmail.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmationPassword}
            required
            onChange={(e) => setConfirmationPassword(e.target.value)}
          />

          <button onClick={handleCLickSignup}>Sign Up</button>

          <div className="row pt-3 me-0 ">
            <p className="  col-8">
              {/* Have an Account?<Link to="/signin">Sign In</Link> */}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
