import React from "react";
import { useSelector } from "react-redux";

function EmployeeList() {
  // Récupérer les employés depuis Redux
  const employees = useSelector((state) => state.employees.employees);

  return (
    <div>
      <h1>Current Employees</h1>

      {employees.length === 0 ? (
        <p>No employees found. Create your first employee!</p>
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
                <th
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  First Name
                </th>
                <th
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Last Name
                </th>
                <th
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Date of Birth
                </th>
                <th
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Start Date
                </th>
                <th
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Department
                </th>
                <th
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Street
                </th>
                <th
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  City
                </th>
                <th
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  State
                </th>
                <th
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Zip Code
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
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

      <p style={{ marginTop: "20px" }}>Total employees: {employees.length}</p>
    </div>
  );
}

export default EmployeeList;
