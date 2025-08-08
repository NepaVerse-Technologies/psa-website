import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

type ChildDescItem = {
  title: string;
  description: string;
};

type ServicesSectionParams = {
  title: string;
  description: string;
  subHeadingItems: ChildDescItem[];
  learnMoreLinkUrl: string;
  imageUrl: string;
  passedClassNames: string;
  imageWidth: number;
  imageHeight: number;
};
function ServicesSection({
  title,
  description,
  subHeadingItems,
  learnMoreLinkUrl,
  imageUrl,
  passedClassNames,
  imageWidth,
  imageHeight,
}: ServicesSectionParams) {
  return (
    <section className={clsx("flex pt-7", passedClassNames)}>
      <div className="px-5 py-6 md:px-32 md:pr-28 md:py-6 md:w-[80%]">
        <div className="text-highlight-blue">
          <h1>{title}</h1>
        </div>
        <div className="mt-3">
          <p>{description}</p>
        </div>
        <div></div>
        <div className="py-3 md:py-3 flex max-md:flex-col mt-4">
          {subHeadingItems.map(({ title, description }, i) => (
            <div key={title} className={i == 1 ? "max-md:mt-8 md:px-8" : ""}>
              <div className="text-highlight-blue mb-2">
                <h2>{title}</h2>
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <Button
            className="text-base font-bold mt-[5%] py-1.5"
            variant="outline"
          >
            Learn more
          </Button>
          <Link href={learnMoreLinkUrl}>
            <Button className="text-base font-bold mt-[5%] px-6" variant="link">
              Contact
              <ChevronRight className="inline-block mt-1 -ml-1.5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-auto max-lg:hidden">
        <Image
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          alt="image of service"
        />
      </div>
    </section>
  );
}

export default ServicesSection;
