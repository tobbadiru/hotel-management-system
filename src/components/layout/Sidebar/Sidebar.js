import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">  </li>
        
          <Link to="/dashboard">Dashboard</Link>
      
        <li className="sidebar-item">
          <Link to="/rooms">Rooms</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/bookings">Bookings</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/guest">Guests</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/housekeeping">Housekeeping</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;