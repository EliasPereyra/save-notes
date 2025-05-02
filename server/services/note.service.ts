import Note from "../models/note";
import { NoteInterface } from "../types";

export const getAllNotes = async (userId: string) => {
  const notes = await Note.find({ userId: userId });

  return notes;
};

export const createNote = async (note: NoteInterface) => {
  try {
    const newNote = await Note.create(note);
    if (!newNote) {
      throw new Error("Error creating note");
    }

    return newNote;
  } catch (e) {
    console.error("Error when creating a note", e);
  }
};

export const updateNote = async (
  noteId: string,
  dataToUpdate: NoteInterface
) => {
  try {
    const note = await Note.findByIdAndUpdate(noteId, dataToUpdate, {
      new: true,
    });
    if (!note) {
      throw new Error("Error updating note");
    }

    return note;
  } catch (e) {
    console.error("Error when updating a note", e);
  }
};

export const deleteNote = async (noteId: string) => {
  await Note.findByIdAndDelete(noteId);

  return {
    status: "success",
    message: "Note deleted",
  };
};
