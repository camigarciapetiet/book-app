import { LoginCard } from "../components/LoginCard";
import "./Login.css";

export function Login() {
  return (
    <div className="login-container">
      <h1 className="app-name-login">BookApp</h1>
      <LoginCard />
    </div>
  );
}
