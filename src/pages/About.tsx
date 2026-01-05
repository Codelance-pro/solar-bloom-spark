import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Shield, 
  Heart, 
  Star, 
  Briefcase,
  Globe,
  Lightbulb,
  TrendingUp,
  Building,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react';

// Type definitions
interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

interface Value {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Reason {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
}

// Intersection Observer Hook for scroll animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

const About: React.FC = () => {
  const headerAnim = useScrollAnimation();
  const profileAnim = useScrollAnimation();
  const missionAnim = useScrollAnimation();
  const teamAnim = useScrollAnimation();
  const timelineAnim = useScrollAnimation();
  const reasonsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      description: "15+ years in tech industry",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO",
      description: "AI & Machine Learning expert",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Marcus Rivera",
      role: "Head of Operations",
      description: "Operations management specialist",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Head of Innovation",
      description: "Product development leader",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face"
    },
  ];

  // Values data
  const values: Value[] = [
    {
      id: 1,
      title: "Innovation",
      description: "Constantly pushing boundaries to deliver cutting-edge solutions",
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />
    },
    {
      id: 2,
      title: "Integrity",
      description: "Building trust through transparency and ethical practices",
      icon: <Shield className="w-8 h-8 text-amber-600" />
    },
    {
      id: 3,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in everything we do",
      icon: <Award className="w-8 h-8 text-yellow-600" />
    },
    {
      id: 4,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results",
      icon: <Users className="w-8 h-8 text-amber-600" />
    },
  ];

  // Reasons to choose us
  const reasons: Reason[] = [
    {
      id: 1,
      title: "Proven Track Record",
      description: "Proven track record in large-scale solar projects",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Skilled Team",
      description: "Skilled technical and project management team",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Strong Network",
      description: "Strong vendor and partner network",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Timely Delivery",
      description: "Focus on timely delivery and customer satisfaction",
      icon: <Star className="w-6 h-6" />
    },
  ];

  // Milestones
  const milestones: Milestone[] = [
    {
      id: 1,
      year: "2010",
      title: "Company Founded",
      description: "Started as a small tech startup with 5 employees"
    },
    {
      id: 2,
      year: "2013",
      title: "First Major Client",
      description: "Secured partnership with Fortune 500 company"
    },
    {
      id: 3,
      year: "2016",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia"
    },
    {
      id: 4,
      year: "2020",
      title: "Digital Transformation",
      description: "Successfully transitioned to full digital services"
    },
    {
      id: 5,
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded 'Best Tech Company' by Global Tech Awards"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 20px rgba(234, 179, 8, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(234, 179, 8, 0);
          }
        }

        .animate-on-scroll {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Animated Background Elements */}
        <div className="fixed top-20 right-20 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl animate-float pointer-events-none"></div>
        <div className="fixed bottom-20 left-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1s' }}></div>
        <div className="fixed top-1/2 left-1/2 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>

        {/* Header Section */}
        <div
          ref={headerAnim.ref}
          className={`text-center mb-20 ${headerAnim.isVisible ? 'animate-on-scroll' : 'opacity-0'}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Our Company</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We are dedicated to transforming industries through innovative solutions and exceptional service.
          </p>
        </div>

        {/* Company Profile Section */}
        <section ref={profileAnim.ref} className="mb-20 relative">
          <div className={`flex items-center mb-12 ${profileAnim.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Company Profile</h2>
              <p className="text-gray-600 mt-2">Our journey of excellence</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={profileAnim.isVisible ? 'animate-fade-in-left' : 'opacity-0'}>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                ENFROS is a renewable energy service provider specializing in solar power solutions. With over 16 years of combined experience in solar and renewable energy, our directors lead the way. We have successfully completed construction projects totaling over 2000 MW, including Installation & Commissioning (I&C) and Balance of System (BOS).
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Our goal is to become the LEADING EPC SERVICE PROVIDER in the solar power plant industry.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: '16+', label: 'Years Experience' },
                  { value: '2000+', label: 'MW Projects Completed' },
                  { value: 'EPC', label: 'Turnkey Solutions' },
                  { value: 'India', label: 'Service Area' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-white p-6 rounded-xl border-2 border-yellow-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${profileAnim.isVisible ? `animate-scale-in stagger-${index + 1}` : 'opacity-0'
                      }`}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                <span>Headquartered in Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            <div className={`relative group ${profileAnim.isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-yellow-200 group-hover:border-yellow-400 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop"
                  alt="Company Office"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values Section */}
        <section ref={missionAnim.ref} className="mb-20">
          <div className={`flex items-center mb-12 ${missionAnim.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Mission, Vision & Values</h2>
              <p className="text-gray-600 mt-2">Our guiding principles</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className={`bg-white p-8 rounded-2xl border-2 border-yellow-200 shadow-lg hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-300 group hover:-translate-y-2 ${missionAnim.isVisible ? 'animate-scale-in stagger-1' : 'opacity-0'
              }`}>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage solar energy to provide consumers with reliable and affordable power, delivering high-quality and innovative renewable energy solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Ensure continuous customer value through outstanding service and rapid response times.
              </p>
            </div>

            {/* Vision Card */}
            <div className={`bg-white p-8 rounded-2xl border-2 border-yellow-200 shadow-lg hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-300 group hover:-translate-y-2 ${missionAnim.isVisible ? 'animate-scale-in stagger-2' : 'opacity-0'
              }`}>
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                For over 16 years, we have had one goal in mind: customer service. Our vision is not just to complete projects but also to build relationships with our customers and clients through commitment, reliability, and excellence in every facet of the company.
              </p>
            </div>

            {/* Values Card */}
            <div className={`bg-white p-8 rounded-2xl border-2 border-yellow-200 shadow-lg hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-300 group hover:-translate-y-2 ${missionAnim.isVisible ? 'animate-scale-in stagger-3' : 'opacity-0'
              }`}>
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <div className="space-y-4 mt-6">
                {values.map((value) => (
                  <div key={value.id} className="flex items-start group/item">
                    <div className="mr-4 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover/item:text-yellow-600 transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        {/* <section ref={teamAnim.ref} className="mb-20">
          <div className={`flex items-center mb-12 ${teamAnim.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Leadership</h2>
              <p className="text-gray-600 mt-2">Meet the experts behind our success</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`bg-white rounded-2xl overflow-hidden border-2 border-yellow-200 shadow-lg hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-300 group hover:-translate-y-2 ${teamAnim.isVisible ? `animate-scale-in stagger-${index + 1}` : 'opacity-0'
                  }`}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Timeline Section */}
        {/* <section ref={timelineAnim.ref} className="mb-20">
          <div className={`flex items-center mb-12 ${timelineAnim.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
              <p className="text-gray-600 mt-2">Milestones of excellence</p>
            </div>
          </div>

          <div className="relative">
           
            <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-yellow-500 via-amber-400 to-transparent"></div>

            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`relative mb-12 ${index % 2 === 0 ? 'lg:pr-1/2 lg:pl-8 lg:text-right' : 'lg:pl-1/2 lg:pr-8 lg:text-left'}`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                  {index % 2 === 0 && (
                    <div className="hidden lg:block w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 animate-pulse-ring shadow-lg"></div>
                  )}
                  <div className={`bg-white p-6 rounded-2xl border-2 border-yellow-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full lg:w-96 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'} ${timelineAnim.isVisible ? `animate-scale-in stagger-${index + 1}` : 'opacity-0'
                    }`}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mr-4 shadow-md">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-yellow-600">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  {index % 2 !== 0 && (
                    <div className="hidden lg:block w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 animate-pulse-ring shadow-lg"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Why Choose Us Section */}
        <section ref={reasonsAnim.ref}>
          <div className={`flex items-center mb-12 ${reasonsAnim.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
              <p className="text-gray-600 mt-2">What sets us apart</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div
                key={reason.id}
                className={`bg-white p-8 rounded-2xl border-2 border-yellow-200 shadow-lg hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-300 group hover:-translate-y-2 ${reasonsAnim.isVisible ? `animate-scale-in stagger-${index + 1}` : 'opacity-0'
                  }`}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-2 border-yellow-300">
                  <div className="text-yellow-600 transform group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div ref={ctaAnim.ref} className={`relative overflow-hidden rounded-3xl shadow-2xl ${ctaAnim.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-amber-400/30 to-yellow-400/30"></div>
            <div className="relative bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8 shadow-xl animate-pulse-ring">
                <Star className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Transform <span className="text-gray-900">Your Business?</span>
              </h3>
              <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
                Join thousands of satisfied clients who have transformed their businesses with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-yellow-700 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                  Get Started Free
                </button>
                <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              <p className="text-white/80 mt-8 text-sm">
                No credit card required • 30-day free trial • 24/7 support
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;