import React, { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

function EmployeeList() {
  // Récupérer les employés depuis Redux
  const employees = useSelector((state) => state.employees.employees);

  // État pour la recherche
  const [searchTerm, setSearchTerm] = useState("");

  // Colonnes du tableau
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  // Styles personnalisés pour le DataTable
  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "15px",
      },
    },
  };

  // Filtrage par recherche
  const filteredEmployees = employees.filter((employee) => {
    const term = searchTerm.toLowerCase();
    return (
      employee.dateOfBirth.includes(term) ||
      employee.startDate.includes(term) ||
      employee.firstName.toLowerCase().includes(term) ||
      employee.lastName.toLowerCase().includes(term) ||
      employee.department.toLowerCase().includes(term) ||
      employee.street.toLowerCase().includes(term) ||
      employee.city.toLowerCase().includes(term) ||
      employee.state.toLowerCase().includes(term) ||
      employee.zipCode.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <h2>Current Employees</h2>

      {/* Recherche */}
      <input
        type="text"
        placeholder="Search"
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

      {/* Tableau */}
      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[5, 10, 20, 50]}
        highlightOnHover
        striped
        responsive
        noDataComponent="No employees found."
        customStyles={customStyles}
      />

      <p style={{ marginTop: "20px" }}>
        Total employees: {filteredEmployees.length}
      </p>
    </div>
  );
}

export default EmployeeList;
