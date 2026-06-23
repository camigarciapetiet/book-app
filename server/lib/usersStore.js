import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const usersFilePath = path.join(__dirname, "../data/users.json");

export async function getUsers() {
    const data = await fs.readFile(usersFilePath, "utf8");
    return JSON.parse(data);
}

export async function createUser(user) {
    const users = await getUsers();
    const updatedUsers = [...users, user];
    await fs.writeFile(usersFilePath, JSON.stringify(updatedUsers, null, 2));
}

export async function findUserByEmail(email) {
    const users = await getUsers();
    return users.find(user => user.email ===email);
}