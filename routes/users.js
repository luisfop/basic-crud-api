import express from "express";

const router = express.Router();

const users = [
  {
    name: "John",
    lastName: "Doe",
    age: 25,
  },
];

//all routes in here are starting with /users
router.get("/", (req, resp) => {
  console.log(users);
  resp.send(users);
});

export default router;
