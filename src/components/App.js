import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import News from "./News";
import LoginPage from "./LoginPage";

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/profile">Profile</Link>
      </header>

      <Route path="/" component={Home} exact />
      <Route path="/news" component={News} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={LoginPage} />
    </div>
  </BrowserRouter>
);

export default App;
