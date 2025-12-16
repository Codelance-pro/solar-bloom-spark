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
      color: "from-orange-500 to-red-600"
    },
    { 
      name: "Commercial Solar", 
      icon: "🏢", 
      link: "#services",
      desc: "Business energy systems",
      color: "from-blue-500 to-indigo-600"
    },
    { 
      name: "Solar Maintenance", 
      icon: "🔧", 
      link: "#services",
      desc: "Expert care & support",
      color: "from-green-500 to-emerald-600"
    },
    { 
      name: "Battery Storage", 
      icon: "🔋", 
      link: "#services",
      desc: "Energy independence",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const highlights = [
    { 
      icon: Award, 
      title: "Certified Experts", 
      desc: "Licensed & Insured Professionals with 25+ Years Experience",
      colorClass: "from-orange-500 to-orange-600",
      bgClass: "bg-black/40"
    },
    { 
      icon: Shield, 
      title: "25 Year Warranty", 
      desc: "Comprehensive Coverage on All Equipment & Installation",
      colorClass: "from-blue-500 to-blue-600",
      bgClass: "bg-black/40"
    },
    { 
      icon: Clock, 
      title: "Quick Installation", 
      desc: "Most Projects Completed in Just 1-3 Days",
      colorClass: "from-green-500 to-green-600",
      bgClass: "bg-black/40"
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
    "Free on-site energy assessment",
    "Custom system design",
    "Transparent pricing",
    "Flexible financing options"
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
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden  bg-black/80">
         <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Solar background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-yellow-900/40"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 pt-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left Content */}
              <div className={`space-y-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Subtitle */}
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-full">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <span className="text-yellow-300 font-semibold tracking-wide text-sm">
                    #1 Clean Energy Provider in Your Area
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                  Power Your Future with{" "}
                  <span className="bg-yellow-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Solar Energy
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Transform your home or business with cutting-edge solar technology. Save money, reduce your carbon footprint, and invest in a sustainable future.
                </p>

                {/* Benefits List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {benefits.map((benefit, index) => {
                    const BenefitIcon = benefit.icon;
                    return (
                      <div 
                        key={index} 
                        className="flex items-center space-x-3 text-gray-200"
                      >
                        <div className="p-2 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-lg">
                          <BenefitIcon className="h-5 w-5 text-yellow-400" />
                        </div>
                        <span className="text-sm font-medium">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    Calculate Your Savings
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-yellow-500 text-black-400 hover:bg-yellow-500/10 font-semibold shadow-lg transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Button>
                </div>

                {/* Trust Badges */}
                {/* <div className="flex items-center space-x-6 pt-8">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-white">4.9/5 Rating</p>
                    <p className="text-gray-400">From 500+ Happy Customers</p>
                  </div>
                </div> */}
              </div>

              {/* Right Content - Stats Cards */}
              {/* <div className={`relative ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="grid grid-cols-2 gap-6">
                  Large Featured Card
                  <div className="col-span-2 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20">
                    <div className="flex items-center justify-between mb-6">
                      <Award className="h-12 w-12 text-orange-400" />
                      <span className="text-orange-300/80 text-sm font-semibold">TRUSTED SINCE 1999</span>
                    </div>
                    <h3 className="text-5xl font-extrabold text-white mb-2">500+</h3>
                    <p className="text-orange-200 text-lg">Successful Solar Installations</p>
                  </div>

                  Small Cards
                  <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
                    <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">98%</span>
                    </div>
                    <p className="text-gray-300 font-medium">Customer Satisfaction</p>
                  </div>

                  <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
                    <div className="bg-gradient-to-br from-green-500/30 to-emerald-500/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">25+</span>
                    </div>
                    <p className="text-gray-300 font-medium">Years Experience</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Banner Slider */}
      <section className="py-8 overflow-hidden bg-black/90">
        <div className={`bg-gradient-to-r ${bannerSlides[currentSlide].gradient} transition-all duration-1000`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="p-3 hover:bg-white/20 rounded-full transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <div className="flex-1 text-center text-white py-2">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                    <SlideIcon className="h-10 w-10" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-1">
                      {bannerSlides[currentSlide].title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90">
                      {bannerSlides[currentSlide].subtitle}
                    </p>
                  </div>
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold mt-4 sm:mt-0">
                    Claim Offer
                  </Button>
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="p-3 hover:bg-white/20 rounded-full transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
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

      {/* Key Highlights */}
      <section className="py-16 md:py-24 bg-black/80 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white">
              Why Choose <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Solar Power?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Experience the future of energy with our premium solar solutions
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => {
                const HighlightIcon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
                  >
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${highlight.colorClass} rounded-xl mb-6 shadow-lg`}>
                        <HighlightIcon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {highlight.desc}
                      </p>
                      <div className="mt-6 flex items-center text-orange-400 font-semibold">
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-black/90 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Premium Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Comprehensive solar solutions tailored to your needs
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="group relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="relative z-10 text-center">
                    <div className="text-5xl mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                    <div className="flex items-center justify-center text-orange-400 font-semibold">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-600/20 via-yellow-600/20 to-orange-600/20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Ready to Go Solar?
              </h2>
              <p className="text-lg md:text-xl text-white/90">
                Contact us today for a free consultation and custom quote
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {contacts.map((contact, index) => {
                  const ContactIcon = contact.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-black/40 backdrop-blur-sm p-8 rounded-2xl text-white text-center border border-gray-700 hover:border-orange-500 transition-all duration-300"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-2xl mb-6 group-hover:bg-orange-500/30 transition-all">
                        <ContactIcon className="h-8 w-8 text-orange-400" />
                      </div>
                      <h3 className="font-bold text-lg mb-3">{contact.title}</h3>
                      <p className="text-white/90">{contact.info}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-700">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Quote</h3>
                    <div className="space-y-4">
                      {quoteFeatures.map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 text-white">
                          <CheckCircle2 className="h-6 w-6 text-green-400" />
                          <span className="text-gray-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-lg px-8 py-6 font-bold shadow-lg hover:shadow-orange-500/25 transition-all duration-300 w-full"
                    >
                      Request Free Quote
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                    <p className="text-gray-400 text-sm mt-4 text-center">
                      No obligation • 100% Free • Get response within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;