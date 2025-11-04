import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Données d'exemple
const sampleEmployees = [
  {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "01/15/1985",
    startDate: "06/01/2020",
    department: "Engineering",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    dateOfBirth: "03/22/1990",
    startDate: "08/15/2021",
    department: "Marketing",
    street: "456 Oak Ave",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90210",
  },
];

function EmployeeList() {
  const tableRef = useRef(null);

  useEffect(() => {
    // Initialiser les données si localStorage est vide
    const existingEmployees = localStorage.getItem("employees");
    if (!existingEmployees) {
      localStorage.setItem("employees", JSON.stringify(sampleEmployees));
    }

    // Initialiser DataTables
    if (window.jQuery && tableRef.current) {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];

      $(tableRef.current).DataTable({
        data: employees,
        columns: [
          { title: "First Name", data: "firstName" },
          { title: "Last Name", data: "lastName" },
          { title: "Start Date", data: "startDate" },
          { title: "Department", data: "department" },
          { title: "Date of Birth", data: "dateOfBirth" },
          { title: "Street", data: "street" },
          { title: "City", data: "city" },
          { title: "State", data: "state" },
          { title: "Zip Code", data: "zipCode" },
        ],
        destroy: true,
        responsive: true,
        pageLength: 10,
      });
    }

    return () => {
      if (
        window.jQuery &&
        tableRef.current &&
        $.fn.DataTable.isDataTable(tableRef.current)
      ) {
        $(tableRef.current).DataTable().destroy();
      }
    };
  }, []);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display" ref={tableRef}></table>
      <Link to="/" className="nav-link">
        Home
      </Link>
    </div>
  );
}

export default EmployeeList;
