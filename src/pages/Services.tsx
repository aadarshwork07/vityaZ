import React from 'react';
import { FileCheck, Plane, Building2, GraduationCap, Globe, Users, BookOpen, Shield, Hotel, MapPin, Clock, Award, ArrowRight, Check, Download, Calendar } from 'lucide-react';

function StudyInIndiaPage() {
  // Merged services - reordered with Career Guidance first
  const services = [
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: "Career Guidance",
      description: "Professional development, career planning, and post-graduation assistance"
    },
    {
      icon: <FileCheck className="w-12 h-12 text-blue-600" />,
      title: "Admission Assistance",
      description: "Simplified documentation, university selection & interview preparation"
    },
    {
      icon: <Plane className="w-12 h-12 text-blue-600" />,
      title: "Visa & Immigration Support",
      description: "Fast visa processing with official invitation letters"
    },
    {
      icon: <Hotel className="w-12 h-12 text-blue-600" />,
      title: "Travel & Accommodation",
      description: "Complete travel assistance for a comfortable arrival"
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Enrollment & Campus Support",
      description: "University registration and 24/7 local student support"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Student Life & Academic Success",
      description: "Cultural events and special coaching for exams like FMGE (NEXT)"
    }
  ];

  const whyIndia = [
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: "Globally Recognized Degrees",
      description: "Engineering, Medicine, Management & More"
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
      title: "Affordable World-Class Education",
      description: "Quality education that doesn't break the bank"
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Safe & Friendly Environment",
      description: "Diverse, multicultural society for international students"
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: "Global Career Opportunities",
      description: "Excellent job placements for graduates"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "Get expert advice on programs, universities, and admission requirements"
    },
    {
      step: "02",
      title: "Documentation",
      description: "We'll guide you through the entire paperwork process"
    },
    {
      step: "03",
      title: "University Application",
      description: "Apply to multiple universities with our assistance"
    },
    {
      step: "04",
      title: "Visa Processing",
      description: "Fast-track visa approval with official invitation letters"
    },
    {
      step: "05",
      title: "Pre-Departure",
      description: "Comprehensive guidance before you leave"
    },
    {
      step: "06",
      title: "Arrival & Settlement",
      description: "Complete travel assistance and campus support"
    }
  ];

  const topUniversities = [
    {
      name: "IIT Delhi",
      image: "/api/placeholder/300/200",
      programs: "Engineering, Technology, Science",
      ranking: "Top 5 in India"
    },
    {
      name: "All India Institute of Medical Sciences",
      image: "/api/placeholder/300/200",
      programs: "Medicine, Healthcare, Research",
      ranking: "#1 Medical Institution"
    },
    {
      name: "Indian Institute of Management",
      image: "/api/placeholder/300/200",
      programs: "Business, Management, Economics",
      ranking: "Top Business School in Asia"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}


      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-white rounded-full"></div>
            <div className="absolute top-48 -right-32 w-96 h-96 bg-white rounded-full"></div>
            <div className="absolute -bottom-48 left-48 w-96 h-96 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 text-white mb-10 md:mb-0">
              <div className="inline-block mb-3">
                <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  TRUSTED BY THOUSANDS OF STUDENTS
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Your Trusted Partner for <span className="text-red-300">Studying in India</span>
              </h1>
              <p className="text-blue-100 mb-8 max-w-xl text-lg">
                Committed to helping international students fulfill their dream of studying in India with expert guidance and 24/7 support.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/apply" 
                  className="group px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow hover:shadow-lg transition-all duration-200 font-medium text-sm flex items-center gap-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a 
                  href="/universities" 
                  className="px-6 py-3 bg-transparent border border-white/40 hover:bg-white/10 text-white rounded-lg transition-all duration-200 font-medium text-sm flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Brochure</span>
                </a>
              </div>
            </div>
            
            <div className="md:w-2/5">
              
            </div>
          </div>
        </div>
      </section>

      {/* Why India Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-3">Why Choose India?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              India offers world-class education with global recognition at affordable costs, creating the perfect environment for international students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyIndia.map((item, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-3">Our Exclusive Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From application to graduation, we provide comprehensive support to ensure your academic journey in India is successful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="border-l-4 border-red-500 pl-4 py-2 mb-4">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-3">Our Simple Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've streamlined the application process to make your journey to study in India as smooth as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-blue-50 p-6 pt-10 rounded-xl shadow-md relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -top-5 left-6 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-3">Top Universities in India</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with India's leading educational institutions to provide you with the best academic opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {topUniversities.map((university, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
               
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{university.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{university.programs}</p>
                  <p className="text-gray-600">{university.ranking}</p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 mt-4 text-red-600 hover:text-red-700 font-medium"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="/universities" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition-colors font-medium"
            >
              <span>View All Universities</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-3">24/7 Student Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team provides round-the-clock assistance throughout your academic journey in India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Global Support Network</h3>
              <p className="text-gray-600">Round-the-clock assistance across multiple countries</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dedicated Counselors</h3>
              <p className="text-gray-600">Personal education counselor from application to graduation</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Local Office Support</h3>
              <p className="text-gray-600">On-ground support for immediate assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Intake */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md border border-blue-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/5">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Calendar className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center md:text-left">Upcoming Intake Dates</h3>
                <p className="text-gray-600 text-center md:text-left">Don't miss the application deadlines for the next academic year</p>
              </div>
              
              <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold text-blue-600">Fall Semester 2025</p>
                  <p className="text-gray-700">Application Deadline: June 30, 2025</p>
                  <p className="text-gray-700">Classes Begin: August 2025</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold text-blue-600">Spring Semester 2026</p>
                  <p className="text-gray-700">Application Deadline: December 15, 2025</p>
                  <p className="text-gray-700">Classes Begin: January 2026</p>
                </div>
                
                <div className="sm:col-span-2">
                  <a 
                    href="/apply" 
                    className="w-full block text-center py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    Schedule Pre-Application Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey to India?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Contact us today and begin your dream education with expert guidance every step of the way!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/apply" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold shadow hover:shadow-lg transition-colors"
            >
              Book Free Consultation
            </a>
            <a 
              href="/universities" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold shadow hover:shadow-lg transition-colors"
            >
              Download Information Pack
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}

export default StudyInIndiaPage;