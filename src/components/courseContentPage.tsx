import { Course } from "@/types/Course";
import Image from "next/image";
import Accordion from "./accordion";

export default function CourseContentPage({ course }: { course: Course }) {
  return (
    <div className="bg-[#f6f4ff] min-h-screen pb-16">
      {/* Header */}
      <div className="bg-[#d6cafd] py-10 px-4 md:px-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <nav className="text-xs text-gray-500 mb-2">
              All Courses &gt; {course.title}
            </nav>
            <h1 className="text-4xl font-bold mb-3">{course.title}</h1>
            <p className="mb-4 text-gray-700">{course.description}</p>
            <div className="flex gap-2 mb-4">
              <span className="bg-white border border-[#5652E9] rounded-md px-2 text-sm font-medium">{course.level}</span>
              <span className="bg-white border border-[#5652E9] rounded-md px-2 text-sm font-medium">{course.chapters}</span>
            </div>
            <button className="bg-[#5652E9] text-white px-6 py-2 rounded font-semibold shadow hover:bg-[#3e38b0] transition">
              Enroll Now
            </button>
          </div>
          <div>
            <Image
              src={`/${course.image}`}
              alt={course.title}
              width={260}
              height={200}
              className="rounded-lg border"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-8 flex flex-col md:flex-row gap-8 px-4 md:px-0">
        <div className="flex-1 flex flex-col gap-8">
          {/* What you'll learn */}
          <section className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">What you&apos;ll learn</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {course.whatYouLearn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#5652E9] mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Course Outline */}
          <section className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">
              Course Outline - {course.detailedChapters.length} Chapters
            </h2>
            <Accordion
              items={course.detailedChapters.map((ch) => ({
                title: ch.title,
                content: ch.content,
              }))}
            />
          </section>

          {/* Skills */}
          <section className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">Skills you will gain</h2>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#f6f4ff] border border-[#5652E9] rounded px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">
              Frequently Asked Questions
            </h2>
            <Accordion
              items={course.faqs.map((faq) => ({
                title: faq.question,
                content: faq.answer,
              }))}
            />
          </section>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-72 flex flex-col gap-8">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <div className="mb-2">{course.level}</div>
            <div className="mb-2">Self-paced</div>
            <div className="mb-2">{course.chapters}</div>
            <div className="mb-2">5 lessons</div>
            <div className="mb-2">{course.price}</div>
            <button className="bg-[#5652E9] text-white px-4 py-2 rounded w-full font-semibold mb-2">
              Add to Cart
            </button>
            <button className="border border-[#5652E9] text-[#5652E9] px-4 py-2 rounded w-full font-semibold">
              ♥
            </button>
          </div>
          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <Image src="/features/feature2.svg" alt="Certificate" width={80} height={80} />
            <span className="mt-2 text-sm font-semibold">Earn a Certificate</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
