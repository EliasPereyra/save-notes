import {
  createUserHandler,
  loginUserHandler,
} from "../controllers/user.controller";

export default function userRoutes(app) {
  app.post("/api/user/login", loginUserHandler);
  app.post("/api/user/register", createUserHandler);
}
