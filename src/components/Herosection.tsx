import Image from "next/image";
import { Button } from "./ui/button";
const Herosection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D5CBFB] px-4 py-8 md:py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center">
        <div className="flex flex-col justify-start gap-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Unlock Your AI Potential. Transform Your Future.
          </h1>
          <p>
            Learn in-demand AI & ML skills with expert-led courses. From
            beginner to advanced, we&apos;ve got you covered.
          </p>
          <span>
            <Button
              className="text-lg"
              variant="default"
              size="lg"
            >
              Let&apos;s Learn
            </Button>
          </span>
        </div>
        <div>
          <Image
            src="/hero_image.svg"
            alt="herosection"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
