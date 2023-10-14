export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-white px-8 py-12">{children}</div>
    </section>
  );
}
