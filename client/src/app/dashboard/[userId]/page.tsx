import Link from "next/link";

import Modal from "@/components/modal";
import NoteList from "@/components/note-list";

export default async function Dashboard({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = await params;

  return (
    <div className="grid justify-items-center min-h-screen p-8 gap-16 sm:p-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-4xl font-bold">Your notes</h1>
            <Modal />
          </div>
          <NoteList userId={userId as string} />
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
