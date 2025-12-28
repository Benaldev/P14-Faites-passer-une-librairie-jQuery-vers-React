import React, { useState } from "react";
import { useSelector } from "react-redux";

function EmployeeList() {
  // Récupérer les employés depuis Redux
  const employees = useSelector((state) => state.employees.employees);

  // État pour le champ de recherche
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les employés selon le searchTerm
  const filteredEmployees = employees.filter((employee) => {
    const term = searchTerm.toLowerCase();
    return (
      employee.firstName.toLowerCase().includes(term) ||
      employee.lastName.toLowerCase().includes(term) ||
      employee.department.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <h2>Current Employees</h2>

      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Search by first name, last name or department"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                  First Name
                </th>
                <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                  Last Name
                </th>
                <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                  Date of Birth
                </th>
                <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                  Start Date
                </th>
                <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                  Department
                </th>
                <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                  Street
                </th>
                <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                  City
                </th>
                <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                  State
                </th>
                <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                  Zip Code
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "12px" }}>{employee.firstName}</td>
                  <td style={{ padding: "12px" }}>{employee.lastName}</td>
                  <td style={{ padding: "12px" }}>{employee.dateOfBirth}</td>
                  <td style={{ padding: "12px" }}>{employee.startDate}</td>
                  <td style={{ padding: "12px" }}>{employee.department}</td>
                  <td style={{ padding: "12px" }}>{employee.street}</td>
                  <td style={{ padding: "12px" }}>{employee.city}</td>
                  <td style={{ padding: "12px" }}>{employee.state}</td>
                  <td style={{ padding: "12px" }}>{employee.zipCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p style={{ marginTop: "20px" }}>
        Total employees: {filteredEmployees.length}
      </p>
    </div>
  );
}

export default EmployeeList;
