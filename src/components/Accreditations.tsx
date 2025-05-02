import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, PhoneCall, GraduationCap } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-cards';

const Accreditations = () => {
  const accreditations = [
    {
      name: "WHO",
      logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "World Health Organization Recognition"
    },
    {
      name: "MCI",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "Medical Council of India Approved"
    },
    {
      name: "UGC",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "University Grants Commission Certified"
    },
    {
      name: "NAAC",
      logo: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "National Assessment and Accreditation Council"
    },
    {
      name: "WFME",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "World Federation for Medical Education"
    },
    {
      name: "ECFMG",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "Educational Commission for Foreign Medical Graduates"
    },
    {
      name: "IMED",
      logo: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "International Medical Education Directory"
    },
    {
      name: "FAIMER",
      logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "Foundation for Advancement of International Medical Education and Research"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
            INTERNATIONALLY RECOGNIZED
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700 mb-4">
            Our Accreditations
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our partner universities and programs are recognized by prestigious international organizations, ensuring your degree has global validity.
          </p>
        </div>
        
        {/* Accreditations Carousel */}
        <div className="mb-16">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="py-10"
          >
            {accreditations.map((accreditation, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center group">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-100 bg-white shadow-md transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:border-blue-300 relative">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                    <img
                      src={accreditation.logo}
                      alt={accreditation.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Check icon that appears on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-1 shadow-md">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center transform transition-all duration-300 group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{accreditation.name}</h3>
                    <p className="text-gray-600 text-sm px-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      {accreditation.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg text-blue-600 font-semibold mb-2">Globally Recognized</h3>
            <p className="text-gray-600 text-sm">All our partner universities are recognized by major global medical authorities.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg text-blue-600 font-semibold mb-2">Quality Education</h3>
            <p className="text-gray-600 text-sm">Institutions are regularly audited and certified for maintaining high academic standards.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg text-blue-600 font-semibold mb-2">Practice Worldwide</h3>
            <p className="text-gray-600 text-sm">Degrees from our partner universities enable graduates to practice internationally.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-dots-white/10 mix-blend-overlay"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Explore Your Educational Future?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Take the first step towards a globally recognized education with our accredited partner institutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
              >
                <GraduationCap className="w-5 h-5" />
                Apply Now
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
              >
                <PhoneCall className="w-5 h-5" />
                Free Counselling
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;