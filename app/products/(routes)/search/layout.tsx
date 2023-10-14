export default function SearchLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-zinc-100 px-8 py-12">{children}</div>
    </section>
  );
}
