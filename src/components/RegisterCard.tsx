import { useState } from "react";
import { Input } from "./Input";
import "./RegisterCard.css";
import { useNavigate } from "react-router-dom";

export function RegisterCard() {
    let [name, setName] = useState<string>("");
    let [email, setEmail] = useState<string>("");
    let [password, setPassword] = useState<string>("");
    let [confirmPassword, setConfirmPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }
    
    const handleRegister = () => {
        if (!name || !email || !password || !confirmPassword) {
            alert("Complete all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        navigate("/");
    }

    return (
        <div className="register-card">
            <p className="register-title">Create new account</p>
            <p className="register-subtitle">Enter your information to create an account</p>
            <Input label="Name" placeholder="Name" type="text" value={name} onChange={handleNameInput} />
            <Input label="Email" placeholder="Email" type="email" value={email} onChange={handleEmailInput} />
            <Input label="Password" placeholder="Password" type="password" value={password} onChange={handlePasswordInput} />
            <Input label="Confirm Password" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={handleConfirmPasswordInput} />
            <button className="register-btn" type="submit" onClick={handleRegister}>Register</button>
        </div>
    )
}