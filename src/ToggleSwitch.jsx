import React from "react";
import "./switch.css";

export default function Toggle(props) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        name="toggle"
        checked={props.checked}
        onChange={props.handleClick}
      />
      <span className="slider"></span>
    </label>
  );
}
