import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { MapPin, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const Universities = () => {
  const universities = [
    {
      id: "parul",
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
      id: "dit",
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
      id: "amity",
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
      id: "lpu",
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
      id: "cu",
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
      id: "bennett",
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
      id: "symbiosis",
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
      id: "srm",
      name: "SRM University",
      location: "Multiple Locations",
      courses: ["Engineering", "Management", "Law"],
      ranking: "Top 50 in India",
      students: "22,000+",
      fees: "$7,500/year",
      image: "https://mdmsenquiry.com/wp-content/uploads/2017/09/srm-university.jpg",
      country: "India",
      navigation: "SRM",
      code: 'SRMIST.pdf'
    },
  ];

  const handleDownload = (e) => {
    const fileUrl = `${e.code}`; // Direct path to the file in the public folder
    const link = document.createElement('a');
    link.href = fileUrl; // Use the direct path for the PDF file in the public folder
    link.download = e.code; // Set the name of the file to be downloaded
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Trigger a download by simulating a click event
    console.log(link)
    document.body.removeChild(link); // Clean up the link element
  };
  
  
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partner Universities</h2>
          <p className="text-xl text-gray-600">Excellence in Education Across Borders</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {universities.map((university, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full">
                <div 
                  className="h-48 bg-cover bg-center relative" 
                  style={{ backgroundImage: `url(${university.image})` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Ranking badge */}
                  {university.ranking && (
                    <div className="absolute top-3 right-3 bg-white/90 text-blue-600 text-xs font-medium px-2 py-1 rounded shadow-sm">
                      {university.ranking}
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col h-64">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{university.name}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{university.location}</span>
                  </div>
                  
                  {university.courses && (
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <GraduationCap className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{university.courses.slice(0, 2).join(", ")}{university.courses.length > 2 ? "..." : ""}</span>
                    </div>
                  )}
                  
                  {university.students && (
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Users className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{university.students}</span>
                    </div>
                  )}
                  
           
                  
                  {/* Action buttons */}
                  <div className="mt-auto pt-4 space-y-2">
                    <button 
                      onClick={() => handleDownload(university)}
                      className="w-full bg-white border border-blue-200 text-blue-600 py-2 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      Download Brochure
                    </button>
                    
                    <Link 
                      to={`universities/${university.navigation}`}
                      className="block w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Universities;