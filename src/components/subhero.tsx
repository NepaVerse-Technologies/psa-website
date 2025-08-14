"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { ServiceSubHeroItems } from "@/lib/constants";

interface HeroStat {
  value: string;
  label: string;
  showStar?: boolean;
}

interface ServiceHeroProps {
  // Styling
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;

  // Badge

  badgeText: string;

  // Content
  badgeTextColor: string;
  title: string;
  highlightedWord: string;
  description: string;
  primaryButtonText: string;

  // Stats
  stats: HeroStat[];

  // Background
  backgroundImage?: string;
  backgroundAlt?: string;
}

const ServiceHeroView = ({
  gradientFrom,
  gradientTo,
  accentColor,
  badgeText,
  badgeTextColor,
  title,
  highlightedWord,
  description,
  primaryButtonText,
  stats,
  backgroundImage,
  backgroundAlt = "Service background",
}: ServiceHeroProps) => {
  return (
    <section
      className={`pt-30 pb-20 bg-gradient-to-r ${gradientFrom} ${gradientTo} relative overflow-hidden`}
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          {/* change image */}
          <img
            src={backgroundImage || "/placeholder.svg"}
            alt={backgroundAlt}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            className={`mb-4 bg-yellow-400 ${badgeTextColor} hover:bg-yellow-300`}
          >
            {badgeText}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title} <span className={accentColor}>{highlightedWord}</span>
          </h1>
          <p className="text-xl text-opacity-80 text-white mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white hover:bg-gray-100"
            >
              {primaryButtonText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white bg-transparent"
            >
              Free Consultation
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className={`text-3xl font-bold ${accentColor} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-white text-opacity-80 text-sm flex items-center justify-center">
                  {stat.showStar && (
                    <Star className="h-4 w-4 fill-current mr-1" />
                  )}
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceSubHero = ({ serviceId }: { serviceId: string }) => {
  const service = ServiceSubHeroItems.find(
    (service) => service.id === serviceId
  );
  if (!service) {
    return null;
  }
  return <ServiceHeroView {...service} />;
};

export default ServiceSubHero;
