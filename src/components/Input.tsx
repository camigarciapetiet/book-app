import { useId, useState } from "react";
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
  const inputId = useId();
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="input-container">
      <label htmlFor={inputId}>{label}</label>
      <div className="input-wrapper">
        <input
          id={inputId}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {isPassword && (
          <button
            type="button"
            className="eye-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <img
              className="eye-icon"
              src={showPassword ? eyeoff : eye}
              alt=""
            />
          </button>
        )}
      </div>
    </div>
  );
}
