import React from 'react';
import StickyHeader from '@/components/StickyHeader';
import SiteFooter from '@/components/SiteFooter';
import TeamMember from '@/components/TeamMember';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { Code, Laptop, Brain, PenTool, Cloud, Search, Rocket, Handshake, Target, TrendingUp, List, ClipboardCheck } from 'lucide-react';

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 mb-6">
              Innovative Software Solutions for a Digital Future
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We specialize in cutting-edge software development, helping businesses build scalable, high-performance solutions that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Who We Are Section */}
      <section className="py-16 bg-gray-50">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Who We Are</h2>
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are a team of experienced software architects, developers, and designers dedicated to building top-tier digital solutions. Our mission is to empower businesses with modern technology, enabling them to scale, innovate, and stay ahead in the competitive market.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our vision is to be your trusted technology partner, helping you navigate the complexities of digital transformation while delivering solutions that exceed expectations and drive measurable results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At TechTaste, we are committed to quality and innovation. We embrace emerging technologies and methodologies, ensuring that our clients receive solutions that are not only effective today but built to evolve with future advancements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="content-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Do</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Custom Software Development */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Software Development</h3>
                    <p className="text-gray-700">Tailored solutions for your unique business needs.</p>
                  </div>
                </div>
              </div>
              
              {/* Web & Mobile App Development */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                    <Laptop className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Web & Mobile App Development</h3>
                    <p className="text-gray-700">Scalable, user-friendly applications built for performance.</p>
                  </div>
                </div>
              </div>
              
              {/* AI & Machine Learning Solutions */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning Solutions</h3>
                    <p className="text-gray-700">Data-driven intelligence to automate and optimize operations.</p>
                  </div>
                </div>
              </div>
              
              {/* UI/UX Design */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
                    <p className="text-gray-700">Creating engaging, intuitive, and conversion-driven digital experiences.</p>
                  </div>
                </div>
              </div>
              
              {/* Cloud Solutions & DevOps */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Solutions & DevOps</h3>
                    <p className="text-gray-700">Helping businesses migrate, optimize, and scale with cloud technology.</p>
                  </div>
                </div>
              </div>
              
              {/* Digital Transformation Consulting */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation Consulting</h3>
                    <p className="text-gray-700">Strategic guidance to modernize and future-proof your business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="content-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Innovation-Driven Approach */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 bg-purple-100 p-3 rounded-full">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation-Driven Approach</h3>
                    <p className="text-gray-700">We leverage cutting-edge technologies to build future-proof solutions that keep you ahead of the competition.</p>
                  </div>
                </div>
              </div>
              
              {/* Client-Centric Mindset */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 bg-blue-100 p-3 rounded-full">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Centric Mindset</h3>
                    <p className="text-gray-700">Your success is our priority; we build solutions tailored to your specific needs and business goals.</p>
                  </div>
                </div>
              </div>
              
              {/* Scalable & Reliable Solutions */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 bg-green-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable & Reliable Solutions</h3>
                    <p className="text-gray-700">From MVPs to enterprise-grade applications, we deliver robust and efficient systems that grow with your business.</p>
                  </div>
                </div>
              </div>
              
              {/* Industry Expertise */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 bg-orange-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Expertise</h3>
                    <p className="text-gray-700">Our team has expertise across various industries, helping businesses achieve digital success regardless of sector.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-white">
        <div className="content-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
            <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              A transparent, collaborative approach that delivers exceptional results
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Discovery & Strategy */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                <div className="flex flex-col items-center">
                  <div className="mb-4 bg-blue-100 p-4 rounded-full">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mb-3 bg-primary/10 text-primary text-sm font-medium rounded-full px-3 py-1">Step 1</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery & Strategy</h3>
                  <p className="text-gray-700">We analyze your requirements and create a detailed roadmap.</p>
                </div>
              </div>
              
              {/* Design & Prototyping */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                <div className="flex flex-col items-center">
                  <div className="mb-4 bg-purple-100 p-4 rounded-full">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mb-3 bg-primary/10 text-primary text-sm font-medium rounded-full px-3 py-1">Step 2</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & Prototyping</h3>
                  <p className="text-gray-700">UI/UX experts craft engaging designs and interactive prototypes.</p>
                </div>
              </div>
              
              {/* Development & Testing */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                <div className="flex flex-col items-center">
                  <div className="mb-4 bg-green-100 p-4 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mb-3 bg-primary/10 text-primary text-sm font-medium rounded-full px-3 py-1">Step 3</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Development & Testing</h3>
                  <p className="text-gray-700">Agile development with continuous testing for high performance.</p>
                </div>
              </div>
              
              {/* Deployment & Support */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                <div className="flex flex-col items-center">
                  <div className="mb-4 bg-orange-100 p-4 rounded-full">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mb-3 bg-primary/10 text-primary text-sm font-medium rounded-full px-3 py-1">Step 4</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Deployment & Support</h3>
                  <p className="text-gray-700">We launch and provide ongoing maintenance for long-term success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Senior Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="content-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Senior Team</h2>
            <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Meet the visionaries leading our company to success
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TeamMember 
                name="Chamila Weerasekara"
                role="Co-founder"
                bio="A technology innovator with over 12 years of experience in software architecture and development. 
                    Chamila specializes in scalable cloud solutions and has led teams that delivered cutting-edge 
                    products for Fortune 500 clients. His expertise in AI and machine learning has been instrumental 
                    in developing our data-driven service offerings."
                imageSrc="/images/chamila.png"
                imageAlt="Chamila Weerasekara"
              />
              
              <TeamMember 
                name="Kushal Dias"
                role="Co-founder"
                bio="With over 12 years of experience in the tech industry, Kushal brings deep expertise in software engineering, 
                full-stack development, and AI-powered solutions. He has led technical teams across startups and large-scale environments, 
                consistently delivering robust, scalable products. His strength lies in applying advanced technology to real-world business challenges, 
                bridging the gap between innovation and execution."
                imageSrc="/images/kushal-1.jpg"
                imageAlt="Kushal Dias"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Digital Presence? Section */}
      <section className="py-16 bg-primary/5">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's work together to build innovative digital solutions that drive your business forward. Our team is ready to turn your vision into reality.
            </p>
            <Link to="/#contact-section">
              <Button size="lg" className="px-8">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Company;
