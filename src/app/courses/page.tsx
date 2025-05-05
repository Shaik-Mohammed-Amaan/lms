"use client";
import { useState, useMemo } from "react";
import coursesData from "@/mockdata/card_data.json";
import CourseCard from "@/components/courseCard";
import Link from "next/link";

const LEVELS = ["Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const perPage = 6;

  // Filtered and searched courses
  const filteredCourses = useMemo(() => {
    let data = coursesData.courses;

    if (selectedLevels.length > 0) {
      data = data.filter((course) => selectedLevels.includes(course.level));
    }
    if (search.trim()) {
      data = data.filter(
        (course) =>
          course.title.toLowerCase().includes(search.toLowerCase()) ||
          course.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    return data;
  }, [search, selectedLevels]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / perPage);
  const paginatedCourses = filteredCourses.slice(
    (page - 1) * perPage,
    page * perPage
  );

  // Handlers
  const handleLevelChange = (level: string) => {
    setPage(1); // Reset to first page on filter change
    setSelectedLevels((prev) =>
      prev.includes(level)
        ? prev.filter((l) => l !== level)
        : [...prev, level]
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1); // Reset to first page on search
    setSearch(e.target.value);
  };

  return (
    <div className="flex bg-[#f6f4ff] min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 p-6 bg-white border-r border-gray-200 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">Filter by Level</h2>
        <form className="space-y-3">
          {LEVELS.map((level) => (
            <div key={level} className="flex items-center">
              <input
                type="checkbox"
                id={level}
                checked={selectedLevels.includes(level)}
                onChange={() => handleLevelChange(level)}
                className="mr-2"
              />
              <label htmlFor={level}>{level}</label>
            </div>
          ))}
        </form>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">All Courses</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={handleSearch}
          className="w-full max-w-md mb-8 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedCourses.length > 0 ? (
            paginatedCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <CourseCard course={course} />
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              No courses found.
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages || 1}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || totalPages === 0}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
