import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-base-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-20%,#4c1d95,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_120%,#1e40af,transparent_50%)]"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        <div className="card bg-base-200/80 backdrop-blur-sm p-8 sm:p-12 max-w-xl w-full shadow-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-base-content mb-4 leading-tight">
            Organiza tus ideas, Amplifica tu Productividad
          </h1>

          <p className="text-lg sm:text-xl text-base-content/90 mb-8">
            The simple, beautiful way to capture ideas, manage tasks, and never
            forget a thing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="btn btn-primary w-full sm:w-auto"
              href="/auth/register"
            >
              Comienza ahora
            </Link>
            <Link
              className="btn btn-secondary w-full sm:w-auto"
              href="/auth/login"
            >
              Inicia sesión
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
