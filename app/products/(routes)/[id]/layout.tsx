import { Button } from "@/components/ui/button";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center">
      <div className="bg-white xl:py-12 py-4 px-4 xl:w-3/5 w-full">
        {children}
      </div>
      <div className="fixed bottom-0 w-full flex xl:hidden px-2 py-4 bg-white gap-2">
        <Button className="w-full ">Find Tyre</Button>
        <Button variant={"outline"} className="w-full border-primary ">
          Talk To Us
        </Button>
      </div>
    </section>
  );
}
