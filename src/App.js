import { useState, useEffect } from "react";
import "./App.css";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";
import NavBar from "./components/layouts/NavBar";
import User from "./components/views/User";

function App() {
  const [user, setUser] = useState("");
  const [toggleForm, setToggleForm] = useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  };

  const userState = () => {
    const data = localStorage.getItem("user");
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  };

  useEffect(() => {
    userState();
  }, []);

  return (
    <div className="App">
      {user !== null ? (
        <>
          <NavBar setUserState={() => setUser(null)} />
          <User />
        </>
      ) : (
        <>
          {toggleForm ? (
            <Login
              loggedIn={(user) => setUser(user)}
              toggle={() => formMode()}
            />
          ) : (
            <SignUp toggle={() => formMode()} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
