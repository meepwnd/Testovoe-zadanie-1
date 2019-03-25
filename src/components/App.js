import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import News from "../components/News";
import LoginPage from "./LoginPage";
import Profile from "./Profile";
import NotFoundPage from "./NotFoundPage";
import AuthButton from "./AuthButton";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <header>
        <ul className="nav justify-content-center">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/news">News</Link>
          </li>
          <li className="nav-link">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <AuthButton />
      </header>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/news" component={News} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/profile" component={Profile} />
        <NotFoundPage />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
