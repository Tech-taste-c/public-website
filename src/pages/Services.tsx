
import React from 'react';
import { ArrowRight, Code, Database, Globe, Laptop, Lightbulb, RefreshCw, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-secondary/50">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to meet your unique business needs and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 animate-slide-up">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Custom Software Development</h3>
                <p className="text-foreground/80 mb-4">
                  Tailored software solutions designed to address your specific business challenges, streamline operations, and drive growth. We build scalable, maintainable applications that evolve with your needs.
                </p>
                <div className="space-y-2 text-foreground/70 mb-6">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Enterprise software solutions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Process automation systems</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Workflow optimization tools</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Custom CRM and ERP integrations</p>
                  </div>
                </div>
                <Link to="/contact" className="text-primary flex items-center text-sm hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Web Development</h3>
                <p className="text-foreground/80 mb-4">
                  Stunning, responsive websites and web applications that deliver exceptional user experiences. We combine cutting-edge front-end technologies with robust back-end solutions to create web platforms that engage and convert.
                </p>
                <div className="space-y-2 text-foreground/70 mb-6">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Progressive web applications (PWAs)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>E-commerce platforms</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Content management systems</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Web portals and dashboards</p>
                  </div>
                </div>
                <Link to="/contact" className="text-primary flex items-center text-sm hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Mobile App Development</h3>
                <p className="text-foreground/80 mb-4">
                  Native and cross-platform mobile applications that engage users and extend your digital presence. We design and develop intuitive, feature-rich apps for iOS, Android, and other platforms.
                </p>
                <div className="space-y-2 text-foreground/70 mb-6">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Native iOS and Android applications</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Cross-platform solutions (React Native, Flutter)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Mobile-specific UX/UI design</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>App store optimization and deployment</p>
                  </div>
                </div>
                <Link to="/contact" className="text-primary flex items-center text-sm hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Laptop className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">UI/UX Design</h3>
                <p className="text-foreground/80 mb-4">
                  Intuitive, beautiful interfaces that enhance user satisfaction and drive engagement. Our design process focuses on creating experiences that are both aesthetically pleasing and functionally effective.
                </p>
                <div className="space-y-2 text-foreground/70 mb-6">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>User research and persona development</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Information architecture</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Wireframing and prototyping</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Visual design and interaction patterns</p>
                  </div>
                </div>
                <Link to="/contact" className="text-primary flex items-center text-sm hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">AI & ML Solutions</h3>
                <p className="text-foreground/80 mb-4">
                  Intelligent solutions that harness the power of data to drive insights and automation. We develop AI and machine learning applications that help you make better decisions and streamline complex processes.
                </p>
                <div className="space-y-2 text-foreground/70 mb-6">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Predictive analytics models</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Natural language processing</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Computer vision applications</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Recommendation systems</p>
                  </div>
                </div>
                <Link to="/contact" className="text-primary flex items-center text-sm hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 animate-slide-up" style={{ animationDelay: "500ms" }}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Cloud Solutions & DevOps</h3>
                <p className="text-foreground/80 mb-4">
                  Scalable cloud infrastructure and DevOps practices that optimize performance and reliability. We help you leverage cloud technologies and implement efficient development operations.
                </p>
                <div className="space-y-2 text-foreground/70 mb-6">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Cloud migration and optimization</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Infrastructure as Code (IaC)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>CI/CD pipeline implementation</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Serverless architecture design</p>
                  </div>
                </div>
                <Link to="/contact" className="text-primary flex items-center text-sm hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 7 */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 animate-slide-up" style={{ animationDelay: "600ms" }}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Digital Transformation Consulting</h3>
                <p className="text-foreground/80 mb-4">
                  Strategic guidance to help your business navigate digital change and innovation. We provide expert advice on technology adoption, process improvement, and organizational transformation.
                </p>
                <div className="space-y-2 text-foreground/70 mb-6">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Digital strategy development</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Technology stack assessment</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Business process optimization</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Change management support</p>
                  </div>
                </div>
                <Link to="/contact" className="text-primary flex items-center text-sm hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 8 */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 animate-slide-up" style={{ animationDelay: "700ms" }}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Maintenance & Support</h3>
                <p className="text-foreground/80 mb-4">
                  Ongoing technical support and maintenance to ensure your software continues to perform optimally. We provide timely updates, bug fixes, and enhancements to keep your systems running smoothly.
                </p>
                <div className="space-y-2 text-foreground/70 mb-6">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Regular system updates and security patches</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Performance monitoring and optimization</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Technical issue resolution</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>System enhancement and feature additions</p>
                  </div>
                </div>
                <Link to="/contact" className="text-primary flex items-center text-sm hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-secondary/50">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Development Process</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We follow a proven methodology that ensures high-quality deliverables and a smooth, collaborative experience.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2"></div>

            {/* Step 1 */}
            <div className="relative md:max-w-[40%] md:ml-auto md:mr-[10%] mb-16 md:mb-24 animate-fade-in">
              <div className="hidden md:block absolute left-0 top-7 w-8 h-8 rounded-full bg-primary/20 transform -translate-x-[calc(100%+2rem)] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-xl font-medium mb-3 flex md:block">
                <span className="w-8 h-8 inline-flex md:hidden items-center justify-center bg-primary/20 rounded-full text-primary font-bold mr-3">1</span>
                Discovery & Planning
              </h3>
              <p className="text-foreground/80">
                We begin by understanding your business goals, target users, and project requirements. Through collaborative workshops and research, we define the project scope, timeline, and deliverables.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative md:max-w-[40%] md:mr-auto md:ml-[10%] mb-16 md:mb-24 animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div className="hidden md:block absolute right-0 top-7 w-8 h-8 rounded-full bg-primary/20 transform translate-x-[calc(100%+2rem)] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-xl font-medium mb-3 flex md:block">
                <span className="w-8 h-8 inline-flex md:hidden items-center justify-center bg-primary/20 rounded-full text-primary font-bold mr-3">2</span>
                Design & Prototyping
              </h3>
              <p className="text-foreground/80">
                Our designers create wireframes and interactive prototypes to visualize the solution. We iterate based on your feedback until we have a design that perfectly aligns with your vision.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative md:max-w-[40%] md:ml-auto md:mr-[10%] mb-16 md:mb-24 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="hidden md:block absolute left-0 top-7 w-8 h-8 rounded-full bg-primary/20 transform -translate-x-[calc(100%+2rem)] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-xl font-medium mb-3 flex md:block">
                <span className="w-8 h-8 inline-flex md:hidden items-center justify-center bg-primary/20 rounded-full text-primary font-bold mr-3">3</span>
                Development
              </h3>
              <p className="text-foreground/80">
                Our engineers implement the solution using agile development practices. We maintain transparency through regular progress updates and demos, ensuring you're involved throughout the process.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative md:max-w-[40%] md:mr-auto md:ml-[10%] mb-16 md:mb-24 animate-fade-in" style={{ animationDelay: "450ms" }}>
              <div className="hidden md:block absolute right-0 top-7 w-8 h-8 rounded-full bg-primary/20 transform translate-x-[calc(100%+2rem)] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-xl font-medium mb-3 flex md:block">
                <span className="w-8 h-8 inline-flex md:hidden items-center justify-center bg-primary/20 rounded-full text-primary font-bold mr-3">4</span>
                Testing & Quality Assurance
              </h3>
              <p className="text-foreground/80">
                We conduct thorough testing to ensure the solution meets our high standards for performance, security, and usability. Our QA process catches issues before they impact your business.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative md:max-w-[40%] md:ml-auto md:mr-[10%] animate-fade-in" style={{ animationDelay: "600ms" }}>
              <div className="hidden md:block absolute left-0 top-7 w-8 h-8 rounded-full bg-primary/20 transform -translate-x-[calc(100%+2rem)] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-xl font-medium mb-3 flex md:block">
                <span className="w-8 h-8 inline-flex md:hidden items-center justify-center bg-primary/20 rounded-full text-primary font-bold mr-3">5</span>
                Deployment & Ongoing Support
              </h3>
              <p className="text-foreground/80">
                We carefully launch your solution and provide ongoing maintenance and support. Our relationship continues as we help you adapt and enhance your software as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Discuss Your Project?</h2>
            <p className="text-lg mb-8 text-foreground/80">
              Contact us today to schedule a consultation and learn how our services can address your specific needs.
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

export default Services;
