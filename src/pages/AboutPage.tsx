
import Layout from "@/components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-devhub-soft-gray py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DevHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of smart living with revolutionary IoT technology.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-10">
            At DevHub, we're committed to transforming everyday spaces into intelligent environments. 
            We believe that smart technology should enhance human life - making it more comfortable, 
            secure, and sustainable. Our mission is to create IoT devices that seamlessly integrate 
            into your life while providing meaningful value.
          </p>

          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            Founded in 2023, DevHub began with a simple idea: make IoT technology more accessible 
            and intuitive. Our founding team of engineers and designers had grown frustrated with 
            the complexity and fragmentation of existing smart home solutions.
          </p>
          <p className="text-lg text-gray-600 mb-10">
            What started as a passion project in a small garage has grown into a pioneering 
            technology company dedicated to pushing the boundaries of what's possible in connected 
            living spaces.
          </p>

          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-xl mb-4">Human-Centered Design</h3>
              <p className="text-gray-600">
                We design products that solve real problems with intuitive interfaces that anyone can use.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-xl mb-4">Seamless Integration</h3>
              <p className="text-gray-600">
                Our devices work together in perfect harmony, creating a unified ecosystem that's greater than the sum of its parts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-xl mb-4">Privacy & Security</h3>
              <p className="text-gray-600">
                We believe your data belongs to you. Our products are built with strong encryption and transparent privacy practices.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Join the Future of Living</h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience the transformation that comes with intelligently connected spaces. Discover how 
              our products can enhance your home, office, or any environment.
            </p>
            <a 
              href="/products" 
              className="bg-devhub-purple hover:bg-devhub-dark-purple text-white px-8 py-3 rounded-full font-medium transition-colors inline-block"
            >
              Explore Our Products
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
