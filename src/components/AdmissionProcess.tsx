import React from 'react';
import { UserPlus, Send, FileCheck2, Plane, Building2, FileText, ArrowRight, Users, Check } from 'lucide-react';

const AdmissionProcess = () => {
  const processSteps = [
    {
      number: " 1",
      icon: <UserPlus className="w-6 h-6" />,
      title: "REGISTER & GET SII ID",
      description: "Compulsory ID to track foreign student journey in India",
      details: [
        "Complete online registration",
        "Receive dedicated student advisor",
        "Get personalized consultation",
      ],
      iconBg: "bg-blue-100",
      numberColor: "text-blue-600"
    },
    {
      number: "2",
      icon: <Send className="w-6 h-6" />,
      title: "EXPLORE FROM 8000+ COURSES",
      description: "In more than 600+ Indian Institutes",
      details: [
        "Browse programs by discipline",
        "Compare universities",
        "Access detailed course info",
        "Check eligibility requirements"
      ],
      iconBg: "bg-green-100",
      numberColor: "text-blue-600"
    },
    {
      number: "3",
      icon: <FileCheck2 className="w-6 h-6" />,
      title: "SUBMIT APPLICATION",
      description: "Directly to all Institutions simultaneously",
      details: [
        "Single application form",
        "Multi-university submissions",
        "Document upload assistance",
        "Application status tracking"
      ],
      iconBg: "bg-purple-100",
      numberColor: "text-blue-600"
    },
    {
      number: "4",
      icon: <FileText className="w-6 h-6" />,
      title: "GET MULTIPLE OFFER LETTERS",
      description: "Accept the offer letter best suited to you",
      details: [
        "Compare admission offers",
        "Review scholarship options",
        "Evaluate program benefits",
        "Select preferred institution"
      ],
      iconBg: "bg-yellow-100",
      numberColor: "text-blue-600"
    },
    {
      number: "5",
      icon: <Building2 className="w-6 h-6" />,
      title: "APPLY FOR VISA/STUDENT E-VISA",
      description: "With your SII ID & get fast tracked visa",
      details: [
        "Visa application guidance",
        "Document verification",
        "Interview preparation",
        "Expedited processing"
      ],
      iconBg: "bg-red-100",
      numberColor: "text-blue-600"
    },
    {
      number: "6",
      icon: <Plane className="w-6 h-6" />,
      title: "REGISTER FOR E-FRRO/FRRO",
      description: "Within 14 days of landing in India with SII ID",
      details: [
        "Post-arrival registration",
        "FRRO appointment booking",
        "Document preparation",
        "Compliance assistance"
      ],
      iconBg: "bg-gray-100",
      numberColor: "text-blue-600"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-4 py-1 rounded-full mb-3 tracking-wide">
            ADMISSION PROCESS
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            <span>6 Steps to Study in</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 font-bold">
              INDIA
            </span>
          </h1>
          <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Follow our streamlined admission process designed to make your educational journey smooth and hassle-free.
          </p>
        </div>
      </div>

      {/* Process Steps - Modified to match reference design with hover details */}
      <div className="container mx-auto px-4 py-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group h-full">
              {/* Large Number */}
              <div className="mb-4">

                <span className={`${step.numberColor} text-[10px] md:text-[20px] font-bold leading-none block`}>
                  Step
                </span>
                <span className={`${step.numberColor} text-[80px] md:text-[100px] font-bold leading-none block`}>
                  {step.number}
                </span>
              </div>
              
              {/* Card with content */}
              <div className="bg-white p-5 rounded-xl shadow-lg relative h-[160px] group-hover:h-[320px] transition-all duration-500 overflow-hidden">
                {/* Icon at top right corner */}
                <div className={`absolute right-5 top-4 w-10 h-10 ${step.iconBg} rounded-full flex items-center justify-center`}>
                  {React.cloneElement(step.icon, { className: "w-5 h-5 text-gray-700" })}
                </div>

                {/* Content */}
                <div className="pt-12">
                  <h3 className="text-blue-600 font-bold text-base leading-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                  
                  {/* Details on Hover - Hidden by default */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <h4 className="font-medium text-sm text-gray-700 mb-2">What we provide:</h4>
                    <ul className="space-y-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Shadow effect */}
                <div className="absolute right-0 top-[99%] w-full h-4 bg-gradient-to-l from-gray-200 to-transparent opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-10 rounded-2xl mx-4 sm:mx-8 lg:mx-12 mb-12 shadow-xl relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern-dots-white/10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Start your application process today and take the first step towards your dream education in India
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Talk to an Advisor
              <Users className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;