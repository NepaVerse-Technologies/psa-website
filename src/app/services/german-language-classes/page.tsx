import ServiceSubHero from "@/components/subhero";
import React from "react";
import { Users, Clock, Award, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const courseLevels = [
  {
    level: "A1-A2",
    title: "Beginner Level",
    description: "Perfect for complete beginners starting their German journey",
    duration: "3-4 months",
    hours: "120 hours",
    skills: [
      "Basic vocabulary (500+ words)",
      "Simple conversations",
      "Basic grammar",
    ],
    price: "€299/month",
  },
  {
    level: "B1-B2",
    title: "Intermediate Level",
    description: "Build confidence and fluency in everyday German",
    duration: "4-5 months",
    hours: "150 hours",
    skills: [
      "Complex conversations",
      "Past and future tenses",
      "Business German basics",
      "Cultural understanding",
    ],
    price: "€349/month",
  },
  {
    level: "C1-C2",
    title: "Advanced Level",
    description: "Master German for academic and professional success",
    duration: "5-6 months",
    hours: "180 hours",
    skills: [
      "Academic German",
      "Professional communication",
      "Literature analysis",
      "Native-like fluency",
    ],
    price: "€399/month",
  },
];

const features = [
  {
    icon: Users,
    title: "Native German Instructors",
    description:
      "Learn from certified native speakers with years of teaching experience",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    description:
      "Choose from morning, evening, or weekend classes that fit your lifestyle",
  },
  {
    icon: Award,
    title: "Exam Preparation",
    description:
      "Prepare for Goethe, TestDaF, and other official German language certificates",
  },
  {
    icon: Globe,
    title: "Cultural Integration",
    description:
      "Learn about German culture, customs, and social norms alongside the language",
  },
];

const GermanLanguageClassesPage = () => {
  return (
    <>
      <ServiceSubHero serviceId="german-language-classes" />
      {/* Course Levels */}
      <section className="md:px-20 px-6 py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured curriculum takes you from complete beginner to
              fluent speaker
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-20 px-6">
            {courseLevels.map((course, index) => (
              <Card
                key={course.level}
                className="relative hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="text-center pb-4">
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    {course.level}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        {course.duration}
                      </div>
                      <div className="text-sm text-gray-500">Duration</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        {course.hours}
                      </div>
                      <div className="text-sm text-gray-500">Total Hours</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What You'll Learn:
                    </h4>
                    <ul className="space-y-2">
                      {course.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center pt-4 border-t">
                    <Button className="w-full">Enroll in {course.level}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="md:px-20 px-6 py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our German Classes?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our proven teaching methods and
              dedicated support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="md:px-20 px-6 py-10 bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your German Learning Journey Today
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their German
            language goals with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-800 hover:bg-gray-100"
            >
              Book Free Trial Class
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GermanLanguageClassesPage;
