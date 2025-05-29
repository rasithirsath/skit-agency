
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we implement is designed with measurable outcomes in mind."
    },
    {
      icon: Heart,
      title: "Authentic Engagement",
      description: "We believe in building genuine connections between brands and their communities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of trends and continuously evolve our approaches and methodologies."
    }
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
                About Our Journey
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded on the belief that every brand has a unique story worth telling, 
              we've dedicated ourselves to helping businesses thrive in the digital social landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Meet Our Founder
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b332c6c9?w=500&h=600&fit=crop&crop=face"
                alt="Sarah Mitchell - Founder & CEO"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-105"
              />
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Sarah Mitchell</h3>
              <p className="text-xl text-brand-purple font-semibold mb-6">Founder & CEO</p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over a decade of experience in digital marketing and brand strategy, 
                  Sarah founded SocialFlow with a vision to revolutionize how businesses 
                  approach social media management.
                </p>
                
                <p>
                  Her background in psychology and marketing provides unique insights into 
                  consumer behavior and authentic brand storytelling. Sarah believes that 
                  successful social media isn't just about numbers—it's about creating 
                  meaningful connections that drive real business results.
                </p>
                
                <p>
                  Under her leadership, SocialFlow has grown from a startup to a trusted 
                  partner for businesses worldwide, helping them navigate the ever-evolving 
                  social media landscape with confidence and creativity.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 rounded-2xl">
                <blockquote className="text-lg italic text-gray-700">
                  "Every brand has a story worth telling. Our job is to help you tell it 
                  in a way that resonates, engages, and inspires action."
                </blockquote>
                <cite className="block mt-3 text-brand-purple font-semibold">- Sarah Mitchell</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl flex items-center justify-center mr-4">
                  <Eye size={24} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the world's most trusted partner for social media excellence, 
                empowering businesses of all sizes to build authentic, engaging, and 
                profitable relationships with their audiences.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a digital world where every brand can effectively communicate 
                its value, connect with its community, and achieve sustainable growth 
                through strategic social media presence.
              </p>
            </div>

            {/* Mission */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl flex items-center justify-center mr-4">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To provide comprehensive, data-driven social media management services 
                that deliver measurable results while maintaining the authentic voice 
                and values of each brand we serve.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We are dedicated to staying at the forefront of social media innovation, 
                continuously evolving our strategies and tools to ensure our clients 
                always have a competitive advantage in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Making a difference, one brand at a time</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <Award size={48} className="mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="opacity-90">Industry Awards</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Users size={48} className="mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">25</div>
              <p className="opacity-90">Team Members</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Target size={48} className="mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">98%</div>
              <p className="opacity-90">Client Retention</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Lightbulb size={48} className="mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="opacity-90">Successful Campaigns</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
