import React, { useState } from 'react';
import { Search, MapPin, GraduationCap, Users, Download, ArrowRight, School, Award, Globe, Star, BookOpen, PhoneCall } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ScrollToTop } from '../../utils/ScrollToTop';

const universities = [
  {
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
  },
  
  {
    name: "DIT University",
    location: "Dehradun, India",
    courses: ["Engineering", "Architecture", "Management"],
    ranking: "Top 40 in India",
    students: "7,000+",
    fees: "$7,000/year",
    image: "https://www.dituniversity.edu.in/uploads/album/1697633898_a50fb86d864091b23666.webp",
    country: "India",
    navigation: "dit",
    code: '/DIT_D.pdf'
  },
  {
    name: "Amity University ",
    location: "Multiple Locations",
    courses: ["Engineering", "Management", "Law"],
    ranking: "Top 20 in India",
    students: "20,000+",
    fees: "$9,000/year",
    image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg",
    country: "India",
    navigation: "amity",
    code: '/AMITY.pdf'
  },
  {
    name: "Lovely Professional University (LPU)",
    location: "Punjab, India",
    courses: ["Engineering", "Management", "Pharmacy"],
    ranking: "Top 35 in India",
    students: "30,000+",
    fees: "$6,500/year",
    image: "https://distanceeducation360.com/wp-content/uploads/2017/05/Lovely-Professional-University.jpg",
    country: "India",
    navigation: "lpu",
    code: '/LPU.pdf'
  },
  {
    name: "Chandigarh University",
    location: "Chandigarh, India",
    courses: ["Engineering", "Management", "Law"],
    ranking: "Top 50 in India",
    students: "22,000+",
    fees: "$7,500/year",
    image: "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchandigarh-university%2Fhero-image%2Fchandigarhuniversitybanner.webp&w=1200&q=75",
    country: "India",
    navigation: "CU",
    code: '/CU.pdf'
  },
  {
    name: "Bennet University",
    location: "Greater Noida, India",
    courses: ["Engineering", "Management", "Law"],
    ranking: "Top 30 in India",
    students: "6,000+",
    fees: "$7,000/year",
    image: "https://www.mycampusreview.com/assest/front/images/fb/bennut.jpg",
    country: "India",
    navigation: "bennett",
    code: '/BANNET.pdf'
  },
  {
    name: "Symboisis International",
    location: "Ghaziabad, India",
    courses: ["Engineering", "Management", "Law"],
    ranking: "Top 50 in India",
    students: "22,000+",
    fees: "$7,500/year",
    image: "https://www.symbiosis.ac.in/images/about-us/Symbiosis-International-University.jpg",
    country: "India",
    navigation: "Symboisis",
    code: '/SYMBOISIS.pdf'
  },
  {
    name: "SRM University",
    location: "Multiple Locations",
    courses: ["Engineering", "Management", "Law"],
    ranking: "Top 50 in India",
    students: "22,000+",
    fees: "$7,500/year",
    image: "https://mdmsenquiry.com/wp-content/uploads/2017/09/srm-university.jpg",
    country: "India",
    navigation: "SRM",
    code: '/SRMIST.pdf'
  },
];

const handleDownload = (e) => {
  // Create a link element
  const link = document.createElement('a');
  // Set the href attribute to the file path
  link.href = e.code;
  // Set the download attribute to give the file a name
  link.download = e.code;
  // Append the link to the body
  document.body.appendChild(link);
  // Trigger a click event to download the file
  link.click();
  // Clean up: remove the link from the body
  document.body.removeChild(link);
};

const UniversityList = () => {
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [visibleUniversities, setVisibleUniversities] = useState(6);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredUniversities = universities.filter((university) => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || university.country.toLowerCase() === selectedCountry.toLowerCase();
    return matchesSearch && matchesCountry;
  });

  const loadMoreUniversities = () => {
    setVisibleUniversities((prev) => prev + 6);
  };
  
  const handlePagenavigation = (college) => {
    window.scrollTo(0, 0);
    navigate(`/universities/${college?.navigation}`);
  };

  return (
    <div className=" bg-gray-50">
      <ScrollToTop/>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern-dots-white/10 mix-blend-overlay"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
              PARTNER INSTITUTIONS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Discover Your Ideal <span className="text-blue-200">University</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
              Explore top-ranked universities across India with world-class facilities and internationally recognized degrees
            </p>
            
            {/* Statistics */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <School className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-white/70">Partner Universities</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-white/70">Accredited</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">30+</div>
                  <div className="text-sm text-white/70">Countries Represented</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-lg relative -mt-8 rounded-t-3xl z-20 mx-4 md:mx-8 lg:mx-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="flex-1">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'shadow-lg ring-2 ring-blue-300 rounded-lg' : 'shadow-md rounded-lg'}`}>
                <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${isSearchFocused ? 'text-blue-600' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Search by university name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-12 pr-4 py-4 border-0 rounded-lg focus:outline-none focus:ring-0 bg-white"
                />
              </div>
            </div>
            
            <div className="self-stretch shadow-md rounded-lg">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="h-full px-6 py-4 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white cursor-pointer"
              >
                <option value="all">All Countries</option>
                <option value="india">India</option>
                <option value="europe">Europe</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {filteredUniversities.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUniversities.slice(0, visibleUniversities).map((university, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                  >
                    {/* Image with overlay */}
                    <div 
                      className="relative h-52 cursor-pointer overflow-hidden"
                      onClick={() => handlePagenavigation(university)}
                    >
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
                      
                      {/* University name on image */}
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                          {university.name}
                        </h3>
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <MapPin className="w-3 h-3" />
                          <span>{university.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* University info */}
                    <div className="p-6 cursor-pointer" onClick={() => handlePagenavigation(university)}>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 mb-1">Courses</span>
                          <div className="flex items-start gap-2">
                            <BookOpen className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 line-clamp-2">
                              {university.courses.join(", ")}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 mb-1">Students</span>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-gray-700">{university.students}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 mb-1">Avg. Fees</span>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 text-blue-600 flex items-center justify-center font-semibold">$</div>
                            <span className="text-sm text-gray-700">{university.fees}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 mb-1">Country</span>
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-gray-700">{university.country}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="px-6 pb-6 space-y-2">
                      <button 
                        className="w-full py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transform"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.scrollTo(0, 0);
                          navigate('/apply');
                        }}
                      >
                        <GraduationCap className="w-5 h-5" />
                        Apply Now
                      </button>
                      
                      <button 
                        className="w-full py-3 bg-white border-2 border-red-500 text-red-600 rounded-lg hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 transform"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(university);
                        }}
                      >
                        <Download className="w-5 h-5" />
                        Download Brochure
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleUniversities < filteredUniversities.length && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={loadMoreUniversities}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform flex items-center gap-2 font-medium"
                  >
                    Load More Universities
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white p-8 rounded-xl shadow-md inline-block mb-6">
                <Search className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Universities Found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCountry('all');
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern-dots-white/10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help Choosing the Perfect University?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our education experts will provide personalized guidance based on your academic profile, career goals, and budget
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
              >
                <PhoneCall className="w-5 h-5" />
                Get Free Counseling
              </Link>
              
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm transform hover:scale-105 transition-transform"
              >
                <BookOpen className="w-5 h-5" />
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { universities };
export default UniversityList;