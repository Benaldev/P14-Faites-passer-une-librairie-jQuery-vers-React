import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="title">
      <h1>HRnet</h1>
      <div className="container">
        <Link to="/employee-list" className="nav-link">
          View Current Employees
        </Link>
        <Link to="/create-employee" className="nav-link">
          Create New Employee
        </Link>
      </div>
    </div>
  );
}

export default App;
