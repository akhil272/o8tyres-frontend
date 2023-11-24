"use client";
import TyreProductCard from "@/components/TyreProductCard";
import { useFindTyreProductsQuery } from "@/redux/services/productApi";
import { useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const vehicleModel = searchParams.get("vehicleModelId");
  const tyreSize = searchParams.get("tyreSizeId");
  const { data, isLoading, isError, error } = useFindTyreProductsQuery({
    page: 1,
    size: 10,
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
  const brands = data?.data.tyreProducts.reduce(
    (acc: { id: number; name: string }[], item) => {
      // Check if the brand is already in the accumulator
      const found = acc.some((el) => el.name === item.pattern.brand.name);
      if (!found) {
        // If not found, add it to the accumulator
        acc.push({ id: item.pattern.brand.id, name: item.pattern.brand.name });
      }
      return acc;
    },
    []
  );
  const patterns = data?.data.tyreProducts.reduce(
    (acc: { id: number; name: string }[], item) => {
      // Check if the brand is already in the accumulator
      const found = acc.some((el) => el.name === item.pattern.name);
      if (!found) {
        // If not found, add it to the accumulator
        acc.push({ id: item.pattern.id, name: item.pattern.name });
      }
      return acc;
    },
    []
  );

  return (
    <div className="bg-secondary h-full py-10 px-8">
      <div className="flex space-x-8 ">
        <div className="hidden lg:flex">
          <div className="font-medium text-2xl flex">
            <div>
              <div className="pb-4">Filters</div>
              <div className="w-80 space-y-4 font-normal text-lg p-4 bg-background rounded-lg ">
                <div>
                  <h4 className="font-semibold">Brands</h4>
                  <ul>
                    <li className="flex gap-2 items-center">
                      <Checkbox checked />
                      <Label className="text-base"> All</Label>
                    </li>
                    {brands?.map((item) => (
                      <li className="flex gap-2 items-center" key={item.id}>
                        <Checkbox />
                        <Label className="text-base">{item.name}</Label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Patterns</h4>
                  <ul>
                    <li className="flex gap-2 items-center">
                      <Checkbox checked />
                      <Label className="text-base"> All</Label>
                    </li>
                    {patterns?.map((item) => (
                      <li className="flex gap-2 items-center" key={item.id}>
                        <Checkbox />
                        <Label className="text-base">{item.name}</Label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
