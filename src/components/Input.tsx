import { useState } from "react";
import "./Input.css";
import eye from "../assets/eye.svg";
import eyeoff from "../assets/eyeoff.svg";

type Props = {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: any) => void;
};

export function Input({ label, placeholder, type = "text", value, onChange }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="input-container">
      <label>{label}</label>
      <div className="input-wrapper">
        <input
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></input>
        {isPassword && (
          <img
            className="eye-icon"
            src={showPassword ? eyeoff : eye}
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </div>
  );
}
