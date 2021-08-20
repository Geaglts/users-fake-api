import usersApi from "./users.routes";

function router(app) {
  usersApi(app);
}

export default router;
