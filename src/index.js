import express from "express";
import router from "./router/router";

const app = express();

router(app);

app.get("/", (req, res) => {
  res.json({ message: "happy coding! :D" });
});

app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
