"use client";
import Link from "next/link";

import Card from "@/components/card";
import Loader from "@/components/loader";
import Modal from "@/components/modal";
import { useNotes } from "@/hooks/useNote";

export default function Dashboard({ params }: { params: { userId: string } }) {
  const { data: notes, isLoading } = useNotes(params.userId);
  if (isLoading) return <Loader />;

  return (
    <div className="grid justify-items-center min-h-screen p-8 gap-16 sm:p-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-4xl font-bold">Your notes</h1>
            <Modal />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {notes?.length > 0 ? (
              notes?.map((note) => (
                <Card title={note.title} content={note.content} key={note.id} />
              ))
            ) : (
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold">No tienes notas creadas</h2>
                <p className="text-slate-500">
                  Comienza agregando notas a tu lista
                </p>
              </div>
            )}
          </ul>
        </section>
      </main>

      <footer className="flex flex-wrap items-center justify-center">
        <small className="text-slate-500">
          Created by{" "}
          <Link
            className="text-slate-400 link link-hover"
            href="https://github.com/EliasPereyra"
            target="_blank"
          >
            Elias Pereyra
          </Link>
        </small>
      </footer>
    </div>
  );
}
