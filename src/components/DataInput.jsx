import React from "react";

function DataInput({ id, type, name, label, onChange, inputStyle }) {
  return (
    <>
      <label className="data-input-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="data-input-field"
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        style={inputStyle}
      />
    </>
  );
}

export default DataInput;
