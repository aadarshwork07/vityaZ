import React, { useState } from 'react';
import { GraduationCap, Globe, Landmark, Lightbulb, DollarSign, Shield, Award, MapPin, Building, Rocket, FlaskConical, Stethoscope, Cpu, Languages, BookOpen, CheckCircle, ArrowRight, Users, HeartPulse, Quote, Star, Mail, Phone, Download, Calendar, FileText } from 'lucide-react';

const IndiaEducation = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Expanded list of Indian leaders

   // Expanded list of Indian leaders with 5-6 additional entries
   const leaders = [
    {
      name: "Sundar Pichai",
      role: "CEO, Google",
      education: "IIT Kharagpur",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Satya Nadella",
      role: "CEO, Microsoft",
      education: "Manipal Institute of Technology",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Indra Nooyi",
      role: "Former CEO, PepsiCo",
      education: "IIM Calcutta",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Parag Agrawal",
      role: "Former CEO, Twitter",
      education: "IIT Bombay",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Raghuram Rajan",
      role: "Former Governor, RBI",
      education: "IIT Delhi & IIM Ahmedabad",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    // Additional leaders
    {
      name: "Shantanu Narayen",
      role: "CEO, Adobe",
      education: "Osmania University",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Ajay Banga",
      role: "President, World Bank",
      education: "St. Stephen's College, Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Leena Nair",
      role: "CEO, Chanel",
      education: "XLRI Jamshedpur",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Arvind Krishna",
      role: "CEO, IBM",
      education: "IIT Kanpur",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Nikesh Arora",
      role: "CEO, Palo Alto Networks",
      education: "IIT BHU",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Kiran Mazumdar-Shaw",
      role: "Chair, Biocon Limited",
      education: "Bangalore University",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const universities = [
    {
      name: "Indian Institute of Technology (IIT)",
      location: "Multiple Locations",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "Top Engineering Institution Globally"
    },
    {
      name: "All India Institute of Medical Sciences",
      location: "New Delhi, India",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "#1 Medical University in India"
    },
    {
      name: "Indian Institute of Management (IIM)",
      location: "Multiple Locations",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "Top Business Schools in Asia"
    },
    {
      name: "Jawaharlal Nehru University",
      location: "New Delhi, India",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "Excellence in Humanities & Social Sciences"
    }
  ];

  const innovations = [
    {
      title: "Space Technology",
      description: "ISRO's successful Chandrayaan-3 and Mangalyaan missions",
      icon: <Rocket className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Information Technology",
      description: "Global leader in IT services and software development",
      icon: <Cpu className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Pharmaceuticals",
      description: "Known as the 'Pharmacy of the World' with crucial vaccine development",
      icon: <FlaskConical className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Healthcare",
      description: "Advanced medical research and affordable healthcare solutions",
      icon: <Stethoscope className="w-8 h-8 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const courses = [
    {
      category: "Engineering & Technology",
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
      examples: ["AI & Machine Learning", "Robotics", "Computer Science", "Mechanical Engineering"]
    },
    {
      category: "Medicine & Healthcare",
      icon: <Stethoscope className="w-6 h-6 text-indigo-600" />,
      examples: ["MBBS", "Biotechnology", "Pharmacy", "Ayurveda"]
    },
    {
      category: "Business & Management",
      icon: <Building className="w-6 h-6 text-indigo-600" />,
      examples: ["MBA", "Finance", "Entrepreneurship", "Marketing"]
    },
    {
      category: "Humanities & Social Sciences",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      examples: ["History", "Political Science", "Psychology", "Sociology"]
    },
    {
      category: "Emerging Fields",
      icon: <Rocket className="w-6 h-6 text-indigo-600" />,
      examples: ["Data Science", "Cybersecurity", "Renewable Energy", "Space Science"]
    }
  ];

  // Images for the "Why Choose India" cards
  const whyIndiaCardImages = [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Rich History & Modern Outlook
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Technology & Innovation
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Affordable Education
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // English-Medium Education
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Diverse Course Offerings
    "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Global Recognition
  ];





  const tabs = [
    { 
      title: "Rich History & Modern Outlook", 
      image:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      icon: <Landmark className="w-5 h-5" />,
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-700">A Nation with a Rich History and a Modern Outlook</h3>
            <p className="text-gray-700 mb-4">
              India, one of the world's oldest civilizations, has been a global center of learning for centuries. The ancient universities of Nalanda and Takshashila attracted scholars from across the world, making India a pioneer in education and intellectual pursuits.
            </p>
            <p className="text-gray-700">
              Today, India is a rapidly growing global economy, home to smart cities, modern infrastructure, and a thriving education sector. It seamlessly integrates tradition with innovation, offering students the best of both worlds—a deep cultural heritage and a progressive academic environment.
            </p>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Ancient and Modern India" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
              <div className="p-6">
                <span className="bg-white/90 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Tradition meets Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "Technology & Innovation", 
      image:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',

      icon: <Lightbulb className="w-5 h-5" />,
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-700">A Hub of Science, Technology, and Innovation</h3>
          <p className="text-gray-700 mb-6">
            India is at the forefront of scientific research, technology, and space exploration, making it an attractive destination for students interested in STEM fields. The country has made significant advancements in various domains.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {innovations.map((item, index) => (
              <div key={index} className="bg-white text-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    {item.icon}
                    <h4 className="font-bold text-blue-700 text-lg">{item.title}</h4>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-gray-700 italic text-center">
            International students in India gain direct exposure to these advancements, with opportunities for internships, hands-on research, and collaborations with top industry leaders.
          </p>
        </div>
      )
    },
    { 
      title: "Affordable Education", 
      image:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',

      icon: <DollarSign className="w-5 h-5" />,
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Affordable Tuition Fees & Cost of Living</h3>
            <p className="text-gray-700 mb-4">
              One of the most attractive aspects of studying in India is the affordability of education and living expenses. Compared to the US, UK, Canada, and Australia, India provides world-class education at a fraction of the cost.
            </p>
            
            <div className="bg-white p-5 rounded-xl shadow-md mb-4">
              <h4 className="font-bold text-lg mb-2 text-blue-700">Low Tuition Fees:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Engineering and Technology degrees at IITs and NITs cost significantly less than equivalent programs in Western countries.</li>
                <li>Medical education at AIIMS and other government institutions is highly affordable, with some of the lowest tuition fees globally.</li>
                <li>Business and management programs at IIMs and private universities offer excellent ROI compared to international MBA programs.</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-md mb-4">
              <h4 className="font-bold text-lg mb-2 text-blue-700">Scholarships Available:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Study in India (SII):</span> Government initiative offering tuition fee waivers</li>
                <li><span className="font-medium">ICCR Scholarships:</span> For international students from various countries</li>
                <li><span className="font-medium">University Grants:</span> Many institutions offer merit-based financial assistance</li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-blue-50 p-5 rounded-xl shadow-md mb-4">
              <h4 className="font-bold text-lg mb-2 text-blue-700">Budget-Friendly Cost of Living:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Accommodation options range from on-campus hostels to private apartments, catering to different budgets.</li>
                <li>Public transportation, food, and entertainment are much more affordable than in Western countries.</li>
                <li>Daily expenses, including internet, utilities, and leisure activities, are cost-effective, allowing students to maintain a comfortable lifestyle.</li>
                <li>Student cities like Delhi, Bangalore, and Chennai offer excellent amenities at reasonable prices.</li>
              </ul>
            </div>
            
            <div className="bg-blue-700 text-white p-5 rounded-xl shadow-lg">
              <p className="font-medium italic">
                "With low tuition fees and an affordable lifestyle, India ensures that international students receive a world-class education without financial burden."
              </p>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "English-Medium Education", 
      image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",

      icon: <Languages className="w-5 h-5" />,
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-700">English-Medium Education with No Language Barriers</h3>
            <p className="text-gray-700 mb-4">
              Most higher education institutions in India teach in English, making it easier for international students to adapt without facing language barriers.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-blue-700 mb-2">Widely Available English Instruction</h4>
                <p className="text-gray-700">All major universities and colleges conduct classes, examinations, and research in English, ensuring seamless academic integration for international students.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-blue-700 mb-2">No Language Barrier</h4>
                <p className="text-gray-700">English is commonly spoken in academic and professional settings throughout India, ensuring smooth communication both on and off campus.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-blue-700 mb-2">Globally Recognized Degrees</h4>
                <p className="text-gray-700">Indian universities provide qualifications that are respected worldwide, helping graduates excel in global careers with documentation and credentials in English.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-blue-600" />
                <h4 className="font-bold text-lg">English as Academic Language</h4>
              </div>
              <p className="text-gray-700">
                India has one of the largest English-speaking populations in the world, with English serving as the primary language of higher education across the country.
              </p>
            </div>
            
            <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Students in classroom" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="bg-white/90 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    International-friendly learning environment
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-700 text-white p-4 rounded-lg">
              <p className="italic">
                "With English as the medium of instruction, international students can focus on their studies without worrying about language barriers."
              </p>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "Diverse Course Offerings", 
      image:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",

      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Diverse Course Offerings Across Disciplines</h3>
          <p className="text-gray-700 mb-6">
            India provides a broad range of academic disciplines across various institutions, catering to diverse interests and career aspirations.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {course.icon}
                  </div>
                  <h4 className="font-bold text-lg text-blue-700">{course.category}</h4>
                </div>
                
                <ul className="space-y-2">
                  {course.examples.map((example, i) => (
                    <li key={i} className="flex items-center text-gray-700 gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="font-bold text-xl mb-3 text-center text-blue-700">Specialized Programs for International Students</h4>
            <p className="text-gray-700 text-center">
              Many Indian universities offer specialized programs designed specifically for international students, with flexible curricula, exchange opportunities, and global perspectives integrated into the coursework.
            </p>
          </div>
        </div>
      )
    },
    { 
      title: "Global Recognition", 
      image:"https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",

      icon: <Globe className="w-5 h-5" />,
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Globally Recognized Degrees & Indian Professionals Leading the World</h3>
          <p className="text-gray-700 mb-6">
            India's top universities offer internationally accredited degrees across various disciplines, and many Indian-educated professionals hold leadership positions in global organizations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-blue-600" />
                <h4 className="text-xl font-bold text-gray-800">Top Universities</h4>
              </div>
              <ul className="space-y-3">
                {universities.map((uni, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{uni.name}</p>
                      <p className="text-sm text-gray-700">{uni.ranking}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                Global Leaders with Indian Education
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {leaders.slice(0, 4).map((leader, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="h-36 overflow-hidden">
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-lg">{leader.name}</h5>
                      <p className="text-blue-600">{leader.role}</p>
                      <p className="text-sm text-gray-700">{leader.education}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-700 italic">
            With a degree from an Indian university, students gain a competitive edge in the global job market, with opportunities for employment in technology, business, medicine, and research.
          </p>
        </div>
      )
    }
  ];

  // Student testimonials
  const testimonials = [
    {
      name: "Emily Johnson",
      country: "United States",
      program: "Computer Science",
      university: "IIT Delhi",
      quote: "Studying in India has been a life-changing experience. The academic rigor combined with the rich cultural immersion has given me a unique perspective that I couldn't have gained elsewhere.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Mohammed Al-Farsi",
      country: "UAE",
      program: "Business Administration",
      university: "IIM Bangalore",
      quote: "The quality of education at a fraction of the cost compared to Western universities is incredible. The professors are excellent, and the networking opportunities have been invaluable.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Liu Wei",
      country: "China",
      program: "Biotechnology",
      university: "JNU",
      quote: "India's approach to blending traditional knowledge with modern science has given me insights I couldn't have found elsewhere. The research facilities are excellent and internationally competitive.",
      image: "/api/placeholder/200/200"
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "What are the admission requirements for international students?",
      answer: "Requirements vary by institution and program, but generally include academic transcripts, English proficiency tests (IELTS/TOEFL), passport, and application fees. Many universities offer direct admission for international students without entrance exams."
    },
    {
      question: "How affordable is studying in India compared to other countries?",
      answer: "India offers significantly lower tuition fees compared to the US, UK, Canada, and Australia. Depending on the institution and program, tuition can range from $3,000-$10,000 per year, with living expenses averaging $2,500-$5,000 annually."
    },
    {
      question: "Is it safe for international students to study in India?",
      answer: "University campuses in India are generally very safe with dedicated security personnel and international student support offices. Major educational hubs like Delhi, Mumbai, Bangalore, and Pune have vibrant international communities and are accustomed to hosting foreign students."
    },
    {
      question: "Are Indian degrees recognized internationally?",
      answer: "Yes, degrees from accredited Indian universities are recognized worldwide. Many Indian institutions have partnerships with universities across the globe and follow international academic standards, particularly in fields like engineering, medicine, and management."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
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
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <div className="inline-block mb-3">
                <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  WORLD-CLASS EDUCATION
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Why Study in <span className="text-red-300">India?</span>
              </h1>
              <p className="text-blue-100 mb-8 max-w-xl text-lg">
                India offers affordable, high-quality education in English, with a seamless admission process and an extensive range of courses across globally recognized institutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#benefits" 
                  className="group px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow hover:shadow-lg transition-all duration-200 font-medium text-sm flex items-center gap-2"
                >
                  <span>Explore Benefits</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a 
                  href="#universities" 
                  className="px-6 py-3 bg-transparent border border-white/40 hover:bg-white/10 text-white rounded-lg transition-all duration-200 font-medium text-sm flex items-center gap-2"
                >
                  <span>View Universities</span>
                </a>
              </div>
            </div>
            
            
         
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">900+</div>
              <p className="text-gray-700">Universities</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center">
              <div className="flex justify-center mb-3">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">40,000+</div>
              <p className="text-gray-700">Colleges</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center">
              <div className="flex justify-center mb-3">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">10,000+</div>
              <p className="text-gray-700">Courses</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center">
              <div className="flex justify-center mb-3">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">75,000+</div>
              <p className="text-gray-700">International Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              WHY CHOOSE INDIA
            </span>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">A Life-Changing Educational Experience</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover why India is becoming a preferred destination for international students seeking quality education at affordable costs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tabs.slice(0, 6).map((tab, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                onClick={() => setActiveTab(index)}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={tab.image} 
                    alt={tab.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent flex items-center justify-center">
                    <div className="bg-white/20 p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white w-10 h-10 flex items-center justify-center">
                        {tab.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-2 group-hover:text-blue-600 transition-colors">
                    {tab.title}
                  </h3>
                  <p className="text-gray-700">
                    {index === 0 && "Blend of ancient wisdom and modern innovation"}
                    {index === 1 && "Leading in science, technology, and space exploration"}
                    {index === 2 && "World-class education at a fraction of global costs"}
                    {index === 3 && "English-medium education with no language barriers"}
                    {index === 4 && "Diverse courses across all academic disciplines"}
                    {index === 5 && "Degrees respected by employers worldwide"}
                  </p>
                  <div className="mt-4 pt-2 flex justify-end">
                    <div className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Information Section */}
      <section id="detailed-info" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-blue-50 rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-blue-200">
              <div className="flex overflow-x-auto hide-scrollbar">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all ${
                      activeTab === index 
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/70' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/30'
                    }`}
                  >
                    <div className={`p-1.5 rounded-full ${activeTab === index ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      {tab.icon}
                    </div>
                    <span>{tab.title}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-8">
              {tabs[activeTab].content}
            </div>
          </div>
        </div>
      </section>
      
      {/* Universities Section */}
      <section id="universities" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              EDUCATIONAL EXCELLENCE
            </span>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Top Universities in India</h2>
            <p className="text-lg text-gray-700">Globally recognized institutions offering world-class education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {universities.map((university, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full group border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                    <div className="p-6">
                      <span className="bg-white/90 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {university.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700 group-hover:text-blue-600 transition-colors">{university.name}</h3>
                  <p className="text-blue-600 font-medium">{university.ranking}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center gap-1 group-hover:translate-x-2 transition-transform duration-300">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg shadow transition-colors font-medium hover:bg-red-700"
            >
              <span>View All Universities</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Global Leaders Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              GLOBAL IMPACT
            </span>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Home to Global Business Leaders</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Many Indian university graduates have gone on to lead some of the world's biggest companies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leaders.slice(0, 6).map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-blue-700 group-hover:text-blue-600 transition-colors">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{leader.role}</p>
                  <div className="flex items-center gap-2 text-gray-700">
                    <GraduationCap className="w-4 h-4" />
                    <p>{leader.education}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Student Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              STUDENT EXPERIENCES
            </span>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from international students about their transformative experiences in India
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex justify-end mb-2">
                    <Quote className="w-8 h-8 text-blue-200" />
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <h4 className="font-bold text-blue-700">{testimonial.name}</h4>
                      <p className="text-gray-700">{testimonial.country}</p>
                      <p className="text-blue-600 text-sm">{testimonial.program}, {testimonial.university}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Everything you need to know about studying in India
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-blue-700 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
            >
              <span>View All FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              GET STARTED
            </span>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Simple Admission Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We've streamlined the admission process to make your journey to study in India as smooth as possible
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
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
            ].map((step, index) => (
              <div key={index} className="bg-blue-50 p-6 pt-10 rounded-xl shadow-md relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -top-5 left-6 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Intake */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md border border-blue-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/5">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Calendar className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2 text-center md:text-left">Upcoming Intake Dates</h3>
                <p className="text-gray-700 text-center md:text-left">Don't miss the application deadlines for the next academic year</p>
              </div>
              
              <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold text-blue-700">Fall Semester 2025</p>
                  <p className="text-gray-700">Application Deadline: June 30, 2025</p>
                  <p className="text-gray-700">Classes Begin: August 2025</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold text-blue-700">Spring Semester 2026</p>
                  <p className="text-gray-700">Application Deadline: December 15, 2025</p>
                  <p className="text-gray-700">Classes Begin: January 2026</p>
                </div>
                
                <div className="sm:col-span-2">
                  <a 
                    href="#" 
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
              href="#" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold shadow hover:shadow-lg transition-colors"
            >
              Book Free Consultation
            </a>
            <a 
              href="#" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold shadow hover:shadow-lg transition-colors"
            >
              Download Information Pack
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Have questions about studying in India? Our education counselors are here to help
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-blue-50 rounded-xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">Send Us a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Study Interest</label>
                    <select className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                      <option value="">Select your field of study</option>
                      <option value="engineering">Engineering & Technology</option>
                      <option value="medicine">Medicine & Healthcare</option>
                      <option value="business">Business & Management</option>
                      <option value="humanities">Humanities & Social Sciences</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Message</label>
                    <textarea 
                      className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Your message or questions"
                      rows={4}
                    ></textarea>
                  </div>
                  
                  <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
              
              <div className="bg-blue-700 text-white p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Our Office</p>
                      <p>123 Global Education Street, New Delhi, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p>info@vityazglobal.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p>+91 123 456 7890</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4">Office Hours</h4>
                  <div className="space-y-1 text-blue-100">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-blue-600">
                  <h4 className="font-bold mb-4">Download Resources</h4>
                  <div className="space-y-3">
                    <a 
                      href="#" 
                      className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      <span>Study in India Brochure</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      <span>Visa Requirements Guide</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}

    </div>
  );
};

export default IndiaEducation;