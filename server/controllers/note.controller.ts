import { Request, Response } from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../services/note.service";
import { NoteInterface } from "../types";
import { getUserById } from "../services/user.service";

export async function getNotesHandler(req: Request, res: Response) {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(400).json({
      status: "error",
      message: "Missing userId",
    });
  }

  const user = await getUserById(userId);
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  const notes = await getAllNotes(user.id);
  if (!notes) {
    return res.status(404).json({
      status: "error",
      message: "Notes not found",
    });
  }

  return res.status(200).json({
    status: "ok",
    data: notes,
  });
}

export async function createNoteHandler(req: Request, res: Response) {
  const userId = req.params.userId;
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({
      status: "error",
      message: "Missing title or content",
    });
  }

  const newNote: NoteInterface = {
    title,
    content,
    userId,
  };

  try {
    const note = await createNote(newNote);
    if (!note) {
      throw new Error("Error creating note");
    }

    return res.status(201).json({
      status: "ok",
      data: note,
    });
  } catch (e) {
    console.error("Error when creating a note", e);
  }
}

export const updateNoteHandler = async (req: Request, res: Response) => {
  const { userId, noteId } = req.params;
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({
      status: "error",
      message: "Missing title or content",
    });
  }

  const dataToUpdate: NoteInterface = {
    userId,
    title,
    content,
  };

  try {
    const updatedNote = await updateNote(noteId, dataToUpdate);

    res.status(200).json({
      status: "ok",
      data: updatedNote,
    });
  } catch (e) {
    console.error("Error when updating a note", e);
  }
};

export const deleteNoteHandler = async (req: Request, res: Response) => {
  const noteId = req.params.noteId;

  try {
    deleteNote(noteId).then((note) => {
      return res.status(200).json({
        status: "ok",
        data: note,
      });
    });
  } catch (e) {
    console.error("Error when deleting a note", e);
  }
};
