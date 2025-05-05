import { Course } from "@/types/Course";
import Image from "next/image";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg flex flex-col gap-4 bg-white hover:shadow-lg transition-shadow h-full">
      <div className="relative w-full h-36 rounded overflow-hidden">
        <Image
          src={`/${course.image}`}
          alt={course.title}
          width={400}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-2 flex-1 overflow-hidden">
        <h3 className="text-lg font-bold truncate">{course.title}</h3>
        <p className="text-sm line-clamp-3">{course.description}</p>
        <div className="flex gap-2 mt-auto">
          <span className="border border-[#5652E9] rounded-md px-2 text-xs font-medium">{course.level}</span>
          <span className="border border-[#5652E9] rounded-md px-2 text-xs font-medium">{course.chapters}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
         
          <p className="text-xs">{course.ratings} ⭐️</p>
        </div>
      </div>
    </div>
  );
}
