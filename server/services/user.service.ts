import bcrypt from "bcryptjs";

import User from "../models/user";
import { UserInterface } from "../types";

export async function loginUser(email: string, password: string) {
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      throw new Error("User not found");
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }

    return user;
  } catch (e) {
    console.error("Error when logging in", e);
  }
}

export function createUser(user: UserInterface) {
  try {
    const saltPassword = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, saltPassword);
    user.password = hashedPassword;

    const newUser = new User(user);
    if (!newUser) {
      throw new Error("Error creating user");
    }

    newUser.save();

    return newUser;
  } catch (e) {
    console.error("Error when creating a user", e);
  }
}

export function getUserById(userId: string) {
  try {
    const user = User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (e) {
    console.error("Error when getting a user", e);
  }
}
