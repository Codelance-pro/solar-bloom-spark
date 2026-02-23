import React, { useState, useEffect, useRef } from 'react';
import {
  Package,
  Zap,
  Grid,
  Cable,
  Shield,
  Battery,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ShoppingCart,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  Award,
  ChevronRight,
  Sun,
  BatteryCharging,
  Wind,
  Thermometer,
  Droplets,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

// Type definitions
interface ProductCategory {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  count: number;
}

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  specifications: {
    key: string;
    value: string;
  }[];
  price: number;
  discount?: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  isFeatured: boolean;
  tags: string[];
}

interface ProductService {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
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

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Stats & Refs
  const headerAnim = useScrollAnimation();
  const searchAnim = useScrollAnimation();
  const categoriesAnim = useScrollAnimation();
  const productsAnim = useScrollAnimation();
  const featuredAnim = useScrollAnimation();
  const servicesAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  // Product categories
  const categories: ProductCategory[] = [
    {
      id: 1,
      name: 'Solar Panels',
      description: 'High-efficiency photovoltaic panels',
      icon: <Sun className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      count: 42
    },
    {
      id: 2,
      name: 'Inverters',
      description: 'Power conversion systems',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500',
      count: 28
    },
    {
      id: 3,
      name: 'Mounting Structures',
      description: 'Installation frameworks',
      icon: <Grid className="w-8 h-8" />,
      color: 'from-gray-600 to-gray-700',
      count: 35
    },
    {
      id: 4,
      name: 'Cables & Accessories',
      description: 'Wiring and connectors',
      icon: <Cable className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      count: 56
    },
    {
      id: 5,
      name: 'Earthing Materials',
      description: 'Grounding and safety equipment',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      count: 24
    },
    {
      id: 6,
      name: 'Other Components',
      description: 'Additional solar equipment',
      icon: <BatteryCharging className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      count: 18
    }
  ];

  // Sample products data
  const products: Product[] = [
    {
      id: 1,
      name: 'Monocrystalline Solar Panel',
      category: 'Solar Panels',
      description: 'High-efficiency 450W monocrystalline solar panel with PERC technology for maximum energy output.',
      features: [
        '450W Output',
        'PERC Technology',
        '25-Year Warranty',
        'High Weather Resistance'
      ],
      specifications: [
        { key: 'Efficiency', value: '22.5%' },
        { key: 'Dimensions', value: '2000 x 1000 mm' },
        { key: 'Weight', value: '23 kg' },
        { key: 'Temperature Coefficient', value: '-0.35%/°C' }
      ],
      price: 299,
      discount: 15,
      rating: 4.8,
      reviews: 142,
      imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
      isFeatured: true,
      tags: ['Best Seller', 'High Efficiency', 'Premium']
    },
    {
      id: 2,
      name: 'String Inverter 5kW',
      category: 'Inverters',
      description: 'Advanced string inverter with smart monitoring and high conversion efficiency.',
      features: [
        '5kW Capacity',
        '98.5% Efficiency',
        'WiFi Monitoring',
        'MPPT Technology'
      ],
      specifications: [
        { key: 'Input Voltage', value: '150-800V DC' },
        { key: 'Output', value: '230V AC' },
        { key: 'Efficiency', value: '98.5%' },
        { key: 'Warranty', value: '10 Years' }
      ],
      price: 899,
      rating: 4.6,
      reviews: 89,
      imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop',
      isFeatured: true,
      tags: ['Smart', 'Efficient', 'Premium']
    },
    {
      id: 3,
      name: 'Aluminum Mounting System',
      category: 'Mounting Structures',
      description: 'Durable aluminum mounting structure for rooftop installations with anti-corrosion coating.',
      features: [
        'Aluminum Construction',
        'Corrosion Resistant',
        'Easy Installation',
        'Adjustable Angles'
      ],
      specifications: [
        { key: 'Material', value: 'Aluminum 6063' },
        { key: 'Load Capacity', value: '5400 Pa' },
        { key: 'Wind Resistance', value: '150 km/h' },
        { key: 'Warranty', value: '15 Years' }
      ],
      price: 199,
      discount: 10,
      rating: 4.7,
      reviews: 67,
      imageUrl: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=600&h=400&fit=crop',
      isFeatured: false,
      tags: ['Durable', 'Corrosion Proof', 'Easy Install']
    },
    {
      id: 4,
      name: 'Solar DC Cable',
      category: 'Cables & Accessories',
      description: 'UV-resistant solar DC cable with double insulation for maximum safety and durability.',
      features: [
        'UV Resistant',
        'Double Insulation',
        'Fire Retardant',
        'Copper Conductor'
      ],
      specifications: [
        { key: 'Size', value: '4mm²' },
        { key: 'Voltage', value: '1000V DC' },
        { key: 'Temperature Range', value: '-40°C to 90°C' },
        { key: 'Certification', value: 'TUV/UL' }
      ],
      price: 2.99,
      rating: 4.5,
      reviews: 45,
      imageUrl: 'https://images.unsplash.com/photo-1622495505533-1e6d05a8b448?w=600&h=400&fit=crop',
      isFeatured: false,
      tags: ['High Quality', 'Certified', 'Durable']
    },
    {
      id: 5,
      name: 'Copper Earthing Rod',
      category: 'Earthing Materials',
      description: 'High-quality copper bonded earthing rod for effective grounding and safety.',
      features: [
        'Copper Bonded',
        'Corrosion Resistant',
        'High Conductivity',
        'Easy Installation'
      ],
      specifications: [
        { key: 'Diameter', value: '16 mm' },
        { key: 'Length', value: '2.4 m' },
        { key: 'Material', value: 'Copper Bonded Steel' },
        { key: 'Resistance', value: '< 10Ω' }
      ],
      price: 24.99,
      rating: 4.4,
      reviews: 38,
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      isFeatured: false,
      tags: ['Safety', 'Copper', 'High Quality']
    },
    {
      id: 6,
      name: 'Solar Battery 5kWh',
      category: 'Other Components',
      description: 'Lithium-ion solar battery with smart BMS for energy storage solutions.',
      features: [
        '5kWh Capacity',
        'Lithium-ion',
        'Smart BMS',
        '10-Year Warranty'
      ],
      specifications: [
        { key: 'Capacity', value: '5 kWh' },
        { key: 'Chemistry', value: 'LiFePO4' },
        { key: 'Cycle Life', value: '6000 Cycles' },
        { key: 'Efficiency', value: '95%' }
      ],
      price: 1499,
      discount: 20,
      rating: 4.9,
      reviews: 156,
      imageUrl: 'https://images.unsplash.com/photo-1629654291660-3c98113a0438?w=600&h=400&fit=crop',
      isFeatured: true,
      tags: ['High Capacity', 'Long Life', 'Smart']
    },
    {
      id: 7,
      name: 'Polycrystalline Solar Panel',
      category: 'Solar Panels',
      description: 'Cost-effective 400W polycrystalline solar panel with excellent performance.',
      features: [
        '400W Output',
        'Cost Effective',
        '20-Year Warranty',
        'Reliable Performance'
      ],
      specifications: [
        { key: 'Efficiency', value: '18.5%' },
        { key: 'Dimensions', value: '1960 x 992 mm' },
        { key: 'Weight', value: '21.5 kg' },
        { key: 'Temperature Coefficient', value: '-0.40%/°C' }
      ],
      price: 229,
      rating: 4.3,
      reviews: 78,
      imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
      isFeatured: false,
      tags: ['Cost Effective', 'Reliable', 'Budget']
    },
    {
      id: 8,
      name: 'Hybrid Inverter 8kW',
      category: 'Inverters',
      description: 'Hybrid inverter with battery backup and grid connectivity options.',
      features: [
        '8kW Capacity',
        'Hybrid Operation',
        'Battery Backup',
        'Grid Interactive'
      ],
      specifications: [
        { key: 'Input Voltage', value: '120-450V DC' },
        { key: 'Output', value: '230V AC' },
        { key: 'Efficiency', value: '97.5%' },
        { key: 'Battery Voltage', value: '48V' }
      ],
      price: 1299,
      discount: 12,
      rating: 4.7,
      reviews: 94,
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      isFeatured: true,
      tags: ['Hybrid', 'Grid-tie', 'Backup']
    }
  ];

