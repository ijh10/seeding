import express from "express";
import db from "#db/client";
import { getEmployees } from "#db/queries/employees";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", async (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

app.get("/employees", async (req, res) => {
  const employees = await getEmployees();
  console.log(employees);
  res.send(employees);
});
app.post("/employees", async (req, res) => {
  if (!req.body) {
    res.status(400);
    return;
  }

  res.send("Welcome to the Fullstack Employees API.");
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
export default app;
