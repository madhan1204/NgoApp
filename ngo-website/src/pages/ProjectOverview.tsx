import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import communitycleanupimage from '../assets/images/communitycleanup.jpg';
import educationimage from '../assets/images/educational.jpg';

// Define project type
type Project = {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
};

// Define the categories
const categories = ["All", "Education", "Environment", "Health"];

// Dummy projects data
const projects: Project[] = [
  { id: 1, title: "Community Clean-Up", summary: "A project focused on cleaning up local parks and streets.", image: communitycleanupimage, category: "Environment" },
  { id: 2, title: "Educational Workshops", summary: "Providing workshops to enhance educational skills in underprivileged areas.", image: educationimage, category: "Education" },
  // Add more projects here
];

function ProjectsOverview() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="pt-20 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Projects</h2>
        <div className="mb-6">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-gray-700 ${selectedCategory === category ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300 focus:outline-none`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.summary}</p>
              <Link to={`/projects/${project.id}`} className="text-blue-600 hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsOverview;
