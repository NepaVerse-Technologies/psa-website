import React from "react";

export const WhoWeAre = () => {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Who <span className="text-blue-600">We Are</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Pioneer Sprach Academy is a leading educational consultancy
          specializing in German language training and visa processing services.
          With over 5 years of experience, we have successfully guided more than
          2000 students in achieving their dreams of studying and working in
          Germany.
        </p>
        {/* <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Our team consists of certified German language instructors,
          experienced visa consultants, and dedicated support staff who are
          committed to providing personalized guidance throughout your journey.
        </p> */}

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700 font-medium">
              Certified Instructors
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700 font-medium">
              5+ Years Experience
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700 font-medium">
              2000+ Success Stories
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700 font-medium">95% Success Rate</span>
          </div>
        </div>
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
            "We believe that language is the key to unlocking global
            opportunities, and we're here to help you turn that key."
          </p>
        </div>
      </div>
    </div>
  );
};

export const StatisticsRow = () => {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
        <div className="text-gray-600 text-sm">Visa Approval Rate</div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
        <div className="text-gray-600 text-sm">Students Trained</div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
        <div className="text-gray-600 text-sm">Partner Institutions</div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
        <div className="text-gray-600 text-sm">Support Available</div>
      </div>
    </div>
  );
};
