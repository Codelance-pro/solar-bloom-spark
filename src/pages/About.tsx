import React from 'react';
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

const About: React.FC = () => {
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
      icon: <Lightbulb className="w-8 h-8 text-gold" />
    },
    {
      id: 2,
      title: "Integrity",
      description: "Building trust through transparency and ethical practices",
      icon: <Shield className="w-8 h-8 text-emerald-500" />
    },
    {
      id: 3,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in everything we do",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      id: 4,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results",
      icon: <Users className="w-8 h-8 text-silver" />
    },
  ];

  // Reasons to choose us
  const reasons: Reason[] = [
    {
      id: 1,
      title: "Expert Team",
      description: "Industry leaders with decades of combined experience",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Innovative Solutions",
      description: "Cutting-edge technology and forward-thinking approaches",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Global Reach",
      description: "Serving clients worldwide with localized expertise",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Customer-Centric",
      description: "Your success is our priority at every step",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes",
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
    <div className="min-h-screen bg-black/80 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-gold">Our Company</span>
          </h1>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            We are dedicated to transforming industries through innovative solutions and exceptional service.
          </p>
        </div>

        {/* Company Profile Section */}
        <section className="mb-20 animate-fade-in">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 bg-gradient-to-r from-gold to-yellow-600 rounded-lg flex items-center justify-center mr-4">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Company Profile</h2>
              <p className="text-silver mt-2">Our journey of excellence</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-silver text-lg mb-8 leading-relaxed">
                Founded in 2010, our company has grown from a small startup to a global leader in technology solutions. 
                With offices in 12 countries and over 500 dedicated professionals, we serve clients across multiple industries.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border-luxury shadow-luxury">
                  <div className="text-3xl font-bold text-gold mb-2">12+</div>
                  <div className="text-silver">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border-luxury shadow-luxury">
                  <div className="text-3xl font-bold text-gold mb-2">500+</div>
                  <div className="text-silver">Team Members</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border-luxury shadow-luxury">
                  <div className="text-3xl font-bold text-gold mb-2">1K+</div>
                  <div className="text-silver">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border-luxury shadow-luxury">
                  <div className="text-3xl font-bold text-gold mb-2">50+</div>
                  <div className="text-silver">Countries Served</div>
                </div>
              </div>
              
              <div className="flex items-center text-silver">
                <MapPin className="w-5 h-5 mr-2 text-gold" />
                <span>Global presence across 50+ countries</span>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-700 group-hover:border-gold/30 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop"
                  alt="Company Office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Mission, Vision & Values</h2>
              <p className="text-silver mt-2">Our guiding principles</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-luxury shadow-luxury hover:shadow-glow transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-silver leading-relaxed">
                To empower businesses through innovative technology solutions that drive growth, efficiency, 
                and sustainable success in an ever-evolving digital landscape.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-luxury shadow-luxury hover:shadow-glow transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-silver leading-relaxed">
                To be the global leader in transformative technology solutions, shaping a future where 
                businesses thrive through innovation and exceptional digital experiences.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-luxury shadow-luxury hover:shadow-glow transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <div className="space-y-4 mt-6">
                {values.map((value) => (
                  <div key={value.id} className="flex items-start group">
                    <div className="mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-gold transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-sm text-silver mt-1">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Our Leadership</h2>
              <p className="text-silver mt-2">Meet the experts behind our success</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-luxury shadow-luxury hover:shadow-glow transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium mb-2">{member.role}</p>
                  <p className="text-silver text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Our Journey</h2>
              <p className="text-silver mt-2">Milestones of excellence</p>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gold via-gray-700 to-transparent"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.id}
                className={`relative mb-12 ${index % 2 === 0 ? 'lg:pr-1/2 lg:pl-8 lg:text-right' : 'lg:pl-1/2 lg:pr-8 lg:text-left'}`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                  {index % 2 === 0 && (
                    <div className="hidden lg:block w-8 h-8 bg-gradient-to-r from-gold to-yellow-600 rounded-full border-4 border-gray-900 absolute left-1/2 transform -translate-x-1/2 animate-pulse-glow"></div>
                  )}
                  <div className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border-luxury shadow-luxury w-full lg:w-96 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-gold to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-gold">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-silver">{milestone.description}</p>
                  </div>
                  {index % 2 !== 0 && (
                    <div className="hidden lg:block w-8 h-8 bg-gradient-to-r from-gold to-yellow-600 rounded-full border-4 border-gray-900 absolute left-1/2 transform -translate-x-1/2 animate-pulse-glow"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
              <p className="text-silver mt-2">What sets us apart</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason) => (
              <div 
                key={reason.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-luxury shadow-luxury hover:shadow-glow transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-gold transform group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-silver leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gray-900 to-black animate-shimmer"></div>
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-12 text-center text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold to-yellow-600 rounded-full mb-8 glow">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform <span className="text-gold">Your Business?</span>
              </h3>
              <p className="text-silver mb-10 max-w-2xl mx-auto text-lg">
                Join thousands of satisfied clients who have transformed their businesses with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-gold to-yellow-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                  Get Started Free
                </button>
                <button className="bg-transparent border-2 border-gold text-gold px-10 py-4 rounded-xl font-bold text-lg hover:bg-gold/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              <p className="text-silver mt-8 text-sm">
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