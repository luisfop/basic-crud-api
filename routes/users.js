import express from "express";

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

  users.push(user);
  res.send(`User ${user.firstName} added to the Database`);
});

export default router;
