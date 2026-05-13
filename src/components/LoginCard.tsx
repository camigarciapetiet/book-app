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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!mail || !password) {
      alert("Complete all fields");
      return;
    }

    if (mail === "test@gmail.com" && password === "Test1234") {
      navigate("/home");
    } else {
      alert("Wrong credentials");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="login-card">
      <div className="icon">
        <img src={login}></img>
      </div>
      <div className="login-header">
        <h1 className="login-title">Welcome</h1>
        <h2 className="login-subtitle">
          Enter your credentials to access the system
        </h2>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          label="Email"
          placeholder="example@mail.com"
          type="mail"
          onChange={handleMailInput}
        />
        <Input
          label="Password"
          placeholder="*********"
          type="password"
          onChange={handlePasswordInput}
        />
        <button className="login-btn" type="submit">
          Sign in
        </button>
      </form>

      <p className="newaccount-btn">Create new account</p>
    </div>
  );
}
