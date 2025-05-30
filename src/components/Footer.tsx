
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Youtube,Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-14 h-15  ">
             <img src="https://i.ibb.co/0ptYYkCv/logo.jpg" alt="logo" />
            </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering brands through smart social media management. We help your business stay active, relevant, and engaging across all platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-300 text-sm">
               <a href="mailto:info.skitagency@gmail.com" className="hover:underline">
      info.skitagency@gmail.com
    </a>
              <p>+91 78456 43661</p>
              <p> Chennai, India</p>
            </div>
          </div>
          

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/skitagency?igsh=N3l4czZ4bTdhOWhj', label:'Instagram' },
                { icon: Twitter, href: 'https://x.com/Skitagencyco?t=njO5GP8GVMLqLw1bEspAhw&s=08', label: 'Twitter' },
                { icon: Facebook, href: 'https://www.facebook.com/share/1CRfH65QdS/ ', label: 'Facebook' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-blue transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Skit Agency. All rights reserved. | Empowering brands through smart social media management.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
