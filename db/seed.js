import db from "#db/client";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const newEmployees = [
    [1, "Jack", "2025-01-15", 60000],
    [2, "Steve", "2025-02-15", 50000],
    [3, "Denise", "2025-03-15", 10000],
    [4, "Lisa", "2025-04-15", 70000],
    [5, "Dave", "2025-05-15", 90000],
    [6, "Steph", "2025-06-15", 68000],
    [7, "Jenna", "2025-07-15", 30000],
    [8, "Frank", "2025-08-15", 220000],
    [9, "Janis", "2025-09-15", 780000],
    [10, "Jamie ", "2025-10-15", 88000],
  ];
  newEmployees.forEach(async (employee) => {
    await db.query(
      "INSERT INTO employees (id, name, birthday, salary) VALUES ($1,$2,$3,$4)",
      employee
    );
  });
}
