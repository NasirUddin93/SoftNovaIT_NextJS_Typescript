
// import Link from 'next/link';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   // Navigation data for better maintainability
//   const navigation = {
//     services: [
//       { name: 'Web Development', href: '/services/web-development' },
//       { name: 'SEO Optimization', href: '/services/seo-optimization' },
//       { name: 'Digital Marketing', href: '/services/digital-marketing' },
//       { name: 'UI/UX Design', href: '/services/ui-ux-design' },
//     ],
//     company: [
//       { name: 'About Us', href: '/about' },
//       { name: 'Blog', href: '/blog' },
//       { name: 'Portfolio', href: '/portfolio' },
//       { name: 'Contact', href: '/contact' },
//     ],
//     social: [
//       { 
//         name: 'Facebook', 
//         href: 'https://www.facebook.com/SoftNovaIT/', 
//         icon: '📘' 
//       },
//       { 
//         name: 'Twitter', 
//         href: 'https://x.com/SoftNovaIT', 
//         icon: '🐦' 
//       },
//       { 
//         name: 'LinkedIn', 
//         href: 'https://www.linkedin.com/in/softnovait/', 
//         icon: '💼' 
//       },
//       { 
//         name: 'Instagram', 
//         href: 'https://www.instagram.com/softnovait/', 
//         icon: '📷' 
//       },
//     ],
//   };

//   return (
//     <footer className="bg-gray-900 text-white pt-20">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
//           {/* Logo & Description */}
//           <div className="md:col-span-1">
//             <h2 className="text-3xl font-bold mb-4">SoftNovaIT</h2>
//             <p className="text-gray-400">
//               A creative digital agency that helps brands grow by delivering modern solutions with design & strategy.
//             </p>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Services</h3>
//             <ul className="space-y-2">
//               {navigation.services.map((service) => (
//                 <li key={service.name}>
//                   <Link 
//                     href={service.href}
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     {service.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Company</h3>
//             <ul className="space-y-2">
//               {navigation.company.map((item) => (
//                 <li key={item.name}>
//                   <Link 
//                     href={item.href}
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Contact</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li className="flex items-start">
//                 <span className="mr-2">📧</span>
//                 <a 
//                   href="mailto:info@softnovait.com" 
//                   className="hover:text-green-500 transition-colors"
//                 >
//                   info@softnovait.com
//                 </a>
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2">📞</span>
//                 <a 
//                   href="tel:+880707568468" 
//                   className="hover:text-green-500 transition-colors"
//                 >
//                   +880 707 568 468
//                 </a>
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-2">📍</span>
//                 <span>
//                   House:32(3rd floor), Garib-E-Newaj Avenue road, 
//                   Sector:11, Uttara, Dhaka-1230, Bangladesh
//                 </span>
//               </li>
//             </ul>
            
//             {/* Social Media Links */}
//             <div className="flex space-x-4 mt-4">
//               {navigation.social.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-green-500 transition-colors text-lg"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="bg-green-700 mt-8">
//         <div className="container mx-auto px-4">
//           <hr className="my-8 border-gray-600" />
//           <p className="text-center text-white pb-6">
//             &copy; {currentYear} SoftNovaIT. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Globe,
  Code,
  Palette,
  TrendingUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Enhanced navigation data
  const navigation = {
    services: [
      { 
        name: 'Web Development', 
        href: '/services/web-development',
        icon: Code
      },
      { 
        name: 'SEO Optimization', 
        href: '/services/seo-optimization',
        icon: TrendingUp
      },
      { 
        name: 'Digital Marketing', 
        href: '/services/digital-marketing',
        icon: Globe
      },
      { 
        name: 'UI/UX Design', 
        href: '/services/ui-ux-design',
        icon: Palette
      },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
    ],
    social: [
      { 
        name: 'Facebook', 
        href: 'https://www.facebook.com/SoftNovaIT/', 
        icon: Facebook,
        color: 'hover:text-blue-500'
      },
      { 
        name: 'Twitter', 
        href: 'https://x.com/SoftNovaIT', 
        icon: Twitter,
        color: 'hover:text-blue-400'
      },
      { 
        name: 'LinkedIn', 
        href: 'https://www.linkedin.com/in/softnovait/', 
        icon: Linkedin,
        color: 'hover:text-blue-600'
      },
      { 
        name: 'Instagram', 
        href: 'https://www.instagram.com/softnovait/', 
        icon: Instagram,
        color: 'hover:text-pink-500'
      },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Info & Newsletter */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
                SoftNovaIT
              </h2>
              <p className="text-gray-300 text-lg max-w-md">
                Transforming ideas into digital reality through innovative IT solutions, 
                AI research, and cutting-edge technology services.
              </p>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-green-400" />
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest tech insights and company news delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:gap-3">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700 flex items-center">
                <Code className="w-5 h-5 mr-2 text-green-400" />
                Services
              </h3>
              <ul className="space-y-3">
                {navigation.services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group"
                    >
                      <service.icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-green-400" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">
                Company
              </h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 duration-300 block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700">
                Resources
              </h3>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-400 hover:text-green-400 transition-colors hover:translate-x-1 duration-300 block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-gray-800">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 hover:text-green-400 transition-colors group">
                <Mail className="w-5 h-5 mr-4 text-green-500 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@softnovait.com" className="text-lg">
                  info@softnovait.com
                </a>
              </div>
              <div className="flex items-center text-gray-300 hover:text-green-400 transition-colors group">
                <Phone className="w-5 h-5 mr-4 text-green-500 group-hover:scale-110 transition-transform" />
                <a href="tel:+880707568468" className="text-lg">
                  +880 707 568 468
                </a>
              </div>
              <div className="flex items-start text-gray-300 group">
                <MapPin className="w-5 h-5 mr-4 mt-1 text-green-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-lg">
                  House:32(3rd floor), Garib-E-Newaj Avenue road, 
                  Sector:11, Uttara, Dhaka-1230, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {navigation.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-800 p-4 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700 border border-gray-700`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2 text-green-400 text-sm font-medium">
                🏆 Trusted Partner
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2 text-blue-400 text-sm font-medium">
                ⭐ 5-Star Rated
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg px-4 py-2 text-purple-400 text-sm font-medium">
                🚀 Fast Delivery
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/90 text-sm flex items-center">
              &copy; {currentYear} SoftNovaIT. All rights reserved. 
              <span className="mx-2">•</span>
              Made with <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" /> in Bangladesh
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-white/80 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;