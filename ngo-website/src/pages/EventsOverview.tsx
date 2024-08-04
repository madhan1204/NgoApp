import { Link } from 'react-router-dom';

// Define type for Event
type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
};

// Dummy data for demonstration
const events: Event[] = [
  {
    id: 1,
    title: "Community Clean-Up Drive",
    date: "2024-08-15",
    time: "10:00 AM - 2:00 PM",
    description: "Join us for a community clean-up drive to keep our local parks and streets clean.",
  },
  {
    id: 2,
    title: "Educational Workshop on Sustainable Living",
    date: "2024-09-10",
    time: "2:00 PM - 5:00 PM",
    description: "Learn about sustainable living practices and how you can make a positive impact on the environment.",
  },
  // Add more events here
];

function EventsOverview() {
  return (
    <section className="pt-20 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.date} | {event.time}</p>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <Link to={`/events/${event.id}`} className="text-blue-600 hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsOverview;
