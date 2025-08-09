import Image from "next/image";
import { Button } from "./ui/button";
import { CheckCircle, Users } from "lucide-react";
import image from "next/image";

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
  imageWidth: number;
  imageHeight: number;
};
function ServicesSection({
  title,
  description,
  subHeadingItems,
  learnMoreLinkUrl,
  imageUrl,
  flipAlignment,
  imageWidth,
  imageHeight,
}: ServicesSectionParams) {
  return (
    <section
      className={`relative md:p-20 p-6 flex gap-16 justify-between items-center ${
        flipAlignment ? "bg-gray-100" : "flex-row-reverse"
      }`}
    >
      <div className="container space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
        <p className="text-gray-600 max-w-2xl max-md:hidden">{description}</p>
        <div className="flex gap-8 max-md:flex-col">
          {subHeadingItems.map((subItem) => (
            <div
              key={subItem.title}
              className={`bg-white p-6 rounded-lg shadow-lg `}
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
          className={`flex gap-4 w-full ${flipAlignment ? "" : "justify-end"}`}
        >
          <Button>Learn More</Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>

      <div className="relative h-92  container flex justify-center max-md:hidden rounded-lg overflow-hidden shadow-xl bg-transparent">
        <Image
          src={imageUrl}
          alt="Services image"
          fill
          className="object-contain rounded-xl mix-blend-multiply"
        />
      </div>
    </section>
  );
}

export default ServicesSection;
