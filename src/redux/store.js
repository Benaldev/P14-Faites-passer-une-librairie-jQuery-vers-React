import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice pour les employés
const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    employees: JSON.parse(localStorage.getItem("employees")) || [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
      // Sauvegarder dans localStorage
      localStorage.setItem("employees", JSON.stringify(state.employees));
    },
  },
});

// Exporter l'action et le reducer
export const { addEmployee } = employeeSlice.actions;
export const store = configureStore({
  reducer: {
    employees: employeeSlice.reducer,
  },
});
