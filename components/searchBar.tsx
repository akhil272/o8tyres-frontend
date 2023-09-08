"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./ui/input";

interface SearchBarProps {
  data: {
    label: string;
    value: string;
  }[];
  placeholder: string;
  setSearchTerm: any;
}

export function SearchBar({
  data,
  placeholder,
  setSearchTerm,
}: SearchBarProps) {
  const [open, setOpen] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [suggestions, setSuggestions] = useState();

  const onChange = (event: any) => {
    setUserQuery(event.target.value);
  };

  const onSearch = (searchTerm: string) => {
    setUserQuery(searchTerm);
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <Input
        className="w-[300px] border "
        type="text"
        value={userQuery}
        onChange={onChange}
        placeholder={`Enter ${placeholder}...`}
      />
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
              className="w-[300px] py-2 px-2 bg-primary-foreground hover:bg-secondary"
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
