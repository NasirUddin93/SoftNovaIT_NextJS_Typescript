import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Header />
      
      {/* Announcement Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm">
        This announcement bar can be used to inform visitors of something important.
      </div>

      {/* Main Content */}
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Content */}
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    MEMBERS
                  </h1>
                  <div className="w-20 h-1 bg-blue-600"></div>
                </div>

                {/* Subtitle */}
                <h2 className="text-4xl lg:text-5xl font-light text-gray-700 leading-tight">
                  We've been waiting for you.
                </h2>

                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                  We want to hear from you. Let us know how we can help.
                </p>

                {/* Additional Info */}
                <div className="space-y-4 pt-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">hello@yourfirm.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                </div>
                {/* <ContactForm /> */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;