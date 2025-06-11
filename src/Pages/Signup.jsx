import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [inputdata, setInputdata] = useState({
    uname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  }
function finalSubmit(e) {
  e.preventDefault();

  if (!inputdata.uname || !inputdata.email || !inputdata.password) {
    alert("All fields are required.");
    return;
  }

  const existingUsers = JSON.parse(localStorage.getItem("userdata")) || [];
  const usersArray = Array.isArray(existingUsers) ? existingUsers : [existingUsers];

  usersArray.push(inputdata);

  localStorage.setItem("userdata", JSON.stringify(usersArray));
  alert("Signup successful!");
  navigate("/login");
}


  return (
    <div className="signup-container">
      <div className="left-box">
        <video autoPlay muted loop playsInline>
          <source src="/v8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="right-box">
        <h1>SIGNUP</h1>
        <form onSubmit={finalSubmit}>
          <label>Name</label>
          <input type="text" name="uname" onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />

          <button type="submit">Sign Up</button>

          <h6 style={{ textAlign: "center", marginTop: "50px" }}>
            If already registered then{" "}
            <Link to="/login" style={{ color: "#ec407a" }}>LOGIN NOW</Link>
          </h6>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
