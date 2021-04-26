import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <Link className="navbar__link" to="/">
          Baker's Books
        </Link>
        <Link className="navbar__link" to="/form/recipe/new">
          New
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
