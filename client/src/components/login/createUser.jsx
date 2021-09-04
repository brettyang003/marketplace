import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginLabel from "./loginLabel";
import axios from "axios";

function CreateUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleSubmit() {
    axios.post("/login/create", user);
  }
  return (
    <div>
      <LoginLabel type="name" text="Name" user={user} setUser={setUser} />
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

export default CreateUser;
