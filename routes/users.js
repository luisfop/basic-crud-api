import express from "express";
import { v4 as uuidv4 } from "uuid";

uuidv4();
const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];
//all routes in here are starting with /users

router.get("/", (req, resp) => {
  resp.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  res.send(`User ${user.firstName} Added to the Database`);
});

export default router;
