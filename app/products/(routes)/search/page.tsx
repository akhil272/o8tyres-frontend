"use client";
import TyreProductCard from "@/components/TyreProductCard";
import { useFindTyreProductsQuery } from "@/redux/services/productApi";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const vehicleModel = searchParams.get("vehicleModelId");
  const tyreSize = searchParams.get("tyreSizeId");
  const { data, isLoading, isError, error } = useFindTyreProductsQuery({
    page: 1,
    size: 1,
    vehicleModelId: Number(vehicleModel),
    tyreSizeId: Number(tyreSize),
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }
  const tyreProducts = data?.data.tyreProducts;
  return (
    <div>
      <div className="flex space-x-8 ">
        <div className="hidden lg:flex">
          <div className="font-medium text-2xl flex">
            <div>
              <div className="pb-4">Filters</div>
              <div className="w-80 bg-background rounded-lg h-40"></div>
            </div>
          </div>
        </div>
        <div className="flex-col ">
          <div className="font-medium text-2xl pb-4 ">Showing results for</div>
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-8">
            {tyreProducts?.map((tyre) => (
              <TyreProductCard key={tyre.id} tyreProduct={tyre} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
