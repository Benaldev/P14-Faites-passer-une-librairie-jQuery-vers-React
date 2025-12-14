import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const states = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

const departments = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

function CreateEmployee() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const dateOfBirthRef = useRef(null);
  const startDateRef = useRef(null);
  const departmentRef = useRef(null);
  const stateRef = useRef(null);

  useEffect(() => {
    // Initialiser les plugins jQuery après le rendu du composant
    if (window.jQuery) {
      // DatePicker
      $(dateOfBirthRef.current).datetimepicker({
        timepicker: false,
        format: "m/d/Y",
      });

      $(startDateRef.current).datetimepicker({
        timepicker: false,
        format: "m/d/Y",
      });

      // Selectmenu pour department et state
      $(departmentRef.current).selectmenu();
      $(stateRef.current).selectmenu();

      // Remplir le select state
      const stateSelect = stateRef.current;
      states.forEach((state) => {
        const option = document.createElement("option");
        option.value = state.value;
        option.textContent = state.label;
        stateSelect.appendChild(option);
      });

      // Rafraîchir le selectmenu après avoir ajouté les options
      $(stateRef.current).selectmenu("refresh");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(formData);
    localStorage.setItem("employees", JSON.stringify(employees));

    // Ouvrir la modal jQuery
    $("#confirmation").modal();

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      department: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    });
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list" className="nav-link">
          View Current Employees
        </Link>
        <h2>Create Employee</h2>

        <form onSubmit={saveEmployee} id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            type="text"
            ref={dateOfBirthRef}
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            type="text"
            ref={startDateRef}
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="state">State</label>
            <select name="state" id="state" ref={stateRef} required>
              <option value="">Select a state</option>
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            ref={departmentRef}
            required
          >
            <option value="">Select a department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          <button type="submit">Save</button>
        </form>
      </div>

      {/* Modal jQuery */}
      <div id="confirmation" className="modal">
        <p>Employee Created!</p>
        <a href="#" rel="modal:close">
          Close
        </a>
      </div>
    </div>
  );
}

export default CreateEmployee;
