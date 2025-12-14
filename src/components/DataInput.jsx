import React from "react";

function DataInput({ id, type, name, label, onChange }) {
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
      />
    </>
  );
}

export default DataInput;
