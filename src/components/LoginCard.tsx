import login from "../assets/login.svg";
import { Input } from "./Input";
import React, { useState } from "react";
import "./LoginCard.css";
import { useNavigate } from "react-router-dom";
import { ErrorModal } from "./ErrorModal";

export function LoginCard() {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
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
      setError("Complete all fields");
      return;
    }

    if (mail === "test@gmail.com" && password === "Test1234") {
      navigate("/home");
    } else {
      setError("Wrong credentials");
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
          value={mail}
          onChange={handleMailInput}
        />
        <Input
          label="Password"
          placeholder="*********"
          type="password"
          value={password}
          onChange={handlePasswordInput}
        />
        <button className="login-btn" type="submit">
          Sign in
        </button>
      </form>

      <p className="newaccount-btn" onClick={()=>navigate("/register")}>Create new account</p>
      {error && <ErrorModal message={error} handleClose={() => setError(null)} />}
    </div>
  );
}
