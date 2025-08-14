import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Heart,
  Sparkles,
} from "lucide-react";
import { homepageServicesItems } from "@/lib/constants";

type ChildDescItem = {
  title: string;
  description: string;
  bulletPoints: string[];
};

type ServicesSectionParams = {
  preTitleText: string;
  title: string;
  description: string;
  subHeadingItems: ChildDescItem[];
  imageUrl: string;
  flipAlignment: boolean;
  topOfImageText: string;
};

function ServicesSectionView({
  preTitleText,
  title,
  description,
  subHeadingItems,
  imageUrl,
  flipAlignment,
  topOfImageText,
}: ServicesSectionParams) {
  const getServiceIcon = (title: string) => {
    if (title.toLowerCase().includes("language"))
      return <Sparkles className="h-6 w-6" />;
    if (title.toLowerCase().includes("au pair"))
      return <Heart className="h-6 w-6" />;
    if (title.toLowerCase().includes("study"))
      return <Award className="h-6 w-6" />;
    return <Star className="h-6 w-6" />;
  };

  const getSubItemIcon = (title: string) => {
    if (title.toLowerCase().includes("beginner"))
      return <Users className="h-5 w-5" />;
    if (title.toLowerCase().includes("intermediate"))
      return <Star className="h-5 w-5" />;
    if (title.toLowerCase().includes("supportive"))
      return <Heart className="h-5 w-5" />;
    if (title.toLowerCase().includes("efficient"))
      return <Clock className="h-5 w-5" />;
    if (title.toLowerCase().includes("assistance"))
      return <Users className="h-5 w-5" />;
    if (title.toLowerCase().includes("documentation"))
      return <Award className="h-5 w-5" />;
    return <CheckCircle className="h-5 w-5" />;
  };

  return (
    <section
      className={`px-20 py-10 max-md:px-6   ${
        flipAlignment
          ? "bg-gradient-to-br from-orange-50 to-yellow-50"
          : "bg-gradient-to-br from-blue-50 to-indigo-50"
      }`}
    >
      <div
        className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          flipAlignment ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Content Column */}
        <div className={flipAlignment ? "lg:col-start-2" : ""}>
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`p-3 rounded-full ${
                flipAlignment
                  ? "bg-orange-100 text-orange-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {getServiceIcon(title)}
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                flipAlignment
                  ? "bg-orange-200 text-orange-800"
                  : "bg-blue-200 text-blue-800"
              }`}
            >
              {preTitleText}
            </div>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              flipAlignment ? "text-orange-600" : "text-blue-600"
            }`}
          >
            {title}
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-md">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {subHeadingItems.map((subItem) => (
              <div
                key={subItem.title}
                className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${
                  flipAlignment
                    ? "hover:border-orange-200"
                    : "hover:border-blue-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      flipAlignment
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {getSubItemIcon(subItem.title)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {subItem.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {subItem.description}
                </p>

                <ul className="space-y-3 text-sm">
                  {subItem.bulletPoints.map((point) => (
                    <li key={point} className="flex items-center group">
                      <div
                        className={`p-1 rounded-full mr-3 ${
                          flipAlignment
                            ? "bg-orange-100 group-hover:bg-orange-200"
                            : "bg-blue-100 group-hover:bg-blue-200"
                        } transition-colors`}
                      >
                        <CheckCircle
                          className={`h-3 w-3 ${
                            flipAlignment ? "text-orange-600" : "text-blue-600"
                          }`}
                        />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className={`${
                flipAlignment
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              🚀 Start Your Journey
            </Button>
            <Button
              variant="outline"
              className={`border-2 ${
                flipAlignment
                  ? "border-orange-300 text-orange-600 hover:bg-orange-50"
                  : "border-blue-300 text-blue-600 hover:bg-blue-50"
              } font-semibold px-8 py-3 rounded-full transition-all duration-300`}
            >
              💬 Chat With Us
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>2000+ Happy Students</span>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div
          className={`relative h-[80%] ${
            flipAlignment ? "lg:col-start-1" : ""
          }`}
        >
          <div className="relative h-full">
            <div
              className={`absolute -inset-4 ${
                flipAlignment
                  ? "bg-gradient-to-r from-orange-200 to-yellow-200"
                  : "bg-gradient-to-r from-blue-200 to-indigo-200"
              } rounded-3xl opacity-20 blur-xl`}
            ></div>
            <div className="relative h-full">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt="Services image"
                fill
                className=" object-cover rounded-2xl shadow-2xl"
              />
              <div
                className={`absolute -top-4 -right-4 ${
                  flipAlignment ? "bg-orange-500" : "bg-blue-600"
                } text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm`}
              >
                {topOfImageText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ServicesSection = () => {
  return (
    <>
      {homepageServicesItems.map(
        (
          {
            title,
            description,
            subHeadingItems,
            imageUrl,
            preTitleText,
            topOfImageText,
          },
          i
        ) => (
          <ServicesSectionView
            key={title}
            preTitleText={preTitleText}
            title={title}
            description={description}
            subHeadingItems={subHeadingItems}
            imageUrl={imageUrl}
            flipAlignment={i % 2 !== 0}
            topOfImageText={topOfImageText}
          />
        )
      )}
    </>
  );
};

export default ServicesSection;
