import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import News from "../components/News";
import LoginPage from "./LoginPage";
import Profile from "./Profile";
import NotFoundPage from "./NotFoundPage";
import AuthButton from "./AuthButton";

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/profile">Profile</Link>
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
