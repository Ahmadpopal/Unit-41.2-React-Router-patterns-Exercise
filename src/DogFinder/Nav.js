import React from "react";
import {Link} from "react-router-dom";

import './Nav.css'

function Nav() {
  return (
    <nav className="Nav">
      <Link className="Nav-Link" to="/dog/whiskey">Whiskey</Link>
      <Link className="Nav-Link" to="/dog/perry">Perry</Link>
      <Link className="Nav-Link" to="/dog/duke">Duke</Link>
      <Link className="Nav-Link" to="/dog/tubby">Tubby</Link>
    </nav>
  );
}


export default Nav;