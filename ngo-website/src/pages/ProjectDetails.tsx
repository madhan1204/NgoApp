import { useParams } from 'react-router-dom';
import communitycleanimage from '../assets/images/communityclean.jpg';
import communitycleanupimage from '../assets/images/communitycleanup.jpg';
import educationimage from '../assets/images/educational.jpg';
import educationalimage from '../assets/images/educational2.jpg';

// Define type for Project
type Project = {
  title: string;
  description: string;
  images: string[];
  status: string;
};

// Define type for ProjectDetails with index signature
type ProjectDetails = {
  [key: number]: Project;
};

// Dummy data for demonstration
const projectDetails: ProjectDetails = {
  1: {
    title: "Community Clean-Up",
    description: "This project focuses on organizing community clean-ups to maintain the cleanliness of local parks and streets. It includes activities such as waste collection, recycling drives, and beautification efforts.",
    images: [communitycleanimage, communitycleanupimage],
    status: "Ongoing"
  },
  2: {
    title: "Educational Workshops",
    description: "Providing workshops to enhance educational skills in underprivileged areas. The workshops cover various topics, including literacy, numeracy, and vocational training.",
    images: [educationimage, educationalimage],
    status: "Completed"
  },
  // Add more projects here
};

function ProjectDetails() {
  const { id } = useParams();
  const projectId = id ? parseInt(id, 10) : undefined;
  const project = projectId !== undefined ? projectDetails[projectId] : undefined;

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className="pt-20 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <p className="text-gray-800 font-semibold mb-4">Status: {project.status}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image: string, index: number) => (
              <img key={index} src={image} alt={`Project ${index + 1}`} className="w-full h-60 object-cover rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
