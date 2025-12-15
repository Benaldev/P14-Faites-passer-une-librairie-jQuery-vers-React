import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "30px" }}>
          <Link
            to="/"
            style={{
              marginRight: "15px",
              textDecoration: "none",
              color: "#007bff",
            }}
          >
            Create Employee
          </Link>
          <Link
            to="/employees"
            style={{ textDecoration: "none", color: "#007bff" }}
          >
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
