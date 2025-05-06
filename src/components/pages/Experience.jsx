import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { experiences } from "../../Data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My hands-on journey through professional roles and training
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column - Basic Info */}
                <div className="md:w-1/3">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <a
                      href="https://appinventiv.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 text-xl font-semibold hover:text-blue-500 transition-colors duration-300"
                    >
                      {exp.company}
                    </a>

                    <p className="text-gray-400">{exp.duration}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-300 mb-2 uppercase tracking-wider">
                      {exp.certification ? "Certification" : "Skills Applied"}
                    </h4>
                    {exp.certification ? (
                      <a
                        href={exp.certification.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-300 hover:text-blue-400"
                      >
                        {exp.certification.name}
                        <FiExternalLink className="ml-1" />
                      </a>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {exp.certification && (
                    <div>
                      <h4 className="text-sm font-semibold text-blue-300 mb-2 uppercase tracking-wider">
                        Skills Gained
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column - Responsibilities */}
                <div className="md:w-2/3">
                  <h4 className="text-sm font-semibold text-blue-300 mb-3 uppercase tracking-wider">
                    {exp.certification
                      ? "Key Learnings"
                      : "Key Responsibilities"}
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▹</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Training Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-300">
              Additional Training & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-white">
                  Frontend Specialization
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Advanced React with Hooks and Context API</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Responsive Web Design</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-700/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-white">
                  Certifications
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Machine Learning with Python</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Generative AI : Introduction and Application</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
