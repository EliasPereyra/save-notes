import { BASE_API_SERVER_URL } from "@/constants";

const getNotes = async (userId: string) => {
  const res = await fetch(`${BASE_API_SERVER_URL}/${userId}/notes`);
  if (!res.ok) throw new Error("Error al obtener las notas");

  return res.json();
};

const createNote = async (
  note: { title: string; content: string },
  userId: string
) => {
  const res = await fetch(`${BASE_API_SERVER_URL}/${userId}/note`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // credentials: "include",
    body: JSON.stringify(note),
  });
  if (!res.ok) throw new Error("Error al crear la nota");

  return res.json();
};

// fijarse el userId para la nota
const updateNote = async ({
  userId,
  noteId,
  ...note
}: {
  noteId: string;
  userId: string;
  note: { title: string; content: string };
}) => {
  const res = await fetch(`${BASE_API_SERVER_URL}/${userId}/notes/${noteId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    // credentials: "include",
    body: JSON.stringify(note),
  });
  if (!res.ok) throw new Error("Error al actualizar la nota");

  return res.json();
};

const deleteNote = async (noteId: string) => {
  const res = await fetch(`${BASE_API_SERVER_URL}/${noteId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!res.ok) throw new Error("Error al eliminar la nota");

  return res.json();
};

export { getNotes, createNote, updateNote, deleteNote };
