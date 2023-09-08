"use client";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  return <div>You searched for {search}</div>;
};

export default SearchPage;
