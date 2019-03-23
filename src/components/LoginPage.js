import React from "react";
import { Redirect } from "react-router-dom";

class LoginPage extends React.Component {
  state = { redirectToReferrer: false, name: "", pass: "", error: "" };
  handleLogIn = e => {
    e.preventDefault();
    if (this.state.name !== "admin" || this.state.pass !== "12345") {
      return this.setState({
        error: "Please enter valid user name and password"
      });
    } else {
      localStorage.setItem("isAutentificated", true);
      this.setState({
        redirectToReferrer: true
      });
    }
  };
  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={this.props.location.state.referrer} />;
    }
    return (
      <React.Fragment>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleLogIn}>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="password"
            value={this.state.pass}
            onChange={e => this.setState({ pass: e.target.value })}
          />
          <button>log in</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginPage;
