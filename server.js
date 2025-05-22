import app from "#app";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
} from "#db/queries/employees";

const PORT = process.env.PORT ?? 3000;
app.use(express.json());

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
    res.send("bad request");
  } else if (!req.body?.name || !req.body?.birthday || !req.body?.salary) {
    res.status(400);
    res.send("bad request");
  } else {
    await createEmployee(req.body);
    res.status(201);
    res.send(req.body);
  }
});
app.put("/employees/:id", async (req, res) => {
  const id = parseInt(req.params?.id);
  if (!req.body) {
    res.status(400);
    res.send("bad request");
  } else if (!req.body?.name || !req.body?.birthday || !req.body?.salary) {
    res.status(400);
    res.send("bad request");
  } else if (!Number.isInteger(id) || id < 0) {
    res.status(400);
    res.send("bad request");
  } else {
    const employee = await updateEmployee(req.body);
    if (!employee) {
      res.status(404);
      res.send("not found");
    }
    res.status(200);
    res.send(req.body);
  }
});
app.get("/employees/:id", async (req, res) => {
  const id = parseInt(req.params?.id);
  if (!Number.isInteger(id) || id < 0) {
    res.status(400);
    res.send("bad request");
  } else {
    const employee = await getEmployee(id);
    if (!employee) {
      res.status(404);
      res.send("not found");
    }
    res.status(200);
    res.send(employee);
  }
});
app.delete("/employees/:id", async (req, res) => {
  const id = parseInt(req.params?.id);
  if (!Number.isInteger(id) || id < 0) {
    res.status(400);
    res.send("bad request");
  } else {
    const employee = await getEmployee(id);
    if (!employee) {
      res.status(404);
      res.send("not found");
    }
    res.status(204);
    res.send(employee);
  }
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
