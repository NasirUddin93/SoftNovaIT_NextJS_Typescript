'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuBtnRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuBtnRef.current && 
        !mobileMenuBtnRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenSubmenu(null);
    }
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  // Organized Navigation Data - Logical Order
  const navigation = {
    // Primary navigation - most important pages first
    main: [
      { 
        name: 'Home', 
        href: '/', 
        type: 'link' 
      },
            { 
        name: 'Company', 
        href: '/about', 
        type: 'dropdown',
        items: [
          // Company overview first
          { name: 'About Us', href: '/about' },
          { name: 'Our Team', href: '/team' },
          { name: 'Mission & Vision', href: '/mission-vision' },
          { name: 'Our History', href: '/our-history' },
          // Company details
          { name: 'Careers', href: '/careers' },
          { name: 'Pricing', href: '/pricing' },
          { name: 'FAQ', href: '/faq' },
        ]
      },
      { 
        name: 'Services', 
        href: '/services', 
        type: 'dropdown',
        items: [
          // Core services first
          { name: 'Web Development', href: '/services/web-development' },
          { name: 'E-commerce Solutions', href: '/services/ecommerce' },
          { name: 'Software Services', href: '/services/software' },
          { name: 'School Management Systems', href: '/services/school-management' },
          // Marketing services
          { name: 'SEO Optimization', href: '/services/seo' },
          { name: 'Digital Marketing', href: '/services/digital-marketing' },
          // Advanced services
          { name: 'AI & Machine Learning', href: '/services/ai-ml' },
          { name: 'IT Solutions', href: '/services/it-solutions' },
          { name: 'Courses & Training', href: '/services/courses' },
        ]
      },
      { 
        name: 'Portfolio', 
        href: '/portfolio', 
        type: 'link' 
      },

      { 
        name: 'Blog', 
        href: '/blog', 
        type: 'dropdown',
        items: [
          { name: 'All Posts', href: '/blog' },
          { name: 'AI & Tech Insights', href: '/blog/ai-tech' },
          { name: 'Web Development', href: '/blog/web-dev' },
          { name: 'Digital Marketing', href: '/blog/digital-marketing' },
        ]
      },
      { 
        name: 'Shop', 
        href: '/shop', 
        type: 'dropdown',
        items: [
          { name: 'All Products', href: '/shop' },
          { name: 'Website Templates', href: '/shop/templates' },
          { name: 'Digital Products', href: '/shop/digital' },
          { name: 'Services', href: '/shop/services' },
          { name: 'Cart', href: '/cart' },
        ]
      },
      { 
        name: 'Contact', 
        href: '/contact', 
        type: 'link' 
      },
    ]
  };

  // Render desktop navigation items
  const renderDesktopNavItem = (item: any) => {
    if (item.type === 'link') {
      return (
        <li key={item.name} className="relative group">
          <Link 
            href={item.href} 
            className={`font-semibold px-4 py-2 transition-colors flex items-center ${
              pathname === item.href ? 'text-green-500' : 'text-white hover:text-green-500'
            }`}
          >
            {item.name}
          </Link>
        </li>
      );
    }

    if (item.type === 'dropdown') {
      return (
        <li key={item.name} className="relative group">
          <button className="font-semibold text-white hover:text-green-500 px-4 py-2 transition-colors flex items-center">
            {item.name}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <ul className="absolute left-0 mt-2 w-56 bg-white text-gray-700 rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
            {item.items.map((subItem: any) => (
              <li key={subItem.name}>
                <Link 
                  href={subItem.href}
                  className="block px-4 py-2 hover:bg-green-50 hover:text-green-500 transition-colors text-sm"
                >
                  {subItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }
  };

  // Render mobile navigation items
  const renderMobileNavItem = (item: any) => {
    if (item.type === 'link') {
      return (
        <li key={item.name}>
          <Link 
            href={item.href} 
            className="block font-semibold text-lg py-3 hover:text-green-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        </li>
      );
    }

    if (item.type === 'dropdown') {
      return (
        <li key={item.name}>
          <button 
            className="w-full text-left font-semibold text-lg py-3 flex justify-between items-center"
            onClick={() => toggleSubmenu(item.name)}
          >
            {item.name} <span className={`transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`}>▾</span>
          </button>
          <ul className={`pl-4 space-y-1 ${openSubmenu === item.name ? 'block' : 'hidden'}`}>
            {item.items.map((subItem: any) => (
              <li key={subItem.name}>
                <Link 
                  href={subItem.href}
                  className="block py-2 px-4 hover:bg-green-50 hover:text-green-500 rounded transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {subItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }
  };

  return (
    <header className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-white hover:text-green-500 transition-colors">
            SoftNovaIT
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-1 relative">
          <ul className="flex space-x-1">
            {navigation.main.map(renderDesktopNavItem)}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div 
          ref={mobileMenuBtnRef}
          className="md:hidden cursor-pointer" 
          onClick={toggleMobileMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav 
        ref={mobileMenuRef}
        className={`md:hidden bg-white text-gray-700 px-4 shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="space-y-1 py-4">
          {navigation.main.map(renderMobileNavItem)}
          
          {/* Mobile CTA Button */}
          <li className="pt-2">
            <Link 
              href="/contact" 
              className="block bg-green-500 hover:bg-green-600 text-white font-semibold text-center px-6 py-3 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;