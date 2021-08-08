import React, { Component, Fragment } from "react";
import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import authService from "./AuthorizeService";
import { ApplicationPaths } from "./ApiAuthorizationConstants";

export class LoginMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      userName: null,
    };
  }

  componentDidMount() {
    this._subscription = authService.subscribe(() => this.populateState());
    this.populateState();
  }

  componentWillUnmount() {
    authService.unsubscribe(this._subscription);
  }

  async populateState() {
    const [isAuthenticated, user] = await Promise.all([
      authService.isAuthenticated(),
      authService.getUser(),
    ]);
    this.setState({
      isAuthenticated,
      userName: user && user.name,
    });
  }

  render() {
    const { isAuthenticated, userName } = this.state;
    if (!isAuthenticated) {
      const registerPath = `${ApplicationPaths.Register}`;
      const loginPath = `${ApplicationPaths.Login}`;
      return this.anonymousView(registerPath, loginPath);
    } else {
      const profilePath = `${ApplicationPaths.Profile}`;
      const logoutPath = {
        pathname: `${ApplicationPaths.LogOut}`,
        state: { local: true },
      };
      return this.authenticatedView(userName, profilePath, logoutPath);
    }
  }

  authenticatedView(userName, profilePath, logoutPath) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: this.props?.isOpen ? "flex-end" : "space-between",
          flexDirection: this.props.isOpen ? "column" : "row",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <NavItem>
            <NavLink tag={Link} className="text-dark" to={profilePath}>
              Hello {userName}
            </NavLink>
          </NavItem>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <NavItem>
            <NavLink tag={Link} className="text-dark" to={logoutPath}>
              Logout
            </NavLink>
          </NavItem>
        </div>
      </div>
    );
  }

  anonymousView(registerPath, loginPath) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: this.props?.isOpen ? "flex-end" : "space-between",
          flexDirection: this.props.isOpen ? "column" : "row",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <NavItem>
            <NavLink tag={Link} className="text-dark" to={registerPath}>
              Register
            </NavLink>
          </NavItem>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <NavItem>
            <NavLink tag={Link} className="text-dark" to={loginPath}>
              Login
            </NavLink>
          </NavItem>
        </div>
      </div>
    );
  }
}
