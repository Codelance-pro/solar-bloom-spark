import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Building,
  Globe,
  MessageSquare,
  User,
  Loader2,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  location: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    location: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Office locations data
  const offices = [
    {
      id: 1,
      city: 'New York',
      country: 'USA',
      address: '123 Solar Street, Manhattan, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'nyc@enfros.com',
      workingHours: 'Mon-Fri: 9AM-6PM EST',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 2,
      city: 'London',
      country: 'UK',
      address: '45 Energy Square, London EC2A 4NE',
      phone: '+44 20 7946 0958',
      email: 'london@enfros.com',
      workingHours: 'Mon-Fri: 9AM-6PM GMT',
      coordinates: { lat: 51.5074, lng: -0.1278 }
    },
    {
      id: 3,
      city: 'Dubai',
      country: 'UAE',
      address: 'Tower 3, Business Bay, Dubai',
      phone: '+971 4 123 4567',
      email: 'dubai@enfros.com',
      workingHours: 'Sun-Thu: 9AM-6PM GST',
      coordinates: { lat: 25.2048, lng: 55.2708 }
    },
    {
      id: 4,
      city: 'Singapore',
      country: 'Singapore',
      address: '8 Marina View, Asia Square Tower 1',
      phone: '+65 6818 1234',
      email: 'singapore@enfros.com',
      workingHours: 'Mon-Fri: 9AM-6PM SGT',
      coordinates: { lat: 1.3521, lng: 103.8198 }
    }
  ];

  // Department contacts
  const departments = [
    {
      id: 1,
      name: 'Sales',
      email: 'sales@enfros.com',
      phone: '+1 (555) 123-4568',
      description: 'Get quotes and product information'
    },
    {
      id: 2,
      name: 'Support',
      email: 'support@enfros.com',
      phone: '+1 (555) 123-4569',
      description: 'Technical support and assistance'
    },
    {
      id: 3,
      name: 'Projects',
      email: 'projects@enfros.com',
      phone: '+1 (555) 123-4570',
      description: 'Project inquiries and management'
    },
    {
      id: 4,
      name: 'Careers',
      email: 'careers@enfros.com',
      phone: '+1 (555) 123-4571',
      description: 'Job opportunities and recruitment'
    }
  ];

  // Quick contact options
  const quickContacts = [
    {
      id: 1,
      title: 'General Inquiries',
      contact: 'info@enfros.com',
      icon: <Mail className="w-6 h-6" />,
      responseTime: 'Within 24 hours'
    },
    {
      id: 2,
      title: 'Emergency Support',
      contact: '+1 (555) 123-9999',
      icon: <Phone className="w-6 h-6" />,
      responseTime: '24/7 available'
    },
    {
      id: 3,
      title: 'Technical Support',
      contact: 'tech@enfros.com',
      icon: <MessageSquare className="w-6 h-6" />,
      responseTime: 'Within 4 hours'
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          location: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold to-yellow-600 rounded-full mb-6 glow">
            <MessageSquare className="w-10 h-10 text-white" />
          </div> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="text-gold">Touch</span>
          </h1>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Have questions about solar solutions? We're here to help you make the right energy choices.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center">
            <div className="text-3xl font-bold text-gold mb-2">24/7</div>
            <div className="text-sm text-silver">Support Available</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center">
            <div className="text-3xl font-bold text-gold mb-2">2h</div>
            <div className="text-sm text-silver">Avg. Response Time</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center">
            <div className="text-3xl font-bold text-gold mb-2">98%</div>
            <div className="text-sm text-silver">Client Satisfaction</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center">
            <div className="text-3xl font-bold text-gold mb-2">50+</div>
            <div className="text-sm text-silver">Countries Served</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column: Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 md:p-8 shadow-luxury">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-gold to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                <Send className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                <p className="text-silver">We'll get back to you within 24 hours</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-silver mb-8">
                  Thank you for contacting us. Our team will get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:border-gold hover:bg-gray-800/50 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-silver mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                          errors.name ? 'border-red-500' : 'border-gray-700'
                        } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300`}
                        placeholder="John Smith"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-silver mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                          errors.email ? 'border-red-500' : 'border-gray-700'
                        } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-silver mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${
                          errors.phone ? 'border-red-500' : 'border-gray-700'
                        } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300`}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-silver mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-silver mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${
                      errors.subject ? 'border-red-500' : 'border-gray-700'
                    } rounded-xl text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300`}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Sales Quote">Sales Quote</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Project Consultation">Project Consultation</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Careers">Careers</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-silver mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none`}
                    placeholder="Tell us about your solar project or inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-silver">
                    * Required fields
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-gold to-yellow-600 text-white font-bold rounded-xl hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center ">
                        Send Message
                        <Send className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Options */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 shadow-luxury">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Contact</h2>
              <div className="space-y-4">
                {quickContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="group flex items-center p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-gold/50 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-gold">{contact.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-gold transition-colors duration-300">
                        {contact.title}
                      </h3>
                      <div className="text-lg font-medium text-white mt-1">{contact.contact}</div>
                      <div className="text-sm text-silver mt-1">{contact.responseTime}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-gold transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Global Offices */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 shadow-luxury">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Global Offices</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {offices.map((office) => (
                  <div
                    key={office.id}
                    className="p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="flex items-start mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mr-3">
                        <Building className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{office.city}</h3>
                        <div className="text-sm text-silver">{office.country}</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-silver">
                        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="truncate">{office.address}</span>
                      </div>
                      <div className="flex items-center text-silver">
                        <Phone className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center text-silver">
                        <Mail className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center text-silver">
                        <Clock className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{office.workingHours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Department Contacts */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Department Contacts</h2>
              <p className="text-silver mt-2">Get in touch with the right team for your needs</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {dept.name}
                </h3>
                <p className="text-silver text-sm mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-silver">
                    <Mail className="w-4 h-4 mr-3 text-purple-400" />
                    <span>{dept.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-silver">
                    <Phone className="w-4 h-4 mr-3 text-purple-400" />
                    <span>{dept.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map & Location Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Find Our Office</h2>
              <p className="text-silver mt-2">Visit us at our headquarters</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden h-96 shadow-luxury">
                {/* Google Maps Embed - Replace with your actual embed code */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Interactive Map</h3>
                    <p className="text-silver mb-4">Google Maps integration would appear here</p>
                    <div className="text-sm text-gray-500">
                      Latitude: 40.7128 | Longitude: -74.0060
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">123 Solar Street</div>
                      <div className="text-silver text-sm">Manhattan, NY 10001</div>
                      <div className="text-silver text-sm">United States</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                    <span className="text-white">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                    <span className="text-white">hq@enfros.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                    <span className="text-white">Mon-Fri: 9:00 AM - 6:00 PM EST</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Visiting Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
                    { day: 'Sunday', time: 'Closed' },
                    { day: 'Public Holidays', time: 'Closed' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0">
                      <span className="text-silver">{schedule.day}</span>
                      <span className="text-white font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media & Newsletter */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Connect With Us</h2>
              <p className="text-silver mb-8">
                Follow us on social media for the latest updates, tips, and industry news.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, color: 'from-blue-600 to-blue-700' },
                  { name: 'Twitter', icon: <Twitter className="w-6 h-6" />, color: 'from-cyan-500 to-blue-500' },
                  { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, color: 'from-blue-700 to-blue-800' },
                  { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, color: 'from-purple-600 to-pink-600' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`group flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${social.color} text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    <span className="mr-3">{social.icon}</span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-silver mb-8">
                Subscribe to our newsletter for solar industry insights and company updates.
              </p>
              <form className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-gold to-yellow-600 text-black font-bold rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  Subscribe to Newsletter
                </button>
              </form>
              <p className="text-sm text-silver mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-silver max-w-2xl mx-auto">
              Quick answers to common questions about our services and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: 'How quickly will you respond to my inquiry?',
                answer: 'We typically respond within 2 hours during business hours and within 24 hours for inquiries submitted outside of business hours.'
              },
              {
                question: 'Do you provide free consultations?',
                answer: 'Yes, we offer free initial consultations for all solar projects to assess your needs and provide preliminary recommendations.'
              },
              {
                question: 'What regions do you serve?',
                answer: 'We serve clients globally with offices in North America, Europe, Middle East, and Asia. Remote consultations are available worldwide.'
              },
              {
                question: 'What types of solar projects do you handle?',
                answer: 'We handle residential, commercial, industrial, and utility-scale solar projects, including complete design, installation, and maintenance.'
              },
              {
                question: 'How do I schedule a site visit?',
                answer: 'Contact our projects team with your location and requirements. We\'ll coordinate a site visit within 5-7 business days.'
              },
              {
                question: 'Do you offer emergency support?',
                answer: 'Yes, we provide 24/7 emergency support for existing installations. Call our emergency hotline for immediate assistance.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-silver">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:border-gold hover:bg-gray-800/50 transition-all duration-300">
              View All FAQs
            </button>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gray-900 to-black animate-shimmer"></div>
          <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-12 text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold to-yellow-600 rounded-full mb-8 glow">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-gold">Solar Journey?</span>
            </h3>
            <p className="text-silver mb-10 max-w-2xl mx-auto text-lg">
              Contact us today for a personalized consultation and discover how solar energy can transform your energy costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-gold to-yellow-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                <Phone className="w-5 h-5 inline mr-3" />
                Call Now: +1 (555) 123-4567
              </button>
              <button className="bg-transparent border-2 border-gold text-gold px-10 py-4 rounded-xl font-bold text-lg hover:bg-gold/10 transition-all duration-300">
                <Mail className="w-5 h-5 inline mr-3" />
                Email Us
              </button>
            </div>
            <div className="mt-10 text-sm text-silver">
              Available Monday - Friday: 9AM - 6PM EST | 24/7 Emergency Support
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;