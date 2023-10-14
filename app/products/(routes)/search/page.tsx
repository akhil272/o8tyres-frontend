"use client";
import TyreProductCard from "@/components/tyreProductCard";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  return (
    <div>
      <div className=" flex space-x-8 ">
        <div className="hidden lg:flex">
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
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-8">
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
