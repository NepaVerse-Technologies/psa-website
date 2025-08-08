import React from "react";
import Image from "next/image";
import heroImage from "../../public/hero.png";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-dark-blue flex">
      <div className="px-8 py-10 md:px-16 md:py-20 text-white">
        <div className="grid gap-3">
          <h1>Unlock Your Potential,</h1>
          <h1>Study Anywhere:</h1>
          <h1 className="text-accent-yellow">Your Journey, Our Expertise</h1>
        </div>
        <div className="mt-8">
          <p className="text-accent-green">Inspire, Aspire, Achieve -</p>
          <p>Your Educational Passport to a Global Future</p>
        </div>
        <Button
          className="text-base font-semibold mt-[20%] cursor-pointer"
          variant="secondary"
        >
          Apply Now
        </Button>
      </div>
      <div className="absolute right-0 max-lg:hidden">
        <Image src={heroImage} alt="Hero image" />
      </div>
    </section>
  );
};

export default Hero;
