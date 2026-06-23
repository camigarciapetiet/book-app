import express from "express"; 
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Application is running" });
});

app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body; 
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    if (email === "test@gmail.com" && password === "Test1234") {
        return res.status(200).json({ message: "Login successful" });
    }
    return res.status(401).json({ message: "Invalid email or password" });
});

app.post("/api/auth/register", (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email and password are required" });
    }
    return res.status(200).json({ message: "Register successful" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});