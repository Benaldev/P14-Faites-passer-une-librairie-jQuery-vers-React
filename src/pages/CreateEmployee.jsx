import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/store";
import DataInput from "../components/DataInput";
import Dropdown from "../components/Dropdown";
import Modal from "benal18-modal";
import CustomDatePicker from "../components/DatePicker.jsx";

const departments = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function CreateEmployee() {
  const dispatch = useDispatch();

  // État pour le formulaire
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: new Date(),
    startDate: new Date(),
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  // État pour la modal
  const [modalOpen, setModalOpen] = useState(false);

  // Gérer les changements des inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gérer les changements de date
  const handleDateChange = (date, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: date,
    });
  };

  // Gérer les changements du dropdown
  const handleDropdownChange = (value, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  // Soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Formater les dates
    const employeeToSave = {
      ...formData,
      dateOfBirth: formData.dateOfBirth.toLocaleDateString("fr-FR"),
      startDate: formData.startDate.toLocaleDateString("fr-FR"),
    };

    // Ajouter l'employé via Redux
    dispatch(addEmployee(employeeToSave));

    // Ouvrir la modal
    setModalOpen(true);

    // Réinitialiser le formulaire
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
      startDate: new Date(),
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    });
  };

  // Fermer la modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h2>Create Employee</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        {/* Nom et Prénom */}
        <div style={{ display: "flex", gap: "50px", marginBottom: "30px" }}>
          <div style={{ flex: 1 }}>
            <DataInput
              id="firstName"
              type="text"
              name="firstName"
              label="First Name"
              onChange={handleInputChange}
              value={formData.firstName}
              inputStyle={{ width: "100%" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <DataInput
              id="lastName"
              type="text"
              name="lastName"
              label="Last Name"
              onChange={handleInputChange}
              value={formData.lastName}
              inputStyle={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Date de naissance */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          ></label>
          <CustomDatePicker
            id="dateOfBirth"
            label="Date of Birth"
            initialDate={formData.dateOfBirth}
            onDateChange={(date) => handleDateChange(date, "dateOfBirth")}
          />
        </div>

        {/* Date d'embauche */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          ></label>
          <CustomDatePicker
            id="startDate"
            label="Start Date"
            initialDate={formData.startDate}
            onDateChange={(date) => handleDateChange(date, "startDate")}
          />
        </div>

        {/* Adresse */}
        <fieldset
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <legend style={{ fontWeight: "bold", padding: "0 10px" }}>
            Address
          </legend>

          <DataInput
            id="street"
            type="text"
            name="street"
            label="Street"
            onChange={handleInputChange}
            value={formData.street}
          />

          <DataInput
            id="city"
            type="text"
            name="city"
            label="City"
            onChange={handleInputChange}
            value={formData.city}
          />

          <Dropdown
            id="state"
            label="State"
            options={states}
            defaultValue=""
            onChange={(value) => handleDropdownChange(value, "state")}
          />

          <DataInput
            id="zipCode"
            type="text"
            name="zipCode"
            label="Zip Code"
            onChange={handleInputChange}
            value={formData.zipCode}
          />
        </fieldset>

        {/* Département */}
        <div style={{ marginBottom: "20px" }}>
          <Dropdown
            id="department"
            label="Department"
            options={departments}
            defaultValue=""
            onChange={(value) => handleDropdownChange(value, "department")}
          />
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "grey",
            color: "black",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Save Employee
        </button>
      </form>

      {/* Modal de confirmation */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title="Success!"
        content="Employee has been created successfully."
        btnText="X"
      />
    </div>
  );
}

export default CreateEmployee;
