import Router from "express";
import { findUserByEmail, createUser } from "../lib/usersStore.js";

const router = Router();

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const user = await findUserByEmail(email);
        if (user && user.password === password) {
            return res.status(200).json({ message: "Login successful", user: user.name });
        }
        return res.status(401).json({ message: "Invalid email or password" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
    
router.post("/register", async (req, res) => {
    try {
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
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

export default router;