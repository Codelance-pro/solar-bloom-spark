import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap, Phone, Mail, MapPin, Award, Shield, Clock, ChevronLeft, ChevronRight, TrendingUp, Leaf, DollarSign, CheckCircle2, Star } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "../assets/hero-solar.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const bannerSlides = [
    {
      title: "25% Off Solar Installations",
      subtitle: "Limited Time Offer - Ends Dec 31st",
      icon: Zap,
      gradient: "from-orange-600 via-orange-500 to-yellow-500"
    },
    {
      title: "Free Energy Audit Worth $500",
      subtitle: "Get Your Custom Solar Assessment Today",
      icon: Sun,
      gradient: "from-yellow-600 via-yellow-500 to-orange-500"
    },
    {
      title: "0% Financing Available",
      subtitle: "Make Solar Affordable with Flexible Payment Plans",
      icon: Award,
      gradient: "from-blue-600 via-blue-500 to-cyan-500"
    }
  ];

  const services = [
    { 
      name: "Residential Solar", 
      icon: "🏠", 
      link: "#services",
      desc: "Custom home solutions",
      color: "from-orange-400 to-red-500"
    },
    { 
      name: "Commercial Solar", 
      icon: "🏢", 
      link: "#services",
      desc: "Business energy systems",
      color: "from-blue-400 to-indigo-500"
    },
    { 
      name: "Solar Maintenance", 
      icon: "🔧", 
      link: "#services",
      desc: "Expert care & support",
      color: "from-green-400 to-emerald-500"
    },
    { 
      name: "Battery Storage", 
      icon: "🔋", 
      link: "#services",
      desc: "Energy independence",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const highlights = [
    { 
      icon: Award, 
      title: "Certified Experts", 
      desc: "Licensed & Insured Professionals with 25+ Years Experience",
      colorClass: "from-orange-500 to-orange-600",
      bgClass: "from-orange-50 to-orange-100"
    },
    { 
      icon: Shield, 
      title: "25 Year Warranty", 
      desc: "Comprehensive Coverage on All Equipment & Installation",
      colorClass: "from-blue-500 to-blue-600",
      bgClass: "from-blue-50 to-blue-100"
    },
    { 
      icon: Clock, 
      title: "Quick Installation", 
      desc: "Most Projects Completed in Just 1-3 Days",
      colorClass: "from-green-500 to-green-600",
      bgClass: "from-green-50 to-green-100"
    }
  ];

  const benefits = [
    { icon: DollarSign, text: "Save up to 70% on energy bills" },
    { icon: TrendingUp, text: "Increase property value by 4%" },
    { icon: Leaf, text: "Reduce carbon footprint by 80%" },
    { icon: Shield, text: "Protected from rising energy costs" }
  ];

  const contacts = [
    { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567" },
    { icon: Mail, title: "Email Us", info: "info@solarpower.com" },
    { icon: MapPin, title: "Visit Us", info: "123 Solar St, Green City" }
  ];

  const quoteFeatures = [
    "✓ Free on-site energy assessment",
    "✓ Custom system design",
    "✓ Transparent pricing",
    "✓ Flexible financing options"
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);

  const SlideIcon = bannerSlides[currentSlide].icon;

  return (
    <>
      {/* Hero Section with Advanced Animations */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50 to-yellow-50">
          <div className="absolute inset-0 z-0">
               <img
                 src={heroImage}
                 alt="Solar"
                 className="w-full h-full object-cover scale-105 animate-[pulse_7s_ease-in-out_infinite]"
               />
               {/* YOUR ORIGINAL OVERLAY */}
               <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/50 to-background/30" />
             </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Subtitle with animated badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 backdrop-blur-sm border border-orange-300/50 px-4 py-2 rounded-full">
                <Zap className="h-5 w-5 text-orange-500 animate-pulse" />
                <span className="text-orange-600 font-semibold tracking-wide text-sm">
                  #1 Clean Energy Provider in Your Area
                </span>
              </div>

              {/* Main Heading with Gradient */}
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Power Your Future with{" "}
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
                  Solar Energy
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your home or business with cutting-edge solar technology. Save money, reduce your carbon footprint, and invest in a sustainable future.
              </p>

              {/* Benefits List */}
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center space-x-2 text-gray-700 group hover:scale-105 transition-transform"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="p-2 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg group-hover:shadow-lg transition-shadow">
                        <BenefitIcon className="h-5 w-5 text-orange-600" />
                      </div>
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                >
                  Calculate Your Savings
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-900">4.9/5 Rating</p>
                  <p className="text-gray-600">From 500+ Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-6">
                {/* Large Featured Card */}
                <div className="col-span-2 bg-gradient-to-br from-orange-500 to-yellow-500 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:rotate-1">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="h-12 w-12 text-white" />
                    <span className="text-white/80 text-sm font-semibold">TRUSTED SINCE 1999</span>
                  </div>
                  <h3 className="text-5xl font-extrabold text-white mb-2">500+</h3>
                  <p className="text-white/90 text-lg">Successful Solar Installations</p>
                </div>

                {/* Small Cards */}
                <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-rotate-1 border border-gray-100">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">98%</span>
                  </div>
                  <p className="text-gray-600 font-medium">Customer Satisfaction</p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:rotate-1 border border-gray-100">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">25+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
              </div>

              {/* Floating Sun Animation */}
              <div className="absolute -bottom-10 -right-10 opacity-20">
                <Sun className="h-40 w-40 text-orange-400 animate-spin" style={{animationDuration: '20s'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Banner Slider */}
      <section className="relative py-6 overflow-hidden">
        <div className={`bg-gradient-to-r ${bannerSlides[currentSlide].gradient} transition-all duration-1000`}>
          <div className="h-32 mx-auto px-4">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="p-3 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <div className="flex-1 text-center text-white py-2">
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl animate-bounce">
                    <SlideIcon className="h-10 w-10" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-1">
                      {bannerSlides[currentSlide].title}
                    </h3>
                    <p className="text-sm md:text-base text-white/90">
                      {bannerSlides[currentSlide].subtitle}
                    </p>
                  </div>
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold hidden md:inline-flex">
                    Claim Offer
                  </Button>
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="p-3 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {bannerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-10 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights with Advanced Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Why Choose <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Solar Power?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of energy with our premium solar solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const HighlightIcon = highlight.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${highlight.colorClass} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <HighlightIcon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.desc}
                    </p>
                    <div className="mt-6 flex items-center text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services with Dynamic Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Premium Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solar solutions tailored to your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-orange-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                  <div className="flex items-center justify-center text-orange-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section with Glass Morphism */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-600 relative overflow-hidden">
        {/* Animated Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Ready to Go Solar?
              </h2>
              <p className="text-white/90 text-xl">
                Contact us today for a free consultation and custom quote
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contacts.map((contact, index) => {
                const ContactIcon = contact.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-lg p-8 rounded-3xl text-white text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <ContactIcon className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                    <p className="text-white/90">{contact.info}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4">Get Your Free Quote</h3>
                  <div className="space-y-3">
                    {quoteFeatures.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 text-white">
                        <CheckCircle2 className="h-5 w-5 text-green-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-10 py-6 font-bold shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-300 w-full md:w-auto"
                  >
                    Request Free Quote
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Sun Icon */}
        <div className="absolute bottom-0 right-0 opacity-10">
          <Sun className="h-64 w-64 text-white" />
        </div>
      </section>
    </>
  );
};

export default Home;