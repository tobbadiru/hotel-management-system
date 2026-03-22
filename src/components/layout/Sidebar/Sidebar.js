import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"
            }
            end
          >
            Dashboard
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"
            }
          >
            Rooms
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"
            }
          >
            Bookings
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/guest"
            className={({ isActive }) =>
              isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"
            }
          >
            Guests
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/housekeeping"
            className={({ isActive }) =>
              isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"
            }
          >
            Housekeeping
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"
            }
          >
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
