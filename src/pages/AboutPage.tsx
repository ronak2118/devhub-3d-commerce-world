
import Layout from "@/components/layout/Layout";
import { ChevronRight } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-devhub-soft-gray py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DevHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of smart living with revolutionary IoT technology.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2023, DevHub began with a simple idea: make IoT technology more accessible 
              and intuitive. Our founding team of engineers and designers had grown frustrated with 
              the complexity and fragmentation of existing smart home solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              What started as a passion project in a small garage has grown into a pioneering 
              technology company dedicated to pushing the boundaries of what's possible in connected 
              living spaces.
            </p>
            <div className="flex items-center text-devhub-purple font-semibold">
              <a href="/products" className="flex items-center">
                Explore our products <ChevronRight className="ml-1" size={18} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="bg-devhub-purple absolute -left-6 -top-6 w-24 h-24 rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Team working on IoT devices" 
                className="rounded-xl shadow-lg w-full h-auto object-cover z-10 relative"
              />
              <div className="bg-devhub-purple absolute -right-6 -bottom-6 w-16 h-16 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At DevHub, we're committed to transforming everyday spaces into intelligent environments. 
              We believe that smart technology should enhance human life - making it more comfortable, 
              secure, and sustainable. Our mission is to create IoT devices that seamlessly integrate 
              into your life while providing meaningful value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-devhub-soft-gray p-8 rounded-xl">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800" 
                  alt="Person using smart devices" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We push the boundaries of what's possible with cutting-edge research and development.
                Our team constantly explores new technologies and methodologies to create products that 
                not only meet current needs but anticipate future ones.
              </p>
            </div>

            <div className="bg-devhub-soft-gray p-8 rounded-xl">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800" 
                  alt="Smart home living" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Human-Centered Design</h3>
              <p className="text-gray-600">
                Technology should adapt to people, not the other way around. We design with empathy,
                focusing on creating intuitive, accessible experiences that enhance daily life.
                Every product undergoes rigorous usability testing to ensure it's easy and enjoyable to use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="bg-devhub-soft-gray w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50053 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50053 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-4">Human-Centered Design</h3>
            <p className="text-gray-600">
              We design products that solve real problems with intuitive interfaces that anyone can use.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="bg-devhub-soft-gray w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22.08V12" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-4">Seamless Integration</h3>
            <p className="text-gray-600">
              Our devices work together in perfect harmony, creating a unified ecosystem that's greater than the sum of its parts.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="bg-devhub-soft-gray w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-4">Privacy & Security</h3>
            <p className="text-gray-600">
              We believe your data belongs to you. Our products are built with strong encryption and transparent privacy practices.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-devhub-soft-gray py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg`} 
                    alt="Team member" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-bold text-xl">{["Sarah Johnson", "Michael Chen", "Emma Rodriguez"][i-1]}</h3>
                <p className="text-devhub-purple mb-3">{["CEO & Co-Founder", "CTO", "Head of Design"][i-1]}</p>
                <p className="text-gray-600 text-sm">
                  {["Leading DevHub's vision with over 15 years in IoT and smart home technology.", 
                    "An engineering expert with a passion for creating seamless connected experiences.",
                    "Award-winning designer focused on creating intuitive interfaces for complex systems."][i-1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision for the Future */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="bg-devhub-purple absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800" 
                alt="Future vision for IoT" 
                className="rounded-xl shadow-lg w-full h-auto object-cover z-10 relative"
              />
              <div className="bg-devhub-purple absolute -left-6 -bottom-6 w-16 h-16 rounded-full opacity-20"></div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're building toward a future where technology empowers everyone and enhances our connection
              to the world around us. Our vision extends beyond just creating products – we want to create
              an ecosystem where technology seamlessly integrates with our daily lives.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From homes that anticipate our needs to workspaces that boost creativity and productivity,
              our roadmap is focused on making intelligent environments accessible to all.
            </p>
            <div className="flex items-center text-devhub-purple font-semibold">
              <a href="/products" className="flex items-center">
                Join us on the journey <ChevronRight className="ml-1" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us */}
      <div className="bg-devhub-purple bg-opacity-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Future of Living</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
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
    </Layout>
  );
};

export default AboutPage;
