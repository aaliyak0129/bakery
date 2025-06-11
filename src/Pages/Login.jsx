import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogindata({ ...logindata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("userdata")) || [];

    const usersArray = Array.isArray(storedUsers) ? storedUsers : [storedUsers];

    const matchedUser = usersArray.find(
      (user) =>
        user.email === logindata.email.trim() &&
        user.password === logindata.password.trim()
    );

    if (!matchedUser) {
      alert("User not found or incorrect credentials.");
    } else {
      alert("Login successful!");
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="glass-box">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
