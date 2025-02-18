import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import cardData from "@/mockdata/card_data.json";
import Image from "next/image";

const TopCourses = () => {
  return (
    <section className="px-4 py-10">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Discover Popular Courses</h2>
        </div>
       
        <div className="mx-8">
          <Carousel>
            <CarouselContent>
                {cardData.card.map((data)=>(
                        <CarouselItem key={data.id} className='md:basis-1/4 w-auto'>
                            <div className="p-4 border border-black rounded-md flex flex-col gap-4">
                                
                                    <Image src={`/${data.image}`} alt="course" width={300} height={300}/>
                                
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-bold">{data.title}</h3>
                                    <p className="text-sm">{data.description}</p>
                                    <div className="flex gap-2">
                                      <span className="border border-[#5652E9] rounded-md px-2 text-sm font-medium">{data.level}</span>
                                      <span className="border border-[#5652E9] rounded-md px-2 text-sm font-medium">{data.chapters}</span>
                                    </div>
                                    <div className="flex justify-between">
                                    <p className="text-[#5652E9] text-lg font-extrabold font-sans">{data.price}</p>

                                    <p>{data.ratings} ⭐️</p>
                                    </div>
                                    
                                </div>
                            </div>
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
