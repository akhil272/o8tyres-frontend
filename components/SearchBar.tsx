"use client";

import { ChangeEvent, useState } from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface SearchBarProps {
  data: {
    label: string;
    value: number;
  }[];
  placeholder: string;
  enableContactOffline?: boolean;
  setSearchTerm: (searchTerm: { label: string; value: number }) => void;
}

export function SearchBar({
  data,
  placeholder,
  enableContactOffline = false,
  setSearchTerm,
}: SearchBarProps) {
  const [showButtons, setShowButtons] = useState(false);
  const [userQuery, setUserQuery] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserQuery(event.target.value);
    const termExists = data.some((item) =>
      item.label.toLowerCase().includes(userQuery.toLowerCase())
    );
    setShowButtons(!termExists);
  };

  const onSearch = (selectedItem: { label: string; value: number }) => {
    setUserQuery(selectedItem.label);
    setSearchTerm(selectedItem);
  };

  const handleWhatsAppClick = () => {
    const message = "Hi team, I am looking for tyre size ";
    const searchQuery = encodeURIComponent(message + userQuery);
    window.open(`https://wa.me/+919745222566?text=${searchQuery}`, "_blank");
  };
  const handleCallClick = () => {
    window.location.href = "tel:+919745222566";
  };

  return (
    <div className="relative">
      <Input
        className="bg-secondary border-none "
        type="text"
        value={userQuery}
        onChange={onChange}
        placeholder={`Enter ${placeholder}...`}
      />
      {enableContactOffline && showButtons && (
        <div className="flex-col">
          <p className="text-red-500 px-4 pt-2">
            Not available online but do kindly reach us out, we can get you if
            its in market.{" "}
          </p>
          <div className="flex">
            <Button variant={"link"} onClick={handleCallClick}>
              Call
            </Button>
            <Button variant={"link"} onClick={handleWhatsAppClick}>
              WhatsApp
            </Button>
          </div>
        </div>
      )}
      <div className="min-w-full z-10 absolute overflow-auto max-h-44">
        {data
          .filter((item) => {
            const searchTerm = userQuery.toLowerCase();
            const dataName = item.label.toLowerCase();
            return (
              searchTerm &&
              dataName.includes(searchTerm) &&
              dataName !== searchTerm
            );
          })
          // .slice(0, 5) show only 5 items
          .map((item) => (
            <div
              className="py-2 px-2  bg-secondary hover:bg-white hover:bg-primary hover:text-white"
              onClick={() => onSearch(item)}
              key={item.value}
            >
              {item.label}
            </div>
          ))}
      </div>
    </div>
  );
}
