"use client";
import { useRouter, useSearchParams } from "next/navigation";

const LEVELS = ["Beginner", "Intermediate", "Advanced"];

export default function Sidebar({ selectedLevels }: { selectedLevels: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (level: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const levels = params.getAll("level");
    if (levels.includes(level)) {
      // Remove
      params.delete("level");
      levels.filter((l) => l !== level).forEach((l) => params.append("level", l));
    } else {
      // Add
      params.append("level", level);
    }
    params.delete("page"); // Reset to first page on filter change
    router.push(`/courses?${params.toString()}`);
  };

  return (
    <aside className="w-64 p-6 bg-white border-r hidden md:block">
      <h2 className="text-xl font-semibold mb-4">Filter by Level</h2>
      <form className="space-y-3">
        {LEVELS.map((level) => (
          <div key={level} className="flex items-center">
            <input
              type="checkbox"
              id={level}
              checked={selectedLevels.includes(level)}
              onChange={() => handleChange(level)}
              className="mr-2"
            />
            <label htmlFor={level}>{level}</label>
          </div>
        ))}
      </form>
    </aside>
  );
}
