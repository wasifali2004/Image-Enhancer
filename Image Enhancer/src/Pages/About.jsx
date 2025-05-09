import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaChartLine, FaAward } from 'react-icons/fa';
import teamImage from '../assets/team.jpeg'; // Your team photo
import abstract1 from '../assets/abstract1.png'; // Abstract/illustrated images
import abstract2 from '../assets/abstract2.jpg';
import abstract3 from '../assets/abstract3.jpg';
import abstract4 from '../assets/abstract4.jpg';

const About = () => {
  const stats = [
    { value: '10,000+', label: 'Images Enhanced', icon: <FaLightbulb className="text-blue-500 text-3xl" /> },
    { value: '500+', label: 'Happy Clients', icon: <FaUsers className="text-blue-500 text-3xl" /> },
    { value: '99%', label: 'Satisfaction Rate', icon: <FaChartLine className="text-blue-500 text-3xl" /> },
    { value: '5', label: 'Industry Awards', icon: <FaAward className="text-blue-500 text-3xl" /> }
  ];

  const teamMembers = [
    { name: 'Alex Johnson', role: 'Founder & CEO', image: abstract1 },
    { name: 'Sarah Williams', role: 'Lead Developer', image: abstract2 },
    { name: 'Michael Chen', role: 'AI Specialist', image: abstract3 },
    { name: 'Emma Davis', role: 'UX Designer', image: abstract4 }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Text Only */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ImageEnhancer</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're revolutionizing image processing through cutting-edge AI technology, helping professionals transform their visuals with unprecedented quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story with Team Image */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, ImageEnhancer began as a passion project by computer vision 
                enthusiasts who wanted to make professional image enhancement accessible to everyone.
              </p>
              <p className="text-gray-600 mb-4">
                Our AI technology reduces image processing time from hours to seconds while 
                delivering exceptional results that rival manual editing.
              </p>
              <p className="text-gray-600">
                Today we empower thousands of creators worldwide with tools that were previously 
                only available to professionals with expensive software.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={teamImage} 
                alt="Our team collaborating" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team with Abstract Images */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Creative Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The innovative minds behind our technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow text-center"
              >
                <div className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-48 h-48 mx-auto object-contain"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl mb-8">
            To democratize professional image enhancement through AI, making stunning visuals accessible to everyone.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            See How It Works
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default About;