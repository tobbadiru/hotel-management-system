import Navbar from "./components/layout/Navbar/Navbar";
import Sidebar from "./components/layout/Sidebar/Sidebar";

function App() {
  return (
    <div>

      <Navbar />

      <div style={{ display: "flex" }}>

        <Sidebar />

        <div style={{ padding: "20px" }}>
          <h1>Dashboard</h1>
        </div>

      </div>

    </div>
  );
}

export default App;