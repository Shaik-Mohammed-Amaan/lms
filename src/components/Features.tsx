import React from "react";
import Image from "next/image";
const Features = () => {
  return (
    <section className="bg-[#92AAFF] bg-opacity-25 px-4 py-10">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Why You Choose Us?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24">
          <div className="bg-white border border-[#F94949] rounded-3xl flex flex-col gap-4 justify-center items-center p-10">
            <Image
              src="/features/feature1.svg"
              alt="feature1"
              width={40}
              height={40}
            />
            <h3 className="text-xl font-bold">Mission</h3>
            <p className="text-center">
              To provide in demand courses on Artificial Intelligence, 
              Machine Learning and Data Science
            </p>
          </div>
          <div className="bg-white border border-[#6E6BF0] rounded-3xl flex flex-col gap-4 justify-center items-center p-10">
            <Image
              src="/features/feature2.svg"
              alt="feature1"
              width={40}
              height={40}
            />
            <h3 className="text-xl font-bold">Certification</h3>
            <p className="text-center">
              Receive recognized certificates upon course completion to showcase
              your skills and enhance you career opportunities
            </p>
          </div>
          <div className="bg-white border border-[#0BCEB2] rounded-3xl flex flex-col gap-4 justify-center items-center p-10">
            <Image
              src="/features/feature3.svg"
              alt="feature1"
              width={40}
              height={40}
            />
            <h3 className="text-xl font-bold">Assessment</h3>
            <p className="text-center">
              Measure learning effectiveness and drive continuous improvement
              with our integrated assessment system
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
