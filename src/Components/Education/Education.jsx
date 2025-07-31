import React from "react";
import Lottie from "lottie-react";
import BookAnimation from "../../Lottie-animation-file/Book-loading-animatom.json";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 relative overflow-hidden"
      data-theme="dark"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Timeline & Animation Layout */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Timeline */}
            <div className="flex-1">
              <ol className="relative border-l-4 border-purple-500 ml-6">
                {/* University First */}
                <li className="mb-8 ml-8">
                  {/* Removed BSc label/circle from timeline, only vertical line remains */}
                  <div className="bg-gradient-to-br from-purple-900 via-gray-900 to-purple-800 border border-purple-500/40 rounded-xl p-8 shadow-xl transition-all duration-300 hover:border-purple-400">
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                      BSc (Engineering) in Computer Science & Engineering
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        Current Student
                      </span>
                      <span className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded-full">
                        January 2023 - 2026 (Expected)
                      </span>
                    </div>
                    <p className="text-gray-300 text-base">
                      Hajee Mohammad Danesh Science & Technology University,
                      Dinajpur
                    </p>
                  </div>
                </li>
                {/* HSC Second */}
                <li className="mb-8 ml-8">
                  {/* Removed HSC label from timeline */}
                  <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 border border-blue-500/40 rounded-xl p-8 shadow-xl transition-all duration-300 hover:border-blue-400">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">
                      Higher Secondary Certificate (HSC)
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        Completed
                      </span>
                      <span className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded-full">
                        June 2019 - December 2021
                      </span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        GPA: 5.00
                      </span>
                    </div>
                    <p className="text-gray-300 text-base">
                      Agrani School and College,RUTE, Rajshahi.
                    </p>
                  </div>
                </li>
                {/* Programming Hero Web Dev Course */}
                <li className="mb-8 ml-8">
                  <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-purple-800 border border-purple-500/40 rounded-xl p-8 shadow-xl transition-all duration-300 hover:border-purple-400">
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                      Complete Web Development Course
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        Completed
                      </span>
                      <span className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded-full">
                        Jan 2025 - July 2025
                      </span>
                    </div>
                    <p className="text-gray-300 text-base">Programming Hero</p>
                  </div>
                </li>
              </ol>
            </div>
            {/* Animation on right */}
            <div className="w-full md:w-1/3 flex justify-center items-start pt-4">
              <div className="w-72 h-72 md:w-96 md:h-96">
                <Lottie animationData={BookAnimation} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
