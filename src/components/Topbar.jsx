import React from "react";
import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";

import "./Topbar.css"

class Topbar extends React.Component {
  render() {
    return (
      <header className="topbar" data-testid="topbar">
        <div className="container">
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Log" />
          </a>
        </div>
      </header>
    );
  }
}

export default Topbar;
