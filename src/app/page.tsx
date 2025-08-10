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
import { WhoWeAre } from "@/components/CompanyInfo";

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
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard`}
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
          { title, description, subHeadingItems, learnMoreLinkUrl, imageUrl },
          i
        ) => (
          <ServicesSection
            key={title}
            title={title}
            description={description}
            subHeadingItems={subHeadingItems}
            learnMoreLinkUrl={learnMoreLinkUrl}
            imageUrl={imageUrl}
            flipAlignment={i % 2 !== 0}
          />
        )
      )}
      {/* SERVICES SECTION END */}

      <section className=" md:p-20 p-6 w-full">
        <WhoWeAre />
      </section>

      {/* Testimonial Section */}
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-bold text-lg mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              SEE WHAT OUR STUDENTS HAVE TO SAY
            </h2>
            <div className="w-32 h-2 bg-blue-600 mx-auto"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <Carousel className="w-full mx-auto">
              <CarouselContent>
                {testimonialData.map((testimonial, i) => {
                  return (
                    <CarouselItem
                      key={testimonial.id}
                      className="lg:basis-1/3 max-md:basis-full"
                    >
                      <TestimonialCard
                        color={i % 2 === 0 ? "blue" : "red"}
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
        </div>
      </section>
      {/*Testimonial End*/}
    </>
  );
}
