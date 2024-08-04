import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Madhankumar", role: "Founder", bio: "Madhankumar has been leading the NGO since its inception..." },
  { name: "Rashmika", role: "Project Manager", bio: "Rashmika is responsible for overseeing all projects..." },
  { name: "Samantha", role: "Team Leader", bio: "Samantha is ..." },
  // Add more team members as needed
];

const AboutUs: React.FC = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our History</h2>
        <p className="text-gray-600">
          Helping Hands was founded in 2010 with a mission to empower communities...
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to foster sustainable development and inclusive growth by...
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export {AboutUs};
