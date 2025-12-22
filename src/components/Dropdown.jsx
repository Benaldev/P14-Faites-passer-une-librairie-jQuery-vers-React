import { useEffect, useState } from "react";

function Dropdown({ label, options, defaultValue = "", onChange }) {
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
    <div>
      <label>
        <strong>{label}</strong>
      </label>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="dropdown"
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
