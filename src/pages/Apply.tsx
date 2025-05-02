import React, { useState } from 'react';
import { GraduationCap, FileText, PlusCircle, Trash2 } from 'lucide-react';
import { ScrollToTop } from '../utils/ScrollToTop';

const ApplicationForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    nationality: '',
    dob: '',
    educationQualifications: [{ degree: '', institution: '', year: '' }],
    areasOfInterest: [''],
    email: '',
    address: '',
    phoneNumber: ''
  });

  // Handle change for basic form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle change for education qualifications
  const handleEducationChange = (index, field, value) => {
    const newEducationQualifications = [...formData.educationQualifications];
    newEducationQualifications[index] = {
      ...newEducationQualifications[index],
      [field]: value
    };
    setFormData({
      ...formData,
      educationQualifications: newEducationQualifications
    });
  };

  // Add new education qualification field
  const addEducationQualification = () => {
    setFormData({
      ...formData,
      educationQualifications: [
        ...formData.educationQualifications,
        { degree: '', institution: '', year: '' }
      ]
    });
  };

  // Remove education qualification field
  const removeEducationQualification = (index) => {
    const newEducationQualifications = [...formData.educationQualifications];
    newEducationQualifications.splice(index, 1);
    setFormData({
      ...formData,
      educationQualifications: newEducationQualifications
    });
  };

  // Handle change for areas of interest
  const handleInterestChange = (index, value) => {
    const newAreasOfInterest = [...formData.areasOfInterest];
    newAreasOfInterest[index] = value;
    setFormData({
      ...formData,
      areasOfInterest: newAreasOfInterest
    });
  };

  // Add new area of interest field
  const addAreaOfInterest = () => {
    setFormData({
      ...formData,
      areasOfInterest: [...formData.areasOfInterest, '']
    });
  };

  // Remove area of interest field
  const removeAreaOfInterest = (index) => {
    const newAreasOfInterest = [...formData.areasOfInterest];
    newAreasOfInterest.splice(index, 1);
    setFormData({
      ...formData,
      areasOfInterest: newAreasOfInterest
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="pt-24">
      <ScrollToTop/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-6">
            <GraduationCap className="w-16 h-16 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Application Form
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Start your journey towards a world-class education
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Middle Name</label>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                      required
                    />
                  </div>
                </div>
                
                {/* Nationality and DOB */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nationality</label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                      required
                    />
                  </div>
                </div>
                
                {/* Education Qualifications */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-lg font-medium">Education Qualifications</label>
                    <button
                      type="button"
                      onClick={addEducationQualification}
                      className="flex items-center gap-2 text-rose-600 hover:text-rose-700"
                    >
                      <PlusCircle className="w-5 h-5" />
                      Add Education
                    </button>
                  </div>
                  
                  {formData.educationQualifications.map((edu, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-lg mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Degree/Certificate</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Institution</label>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                          required
                        />
                      </div>
                      <div className="flex items-end gap-2">
                        <div className="flex-grow">
                          <label className="block text-sm font-medium mb-2">Year</label>
                          <input
                            type="text"
                            value={edu.year}
                            onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                            required
                          />
                        </div>
                        {formData.educationQualifications.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeEducationQualification(index)}
                            className="p-3 text-rose-600 hover:text-rose-700"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Areas of Interest */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-lg font-medium">Areas of Interest</label>
                    <button
                      type="button"
                      onClick={addAreaOfInterest}
                      className="flex items-center gap-2 text-rose-600 hover:text-rose-700"
                    >
                      <PlusCircle className="w-5 h-5" />
                      Add Interest
                    </button>
                  </div>
                  
                  {formData.areasOfInterest.map((interest, index) => (
                    <div key={index} className="flex items-center gap-4 mb-4">
                      <input
                        type="text"
                        value={interest}
                        onChange={(e) => handleInterestChange(index, e.target.value)}
                        className="flex-grow p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                        placeholder="Enter area of interest"
                        required
                      />
                      {formData.areasOfInterest.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeAreaOfInterest(index)}
                          className="p-2 text-rose-600 hover:text-rose-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Contact Information */}
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-600 dark:bg-gray-800 dark:border-gray-600"
                    required
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors font-medium text-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationForm;