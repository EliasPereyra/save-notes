import { verifyToken } from "../middleware/auth";

import {
  createNoteHandler,
  deleteNoteHandler,
  getNotesHandler,
  updateNoteHandler,
} from "../controllers/note.controller";

export function noteRoutes(app) {
  app.get("/api/users/:userId/notes", getNotesHandler);
  app.post("/api/users/:userId/note", createNoteHandler);
  app.put("/api/users/:userId/note/:noteId", updateNoteHandler);
  app.delete("/api/users/:userId/note/:noteId", deleteNoteHandler);
}
