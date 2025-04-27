'use client';
import React from 'react';



interface CardProps {
  title: string;
  text: string;
}


const Card = ({ title, text }: CardProps) => {
  return (
    <div className="relative bg-gradient-to-r from-[#6E6BF0] to-[#6E6BF0] p-1 rounded-3xl shadow-lg max-w-3xl">
      <div className="bg-white p-6 rounded-2xl text-center shadow-md border border-gray-400 relative">
        {/* Logo at the top-left corner */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <div className="p-4 rounded-xl shadow-inner">
          <p className=" text-gray-700 p-2 rounded-md">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Body */}
      <main className="flex flex-col items-center justify-center flex-grow p-10 space-y-8">
        <Card
          title="About Our Company"
          text="At Modern Monk Labs, we believe that true education goes beyond textbooks and classrooms. Empowering minds, shaping futures is more than just a phrase—it's our commitment to providing learners with the knowledge, skills, and confidence they need to thrive in a rapidly evolving world. Through innovative learning solutions, personalized guidance, and a passion for growth, we empower individuals to unlock their full potential and create meaningful futures. Whether you're upskilling for a career, exploring new passions, or striving for personal growth, we're here to support your journey every step of the way."
        />
        <Card
          title="Our Mission"
          text="At Modern Monk Labs, we believe that true education goes beyond textbooks and classrooms. Empowering minds, shaping futures is more than just a phrase—it's our commitment to providing learners with the knowledge, skills, and confidence they need to thrive in a rapidly evolving world."
          
        />
        <Card
          title="Meet Our Team"
          text="At Modern Monk Labs, we empower individuals to unlock their full potential. Our team of experts is passionate about innovation, dedicated to personal growth, and committed to delivering learning solutions that create meaningful futures."
         
        />
       
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4 mt-10">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
