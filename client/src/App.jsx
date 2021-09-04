import React, { useState, useEffect } from "react";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Items from "./components/items/items";
import { Switch, Route } from "react-router-dom";
import Post from "./components/form/form";
import Login from "./components/login/login";
import CreateLogin from "./components/login/createUser";

function App() {
  const [loggedIn, setLoggedIn] = useState({ logged: "false", name: "" });

  useEffect(() => {
    if (window.sessionStorage.getItem("loggedIn") === "true") {
      const name = window.sessionStorage.getItem("name");
      setLoggedIn({ logged: "true", name: name });
    }
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/createPost">
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Post loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/userLogin">
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/createUser">
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <CreateLogin />
        </Route>
        <Route path="/">
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Items />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
