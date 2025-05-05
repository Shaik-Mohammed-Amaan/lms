


'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Course } from '@/types/Course';
import coursesData from "@/mockdata/card_data.json";




export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const course: Course | undefined = coursesData.courses.find(
    (c: Course) => c.id.toString() === id
);

  const [isEnrolled, setIsEnrolled] = useState<boolean | null>(null);
  const [selectedLesson, setSelectedLesson] = useState(course?.detailedChapters[0]);
    const dummyLessons = course?.detailedChapters || [];
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const enrolled = localStorage.getItem(`enrolled_${id}`) === 'true';
    if (!enrolled) {
      router.push(`/enroll/${id}`);
    } else {
      setIsEnrolled(true);
    }
  }, [id, router]);

  if (isEnrolled === null) return null;

  const filteredLessons = dummyLessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/4 bg-white p-4 border-r">
        <h2 className="text-xl font-semibold mb-4">Lessons</h2>
        <input
          type="text"
          placeholder="Search lessons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="space-y-2">
          {filteredLessons.map((lesson) => (
            <button
              key={lesson.title}
              onClick={() => setSelectedLesson(lesson)}
              className={`w-full text-left p-2 rounded ${
                selectedLesson?.title === lesson.title
                  ? 'bg-purple-200 font-semibold'
                  : 'bg-gray-100'
              }`}
            >
              {lesson.title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Course: {course?.title}</h1>
        <div className="aspect-video bg-black mb-4">
          <video controls src={selectedLesson?.content} className="w-full h-full" />
        </div>
        <h2 className="text-xl font-semibold">{selectedLesson?.title}</h2>
      </div>
    </div>
  );
}
