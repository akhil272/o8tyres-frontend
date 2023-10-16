export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-zinc-100 px-8 py-12">{children}</div>
    </section>
  );
}