  // Services data
  const services: ProductService[] = [
    {
      id: 1,
      title: 'Technical Consultation',
      description: 'Expert guidance on solar system design and component selection.',
      icon: <Users className="w-10 h-10" />,
      features: ['Site Assessment', 'System Design', 'Component Selection', 'Feasibility Study']
    },
    {
      id: 2,
      title: 'Installation Services',
      description: 'Professional installation by certified technicians.',
      icon: <Package className="w-10 h-10" />,
      features: ['Rooftop Installation', 'Ground Mounting', 'Grid Connection', 'Commissioning']
    },
    {
      id: 3,
      title: 'Maintenance & Support',
      description: 'Regular maintenance and 24/7 technical support.',
      icon: <Shield className="w-10 h-10" />,
      features: ['Regular Maintenance', 'Troubleshooting', 'Performance Monitoring', 'Warranty Support']
    },
    {
      id: 4,
      title: 'Custom Solutions',
      description: 'Tailored solar solutions for unique requirements.',
      icon: <Award className="w-10 h-10" />,
      features: ['Custom Designs', 'Special Applications', 'Integration Solutions', 'Scale Planning']
    }
  ];

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

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
        <div className="fixed bottom-20 left-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1s' }}></div>
        <div className="fixed top-1/2 left-1/2 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>

