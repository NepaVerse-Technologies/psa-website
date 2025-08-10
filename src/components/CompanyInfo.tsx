import React from "react";

export const WhoWeAre = () => {
  return (
    <div className="container">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Who <span className="text-blue-600">We Are</span>
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Pioneer Sprach Academy is a leading educational consultancy
          specializing in German language training and visa processing services.
          With over 5 years of experience, we have successfully guided more than
          2000 students in achieving their dreams of studying and working in
          Germany.
        </p>
        <StatisticsRow />
      </div>
    </div>
  );
};

export const OurAim = () => {
  return (
    <div>
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our <span className="text-blue-600">Aim</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Our mission is to bridge the gap between ambitious students and their
          German education dreams. We aim to provide comprehensive, affordable,
          and result-oriented services that ensure our students not only learn
          the German language effectively but also successfully navigate the
          visa application process.
        </p>

        {/* Mission Points */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-blue-600 font-bold text-sm">1</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Quality Education
              </h4>
              <p className="text-gray-600">
                Provide world-class German language training with proven
                methodologies
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-blue-600 font-bold text-sm">2</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Seamless Process
              </h4>
              <p className="text-gray-600">
                Simplify visa applications and documentation for hassle-free
                experience
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-blue-600 font-bold text-sm">3</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Student Success
              </h4>
              <p className="text-gray-600">
                Ensure every student achieves their goal of studying or working
                in Germany
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <p className="text-blue-800 font-medium italic">
            {`"We believe that language is the key to unlocking global
            opportunities, and we're here to help you turn that key."`}
          </p>
        </div>
      </div>
    </div>
  );
};

export const StatisticsRow = () => {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 justify-between gap-8 text-center">
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-300 hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
        <div className="text-gray-600 text-sm">Visa Approval Rate</div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-300 hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
        <div className="text-gray-600 text-sm">Students Trained</div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-300 hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
        <div className="text-gray-600 text-sm">Partner Institutions</div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-300 hover:scale-105 transition-all duration-300">
        <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
        <div className="text-gray-600 text-sm">Support Available</div>
      </div>
    </div>
  );
};
