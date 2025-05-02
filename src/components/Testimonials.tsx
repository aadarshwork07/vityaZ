import React from 'react';
import { Quote, Star, MapPin, GraduationCap, ArrowRight, Users } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "MBBS Student",
      country: "Nigeria",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Choosing Vityaz Global was the best decision for my medical education. Their guidance throughout the admission process was invaluable.",
      rating: 5,
      university: "All India Institute of Medical Sciences"
    },
    {
      name: "Mohammed Al-Sayed",
      role: "MD Student",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The support from Vityaz Global made my transition to studying in India seamless. They helped with everything from admission to accommodation.",
      rating: 5,
      university: "Christian Medical College"
    },
    {
      name: "Grace Muthoni",
      role: "MBBS Student",
      country: "Kenya",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The quality of education and cultural experience has exceeded my expectations. Vityaz Global's ongoing support is commendable.",
      rating: 5,
      university: "Armed Forces Medical College"
    },
    {
      name: "John Smith",
      role: "Medical Student",
      country: "South Africa",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "From application to enrollment, Vityaz Global provided expert guidance. Their team is professional and dedicated.",
      rating: 5,
      university: "Masaryk University"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            STUDENT TESTIMONIALS
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Hear From Our <span className="text-blue-600">Global Community</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Discover how Vityaz Global has transformed the educational journey of students from around the world
          </p>
        </div>

        <div className="mb-16 relative">
          {/* Quote marks decorative element */}
          <div className="absolute -top-10 left-10 text-blue-100 opacity-70">
            <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
            </svg>
          </div>
        
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2.5,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col">
                  {/* Testimonial Header */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-blue-100">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white ring-2 ring-blue-100"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                      <p className="text-blue-600 font-medium">{testimonial.role}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        {testimonial.country}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="mb-6 flex-grow">
                    <div className="relative">
                      <Quote className="w-8 h-8 text-blue-300 absolute -top-4 -left-2 opacity-50" />
                      <p className="text-gray-700 leading-relaxed relative z-10 pl-6">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Footer */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <div className="px-3 py-1 bg-blue-50 rounded-full text-xs text-blue-700 font-medium flex items-center gap-1">
                        <GraduationCap className="w-3 h-3" />
                        {testimonial.university}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
            <p className="text-gray-700">Student Satisfaction Rate</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-700">Partner Universities</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <p className="text-gray-700">Students Placed</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-10 rounded-2xl shadow-xl text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-pattern-dots-white/10 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join Our Global Student Community?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards world-class education and become part of our success stories
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to='/apply' className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to='/testimonials' className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
                Read More Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;