        {/* Header Section */}
        <div
          ref={headerAnim.ref}
          className={`text-center mb-16 ${headerAnim.isVisible ? 'animate-on-scroll' : 'opacity-0'}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Solar <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            High-quality solar components and professional services for your renewable energy needs
          </p>
        </div>

        {/* Search and Filter Section */}
        <div
          ref={searchAnim.ref}
          className={`mb-12 ${searchAnim.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
        >
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, categories, or specifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 shadow-sm"
              />
            </div>
            <button className="flex items-center justify-center px-6 py-3 bg-white border border-yellow-200 rounded-xl text-yellow-700 hover:bg-yellow-50 hover:shadow-lg transition-all duration-300 shadow-sm font-medium">
              <Filter className="w-5 h-5 mr-2" />
              Advanced Filters
            </button>
          </div>
        </div>

        {/* Categories Section */}
        <section ref={categoriesAnim.ref} className="mb-20">
          <div className={`flex items-center justify-between mb-8 ${categoriesAnim.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Product Categories</h2>
              <p className="text-gray-600 mt-2">Browse our comprehensive range of solar products</p>
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-50 border border-gray-200'
                }`}
            >
              View All
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-500 hover:-translate-y-2 bg-white border-2 hover:shadow-xl ${categoriesAnim.isVisible ? `animate-scale-in stagger-${index % 4 + 1}` : 'opacity-0'
                  } ${selectedCategory === category.name
                    ? 'border-yellow-400 shadow-lg ring-2 ring-yellow-400/20'
                    : 'border-transparent shadow hover:border-yellow-200'
                  }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-md`}>
                    {category.icon}
                  </div>
                  <span className={`px-3 py-1 text-sm rounded-full ${selectedCategory === category.name
                      ? 'bg-yellow-100 text-yellow-800 font-semibold'
                      : 'bg-gray-100 text-gray-600'
                    }`}>
                    {category.count} items
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex items-center text-yellow-600 font-medium">
                  <span>View Products</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid Section */}
        <section ref={productsAnim.ref} className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Products' : selectedCategory}
              </h2>
              <p className="text-gray-600 mt-2">
                {filteredProducts.length} products found
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Sort by:</span>
              <select className="bg-white border border-gray-200 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500 shadow-sm">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-gray-200">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-500 hover:-translate-y-2 ${productsAnim.isVisible ? `animate-scale-in stagger-${index % 4 + 1}` : 'opacity-0'
                    }`}
                >
                  {/* Product Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.isFeatured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        FEATURED
                      </div>
                    )}
                    {product.discount && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        -{product.discount}%
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-gray-900 ml-1 font-medium">{product.rating}</span>
                        <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full bg-yellow-50 text-yellow-800 border border-yellow-100"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center">
                          {product.discount && (
                            <span className="text-gray-400 line-through mr-3">${product.price}</span>
                          )}
                          <span className="text-2xl font-bold text-gray-900">
                            ${product.discount ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">per unit</div>
                      </div>
                      <button className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-full text-yellow-700 hover:bg-yellow-500 hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
                        Add to Quote
                      </button>
                      <button className="px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg hover:border-yellow-500 hover:text-yellow-700 hover:bg-yellow-50 transition-all duration-300 text-sm">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Featured Products Section */}
        <section ref={featuredAnim.ref} className="mb-20">
          <div className={`flex items-center mb-8 ${featuredAnim.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-gray-600 mt-2">Our most popular and highly-rated products</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {products.filter(p => p.isFeatured).slice(0, 2).map((product, index) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-300 group ${featuredAnim.isVisible ? `animate-scale-in stagger-${index + 1}` : 'opacity-0'
                  }`}
              >
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="lg:w-2/5 relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-transparent to-transparent"></div>
                  </div>
                  <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-yellow-600 font-bold text-sm tracking-wider uppercase">{product.category}</span>
                      <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-gray-900 ml-1 font-bold text-sm">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {product.specifications.slice(0, 4).map((spec, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                          <div className="text-xs text-gray-500">{spec.key}</div>
                          <div className="text-gray-900 font-semibold">{spec.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">${product.price}</div>
                        <div className="text-sm text-gray-500">Starting price</div>
                      </div>
                      <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesAnim.ref} className="mb-20">
          <div className={`flex items-center mb-8 ${servicesAnim.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
              <p className="text-gray-600 mt-2">Complete solar solutions from consultation to maintenance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300 group hover:-translate-y-2 ${servicesAnim.isVisible ? `animate-scale-in stagger-${index + 1}` : 'opacity-0'
                  }`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <div className="text-cyan-600">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-cyan-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaAnim.ref} className={` relative overflow-hidden rounded-3xl shadow-2xl ${ctaAnim.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 animate-shimmer"></div>
          <div className="relative p-12 text-center text-white bg-amber-500  ">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 shadow-xl animate-pulse-ring">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Need Help Choosing the <span className="text-white/90 underline decoration-white/30 decoration-4">Right Products?</span>
            </h3>
            <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
              Our solar experts are ready to help you select the perfect components for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-amber-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                <Phone className="w-5 h-5 inline mr-3" />
                Call Now: +1 (555) 123-4567
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                <Mail className="w-5 h-5 inline mr-3" />
                Request Quote
              </button>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-white/20 pt-8">
              <div className="flex items-center justify-center text-white/90">
                <Clock className="w-5 h-5 mr-2" />
                24/7 Support Available
              </div>
              <div className="flex items-center justify-center text-white/90">
                <CheckCircle className="w-5 h-5 mr-2" />
                Free Technical Consultation
              </div>
              <div className="flex items-center justify-center text-white/90">
                <MapPin className="w-5 h-5 mr-2" />
                Worldwide Shipping
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;