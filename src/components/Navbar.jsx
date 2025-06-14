import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about-us">
                About
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact-us">
                Contact
              </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/movie-list">
                Movie List
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/post-list">
                Posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
