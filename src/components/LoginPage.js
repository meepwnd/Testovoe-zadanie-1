import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const LoginPage = props => {
  const [redirectToReferrer, setRedirect] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogIn = e => {
    e.preventDefault();
    if (name !== "admin" || pass !== "12345") {
      setError("Please enter valid user name and password");
    } else {
      localStorage.setItem("isAutentificated", true);
      setRedirect({
        redirectToReferrer: true
      });
    }
  };

  if (redirectToReferrer) {
    return <Redirect to={props.location.state.referrer} />;
  }
  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogIn}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <button>log in</button>
      </form>
    </>
  );
};

export default LoginPage;
