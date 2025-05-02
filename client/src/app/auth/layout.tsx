export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen p-8 md:p-20 flex justify-center">{children}</div>
  );
}
