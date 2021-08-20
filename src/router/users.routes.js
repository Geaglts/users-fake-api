import { Router } from "express";

function usersApi(app) {
  const router = Router();
  app.use("/api/users", router);

  router.get("/", (req, res) => {
    res.json({
      message: "All users",
      data: [
        { id: 1, name: "miguel angel", age: 22, phone: "xxx-xxx-xxxx" },
        { id: 2, name: "juan raul", age: 22, phone: "xxx-xxx-xxxx" },
        { id: 3, name: "jose alexis", age: 23, phone: "xxx-xxx-xxxx" },
        { id: 4, name: "rafael", age: 22, phone: "xxx-xxx-xxxx" },
        { id: 5, name: "eduardo", age: 22, phone: "xxx-xxx-xxxx" },
      ],
    });
  });
}

export default usersApi;
