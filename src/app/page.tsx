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
import { BookOpen, Award, HeadphonesIcon } from "lucide-react";
import { OurAim, WhoWeAre } from "@/components/CompanyInfo";

export default function Home() {
  return (
    <>
      <Hero />

      {/* HIGHLIGHT SECTION START */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find out what makes{" "}
              <span className="text-blue-600">Pioneer Sprach Academy</span> one
              of the best!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="text-gray-500 text-sm font-bold">
              SEE WHY WE ARE THE BEST →
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Expert Teaching
              </h3>
              <p className="text-gray-600">
                Native German speakers with certified teaching experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Proven Results
              </h3>
              <p className="text-gray-600">
                95% visa approval rate and excellent exam pass rates
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock assistance throughout your journey
              </p>
            </div>
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
            flipAlignment={i % 2 === 0}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
          />
        )
      )}
      {/* SERVICES SECTION END */}

      <section className="container md:p-20 p-6 flex max-md:flex-col items-center gap-16">
        <WhoWeAre />
        <OurAim />
      </section>

      {/* Testimonial Section */}
      <section className="px-5 pt-16 pb-12 md:px-32 bg-gray-100">
        <div>
          <div className="space-y-4 mb-12">
            <p className="text-primary font-accent text-xl font-semibold text-center">
              TESTIMONIALS
            </p>
            <h3 className=" text-center">SEE WHAT OUR STUDENTS HAVE TO SAY</h3>
            <div className="w-32 h-2 bg-primary mx-auto"></div>
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
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="max-md:-left-8" />
            <CarouselNext className="max-md:-right-8" />
          </Carousel>
        </div>
      </section>
      {/*Testimonial End*/}
    </>
  );
}
