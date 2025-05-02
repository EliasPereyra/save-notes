"use client";
import Navbar from "@/components/navbar";
import { NotesProvider } from "@/hooks/useNotes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NotesProvider>
        <Toaster />
        <Navbar />
        {children}
      </NotesProvider>
    </QueryClientProvider>
  );
}
