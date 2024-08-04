import { useParams } from 'react-router-dom';

// Define type for Event
type Event = {
  title: string;
  date: string;
  time: string;
  description: string;
  registration: string;
};

// Dummy data for demonstration
const eventDetails: { [key: number]: Event } = {
  1: {
    title: "Community Clean-Up Drive",
    date: "2024-08-15",
    time: "10:00 AM - 2:00 PM",
    description: "Join us for a community clean-up drive to keep our local parks and streets clean.",
    registration: "Register by calling (123) 456-7890 or visiting our website.",
  },
  2: {
    title: "Educational Workshop on Sustainable Living",
    date: "2024-09-10",
    time: "2:00 PM - 5:00 PM",
    description: "Learn about sustainable living practices and how you can make a positive impact on the environment.",
    registration: "Register online at our website.",
  },
  // Add more events here
};

function EventDetails() {
  const { id } = useParams();
  const eventId = id ? parseInt(id, 10) : undefined;
  const event = eventId !== undefined ? eventDetails[eventId] : undefined;

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <section className="pt-20 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>
          <p className="text-gray-600 mb-4">{event.date} | {event.time}</p>
          <p className="text-gray-600 mb-4">{event.description}</p>
          <p className="text-gray-800 font-semibold mb-4">Registration: {event.registration}</p>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
