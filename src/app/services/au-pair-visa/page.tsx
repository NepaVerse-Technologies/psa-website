import AdmissionForm from "@/components/admissionForm";
import ServiceSubHero from "@/components/subhero";
import {
  Users,
  FileText,
  Globe,
  CheckCircle,
  Heart,
  Home,
  Clock,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Basic Package",
    description: "Essential support for your Au Pair journey",
    features: [
      "Document preparation guidance",
      "Application form assistance",
      "Basic interview preparation",
      "Email support",
      "Processing timeline: 3-4 months",
    ],
    popular: false,
  },
  {
    name: "Premium Package",
    description: "Comprehensive support with personal guidance",
    features: [
      "Everything in Basic Package",
      "Personal consultant assigned",
      "Mock interview sessions",
      "Host family matching assistance",
      "Pre-departure orientation",
      "Processing timeline: 2-3 months",
    ],
    popular: true,
  },
  {
    name: "VIP Package",
    description: "Complete end-to-end premium service",
    features: [
      "Everything in Premium Package",
      "Priority processing",
      "German language crash course",
      "Cultural preparation workshop",
      "Post-arrival support (3 months)",
      "Emergency assistance hotline",
      "Processing timeline: 1-2 months",
    ],
    popular: false,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    description:
      "We assess your profile and discuss your Au Pair goals and preferences",
    icon: Users,
  },
  {
    step: "2",
    title: "Document Preparation",
    description:
      "We help you gather and prepare all required documents for your application",
    icon: FileText,
  },
  {
    step: "3",
    title: "Application Submission",
    description: "We submit your complete application and track its progress",
    icon: Globe,
  },
  {
    step: "4",
    title: "Interview & Approval",
    description:
      "We prepare you for interviews and guide you through the approval process",
    icon: CheckCircle,
  },
];

const AuPairVisaPage = () => {
  return (
    <div>
      <ServiceSubHero serviceId="au-pair-visa" />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Au Pair Visa Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We guide you through every step of your Au Pair visa application
              journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="text-center relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-green-200 transform -translate-y-1/2 z-0"></div>
                  )}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Support Package
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the level of support that best fits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.name}
                className={`relative hover:shadow-xl transition-shadow duration-300 ${
                  pkg.popular ? "ring-2 ring-green-500" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {pkg.name}
                  </CardTitle>

                  <CardDescription className="text-gray-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      pkg.popular ? "bg-green-600 hover:bg-green-700" : ""
                    }`}
                  >
                    Choose {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Au Pair Service?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of working with Germany's most trusted Au
              Pair visa specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Caring Support
              </h3>
              <p className="text-gray-600">
                Personal guidance throughout your entire Au Pair journey
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Host Family Matching
              </h3>
              <p className="text-gray-600">
                We help you find the perfect German host family
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fast Processing
              </h3>
              <p className="text-gray-600">
                Quick and efficient visa processing with regular updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Au Pair Adventure?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful Au Pairs who have started their German
            journey with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-800 hover:bg-gray-100"
            >
              Start Your Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent"
            >
              Schedule Free Call
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How long does visa processing take?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Visa processing typically takes 4-8 weeks depending on the
                  type of visa and individual circumstances.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you offer online German classes?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer both online and in-person German language
                  classes to accommodate different learning preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What is your success rate?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We maintain a 95% success rate for visa approvals and have
                  helped over 2000 students achieve their goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you provide post-arrival support?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we provide comprehensive post-arrival support including
                  accommodation assistance and cultural orientation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuPairVisaPage;
