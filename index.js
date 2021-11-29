import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 7000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (request, response) => {
  response.send("Hello from home page!");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
