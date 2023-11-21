import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-secondary xl:px-8 xl:py-12 justify-center flex">
        <div className="xl:flex bg-white  xl:rounded-lg xl:h-[70svh] h-full xl:w-[50svw]">
          <div className="flex flex-col xl:w-1/3 bg-primary px-4 xl:py-8 pt-8 text-white xl:h-full justify-evenly xl:rounded-lg">
            <h5 className="text-base font-bold hidden xl:block">O8 TYRES</h5>
            <div className="font-bold text-4xl">
              Get exclusive offers and much more.
            </div>
            <div className="xl:h-2/5 xl:py-8">
              <div className="font-light py-4">
                Discover wide range of tyres and get it fitted at best service
                centers
              </div>
              <div className="relative h-48 w-full xl:h-full xl:w-full">
                <Image
                  className="rounded-md object-cover"
                  fill={true}
                  alt="auth-cover-image"
                  src="/images/o8tyres-auth-cover.jpg"
                />
              </div>
            </div>
          </div>
          <main className="flex flex-col justify-center xl:w-2/3 w-full xl:py-10 py-4 px-4 md:px-8 ">
            {children}
          </main>
        </div>
      </div>
    </section>
  );
}
