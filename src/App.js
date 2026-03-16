import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Guest from "./components/guest/Guest";

// Optional placeholders if you don’t have these yet
// import Rooms from "./components/rooms/Rooms";
// import Bookings from "./components/bookings/Bookings";
// import Housekeeping from "./components/housekeeping/Housekeeping";
// import Users from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div style={{ display: "flex" }}>
          <Sidebar />

          <div style={{ padding: "20px", flex: 1 }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/rooms" element={<Rooms />} />
              <Route path="/bookings" element={<Bookings />} /> */}
              <Route path="/guest" element={<Guest />} />
              {/* <Route path="/housekeeping" element={<Housekeeping />} /> */}
              {/* <Route path="/users" element={<Users />} /> */}
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;