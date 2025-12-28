import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CustomDatePicker({
  id,
  label,
  initialDate = new Date(),
  onDateChange,
}) {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleChange = (date) => {
    setSelectedDate(date);
    if (date && onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <div className="custom-datepicker">
      {label && <label htmlFor={id}>{label}</label>}
      <DatePicker
        id={id}
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        className="datepicker-input"
      />
    </div>
  );
}

export default CustomDatePicker;
