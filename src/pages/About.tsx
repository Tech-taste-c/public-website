
import React from 'react';
import { ArrowRight, Award, Code, Heart, Lightbulb, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-secondary/50">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About Us</h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We're a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-up">
              <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
                <span className="text-primary text-sm font-medium">Our Story</span>
              </div>
              <h2 className="mb-6">Driven by Innovation and Excellence</h2>
              <p className="text-foreground/80 mb-4">
                Founded in 2015, our company was born from a simple idea: to create software that makes a difference. We believed that technology should be both powerful and accessible, solving real problems while being easy to use.
              </p>
              <p className="text-foreground/80 mb-4">
                What started as a small team of three passionate developers has grown into a dynamic company of talented professionals, each bringing unique skills and perspectives to our work.
              </p>
              <p className="text-foreground/80">
                Through the years, we've maintained our commitment to quality, innovation, and client satisfaction, building long-lasting partnerships with businesses across various industries.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md overflow-hidden animate-fade-in">
                <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                    <Code className="h-10 w-10 text-primary" />
                  </div>
                  <p className="font-medium text-xl text-foreground/80">Image Placeholder</p>
                  <p className="text-sm text-foreground/60">Company team or office photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/50">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-background rounded-lg p-8 shadow-sm border border-border animate-slide-up">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Our Mission</h3>
              <p className="text-foreground/80 mb-4">
                To empower organizations through innovative software solutions that drive growth and enhance user experiences. We are committed to delivering excellence in every project, combining technical expertise with creative problem-solving.
              </p>
              <p className="text-foreground/80">
                We believe that successful software isn't just about code—it's about understanding the unique challenges businesses face and creating solutions that address their specific needs.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-background rounded-lg p-8 shadow-sm border border-border animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Our Vision</h3>
              <p className="text-foreground/80 mb-4">
                To be at the forefront of digital innovation, recognized globally for creating software that transforms how businesses operate and connect with their customers.
              </p>
              <p className="text-foreground/80">
                We envision a world where technology seamlessly enhances human experiences, making life more productive, connected, and enjoyable. Our goal is to contribute to this future through thoughtful, purposeful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              These core principles guide everything we do, from how we build our products to how we interact with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md animate-fade-in">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Excellence</h3>
              <p className="text-foreground/70">
                We are committed to delivering the highest quality in everything we do, constantly pushing ourselves to exceed expectations.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p className="text-foreground/70">
                We embrace creativity and forward-thinking, seeking novel solutions to complex problems and staying ahead of technological trends.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Integrity</h3>
              <p className="text-foreground/70">
                We operate with honesty, transparency, and ethical standards in all our interactions, building trust with our clients and within our team.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Collaboration</h3>
              <p className="text-foreground/70">
                We believe in the power of teamwork, both within our company and with our clients, fostering environments where diverse perspectives lead to better outcomes.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Client-Focused</h3>
              <p className="text-foreground/70">
                We prioritize understanding our clients' needs and goals, ensuring that our solutions address their specific challenges and contribute to their success.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md animate-fade-in" style={{ animationDelay: "500ms" }}>
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Continuous Learning</h3>
              <p className="text-foreground/70">
                We are dedicated to ongoing growth and improvement, staying curious and adaptable in an ever-evolving technological landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-primary/5">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Approach</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We follow a proven methodology that ensures high-quality deliverables and a smooth, collaborative process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-background rounded-lg p-6 shadow-sm border border-border h-full animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 font-bold text-xl">1</div>
                <h3 className="text-xl font-medium mb-2">Discovery</h3>
                <p className="text-foreground/70">
                  We start by understanding your business, goals, and challenges through in-depth consultations and research.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 right-0 h-0.5 w-[calc(100%-2rem)] bg-primary/20 translate-x-1/2 z-0"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-background rounded-lg p-6 shadow-sm border border-border h-full animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 font-bold text-xl">2</div>
                <h3 className="text-xl font-medium mb-2">Planning</h3>
                <p className="text-foreground/70">
                  We develop a comprehensive strategy and roadmap, defining key features, technologies, and timelines.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 right-0 h-0.5 w-[calc(100%-2rem)] bg-primary/20 translate-x-1/2 z-0"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-background rounded-lg p-6 shadow-sm border border-border h-full animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 font-bold text-xl">3</div>
                <h3 className="text-xl font-medium mb-2">Development</h3>
                <p className="text-foreground/70">
                  Our skilled team builds your solution using agile methodologies, with regular updates and feedback sessions.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 right-0 h-0.5 w-[calc(100%-2rem)] bg-primary/20 translate-x-1/2 z-0"></div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-background rounded-lg p-6 shadow-sm border border-border h-full animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 font-bold text-xl">4</div>
                <h3 className="text-xl font-medium mb-2">Delivery & Support</h3>
                <p className="text-foreground/70">
                  We launch your solution and provide ongoing support, ensuring it continues to meet your evolving needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Work Together?</h2>
            <p className="text-lg mb-8 text-foreground/80">
              Let's discuss how our expertise can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
