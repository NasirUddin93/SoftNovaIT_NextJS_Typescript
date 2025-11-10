import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Innovate, Deploy, Dominate
            </h1>
            <p className="text-xl mb-8">
              Your partner in advanced IT solutions, E-commerce, and Artificial Intelligence.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Get a Free Quote
            </button>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Website Development</h3>
                <p className="text-gray-600">Fast, modern, and SEO-friendly websites built with Next.js.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Website Development</h3>
                <p className="text-gray-600">Fast, modern, and SEO-friendly websites built with Next.js.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Website Development</h3>
                <p className="text-gray-600">Fast, modern, and SEO-friendly websites built with Next.js.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Website Development</h3>
                <p className="text-gray-600">Fast, modern, and SEO-friendly websites built with Next.js.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Website Development</h3>
                <p className="text-gray-600">Fast, modern, and SEO-friendly websites built with Next.js.</p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}