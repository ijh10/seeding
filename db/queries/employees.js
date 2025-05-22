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
  //await db.end();
  return {
    name,
    birthday: new Date(birthday),
    salary,
  };
  //await db.end();
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // await db.connect();
  const info = await db.query("SELECT current_database()");
  console.log(info.rows);
  const employees = await db.query("SELECT * FROM employees");

  //await db.end();
  return employees.rows;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  const newEmployee = await db.query("SELECT * FROM employees WHERE id=$1", [
    id,
  ]);
  console.log(newEmployee);
  console.log(newEmployee.rows);
  if (!newEmployee.rows.length) {
    return null;
  }
  //await db.end();
  return newEmployee.rows[0];
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  const newEmployee = await db.query(
    "UPDATE employees SET name = $1,  birthday = $2, salary = $3 WHERE id=$4",
    [name, birthday, salary, id]
  );
  console.log(newEmployee);
  console.log(newEmployee.rows);
  if (!newEmployee.rows.length) {
    return null;
  }
  //await db.end();
  return {
    name,
    birthday: new Date(birthday),
    salary,
  };
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  const newEmployee = await db.query("DELETE FROM employees WHERE id=$1", [id]);
  console.log(newEmployee);
  console.log(newEmployee.rows);
  //await db.end();
}
