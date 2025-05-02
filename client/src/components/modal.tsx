import { useState } from "react";
import PlusIcon from "./icons/plus-icon";
import { SearchParams } from "next/dist/server/request/search-params";
import { useNotes } from "@/hooks/useNotes";
import { toast } from "sonner";

type ModalProps = {
  userId?: string;
  title: string;
  description: string;
  action: "create" | "edit" | "delete";
};

export default function Modal({ userId }: SearchParams) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { dispatch } = useNotes();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:4000/api/users/${userId}/note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    if (res.ok) {
      const data = await res.json();
      dispatch({ type: "CREATE_NOTE", payload: data });
      toast.success("Nota creada");
      document.getElementById("my_modal_3").close();
    }
  };

  return (
    <>
      <button
        className="btn btn-sm btn-secondary btn-circle"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <PlusIcon />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Crea una nota</h3>
          <p className="text-slate-400 my-2">
            Agrega un título y una descripción
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="title" className="label">
                Título
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                minLength={3}
                maxLength={30}
                placeholder="Hacer la compra"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="label">
                Descripción
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                required
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Guardar
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
