import React from 'react';
import { Stethoscope, GraduationCap, Award, DollarSign, Clock, MapPin, BookOpen, Users, Star, Globe, ArrowRight, Download, HeartPulse, Microscope, Building2, Plane, Phone, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MbbsEurope = () => {
  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: "International Standards",
      description: "Study in globally recognized universities with modern infrastructure and cutting-edge facilities"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Global Recognition",
      description: "Degrees recognized worldwide including WHO, UNESCO, and respective Medical Councils"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: "Affordable Fees",
      description: "Quality medical education at competitive prices compared to Western universities"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Duration",
      description: "Typically 6 years including clinical rotations and advanced practical training"
    }
  ];

  const universities = [
    {
      name: "Carol Davila University",
      location: "Bucharest, Romania",
      ranking: "Top Medical University",
      image: "/api/placeholder/800/500",
      features: [
        "Historic Medical Institution",
        "Advanced Research Facilities",
        "International Faculty",
        "Modern Teaching Hospitals"
      ]
    },
    {
      name: "Nicolae Testemițanu University",
      location: "Chișinău, Moldova",
      ranking: "#1 in Moldova",
      image: "/api/placeholder/800/500",
      features: [
        "Quality Medical Training",
        "Clinical Experience",
        "Research Programs",
        "Affordable Education"
      ]
    },
    {
      name: "Shandong University",
      location: "Jinan, China",
      ranking: "Top-tier Medical School",
      image: "/api/placeholder/800/500",
      features: [
        "Modern Medical Campus",
        "International Programs",
        "Research Opportunities",
        "Clinical Partnerships"
      ]
    }
  ];

  const countries = [
    {
      name: "Romania",
      flag: "🇷🇴",
      fee: "€7,000/year",
      features: [
        "EU Member Country",
        "English-taught Programs",
        "Historical Medical Tradition",
        "Rich Cultural Experience"
      ]
    },
    {
      name: "Moldova",
      flag: "🇲🇩",
      fee: "€5,000/year",
      features: [
        "Affordable Tuition",
        "European Medical Curriculum",
        "Practical Training Focus",
        "Student-friendly Cities"
      ]
    },
    {
      name: "China",
      flag: "🇨🇳",
      fee: "€6,500/year",
      features: [
        "State-of-the-art Facilities",
        "Growing Medical Hub",
        "International Environment",
        "Scholarship Opportunities"
      ]
    },
    {
      name: "Russia",
      flag: "🇷🇺",
      fee: "€4,500/year",
      features: [
        "Competitive Fees",
        "Historical Medical Excellence",
        "Large International Community",
        "Globally Recognized Degrees"
      ]
    }
  ];

  const advantages = [
    {
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
      title: "Global Medical Curriculum",
      description: "Study medicine following international standards and practices"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "International Recognition",
      description: "Practice medicine worldwide with your degree"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Multicultural Environment",
      description: "Study alongside students from around the world"
    },
    {
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
      title: "Clinical Experience",
      description: "Hands-on training in modern teaching hospitals"
    }
  ];

  return (
    <div className=" bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 py-24">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern-dots-white/10 mix-blend-overlay"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              <div>
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-2">
                  INTERNATIONAL EDUCATION
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  MBBS Abroad
                </h1>
              </div>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
              Study medicine in prestigious universities across Romania, Moldova, China, and Russia with world-class facilities
              and international recognition. Begin your journey to becoming a global medical professional.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm transform hover:scale-105 transition-transform">
                <Download className="w-5 h-5" />
                Download MBBS Guide
              </button>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-sm text-white/70">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-white/70">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5000+</div>
                <div className="text-sm text-white/70">Placements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">95%</div>
                <div className="text-sm text-white/70">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Benefits of Studying MBBS Abroad
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Discover the advantages of pursuing your medical degree internationally with Vityaz Global's comprehensive support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative group">
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 h-24 w-24 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="bg-blue-50 rounded-xl p-4 inline-block mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries & Fees */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              DESTINATIONS
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Study Destinations & Tuition Fees
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Explore affordable, high-quality medical education options across these student-friendly destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
                {/* Country header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{country.flag}</div>
                    <h3 className="text-xl font-bold text-gray-800">{country.name}</h3>
                  </div>
                  <div className="px-3 py-1 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 group-hover:bg-blue-100 transition-colors">
                    {country.fee}
                  </div>
                </div>
                
                {/* Country features */}
                <ul className="space-y-3">
                  {country.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link to={`/countries/${country.name.toLowerCase()}`} className="flex items-center justify-between text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    <span>Learn more</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              PARTNER INSTITUTIONS
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Featured Medical Universities
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Discover our partner universities offering world-class medical education with global recognition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                {/* University image with overlay */}
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${university.image})` }}
                  />
                  
                  {/* Ranking badge */}
                  <div className="absolute top-4 right-4 z-20 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {university.ranking}
                  </div>
                  
                  {/* University location on image */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{university.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* University info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {university.name}
                  </h3>
                  
                  <ul className="space-y-3 mb-6">
                    {university.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={`/universities/${university.name.toLowerCase().replace(/\s+/g, '-')}`} className="inline-block w-full py-3 bg-blue-50 text-blue-600 rounded-lg text-center font-medium hover:bg-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link 
              to="/universities"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform font-medium"
            >
              View All Universities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              BENEFITS
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Medical Education Advantages
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Experience these key benefits when you choose to study medicine abroad with Vityaz Global
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Simple Admission Process
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              We guide you through every step of your journey to studying medicine abroad
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Process steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2"></div>
            
            <div className="space-y-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Application & Document Submission</h3>
                  <p className="text-gray-600">Complete our simple application form and submit your educational documents for verification</p>
                </div>
                
                <div className="md:w-12 relative flex justify-center order-1 md:order-2">
                  <div className="w-12 h-12 bg-red-600 rounded-full text-white flex items-center justify-center font-bold shadow-lg z-10">1</div>
                </div>
                
                <div className="md:w-1/2 order-3">
                  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                    <GraduationCap className="w-8 h-8 text-blue-600 mb-2" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 order-3 md:order-1">
                  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                    <Building2 className="w-8 h-8 text-blue-600 mb-2" />
                  </div>
                </div>
                
                <div className="md:w-12 relative flex justify-center order-1 md:order-2">
                  <div className="w-12 h-12 bg-red-600 rounded-full text-white flex items-center justify-center font-bold shadow-lg z-10">2</div>
                </div>
                
                <div className="md:w-1/2 md:text-left order-2 md:order-3">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">University Selection & Admission</h3>
                  <p className="text-gray-600">We help you select the best university and secure your admission with official documentation</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Visa Processing & Pre-Departure</h3>
                  <p className="text-gray-600">Complete assistance with visa application and comprehensive pre-departure guidance</p>
                </div>
                
                <div className="md:w-12 relative flex justify-center order-1 md:order-2">
                  <div className="w-12 h-12 bg-red-600 rounded-full text-white flex items-center justify-center font-bold shadow-lg z-10">3</div>
                </div>
                
                <div className="md:w-1/2 order-3">
                  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                    <Plane className="w-8 h-8 text-blue-600 mb-2" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 order-3 md:order-1">
                  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                    <HeartPulse className="w-8 h-8 text-blue-600 mb-2" />
                  </div>
                </div>
                
                <div className="md:w-12 relative flex justify-center order-1 md:order-2">
                  <div className="w-12 h-12 bg-red-600 rounded-full text-white flex items-center justify-center font-bold shadow-lg z-10">4</div>
                </div>
                
                <div className="md:w-1/2 md:text-left order-2 md:order-3">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Arrival & Ongoing Support</h3>
                  <p className="text-gray-600">From airport pickup to accommodation and continued academic support throughout your course</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern-dots-white/10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Medical Journey Abroad Today
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get expert guidance for MBBS admission in top universities across Europe and Asia with comprehensive support at every step
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
              >
                <GraduationCap className="w-5 h-5" />
                Apply Now
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm transform hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5" />
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MbbsEurope;