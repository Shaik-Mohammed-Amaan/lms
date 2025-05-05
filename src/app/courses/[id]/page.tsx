import coursesData from "@/mockdata/card_data.json";
import { notFound } from "next/navigation";
import CourseContentPage from "@/components/courseContentPage";
import { Course } from "@/types/Course";


export default function CoursePage({ params }: { params: { id: string } }) {
  
  const course: Course | undefined = coursesData.courses.find(
    (c: Course) => c.id.toString() === params.id
  );
  if (!course) return notFound();

  return (
    
        <CourseContentPage course={course} />
      
  );
}
