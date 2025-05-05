import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import cardData from "@/mockdata/card_data.json";
import CourseCard from "./courseCard";
import { Course } from "@/types/Course";
import Link from "next/link";

const getTopCourses = (courses: Course[], count: number = 8) => {
  // Example: sort by ratings descending, then take top N
  return [...courses]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, count);
};

const TopCourses = () => {
  const topCourses = getTopCourses(cardData.courses, 8);

  return (
    <section className="px-4 py-10">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Discover Popular Courses</h2>
        </div>
        <div className="mx-8">
          <Carousel>
            <CarouselContent>
              {topCourses.map((course) => (
                <CarouselItem key={course.id} className="md:basis-1/4 w-auto">
                  <Link key={course.id} href={`/courses/${course.id}`}>
                    <CourseCard course={course} />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
