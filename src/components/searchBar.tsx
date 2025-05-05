"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBar({ searchQuery }: { searchQuery: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchQuery);

  useEffect(() => {
    setValue(searchQuery);
  }, [searchQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value) params.set("query", e.target.value);
    else params.delete("query");
    params.delete("page"); // Reset to first page on search
    router.push(`/courses?${params.toString()}`);
  };

  return (
    <input
      type="text"
      placeholder="Search courses..."
      value={value}
      onChange={handleChange}
      className="w-full max-w-md mb-8 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
