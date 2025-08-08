"use client";
import React from "react";
import { Button } from "./ui/button";
import { subHeroItems } from "@/lib/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SubHero = ({ subHeroId }: { subHeroId: string }) => {
  const router = useRouter();
  const subHeroContent = subHeroItems.find((item) => item.id === subHeroId);
  return (
    <section className="bg-dark-blue py-16 px-5 md:px-32 flex md:relative">
      <div className="space-y-8">
        <p className="text-base text-white">{subHeroContent?.breadCrumb}</p>
        <h1 className="text-white md:w-[35ch]">
          {subHeroContent?.headingTextLeft}{" "}
          <span className="text-accent-yellow">
            {subHeroContent?.headingTextYellow}
          </span>
          {subHeroContent?.headingTextRight}
        </h1>
        <Button
          type="button"
          variant="outline"
          className="btn-primary-alt font-secondary font-semibold"
          onClick={() => {
            router.push("/");
          }}
        >
          Apply Now
        </Button>
      </div>
      <Image
        src="/flag.png"
        alt=""
        className="absolute bottom-0 right-[10%] max-md:hidden"
        width={340}
        height={0}
      />
    </section>
  );
};

export default SubHero;
