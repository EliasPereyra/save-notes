"use client";

import { useNotes } from "@/hooks/useNote";
import Card from "./card";
import Loader from "./loader";

export default function NoteList({ userId }: { userId: string }) {
  const { data: notes, isLoading } = useNotes(userId);

  console.log(notes);
  if (isLoading) return <Loader />;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {notes.data?.length > 0 ? (
        notes.data?.map((note) => (
          <Card title={note.title} content={note.content} key={note.id} />
        ))
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">No tienes notas creadas</h2>
          <p className="text-slate-500">Comienza agregando notas a tu lista</p>
        </div>
      )}
    </ul>
  );
}
