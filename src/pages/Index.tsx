
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Shield, BarChart3, Users, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "24/7 Monitoring",
      description: "Round-the-clock social media monitoring to ensure your brand stays protected and responsive."
    },
    {
      icon: BarChart3,
      title: "Deep Insights",
      description: "Advanced analytics and reporting to track performance and optimize your social media strategy."
    },
    {
      icon: Users,
      title: "Strategy Driven",
      description: "Data-driven strategies tailored to your brand's unique voice and business objectives."
    }
  ];
   const navigate = useNavigate();
  const reviews = [
    {
      name: "Aadil Sharaf",
      company: "Muscat Interiors",
      image: "https://i.ibb.co/gLy0FW1D/feed-1.jpg",
      review: "SocialFlow transformed our social media presence completely. Our engagement increased by 300% in just 3 months!"
    },
    {
      name: "Aseem M",
      company:"Mupa Restaurants",
      image:"https://i.ibb.co/gM7kH6Hd/feed-2.jpg",
      review: "Professional, reliable, and results-driven. The team understands our brand voice perfectly and delivers consistently."
    },
    {
      name: "Shahul Farshid",
     
      image: "https://i.ibb.co/zhyT83Bh/feed-34.jpg",
      review: "The strategic approach and attention to detail is outstanding. Our follower growth has been phenomenal!"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-blue/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                  Empowering Brands
                </span>
                <br />
                Through Smart Social Media Management
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We help your brand stay active, relevant, and engaging on all social platforms with data-driven strategies and 24/7 monitoring.
              </p>
             
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                onClick={() => navigate('/contact')}
                  size="lg" 
                  className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </Button>
               
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop" alt="Home -img" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-brand-purple" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven strategies to deliver exceptional results for your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">Real feedback from real clients who've seen real results.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {reviews.map((review, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <p className="text-sm text-gray-600">{review.company}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-1">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 leading-relaxed italic">"{review.review}"</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
