import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Mail, Users, Award, Zap, Heart } from 'lucide-react';

// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Aminesh Kumar Paul',
    role: 'Executive Member',
    image: '/images/team_members/team_member_1.png',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Anwar Hossain Hiron',
    role: 'Network and Server Engineer',
    image: '/images/team_members/team_member_2.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'MD TAREK AHAMED',
    role: 'Business Analyst',
    image: '/images/team_members/team_member_16.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 4,
    name: 'Azizul Hakim',
    role: 'Database Administrator',
    image: '/images/team_members/team_member_4.png',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 5,
    name: 'Aslam Sikdar',
    role: 'AI Engineer',
    image: '/images/team_members/team_member_15.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 6,
    name: 'Ashraful Islam',
    role: 'Senior Software Engineer',
    image: '/images/team_members/team_member_17.png',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 7,
    name: 'Nasir Uddin',
    role: 'Software Engineer',
    image: '/images/team_members/team_member_5.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 8,
    name: 'Sumyta Tasnim Turaba',
    role: 'Junior Software Engineer & Marketing Chief',
    image: '/images/team_members/team_member_13.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 9,
    name: 'Ashraful Islam Emad',
    role: 'Senior Web Developer',
    image: '/images/team_members/team_member_6.png',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 10,
    name: 'Syed Mominul Islam',
    role: 'Web Developer',
    image: '/images/team_members/team_members_7.png',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 11,
    name: 'Sadia Islam Ratu',
    role: 'Junior AI Engineer',
    image: '/images/team_members/team_member_14.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 12,
    name: 'Rownak Ahmed Oyshi',
    role: 'QA Engineer',
    image: '/images/team_members/team_member_9.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 13,
    name: 'Fariha Nusrat Mumu',
    role: 'Testing Engineer',
    image: '/images/team_members/team_member_11.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 14,
    name: 'Saimum Hossain Sagor',
    role: 'Technical Support',
    image: '/images/team_members/team_member_10.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 15,
    name: 'Joy Krishna Mondal',
    role: 'Marketing Executive',
    image: '/images/team_members/team_member_8.png',
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#'
    }
  }
];

// Team stats
const teamStats = [
  { icon: Users, number: '15+', label: 'Team Members' },
  { icon: Award, number: '5+', label: 'Years Experience' },
  { icon: Zap, number: '50+', label: 'Projects Delivered' },
  { icon: Heart, number: '98%', label: 'Client Satisfaction' }
];

export default function Team() {
  return (
    <>
      {/* <Header /> */}
      <div className="min-h-screen pt-24">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-green-500">Team</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our team of talented professionals is dedicated to delivering innovative solutions 
                and exceptional service to our clients. We bring together diverse expertise to 
                create amazing digital experiences.
              </p>
              
              {/* Team Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-12">
                {teamStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <stat.icon className="w-8 h-8 text-green-500" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold transition-all hover:bg-green-600">
                All Team
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold transition-all hover:bg-gray-200">
                Leadership
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold transition-all hover:bg-gray-200">
                Development
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold transition-all hover:bg-gray-200">
                AI & Engineering
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold transition-all hover:bg-gray-200">
                Marketing
              </button>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                      {member.role}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <a 
                        href={member.social.facebook}
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300 hover:scale-110"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a 
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-300 hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a 
                        href={`mailto:${member.name.toLowerCase().replace(/\s+/g, '.')}@softnovait.com`}
                        className="text-gray-400 hover:text-green-500 transition-colors duration-300 hover:scale-110"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who are passionate about 
              technology and innovation. Come be part of our growing family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/careers"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </a>
              <a 
                href="/contact"
                className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Send Your CV
              </a>
            </div>
          </div>
        </section>

      </div>
      {/* <Footer /> */}
    </>
  );
}