import { Link } from 'react-router-dom';
import communitycleanupimage from '../assets/images/communitycleanup.jpg';
import educationimage from '../assets/images/educational.jpg';

// Define type for BlogPost
type BlogPost = {
  id: number;
  title: string;
  summary: string;
  author: string;
  date: string;
  featuredImage: string;
};

// Dummy data for demonstration
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Our Community Clean-Up Made a Difference",
    summary: "Read about the impact of our recent community clean-up drive and the positive changes we've seen.",
    author: "Madhankumar",
    date: "2024-08-01",
    featuredImage: communitycleanupimage,
  },
  {
    id: 2,
    title: "Educational Workshop Success Stories",
    summary: "Discover the success stories from our educational workshops and how they've helped individuals in need.",
    author: "Rashmika",
    date: "2024-07-15",
    featuredImage: educationimage,
  },
  // Add more blog posts here
];

function BlogOverview() {
  return (
    <section className="pt-20 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Blog/News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <p className="text-gray-500 mb-4">By {post.author} | {post.date}</p>
              <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogOverview;
