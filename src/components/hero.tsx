"use client";
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="hero-image-background flex pt-16 max-md:pt-24  ">
      <div className="px-8 py-10 md:px-16 md:py-20  space-y-8  bg-gradient-to-r from-black/60 to-white/5 w-full">
        <div className="space-y-3 text-white">
          <div className="flex gap-1">
            <span className="border-4 border-accent-yellow rounded-full"></span>
            <h2 className="text-2xl font-extrabold ">
              Pinnacle Sprach Akademie
            </h2>
          </div>
          <h1 className="font-bold text-[62px] text-white">
            Unlock Your Potential,
          </h1>
        </div>
        <div>
          <p className="text-accent-yellow">Inspire, Aspire, Achieve -</p>
          <p className="text-white">
            Your Educational Passport to a Global Future
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            className=" font-semibold cursor-pointer"
            variant="default"
            onClick={() => {
              router.push("/apply");
            }}
          >
            Apply Now
          </Button>
          <Button className="font-semibold cursor-pointer border border-white bg-transparent text-white hover:bg-white hover:text-primary">
            Lear More {<ChevronRight />}
          </Button>
        </div>
        <div className="flex gap-16">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-yellow mb-1">
              95%
            </div>
            <div className="text-sm text-white">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-yellow mb-1">
              2000+
            </div>
            <div className="text-sm text-white">Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-yellow mb-1">5+</div>
            <div className="text-sm text-white">Years</div>
          </div>
        </div>
      </div>

      {/* <div className="absolute right-0 max-lg:hidden">
        <Image src={heroImage} alt="Hero image" />
      </div> */}
    </section>
  );
};

export default Hero;
