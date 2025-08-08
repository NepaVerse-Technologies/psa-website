import Image from "next/image";
import bookOpen from "../../public/book-open.png";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/hero";
import TestimonialCard from "@/components/testimonialCard";
import { testimonialData } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServicesSection from "@/components/ServicesSection";
import { homepageServicesItems } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />

      {/* HIGHLIGHT SECTION START */}
      <section className="px-5 pt-16 pb-12 md:px-32">
        <h1 className="md:w-[70%]">
          Find out what makes{" "}
          <span className="text-highlight-blue">Pioneer Sprach Academy</span>{" "}
          one of the best!
        </h1>
        <div className="py-4 md:w-[80%]">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            fugit quisquam voluptate consectetur, aliquam ipsam nam rem
            doloremque facere? Ipsam, aliquam rerum. Deleniti rerum ratione eos
            quos sint ullam quibusdam.
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-gray-500 font-accent font-semibold text-base py-2">
            SEE WHY WE ARE THE BEST
          </div>
          <ArrowRight className="text-gray-500 ml-1 w-[20px] mb-[3px]" />
        </div>

        <div className="flex justify-between text-center pt-5 md:px-12">
          <div>
            <Image src={bookOpen} className="w-[70%] m-auto" alt="Book Open" />
            <p className="font-bold text-xl font-primary mt-3">Lorem Ipsum</p>
          </div>
          <div>
            <Image src={bookOpen} className="w-[70%] m-auto" alt="Book Open" />
            <p className="font-bold text-xl font-primary mt-3">Lorem Ipsum</p>
          </div>
          <div>
            <Image src={bookOpen} className="w-[70%] m-auto" alt="Book Open" />
            <p className="font-bold text-xl font-primary mt-3">Lorem Ipsum</p>
          </div>
        </div>
      </section>
      {/* HIGHLIGHT SECTION END */}

      {/* SERVICES SECTION START */}
      {homepageServicesItems.map(
        (
          {
            title,
            description,
            subHeadingItems,
            learnMoreLinkUrl,
            imageUrl,
            imageHeight,
            imageWidth,
          },
          i
        ) => (
          <ServicesSection
            key={title}
            title={title}
            description={description}
            subHeadingItems={subHeadingItems}
            learnMoreLinkUrl={learnMoreLinkUrl}
            imageUrl={imageUrl}
            passedClassNames={
              i % 2 === 0 ? "bg-normal-grey" : "flex-row-reverse"
            }
            imageHeight={imageHeight}
            imageWidth={imageWidth}
          />
        )
      )}
      {/* SERVICES SECTION END */}

      {/* Testimonial Section */}
      <section className="px-5 pt-16 pb-12 md:px-32">
        <div>
          <div className="space-y-6 mb-12">
            <p className="text-highlight-blue font-accent text-2xl font-semibold text-center">
              TESTIMONIALS
            </p>
            <h2 className=" text-center">SEE WHAT OUR STUDENTS HAVE TO SAY</h2>
            <div className="w-32 h-3 bg-highlight-blue mx-auto"></div>
          </div>
          <Carousel className="w-[90%] mx-auto">
            <CarouselContent className="">
              {testimonialData.map((testimonial) => {
                const color = testimonial.id % 2 === 0 ? "#9D1B28" : "#2F41A6";
                return (
                  <CarouselItem
                    key={testimonial.id}
                    className="lg:basis-1/3 max-md:basis-full"
                  >
                    <TestimonialCard
                      color={color}
                      name={testimonial.name}
                      testimonialText={testimonial.testimonialText}
                      position={testimonial.position}
                      photoPath={testimonial.photoPath}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      {/*Testimonial End*/}
    </>
  );
}
