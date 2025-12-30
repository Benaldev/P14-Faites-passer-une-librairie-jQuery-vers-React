import { useEffect, useState } from "react";

function Dropdown({ id, label, options, defaultValue = "", onChange }) {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0]
  );

  useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <label htmlFor={id}>
        <strong>{label}</strong>
      </label>
      <select
        id={id}
        value={selectedValue}
        onChange={handleChange}
        className="dropdown"
        style={{ width: "200px", padding: "3px" }}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
