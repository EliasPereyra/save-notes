import { createNote, deleteNote, getNotes, updateNote } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useNotes = (userId: string) => {
  return useQuery({
    queryKey: ["notes", userId],
    queryFn: () => getNotes(userId),
  });
};

export const useCreateNote = (
  note: { title: string; content: string },
  userId: string
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => createNote(note, userId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["notes", userId] }),
  });
};

export const useUpdateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notes"] }),
  });
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notes"] }),
  });
};
