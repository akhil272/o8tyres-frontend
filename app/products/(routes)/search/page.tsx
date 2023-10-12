"use client";
import TyreProductCard from "@/components/tyreProductCard";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  return (
    <div className="bg-zinc-100 ">
      <div className="px-8 py-12 flex space-x-8 ">
        <div className="hidden md:flex">
          <div className="font-medium text-2xl flex">
            <div>
              <div className="pb-4">Filters</div>
              <div className="w-80 bg-background rounded-lg h-40"></div>
            </div>
          </div>
        </div>
        <div className="flex-col ">
          <div className="font-medium text-2xl pb-4 ">
            Showing results for {search}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-12 md:gap-y-16 aspect-content aspect-w-1 aspect-h-1">
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
            <TyreProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
