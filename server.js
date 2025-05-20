import app from "#app";
import db from "#db/client";

const PORT = process.env.PORT ?? 3000;

await db.connect();
app.get("/", async (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
