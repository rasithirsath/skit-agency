
import { useState } from 'react';
import {Facebook } from 'lucide-react';
import emailjs from 'emailjs-com';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    'service_ms345y5',        // Replace with your EmailJS service ID
    'template_r6jes5s',       // Replace with your EmailJS template ID
    formData,                 // This must match the template fields
    'F2p7pAUKod433GRat'         // Replace with your EmailJS public key
  ).then(() => {
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  }).catch((error) => {
    toast({
      title: "Error!",
      description: "Something went wrong. Please try again later.",
      variant: "destructive"
    });
    console.error('EmailJS Error:', error);
  });
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info.skitagency@gmail.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      content: " ‪+91 78456 43661",
      // subtitle: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Vandalur Chennai, India",
      // subtitle: "New York, NY 10001"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday",
      subtitle: "9:00 AM - 6:00 PM IST"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/skitagency?igsh=N3l4czZ4bTdhOWhj', label: 'Instagram', color: 'hover:text-pink-500' },
    
    { icon: Twitter, href: 'https://x.com/Skitagencyco?t=njO5GP8GVMLqLw1bEspAhw&s=08', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1CRfH65QdS/ ', label: 'Facebook' },

  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-purple/10 to-brand-blue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your social media presence? Let's discuss how we can help 
              your brand reach new heights and connect with your audience in meaningful ways.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-700 font-medium">{info.content}</p>
                      <p className="text-gray-600 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 text-gray-900"></h3>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join over 100+ satisfied clients who have transformed their social media presence with SocialFlow.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-brand-purple hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Contact;
// service_ms345y5