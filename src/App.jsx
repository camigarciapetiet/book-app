import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import { Register } from "./pages/Register.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
