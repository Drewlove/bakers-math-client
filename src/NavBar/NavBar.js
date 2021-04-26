import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <h1>Baker's Books</h1>
        <Link className="navbar__link-new" to="/form/recipe/new">
          New
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
