import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="/#about">About</a>
        </li>

        <li>
          <a href="/#menu">Menu</a>
        </li>

        <li>
          <Link className="nav-reservation" to="/booking">
            Reservations
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;