import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingNavBar from './components/LandingNavBar'; // Assuming your nav bar is in this path
import LandingPage from './pages/LandingPage'; // Adjust the import if necessary
import {AboutUs} from './pages/AboutUs'; // Adjust the import if necessary
import ProjectsOverview from './pages/ProjectOverview';
import ProjectDetails from './pages/ProjectDetails';
import GetInvolved from './pages/GetInvolved';
import EventsOverview from './pages/EventsOverview';  // Import the new page
import EventDetails from './pages/EventDetails'; 
import BlogOverview from './pages/BlogOverview';  // Import the new page
import BlogPostDetails from './pages/BlogPostDetails';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <LandingNavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<ProjectsOverview />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/events" element={<EventsOverview />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/blog" element={<BlogOverview />} />
        <Route path="/blog/:id" element={<BlogPostDetails />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
