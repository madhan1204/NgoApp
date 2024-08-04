export function Mission() {
  return (
    <div className="mt-6">
      <div className="max-w-lg mx-auto mb-8 text-center">
        <span className="inline-block px-3 py-2 text-xs font-bold bg-yellow-50 text-gray-500 rounded-full">Our Mission</span>
        <h2 className="text-3xl md:text-4xl mt-4 mb-4 font-bold font-heading">
          <span>To empower</span>
          <span className="text-green-600"> individuals and communities </span>
          <span>through </span>
          <span className="text-red-300">sustainable development</span><span> and </span>
          <span className="text-red-300">inclusive growth</span>
        </h2>
        <p className="text-blueGray-400 leading-relaxed">"To empower individuals and communities through sustainable development and inclusive growth"</p>
      </div>
    </div>
  );
}

export function Banner() {
  return (
    <div className="bg-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Empowering Communities, Changing Lives</h1>
        <p className="text-lg">Dedicated to making a difference through sustainable development and inclusive growth.</p>
      </div>
    </div>
  );
}

export function CoreValues() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-600">We uphold the highest standards of integrity in all our actions.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
            <p className="text-gray-600">We embrace diversity and strive for inclusive growth.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
            <p className="text-gray-600">We focus on sustainable development to ensure lasting impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">100+ Projects</h3>
            <p className="text-gray-600">Successfully completed over 100 community development projects.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">5000+ Beneficiaries</h3>
            <p className="text-gray-600">Positively impacted the lives of more than 5000 individuals.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Global Recognition</h3>
            <p className="text-gray-600">Recognized globally for our efforts in sustainable development.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
