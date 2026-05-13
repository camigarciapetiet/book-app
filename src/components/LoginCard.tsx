import login from "../assets/login.svg";
import { Input } from "./Input";
import React, { useState } from "react";
import "./LoginCard.css";
import { useNavigate } from "react-router-dom";

export function LoginCard() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPssword, setShowPassword] = useState<boolean>(false);

  const handleMailInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setMail(e.target.value);
  };

  const handlePasswordInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className="login-card">
      <div className="icon">
        <img src={login}></img>
      </div>
      <div className="login-header">
        <h1 className="login-title">Iniciar Sesión</h1>
        <h2 className="login-subtitle">
          Ingresa tus credenciales para acceder al sistema
        </h2>
      </div>
      <form className="login-form">
        <Input
          label="Correo electronico"
          placeholder="example@mail.com"
          type="mail"
          onChange={handleMailInput}
        />
        <Input
          label="Contraseña"
          placeholder="*********"
          type="password"
          onChange={handlePasswordInput}
        />
        <button
          className="login-btn"
          type="submit"
          onClick={() => navigate("/home")}
        >
          Ingresar
        </button>
      </form>

      <p className="newaccount-btn">Crear cuenta nueva</p>
    </div>
  );
}
