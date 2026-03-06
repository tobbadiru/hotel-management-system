import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        HotelMS
      </div>

      <div className="navbar-right">

        <span className="navbar-user">
          Admin
        </span>

        <button className="navbar-logout-btn">
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;