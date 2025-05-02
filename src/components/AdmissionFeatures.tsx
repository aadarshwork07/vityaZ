import React from 'react';
import { GraduationCap, Award, Users, Globe, FileCheck, Clock, ArrowRight, Star, Plane, Home, PhoneCall, Wallet, BookOpen, Landmark, MapPin, School, Building, CreditCard, Check } from 'lucide-react';

const AdmissionFeatures = () => {
  const steps = [
    {
      number: "1",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Expert Counseling",
      description: "Personalized guidance for your academic journey",
      benefits: [
        "Top-ranked institutions worldwide",
        "Personalized university matching",
        "Career trajectory planning",
        "Course specialization advice"
      ]
    },
    {
      number: "2",
      icon: <FileCheck className="w-5 h-5" />,
      title: "Application Excellence",
      description: "Comprehensive application management",
      benefits: [
        "Document authentication",
        "Statement of purpose guidance",
        "Real-time application tracking",
        "98% acceptance rate"
      ]
    },
    {
      number: "3",
      icon: <CreditCard className="w-5 h-5" />,
      title: "Scholarship Gateway",
      description: "Maximizing financial opportunities",
      benefits: [
        "Scholarship matching system",
        "Financial planning support",
        "Grant application assistance",
        "ROI analysis"
      ]
    },
    {
      number: "4",
      icon: <Plane className="w-5 h-5" />,
      title: "Global Mobility",
      description: "Seamless travel & visa solutions",
      benefits: [
        "Visa interview preparation",
        "Travel documentation",
        "Arrival coordination",
        "Local orientation"
      ]
    },
    {
      number: "5",
      icon: <Building className="w-5 h-5" />,
      title: "Housing Solutions",
      description: "Secure accommodation services",
      benefits: [
        "Pre-vetted housing options",
        "Virtual accommodation tours",
        "Lease negotiation support",
        "Safety verification"
      ]
    },
    {
      number: "6",
      icon: <PhoneCall className="w-5 h-5" />,
      title: "24/7 Concierge",
      description: "Round-the-clock student support",
      benefits: [
        "Emergency assistance",
        "Cultural integration",
        "Healthcare guidance",
        "Local support network"
      ]
    }
  ];

  const stats = [
    { value: "15K+", label: "Students Placed" },
    { value: "98%", label: "Success Rate" },
    { value: "200+", label: "Partner Universities" },
    { value: "24/7", label: "Support Available" }
  ];

  const additionalServices = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Cultural Integration",
      description: "Comprehensive cultural orientation and adaptation programs"
    },
    {
      icon: <School className="w-5 h-5" />,
      title: "Academic Excellence",
      description: "Ongoing mentorship and academic support services"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Global Network",
      description: "Connect with a worldwide community of international students"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section - More compact and modern */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-3">
            <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
              TRUSTED BY 15,000+ STUDENTS WORLDWIDE
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Your Gateway to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500">Academic Excellence</span>
          </h1>
          <p className="text-sm text-red-600 font-medium mb-4">
            Comprehensive Support Services – 100% Free, 100% Committed
          </p>
          
          {/* Call-to-Action Button with blue theme */}
          <div className="flex justify-center mt-8 mb-12">
            <a 
              href="#" 
              className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow hover:shadow-md transition-all duration-200 font-medium text-sm relative overflow-hidden hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-md border border-blue-100">
            <p className="text-sm text-gray-600 leading-relaxed">
              At Vityaz Global, we transform educational aspirations into reality. Our comprehensive support system ensures a seamless journey from application to graduation.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section - Sleek gradient cards */}
      <div className="container mx-auto px-4 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} 
                 className="relative overflow-hidden rounded-lg p-3 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-80 rounded-lg blur-sm group-hover:blur-none transition-all duration-500"></div>
              <div className="relative bg-white rounded-lg p-3 shadow-sm h-full border border-white/20 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps Section - Compact, interactive cards */}
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Journey With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A streamlined process designed for your success</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-80 rounded-lg"></div>
              
              {/* Card content */}
              <div className="relative bg-white rounded-lg p-4 h-full border border-white/20 flex flex-col transform group-hover:translate-y-1 transition-transform duration-300">
                {/* Step number - more visible */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md z-10">
                  {step.number}
                </div>

                {/* Content layout */}
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="relative w-10 h-10 mb-3 mt-1 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-500/10 rounded-lg"></div>
                    <div className="text-blue-600">
                      {React.cloneElement(step.icon, { className: "w-5 h-5" })}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-1 text-gray-800">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-2">{step.description}</p>
                  
                  {/* Benefits - shown on hover */}
                  <div className="mt-auto overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                    <div className="pt-2 border-t border-blue-100">
                      <ul className="text-xs text-gray-600 space-y-1">
                        {step.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-3 h-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services - Clean, minimalist cards */}
      <div className="bg-gradient-to-b from-blue-50/50 to-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-2 text-gray-900">
            Comprehensive Support Ecosystem
          </h2>
          <p className="text-center text-gray-600 text-sm mb-6 max-w-2xl mx-auto">
            Beyond academics, we ensure your complete well-being throughout your educational journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} 
                   className="group relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-80 rounded-lg"></div>
                <div className="relative bg-white rounded-lg p-4 shadow-sm h-full border border-white/40 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white transform group-hover:rotate-3 transition-transform duration-300">
                      {React.cloneElement(service.icon, { className: "w-4 h-4" })}
                    </div>
                    <h3 className="text-sm font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-xs text-gray-600">{service.description}</p>
                  
                  {/* Hover link */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-700">
                      <span>Learn more</span>
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Final CTA Section */}
      <div className="bg-white py-10 border-t border-blue-100/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 py-8 md:px-8 md:py-10 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Begin Your Global Education Journey Today</h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of successful students who have transformed their academic future with our guidance
              </p>
              <a 
                href="#" 
                className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:shadow-md transition-all duration-200 font-medium text-sm hover:scale-105 hover:bg-red-700"
              >
                Schedule Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFeatures;