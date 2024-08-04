import { useParams } from 'react-router-dom';
import communitycleanupimage from '../assets/images/communitycleanup.jpg';
import educationimage from '../assets/images/educational.jpg';

// Define type for BlogPost
type BlogPost = {
  title: string;
  author: string;
  date: string;
  content: string;
  featuredImage: string;
};

// Dummy data for demonstration
const blogPostDetails: { [key: number]: BlogPost } = {
  1: {
    title: "How Our Community Clean-Up Made a Difference",
    author: "Madhankumar",
    date: "2024-08-01",
    content: "In this blog post, we explore the positive impacts of our recent community clean-up drive. The event saw significant participation and resulted in a noticeable improvement in local park cleanliness. Volunteers shared their experiences and the community's response was overwhelmingly positive.",
    featuredImage: communitycleanupimage,
  },
  2: {
    title: "Educational Workshop Success Stories",
    author: "Rashmika",
    date: "2024-07-15",
    content: "Our educational workshops have been a tremendous success. We highlight the inspiring stories of participants who have benefited from our programs. These workshops have provided valuable skills and knowledge, helping individuals improve their lives and communities.",
    featuredImage: educationimage,
  },
  // Add more blog posts here
};

function BlogPostDetails() {
  const { id } = useParams();
  const postId = id ? parseInt(id, 10) : undefined;
  const post = postId !== undefined ? blogPostDetails[postId] : undefined;

  if (!post) {
    return <p>Blog post not found</p>;
  }

  return (
    <section className="pt-20 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={post.featuredImage} alt={post.title} className="w-full h-60 object-cover mb-4 rounded-t-lg" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>
          <p className="text-gray-500 mb-4">By {post.author} | {post.date}</p>
          <p className="text-gray-600">{post.content}</p>
        </div>
      </div>
    </section>
  );
}

export default BlogPostDetails;
