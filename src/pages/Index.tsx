
import React, { useState } from 'react';
import { Code, Database, Globe, Laptop, Mail, MessageSquare, Phone, Smartphone, Zap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import StickyHeader from '@/components/StickyHeader';
import SiteFooter from '@/components/SiteFooter';
import { toast } from '@/components/ui/use-toast';
import ProjectCard from '@/components/ProjectCard';
import emailjs from 'emailjs-com';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.init("J_CS1EK-_GGvM3c5Z");
    
    // Prepare the template parameters to match the expected variables
    const templateParams = {
      Name: formData.name,
      Email: formData.email,
      Message: `
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Project Details: ${formData.message}
      `
    };
    
    // Send the email using EmailJS
    emailjs.send(
      'service_7quysls',
      'template_ltzsnmo',
      templateParams
    )
      .then(() => {
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        toast({
          title: "Message sent!",
          description: "We've received your inquiry and will get back to you soon.",
          duration: 5000,
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setIsSubmitting(false);
        toast({
          title: "Message failed to send",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
          duration: 5000,
        });
      });
  };

  const portfolioProjects = [
    {
      title: "AI-Powered Ideation",
      description: "A generative AI platform that assists users in refining ideas and generating structured project documentation effortlessly.",
      imageSrc: "/images/ideation-bot.jpg",
      tags: ["React", "TypeScript", "Python", "PostgreSQL", "Azure", "OpenAI", "Langchain"],
      githubUrl: ""
    },
    {
      title: "Insurance Premium Financing",
      description: "A web portal for managing insurance premium financing, allowing users to view loan details, make payments, and manage accounts online.",
      imageSrc: "/images/finance.jpg",
      tags: ["React", "Node.js", "TypeScript", "MongoDB", "Stripe"],
      githubUrl: ""
    },
    {
      title: "Documentation Management",
      description: "A knowledge management platform for organizing, searching, and sharing technical documentation with guides, tutorials, and security best practices.",
      imageSrc: "/images/docu-sync.jpg",
      tags: ["Next.js", "Tailwind CSS", "Firebase", "AWS"],
      githubUrl: ""
    },
    {
      title: "Event Planning Website",
      description: "A website solution for showcasing services and managing bookings for event and wedding planning businesses.",
      imageSrc: "/images/event-planner.png",
      tags: ["React", "Tailwind CSS", "Typescript"],
      githubUrl: ""
    },
    {
      title: "Real time analytics Dashboard",
      description: "Dashboard application for tracking and visualizing key performance and security metrics.",
      imageSrc: "/images/dashboard.png",
      tags: ["NestJs", "React", "Tailwind CSS", "Postgres", "AWS"],
      githubUrl: ""
    },
    {
      title: "Salon Booking System",
      description: "Web-based platform to manage salon services, appointments, and customer bookings.",
      imageSrc: "/images/salon.png",
      tags: ["React", "Tailwind CSS", "Typescript"],
      githubUrl: ""
    }
  ];

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <StickyHeader />
      
      <section className="pt-24 pb-20 sm:pt-30 sm:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-3xl"></div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-primary text-sm font-medium">Innovative Software Solutions</span>
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Building Digital Products That Make a Difference
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-foreground/80 max-w-2xl mx-auto">
              We create custom software solutions that transform businesses and deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact-section">
                <Button size="lg" className="w-full sm:w-auto">
                  Let's Build Something Great
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services-section" className="section-padding bg-secondary/50">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We offer a range of tailored solutions to help businesses innovate, grow, and succeed in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Custom Software</h3>
              <p className="text-foreground/70">
                Bespoke software solutions built to address your unique business challenges and goals.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Web Development</h3>
              <p className="text-foreground/70">
                Modern, responsive websites and web applications that deliver exceptional user experiences.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Mobile Apps</h3>
              <p className="text-foreground/70">
                Native and cross-platform mobile applications that engage users on any device.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Laptop className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">UI/UX Design</h3>
              <p className="text-foreground/70">
                Intuitive, beautiful interfaces that enhance user satisfaction and drive engagement.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">AI & ML Solutions</h3>
              <p className="text-foreground/70">
                Intelligent solutions that harness the power of data to drive insights and automation.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Cloud Solutions</h3>
              <p className="text-foreground/70">
                Scalable cloud infrastructure and DevOps practices that optimize performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio-section" className="section-padding bg-background">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Portfolio</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Explore some of our recent projects that showcase our expertise and the value we deliver to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
                // liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact-section" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-300/5 backdrop-blur-sm"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-200/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-300/10 blur-3xl"></div>
        </div>

        <div className="content-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-700 mb-6">We would love to hear from you!</h2>
              <p className="text-lg text-gray-700 mb-8">
                Fill out our contact form with any questions, comments, work and/or project requests you may have.
              </p>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-gray-600">+1 519 282 9007</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-600">info@techtaste.ca</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Address</h3>
                    <p className="text-gray-600">Greenwood, Nova Scotia, Canada</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telephone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your project <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
