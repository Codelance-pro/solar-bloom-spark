import React, { useState, useEffect, useRef } from 'react';
import {
  Folder,
  CheckCircle,
  Clock,
  Image,
  Video,
  MessageSquare,
  MapPin,
  Calendar,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  Quote,
  ExternalLink,
  Filter,
  Grid,
  List,
  Eye,
  Heart,
  Share2,
  BatteryCharging,
  Sun,
  Wind,
  ThermometerSun
} from 'lucide-react';

// Type definitions
interface Project {
  id: number;
  title: string;
  description: string;
  category: 'completed' | 'ongoing';
  location: string;
  date: string;
  duration: string;
  capacity: string;
  images: string[];
  videoUrl?: string;
  client: string;
  testimonial?: string;
  rating: number;
  features: string[];
  tags: string[];
  status: string;
}

interface GalleryItem {
  id: number;
  title: string;
  type: 'image' | 'video';
  url: string;
  projectId: number;
  projectTitle: string;
  thumbnail: string;
  likes: number;
  views: number;
}

interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  project: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
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

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'completed' | 'ongoing' | 'gallery' | 'testimonials'>('completed');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  // Animation Refs
  const headerAnim = useScrollAnimation();
  const statsAnim = useScrollAnimation();
  const tabsAnim = useScrollAnimation();
  const gridAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  // Projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Solar Park Development',
      description: 'Large-scale solar power plant with 50MW capacity providing clean energy to 25,000 homes annually.',
      category: 'completed',
      location: 'California, USA',
      date: 'Jan 2023 - Dec 2023',
      duration: '12 Months',
      capacity: '50 MW',
      images: [
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop'
      ],
      videoUrl: 'https://example.com/video1',
      client: 'Green Energy Corp',
      testimonial: 'Exceptional work quality and timely delivery. The team was professional throughout.',
      rating: 4.9,
      features: ['Smart Monitoring', 'Grid Integration', 'Weather Resilience', 'Automated Cleaning'],
      tags: ['Solar Farm', 'Renewable', 'Large Scale'],
      status: 'Operational'
    },
    {
      id: 2,
      title: 'Commercial Rooftop Installation',
      description: 'Complete rooftop solar solution for a major shopping mall with energy storage system.',
      category: 'ongoing',
      location: 'New York, USA',
      date: 'Mar 2024 - Present',
      duration: '8 Months',
      capacity: '2.5 MW',
      images: [
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop'
      ],
      client: 'Metro Shopping Center',
      rating: 4.8,
      features: ['Energy Storage', 'Smart Inverters', 'Load Management', 'Backup Power'],
      tags: ['Commercial', 'Rooftop', 'Storage'],
      status: '80% Complete'
    },
    {
      id: 3,
      title: 'Residential Solar Community',
      description: 'Complete solar solution for a residential community with 200 houses and common facilities.',
      category: 'completed',
      location: 'Texas, USA',
      date: 'Jun 2022 - Feb 2023',
      duration: '9 Months',
      capacity: '1.2 MW',
      images: [
        'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop'
      ],
      client: 'Sunshine Residences',
      testimonial: 'Transformed our community with sustainable energy. Excellent project management.',
      rating: 4.7,
      features: ['Community Grid', 'Smart Meters', 'Mobile App', 'Maintenance Package'],
      tags: ['Residential', 'Community', 'Smart Grid'],
      status: 'Operational'
    },
    {
      id: 4,
      title: 'Industrial Solar Installation',
      description: 'Custom solar solution for manufacturing plant with hybrid energy system.',
      category: 'ongoing',
      location: 'Florida, USA',
      date: 'Oct 2024 - Present',
      duration: '6 Months',
      capacity: '5 MW',
      images: [
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=800&fit=crop'
      ],
      client: 'Tech Manufacturing Inc',
      rating: 4.8,
      features: ['Hybrid System', 'Industrial Grade', 'Energy Management', 'Safety Systems'],
      tags: ['Industrial', 'Hybrid', 'Manufacturing'],
      status: '60% Complete'
    },
    {
      id: 5,
      title: 'Solar Water Pumping System',
      description: 'Off-grid solar pumping system for agricultural irrigation in remote areas.',
      category: 'completed',
      location: 'Arizona, USA',
      date: 'Feb 2023 - May 2023',
      duration: '4 Months',
      capacity: '250 kW',
      images: [
        'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop'
      ],
      client: 'Green Fields Agriculture',
      testimonial: 'Reliable solution that transformed our irrigation capabilities.',
      rating: 4.6,
      features: ['Off-grid', 'Automatic Operation', 'Remote Monitoring', 'Low Maintenance'],
      tags: ['Agricultural', 'Pumping', 'Off-grid'],
      status: 'Operational'
    },
    {
      id: 6,
      title: 'Government Solar Initiative',
      description: 'Solar installation for government buildings and public facilities.',
      category: 'ongoing',
      location: 'Washington DC, USA',
      date: 'Jan 2024 - Present',
      duration: '10 Months',
      capacity: '3.5 MW',
      images: [
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop'
      ],
      client: 'Federal Government',
      rating: 4.9,
      features: ['Public Sector', 'Security Systems', 'Redundant Backup', 'Compliance'],
      tags: ['Government', 'Public', 'Security'],
      status: '75% Complete'
    }
  ];

  // Gallery items
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Solar Farm Aerial View',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
      projectId: 1,
      projectTitle: 'Solar Park Development',
      thumbnail: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop',
      likes: 245,
      views: 1280
    },
    {
      id: 2,
      title: 'Installation Process',
      type: 'video',
      url: 'https://example.com/video2',
      projectId: 2,
      projectTitle: 'Commercial Rooftop',
      thumbnail: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
      likes: 189,
      views: 980
    },
    {
      id: 3,
      title: 'Community Project',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&h=600&fit=crop',
      projectId: 3,
      projectTitle: 'Residential Community',
      thumbnail: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop',
      likes: 312,
      views: 1540
    },
    {
      id: 4,
      title: 'Industrial Installation',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop',
      projectId: 4,
      projectTitle: 'Industrial Solar',
      thumbnail: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop',
      likes: 178,
      views: 890
    },
    {
      id: 5,
      title: 'Project Time-lapse',
      type: 'video',
      url: 'https://example.com/video3',
      projectId: 5,
      projectTitle: 'Solar Pumping',
      thumbnail: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=400&h=300&fit=crop',
      likes: 267,
      views: 1230
    },
    {
      id: 6,
      title: 'Commissioning Ceremony',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      projectId: 6,
      projectTitle: 'Government Project',
      thumbnail: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
      likes: 154,
      views: 720
    },
    {
      id: 7,
      title: 'Maintenance Operations',
      type: 'video',
      url: 'https://example.com/video4',
      projectId: 1,
      projectTitle: 'Solar Park',
      thumbnail: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop',
      likes: 198,
      views: 1050
    },
    {
      id: 8,
      title: 'System Monitoring',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop',
      projectId: 3,
      projectTitle: 'Residential Community',
      thumbnail: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
      likes: 231,
      views: 1120
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Michael Rodriguez',
      company: 'Green Energy Corp',
      position: 'CEO',
      project: 'Solar Park Development',
      rating: 4.9,
      comment: 'The professionalism and expertise displayed by the team was outstanding. The project was completed ahead of schedule and has been performing exceptionally.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Sunshine Residences',
      position: 'Property Manager',
      project: 'Residential Solar Community',
      rating: 4.7,
      comment: 'Transformed our community with sustainable energy. The team was responsive, professional, and delivered exactly what was promised. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      date: 'February 2024'
    },
    {
      id: 3,
      name: 'Robert Chen',
      company: 'Green Fields Agriculture',
      position: 'Operations Director',
      project: 'Solar Water Pumping System',
      rating: 4.6,
      comment: 'Reliable solar solution that has significantly reduced our operational costs. The system has been running flawlessly since installation.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      date: 'January 2024'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      company: 'Metro Shopping Center',
      position: 'Facilities Manager',
      project: 'Commercial Rooftop Installation',
      rating: 4.8,
      comment: 'Excellent project management and communication throughout. The installation was completed with minimal disruption to our operations.',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face',
      date: 'December 2023'
    },
    {
      id: 5,
      name: 'David Park',
      company: 'Tech Manufacturing Inc',
      position: 'Engineering Head',
      project: 'Industrial Solar Installation',
      rating: 4.8,
      comment: 'The team understood our industrial requirements perfectly. The hybrid system has been instrumental in our energy cost reduction strategy.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      date: 'November 2023'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      company: 'Federal Government',
      position: 'Sustainability Officer',
      project: 'Government Solar Initiative',
      rating: 4.9,
      comment: 'Working with this team has been a pleasure. Their attention to detail and compliance with government regulations was impeccable.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
      date: 'October 2023'
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => 
    activeTab === 'completed' ? project.category === 'completed' : 
    activeTab === 'ongoing' ? project.category === 'ongoing' : 
    true
  );

  // Navigation tabs
  const tabs = [
    { id: 'completed', label: 'Completed Projects', icon: <CheckCircle className="w-5 h-5" />, count: 3 },
    { id: 'ongoing', label: 'Ongoing Projects', icon: <Clock className="w-5 h-5" />, count: 3 },
    { id: 'gallery', label: 'Project Gallery', icon: <Image className="w-5 h-5" />, count: 8 },
    { id: 'testimonials', label: 'Client Testimonials', icon: <MessageSquare className="w-5 h-5" />, count: 6 }
  ];

  // Open project details
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setShowLightbox(true);
  };

  // Navigate images
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  // Close project details
  const closeProjectDetails = () => {
    setSelectedProject(null);
    setShowLightbox(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(234, 179, 8, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(234, 179, 8, 0); }
        }
        .animate-on-scroll { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 2s ease-out infinite; }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* Animated Background Elements */}
        <div className="fixed top-20 right-20 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl animate-float pointer-events-none"></div>
        <div className="fixed bottom-20 left-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-float pointer-events-none" style={{animationDelay: '1s'}}></div>
        <div className="fixed top-1/2 left-1/2 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-float pointer-events-none" style={{animationDelay: '2s'}}></div>

        {/* Header Section */}
        <div 
          ref={headerAnim.ref}
          className={`text-center mb-16 ${headerAnim.isVisible ? 'animate-on-scroll' : 'opacity-0'}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Showcasing our successful solar installations and client testimonials from around the world
          </p>
        </div>

        {/* Stats Overview */}
        <div ref={statsAnim.ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Projects', value: '250+', icon: <Folder className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
            { label: 'Completed', value: '187', icon: <CheckCircle className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
            { label: 'Ongoing', value: '63', icon: <Clock className="w-6 h-6" />, color: 'from-orange-500 to-yellow-500' },
            { label: 'Happy Clients', value: '200+', icon: <Users className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-2xl border border-yellow-200 shadow-lg hover:shadow-xl hover:shadow-yellow-200/50 transition-all duration-300 ${statsAnim.isVisible ? `animate-scale-in stagger-${index % 4 + 1}` : 'opacity-0'}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-md`}>
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div ref={tabsAnim.ref} className={`mb-10 ${tabsAnim.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-yellow-50 border border-yellow-200 hover:border-yellow-300'
                }`}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.label}
                <span className={`ml-3 px-2 py-1 text-xs rounded-full ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          {activeTab !== 'testimonials' && activeTab !== 'gallery' && (
            <div className="flex items-center justify-between mb-8">
              <div className="text-gray-600 font-medium">
                Showing {filteredProjects.length} projects
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-yellow-100 text-yellow-800' : 'bg-white text-gray-500 border border-gray-200'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-yellow-100 text-yellow-800' : 'bg-white text-gray-500 border border-gray-200'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div ref={gridAnim.ref} className="mb-20">
          {activeTab === 'completed' || activeTab === 'ongoing' ? (
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-500 hover:-translate-y-2 ${
                    viewMode === 'grid' ? '' : 'flex flex-col md:flex-row'
                  } ${gridAnim.isVisible ? `animate-scale-in stagger-${index % 3 + 1}` : 'opacity-0'}`}
                >
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${viewMode === 'grid' ? 'h-56' : 'md:w-1/3 h-64 md:h-auto'}`}>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-sm ${
                        project.category === 'completed'
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                          : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                      }`}>
                        {project.category === 'completed' ? 'COMPLETED' : 'ONGOING'}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white text-sm font-medium drop-shadow-md">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`p-6 ${viewMode === 'grid' ? '' : 'md:w-2/3'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          {project.date}
                        </div>
                      </div>
                      <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-gray-900 font-medium">{project.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <div className="text-xs text-gray-500">Capacity</div>
                        <div className="text-gray-900 font-semibold">{project.capacity}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <div className="text-xs text-gray-500">Duration</div>
                        <div className="text-gray-900 font-semibold">{project.duration}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs px-3 py-1 rounded-full bg-yellow-50 text-yellow-800 border border-yellow-100"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => openProjectDetails(project)}
                        className="flex-1 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        View Details
                      </button>
                      <button className="px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg hover:border-yellow-500 hover:text-yellow-700 hover:bg-yellow-50 transition-all duration-300">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : activeTab === 'gallery' ? (
            <div>
              {/* Gallery Filter */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold rounded-lg shadow-md">
                  All Media
                </button>
                {['Solar Farms', 'Installation', 'Commissioning', 'Maintenance', 'Aerial Views'].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-yellow-50 border border-gray-200 transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-500 ${gridAnim.isVisible ? `animate-scale-in stagger-${index % 4 + 1}` : 'opacity-0'}`}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-300">
                          <Heart className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Info Overlay */}
                    <div className="p-4">
                      <div className="text-gray-900 font-bold text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.projectTitle}</div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-yellow-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                      <div className="text-white font-bold text-center mb-4">{item.title}</div>
                      <div className="text-sm text-yellow-100 text-center mb-6">{item.projectTitle}</div>
                      <div className="flex items-center justify-center space-x-6 text-white text-sm">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          {item.views.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-2" />
                          {item.likes.toLocaleString()}
                        </div>
                      </div>
                      <button className="mt-6 px-6 py-2 bg-white text-yellow-800 font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                        View Full Size
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gallery Stats */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-yellow-200 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Image className="w-8 h-8 text-yellow-600 mr-4" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">156</div>
                      <div className="text-sm text-gray-600">High-Quality Photos</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-yellow-200 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Video className="w-8 h-8 text-yellow-600 mr-4" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">42</div>
                      <div className="text-sm text-gray-600">Project Videos</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-yellow-200 shadow-lg">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-yellow-600 mr-4" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">25K+</div>
                      <div className="text-sm text-gray-600">Gallery Views</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'testimonials' ? (
            <div>
              {/* Testimonials Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full mb-4 shadow-lg animate-pulse-ring">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Hear from businesses and organizations who have partnered with us for their solar energy solutions
                </p>
              </div>

              {/* Testimonials Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`group bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:border-yellow-300 hover:shadow-xl transition-all duration-300 ${gridAnim.isVisible ? `animate-scale-in stagger-${index % 3 + 1}` : 'opacity-0'}`}
                  >
                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(testimonial.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-200'
                          }`}
                        />
                      ))}
                      <span className="text-gray-900 font-bold ml-2">{testimonial.rating}</span>
                    </div>

                    {/* Testimonial Text */}
                    <div className="relative mb-8">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-100" />
                      <p className="text-gray-600 italic relative z-10">"{testimonial.comment}"</p>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-yellow-200 mr-4"
                      />
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.position}</div>
                        <div className="text-xs text-yellow-600 font-medium">{testimonial.company}</div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="text-sm text-gray-500">Project: <span className="text-gray-900 font-medium">{testimonial.project}</span></div>
                      <div className="text-xs text-gray-400 mt-1">{testimonial.date}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial Stats */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-yellow-200 text-center shadow-lg">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">4.8</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-yellow-200 text-center shadow-lg">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-yellow-200 text-center shadow-lg">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">200+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-yellow-200 text-center shadow-lg">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Would Recommend</div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* CTA Section */}
        <section ref={ctaAnim.ref} className={`relative overflow-hidden rounded-3xl shadow-2xl ${ctaAnim.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 animate-shimmer"></div>
          <div className="relative p-12 text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 shadow-xl animate-pulse-ring">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ready to Start Your <span className="text-white/90 underline decoration-white/30 decoration-4">Solar Project?</span>
            </h3>
            <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
              Join our satisfied clients and transform your energy future with our expert solar solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-amber-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                Start Your Project
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeProjectDetails}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
            >
              ×
            </button>

            {/* Project Header */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 text-sm font-bold rounded-full shadow-lg ${
                  selectedProject.category === 'completed'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                }`}>
                  {selectedProject.category.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-5 h-5 mr-3 text-yellow-600" />
                    {selectedProject.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-yellow-600" />
                    {selectedProject.date}
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">{selectedProject.capacity}</div>
                  <div className="text-gray-500">Total Capacity</div>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">{selectedProject.description}</p>

              {/* Project Details Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Duration</span>
                      <span className="text-gray-900 font-medium">{selectedProject.duration}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Status</span>
                      <span className="text-gray-900 font-medium">{selectedProject.status}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Client</span>
                      <span className="text-gray-900 font-medium">{selectedProject.client}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                        <span className="text-gray-900 font-medium">{selectedProject.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Testimonial */}
              {selectedProject.testimonial && (
                <div className="bg-yellow-50 rounded-xl p-6 mb-8 border border-yellow-100">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-yellow-600 mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Client Testimonial</h3>
                  </div>
                  <p className="text-gray-700 italic mb-4">"{selectedProject.testimonial}"</p>
                  <div className="text-yellow-700 font-medium">- {selectedProject.client}</div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Request Similar Project
                </button>
                <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-yellow-500 hover:text-yellow-700 hover:bg-yellow-50 transition-all duration-300">
                  Download Case Study
                </button>
                <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-yellow-500 hover:text-yellow-700 hover:bg-yellow-50 transition-all duration-300">
                  Share Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;