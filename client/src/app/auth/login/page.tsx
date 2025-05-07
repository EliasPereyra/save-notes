"use client";
import Link from "next/link";
import Image from "next/image";

import EmailInput from "@/components/email-input";
import PasswordInput from "@/components/password-input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      return res.json().then((data) => {
        localStorage.setItem("token", data.token);
        setLoading(true);
        router.push(`/dashboard/${data.user.id}`);
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full md:w-96 p-4 md:p-10 bg-base-200 rounded"
      >
        <Link href="/">
          <Image
            className="mx-auto my-4"
            src=""
            alt="Logo"
            width={24}
            height={24}
          />
        </Link>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-center font-bold">Iniciar sesión</h2>
          <p className="text-center text-slate-300 text-sm">
            ¡Bienvenido! Inicia sesión con tu cuenta
          </p>
        </div>

        <EmailInput value={email} onChange={setEmail} />
        <PasswordInput value={password} onChange={setPassword} />
        <button disabled={loading} type="submit" className="btn btn-primary">
          {loading ? "Cargando..." : "Iniciar sesión"}
        </button>
        <p className="text-center text-slate-300 text-sm mt-4">
          ¿No tienes una cuenta todavía?{" "}
          <Link className="link link-hover font-bold" href="/auth/register">
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  );
}
