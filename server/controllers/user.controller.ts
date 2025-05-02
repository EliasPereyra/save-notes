import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { createUser, loginUser } from "../services/user.service";

export function createUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Missing name, email or password",
    });
  }

  try {
    const user = createUser({
      name,
      email,
      password,
    });
    if (!user) {
      throw new Error("Error creating user");
    }

    res.json({
      status: "ok",
      data: user,
    });
  } catch (e) {
    console.error("Error when creating a user", e);
    req.log.error({ error: e });
    next(e);
  }
}

export async function loginUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Missing email or password",
    });
  }

  const id = randomUUID();
  const token = jwt.sign({ id }, "misecreto", { expiresIn: "1h" });

  try {
    const user = await loginUser(email, password);
    res.status(200).json({
      token,
      user: {
        id: user?.id,
        name: user?.name,
        email: user?.email,
      },
    });
  } catch (e) {
    next(e);
    console.error("Error when logging in", e);
  }
}
