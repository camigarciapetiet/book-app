import express from "express"; 
import cors from "cors";
import { createUser , findUserByEmail} from "./lib/usersStore.js";
import authRoutes from "./routes/auth.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Application is running" });
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});