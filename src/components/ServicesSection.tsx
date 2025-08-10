"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

type ChildDescItem = {
  title: string;
  description: string;
  bulletPoints: string[];
};

type ServicesSectionParams = {
  title: string;
  description: string;
  subHeadingItems: ChildDescItem[];
  learnMoreLinkUrl: string;
  imageUrl: string;
  flipAlignment: boolean;
};

function ServicesSection({
  title,
  description,
  subHeadingItems,
  learnMoreLinkUrl,
  imageUrl,
  flipAlignment,
}: ServicesSectionParams) {
  return (
    <section
      className={`py-8 px-4 sm:px-6 lg:px-20 ${
        flipAlignment ? "" : "bg-gray-100"
      }`}
    >
      <div
        className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          flipAlignment ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Content Column */}
        <div className={flipAlignment ? "lg:col-start-2" : ""}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            {title}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {subHeadingItems.map((subItem) => (
              <div
                key={subItem.title}
                className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {subItem.title}
                </h3>
                <p className="text-gray-600 mb-4">{subItem.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {subItem.bulletPoints.map((point) => (
                    <li key={point} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className={`flex gap-4 ${
              flipAlignment ? "justify-end" : "justify-start"
            }`}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                window.location.href = learnMoreLinkUrl;
              }}
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                window.location.href = "/contact-us";
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Image Column */}
        <div
          className={`relative min-h-[300px] lg:h-full bg-white rounded-lg ${
            flipAlignment ? "lg:col-start-1" : ""
          }`}
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt="Services image"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
