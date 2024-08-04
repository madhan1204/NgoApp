import React, { useState } from 'react';

function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your interest in volunteering!');
  };

  return (
    <section className="pt-20 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Get Involved</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Volunteer with Us</h3>
          <p className="text-gray-600 mb-4">
            We are always looking for dedicated individuals to join our team. Whether you can offer your time, skills, or resources, your contribution will make a significant difference in our community. Fill out the form below to express your interest.
          </p>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Support Us with a Donation</h3>
          <p className="text-gray-600 mb-4">
            Your donations are crucial to supporting our ongoing projects and initiatives. With your help, we can continue to make a positive impact in our community. Consider making a donation to support our cause.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-gray-800 mb-4">How Your Donation Helps:</h4>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Providing resources for community clean-up efforts.</li>
              <li>Funding educational workshops for underprivileged areas.</li>
              <li>Supporting health initiatives and outreach programs.</li>
            </ul>
            <button
              onClick={() => alert('Donation process coming soon!')}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;
