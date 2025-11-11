// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// // import ContactForm from '../components/ContactForm';

// const ContactPage = () => {
//   return (
//     <>
//       <Header />
      
//       {/* Announcement Bar */}
//       <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm">
//         This announcement bar can be used to inform visitors of something important.
//       </div>

//       {/* Main Content */}
//       <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
//               {/* Left Side - Content */}
//               <div className="space-y-8">
//                 {/* Header */}
//                 <div className="space-y-4">
//                   <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                     MEMBERS
//                   </h1>
//                   <div className="w-20 h-1 bg-blue-600"></div>
//                 </div>

//                 {/* Subtitle */}
//                 <h2 className="text-4xl lg:text-5xl font-light text-gray-700 leading-tight">
//                   We've been waiting for you.
//                 </h2>

//                 {/* Description */}
//                 <p className="text-xl text-gray-600 leading-relaxed max-w-md">
//                   We want to hear from you. Let us know how we can help.
//                 </p>

//                 {/* Additional Info */}
//                 <div className="space-y-4 pt-8">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                       <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Phone</p>
//                       <p className="text-gray-600">+1 (555) 123-4567</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                       <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Email</p>
//                       <p className="text-gray-600">hello@yourfirm.com</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side - Form */}
//               <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
//                 </div>
//                 {/* <ContactForm /> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default ContactPage;



'use client';

import { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: NextPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    console.log('Form data:', data);
    
    // Add your form submission logic here
    // Example: Send to API route
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <>
      <Header />
      
      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-16">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-green-500">Touch</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are here to answer your questions. Fill out the form below or contact us via the information provided.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-2">
                  <strong>Address:</strong> House:32(3rd floor), Garib-E-Newaj Avenue road, Sector:11, Uttara,Dhaka-1230. Bangladesh
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> +8801707568468
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> nasir93cse@gmail.com
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
                <p className="text-gray-600 mb-2">
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Sunday:</strong> Closed
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                <div className="flex space-x-4 text-gray-600">
                  {/* Social media icons */}
                  <a href="#" className="hover:text-green-500 transition-colors duration-300" aria-label="Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-green-500 transition-colors duration-300" aria-label="Twitter">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-green-500 transition-colors duration-300" aria-label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-green-500 transition-colors duration-300" aria-label="Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.511-3.341-1.354-.844-.844-1.354-2.044-1.354-3.341 0-1.297.51-2.448 1.354-3.342.844-.843 2.044-1.354 3.341-1.354 1.297 0 2.448.511 3.341 1.354.844.844 1.354 2.044 1.354 3.342 0 1.296-.51 2.447-1.354 3.341-.844.844-2.044 1.354-3.341 1.354z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-semibold text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Our <span className="text-green-500">Location</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at our office location. We would love to meet you in person and discuss how we can help you.
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg font-semibold">Interactive Map</p>
              <p className="text-sm">Map integration would go here</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;