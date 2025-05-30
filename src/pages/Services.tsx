
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Instagram, Users, BarChart3, MessageSquare, Camera, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Instagram,
      title: "Instagram Growth",
      description: "Strategic content creation, hashtag optimization, and community engagement to grow your Instagram presence organically.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&h=300&fit=crop"
    },
    {
      icon: MessageSquare,
      title: "Content Strategy",
      description: "Data-driven content planning that aligns with your brand voice and resonates with your target audience across all platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Professional community management services including responding to comments, messages, and building relationships with your audience.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and detailed reporting to track performance, measure ROI, and optimize your social media strategy.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      icon: Camera,
      title: "Content Creation",
      description: "Professional photo and video content creation, including graphics design, photography, and video editing services.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
    },
    {
      icon: Megaphone,
      title: "Social Media Advertising",
      description: "Strategic paid advertising campaigns across all major platforms to maximize reach, engagement, and conversions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop"
    }
  ];

  const stats = [
    { number: 500, suffix: "%", label: "Average Engagement Increase" },
    { number: 2, suffix: "M+", label: "Content Impressions Monthly" },
    { number: 50, suffix: "+", label: "Successful Campaigns" },
    { number: 24, suffix: "/7", label: "Support & Monitoring" }
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
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive social media management solutions designed to elevate your brand, 
              engage your audience, and drive measurable results across all platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 animate-fade-in ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </div>
                <div className="flex-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Numbers that speak for themselves - real results for real businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our services can help your brand reach new heights on social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='/contact' className="bg-gradient-to-r from-brand-purple to-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
             
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Services;
