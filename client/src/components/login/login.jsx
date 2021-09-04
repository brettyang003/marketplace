import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import LoginLabel from "./loginLabel";
import axios from "axios";

function Login(props) {
  const [user, setUser] = useState({
    name: props.loggedIn.name,
    email: "",
    password: "",
  });
  function handleSubmit() {
    axios
      .post("/login/userLogin", user)
      .then((res) => {
        if (res.data.authenticate) {
          props.setLoggedIn({ logged: true, name: res.data.name });
          window.sessionStorage.setItem("loggedIn", "true");
          window.sessionStorage.setItem("name", res.data.name);
          console.log(props.loggedIn);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <LoginLabel
        type="email"
        text="Email Address"
        user={user}
        setUser={setUser}
      />
      <LoginLabel
        type="password"
        text="Password"
        user={user}
        setUser={setUser}
      />
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default Login;
