import React from "react";
import { useHistory } from "react-router";

import { logout, useAuth } from "./../../auth";

import "./navbar.css";

const Navbar = () => {
  const history = useHistory();
  const { state: authState, dispatch } = useAuth();
  const onLogout = () => {
    logout(dispatch, () => {
      history.push(`/auth`);
    });
  };
  return (
    <nav
      id="navbar-layout"
      className="navbar navbar-expand-lg bg-white bg-light"
    >
      <div className="container-fluid">
        <a className="navbar-brand p-4" href="#">
          Covid-19
        </a>
        <button
          type="button"
          className="btn btn-sm btn-gost"
          onClick={onLogout}
        >
          {" "}
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
