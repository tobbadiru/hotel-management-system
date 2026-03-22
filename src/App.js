import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Guest from "./components/guest/Guest";
import Rooms from "./components/room/Rooms";
import Booking from "./components/booking/Booking";
import Housekeeping from "./components/housekeeping/Housekeeping";
import Users from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div style={{ display: "flex" }}>
          <Sidebar />

          <div style={{ padding: "20px", flex: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/bookings" element={<Booking />} />
              <Route path="/guest" element={<Guest />} />
              <Route path="/housekeeping" element={<Housekeeping />} />
              <Route path="/users" element={<Users />} />
              <Route
                path="*"
                element={
                  <div style={{ padding: "24px" }}>
                    <h1>Page not found</h1>
                    <p>
                      <Link to="/dashboard">Go to dashboard</Link>
                    </p>
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
