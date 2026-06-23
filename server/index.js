import express from "express"; 
import cors from "cors";
import { createUser , findUserByEmail} from "./lib/usersStore.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Application is running" });
});

app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body; 
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const user = await findUserByEmail(email);
    if (user && user.password === password) {
        return res.status(200).json({ message: "Login successful", user: user.name });
    }
    return res.status(401).json({ message: "Invalid email or password" });
});

app.post("/api/auth/register", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email and password are required" });
    }
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
    }
    const newUser = { name, email, password };
    await createUser(newUser);
    return res.status(201).json({ message: "User created successfully", user: name });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});