import { notes as allNotes } from "@/utils/notes";

export type Note = (typeof allNotes)[0];

export type NoteAction =
  | { type: "SET_NOTES"; payload: Note[] }
  | { type: "ADD_TODO"; payload: Note }
  | { type: "EDIT_TODO"; payload: Note }
  | { type: "DELETE_TODO"; payload: Note };

export function reducer(state: typeof allNotes, action: NoteAction) {
  switch (action.type) {
    case "SET_NOTES":
      return action.payload;
    case "ADD_TODO":
      return [...state, action.payload];
    case "EDIT_TODO":
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    case "DELETE_TODO":
      return state.filter((note) => note.id !== action.payload.id);
    default:
      return state;
  }
}
