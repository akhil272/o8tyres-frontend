import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-zinc-100 px-8 py-12 h-[100svh] items-center justify-center flex">
        <div className="flex bg-white rounded-lg space-x-8 h-[70svh] w-[50svw]">
          <div className="flex flex-col w-1/3 bg-primary px-4 py-8  text-white h-full justify-evenly rounded-lg">
            <h5 className="text-base font-bold">O8 TYRES</h5>
            <div className="font-bold text-4xl">
              Get exclusive offers and much more.
            </div>
            <div className="h-2/5 py-8">
              <div className="font-light py-4">
                Discover wide range of tyres and get it fitted at best service
                centers
              </div>
              <div className="relative h-full w-full">
                <Image
                  className="rounded-md"
                  fill={true}
                  alt="auth-cover-image"
                  src="/images/o8tyres-auth-cover.jpg"
                />
              </div>
            </div>
          </div>
          <div className="w-2/3">{children}</div>
        </div>
      </div>
    </section>
  );
}
