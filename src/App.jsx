import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          minHeight: "100vh",
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h1>HR net</h1>
        <nav style={{ marginBottom: "30px" }}>
          <Link
            to="/"
            style={{
              marginRight: "15px",
              textDecoration: "none",
            }}
          >
            Create Employee
          </Link>
          <Link to="/employees" style={{ textDecoration: "none" }}>
            View Employees
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
