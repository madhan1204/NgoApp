import { useState } from 'react';

// Define type for the contact form state
type FormState = {
  name: string;
  email: string;
  message: string;
};

// Contact details
const contactDetails = {
  address: "VIT VELLORE",
  phone: "911",
  email: "vit@ngo.org",
};

// Google Maps Embed URL (Replace with your actual Google Maps URL)
const googleMapsUrl ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0409982844303!2d79.15335867358898!3d12.969228414933328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1722789090730!5m2!1sen!2sin";
function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormStatus('Thank you for reaching out! We will get back to you soon.');
    setForm({ name: '', email: '', message: '' }); // Clear the form
  };

  return (
    <section className="pt-20 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Send
              </button>
              {formStatus && <p className="mt-4 text-green-600">{formStatus}</p>}
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <p className="text-gray-700"><strong>Address:</strong> {contactDetails.address}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {contactDetails.phone}</p>
              <p className="text-gray-700"><strong>Email:</strong> <a href={`mailto:${contactDetails.email}`} className="text-blue-600 hover:underline">{contactDetails.email}</a></p>
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <div className="bg-white rounded-lg shadow-md">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
