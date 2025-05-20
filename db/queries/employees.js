import db from "#db/client";

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  // TODO
  //await db.connect();
  const newEmployee = await db.query(
    "INSERT INTO employees ( name, birthday, salary) VALUES ($1,$2,$3)",
    [name, birthday, salary]
  );
  console.log(newEmployee);
  console.log(newEmployee.rows);
  await db.end();
  return newEmployee;
  //await db.end();
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  //await db.connect();
  const employees = await db.query("SELECT * FROM employees");

  console.log(employees.rows);
  //await db.end();
  return employees.rows;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
}
