import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      status: "error",
      message: "Missing token",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, "misecreto");

    next();
  } catch (e) {
    console.error("Error when verifying token", e);
    return res.status(401).json({
      status: "error",
      message: "Invalid token",
    });
  }
};
