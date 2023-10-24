import Image from "next/image";
import { Button } from "./ui/button";

import { useRouter } from "next/navigation";

const TyreProductCard = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/products/1")}
      className="px-4 py-6 rounded-lg bg-background space-y-2 "
    >
      <div className="h-52 w-52 relative">
        <Image
          src="/images/Primacy4ST.webp"
          fill
          className="object-fill"
          alt="tyre-image-cover"
        />
      </div>
      <div className="flex-col flex pt-4">
        <label className="text-sm">Michelin</label>
        <label className="text-base font-medium">Primacy 4ST</label>
        <label className="text-3xl font-semibold py-2">255/55 R15 99 W</label>
      </div>
      <div className="flex space-x-2">
        <div>
          <div className="line-through">Rs 15,350</div>
          <div className="text-red-600 font-semibold">Rs 14,350</div>
        </div>
        <div className="-space-y-2">
          <label className="text-xs">Your Discount</label>
          <div className="text-red-600 text-sm font-semibold">10%</div>
        </div>
      </div>
      <div className="flex justify-between space-x-4 h-14">
        <input
          defaultValue="4"
          className="p-2 w-1/5 bg-zinc-100 rounded-md text-center"
        />
        <Button className="w-4/5 h-full">Add To Cart</Button>
      </div>
    </div>
  );
};

export default TyreProductCard;
