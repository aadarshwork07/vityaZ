import React, { useState } from 'react';
import { MapPin, Download, Phone, GraduationCap, BookOpen } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

function Parul() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // University data with real image and brochure info
  const universityData = {
    name: "Parul University",
    location: "Vadodara, India",
    courses: ["Engineering", "Pharmacy", "Architecture"],
    ranking: "Top 50 in India",
    students: "15,000+",
    fees: "$5,000/year",
    image: "https://paruluniversity.ac.in/app/images/post/blog/featured_image/190307Gate%20Picture.jpg",
    country: "India",
    navigation: "parul",
    code: '/PARUL.pdf'
  };
  
  const handleDownload = () => {
    console.log("Downloading brochure:", universityData.code);
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the file path
    link.href = universityData.code;
    // Set the download attribute to give the file a name
    link.download = "PARUL.pdf";
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger a click event to download the file
    link.click();
    // Clean up: remove the link from the body
    document.body.removeChild(link);
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      course: "B.Tech Computer Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Parul University provided me with incredible opportunities for innovation and practical learning."
    },
    {
      name: "Mohammed Al-Rashid",
      country: "UAE",
      course: "MBA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The futuristic campus and world-class facilities at Parul have transformed my educational journey."
    }
  ];

  const courses = [
    { name: "B.Tech in AI", duration: "4 years", description: "Comprehensive program focusing on artificial intelligence, machine learning, and advanced computing technologies." },
    { name: "B.Tech in Computer Science", duration: "4 years", description: "Cutting-edge program covering programming, algorithms, data structures, and innovative software development." },
    { name: "BBA", duration: "3 years", description: "Business administration program that develops management and entrepreneurial skills with practical industry exposure." },
    { name: "BA/BJ in Mass Communication", duration: "3 years", description: "Industry-oriented program covering various aspects of media, journalism, and mass communication." },
    { name: "LLB", duration: "3 years", description: "Law program designed to produce legal professionals with strong analytical and advocacy skills." },
    { name: "MBA", duration: "2 years", description: "Advanced business program with focus on leadership, strategy, and global business practices." }
  ];

  const overviewDetails = {
    highlights: [
      "One of India's leading private universities",
      "Campus spread across 150 acres in Vadodara, Gujarat",
      "Over 28,000 students from 53 countries",
      "More than 250 programs across 35 faculties",
      "State-of-the-art laboratories and infrastructure",
      "International collaborations with 90+ universities",
      "Excellent placement record with 700+ companies"
    ],
    infrastructure: [
      "Modern academic buildings with smart classrooms",
      "Specialized laboratories for practical training",
      "Advanced research facilities",
      "Digital library with extensive resources",
      "Sports complex with international facilities",
      "Comfortable and secure on-campus accommodation",
      "Dedicated entrepreneurship and innovation center"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-800">Parul University</h1>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/apply">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Apply Now
              </button>
            </Link>
            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg border border-purple-600 hover:bg-purple-50 transition"
            >
              <Download className="w-4 h-4" />
              Brochure
            </button>
            <a href="tel:+918001000900" className="inline-block">
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                <Phone className="w-4 h-4" />
                Free Counselling
              </button>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
          {/* Left Column - Overview & Photos */}
          <div className="md:col-span-2 space-y-6">
            {/* Photos Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img 
                  src={universityData.image}
                  alt="Parul Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Modern 150-acre Campus</p>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <img 
                  src="https://paruluniversity.ac.in/app/images/slider/background_image/367963Study%20Abroad%20homepage.jpg"
                  alt="Students at Parul"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">World-Class Facilities</p>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 rounded-lg font-medium text-lg whitespace-nowrap ${
                    activeTab === 'overview' ? 'bg-purple-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-lg whitespace-nowrap ${
                    activeTab === 'courses' ? 'bg-purple-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  Courses
                </button>
              </div>

              <div className="space-y-6 overflow-auto max-h-[500px] pr-4">
                {activeTab === 'overview' ? (
                  <>
                    <div className="border-l-4 border-purple-600 pl-4 py-2">
                      <p className="text-gray-700 text-lg">
                        Parul University is a leading private university located in Vadodara, Gujarat, known for 
                        its academic excellence and holistic development approach. With a sprawling 150-acre campus, 
                        state-of-the-art infrastructure, and international collaborations, Parul University offers 
                        a world-class educational experience to students from across the globe.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <p className="text-lg">{universityData.location}</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-purple-800 mb-3">University Highlights</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        {overviewDetails.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">Campus Infrastructure</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                        {overviewDetails.infrastructure.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-800 mb-3">Innovation & Entrepreneurship</h3>
                      <p className="text-gray-700">
                        Parul University fosters a vibrant ecosystem for innovation and entrepreneurship through its 
                        dedicated center that provides mentorship, resources, and networking opportunities. The university 
                        has supported numerous student startups and continues to promote entrepreneurial thinking across 
                        all disciplines.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg mb-6">
                      Parul University offers more than 250 programs across 35 faculties, ranging from undergraduate 
                      to doctoral levels. The university is known for its innovative curriculum, practical learning 
                      approach, and industry-integrated education that prepares students for global careers.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {courses.map((course) => (
                        <div key={course.name} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-xl text-gray-800 mb-1">{course.name}</h3>
                              <p className="text-md text-purple-600 mb-3">Duration: {course.duration}</p>
                              <p className="text-gray-700">{course.description}</p>
                            </div>
                            <button 
                              className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm hover:bg-purple-200 transition"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/courses/${course.name.toLowerCase().replace(/\s+/g, '-')}`);
                              }}
                            >
                              More Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Testimonials */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Student Testimonials</h2>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.country}</p>
                      <p className="text-sm text-purple-600">{testimonial.course}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Faculty Excellence</h3>
              <p className="text-gray-700">
                Parul University has a distinguished faculty comprising experts from various fields, 
                many with international experience and research backgrounds. Their expertise and 
                mentorship play a crucial role in shaping students' academic and professional journeys.
              </p>
            </div>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Global & Industry Connections</h3>
              <p className="text-gray-700">
                With international collaborations across 90+ universities and partnerships with 700+ companies, 
                Parul University provides students with global exposure and excellent placement opportunities.
              </p>
            </div>
            
            {/* Call to action buttons in the sidebar */}
            <div className="mt-6 space-y-3">
              <Link to="/apply" className="block w-full">
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2">
                  Apply for Admission
                </button>
              </Link>
              <button 
                onClick={handleDownload}
                className="w-full bg-white border border-purple-600 text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parul;