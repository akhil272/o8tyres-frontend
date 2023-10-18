"use client";

import { ChangeEvent, useState } from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface SearchBarProps {
  data: {
    label: string;
    value: string;
  }[];
  placeholder: string;
  enableContactOffline?: boolean;
  setSearchTerm: (searchTerm: string) => void;
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

  const onSearch = (searchTerm: string) => {
    setUserQuery(searchTerm);
    setSearchTerm(searchTerm);
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
    <div>
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
      <div>
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
          .slice(0, 5)
          .map((item) => (
            <div
              className="py-2 px-2 bg-secondary hover:bg-white"
              onClick={() => onSearch(item.label)}
              key={item.value}
            >
              {item.label}
            </div>
          ))}
      </div>
    </div>
  );
}
