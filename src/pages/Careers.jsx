import { useState, useEffect, useRef } from 'react';
import { Briefcase, Users, Rocket, HeartHandshake, Star, CheckCircle2, Mail, MapPin, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom Hook for Scroll Animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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

const Careers = () => {
  // Animation Refs
  const heroAnim = useScrollAnimation();
  const cultureAnim = useScrollAnimation();
  const jobsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  const jobs = [
    {
      title: "Solar Project Engineer",
      location: "Chennai, India",
      type: "Full-Time",
      desc: "Responsible for planning, designing, and commissioning solar EPC projects."
    },
    {
      title: "Site Supervisor (Solar)",
      location: "Coimbatore, India",
      type: "Full-Time",
      desc: "Manage site execution, vendor coordination, and installation quality."
    },
    {
      title: "Sales Executive – Solar Solutions",
      location: "Madurai, India",
      type: "Full-Time",
      desc: "Identify leads, promote solar solutions, and manage customer relations."
    },
    {
      title: "Electrical Engineer – Solar EPC",
      location: "Bangalore, India",
      type: "Full-Time",
      desc: "Design PV systems, prepare SLDs, and support technical documentation."
    },
  ];

  const perks = [
    { icon: <Star className="h-6 w-6 text-yellow-600" />, text: "Work with Industry Experts" },
    { icon: <HeartHandshake className="h-6 w-6 text-yellow-600" />, text: "Employee Wellness Programs" },
    { icon: <Rocket className="h-6 w-6 text-yellow-600" />, text: "Fast Career Growth" },
    { icon: <Users className="h-6 w-6 text-yellow-600" />, text: "Collaborative Work Culture" },
  ];

  return (
    <div className="pt-24 bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-100 min-h-screen">
      <style>{`
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-180deg) scale(0); }
          to { opacity: 1; transform: rotate(0deg) scale(1); }
        }
        @keyframes blurIn {
          from { opacity: 0; filter: blur(10px); }
          to { opacity: 1; filter: blur(0); }
        }
        @keyframes expandWidth {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.5); }
          50% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes wave {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          75% { transform: translateY(10px) rotate(-5deg); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-slide-down { animation: slideInDown 0.8s ease-out forwards; }
        .animate-rotate-in { animation: rotateIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
        .animate-blur-in { animation: blurIn 1s ease-out forwards; }
        .animate-expand-width { animation: expandWidth 0.8s ease-out forwards; }
        .animate-pop-in { animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
        .animate-wave { animation: wave 3s ease-in-out infinite; }
        .animate-shimmer { 
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-white py-24 overflow-hidden">
        <div className="absolute top-10 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-wave"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-wave" style={{ animationDelay: '1s' }}></div>

        <div ref={heroAnim.ref} className="container mx-auto px-4 relative z-10">
          <div className={`${heroAnim.isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Join Our Solar Revolution
            </h1>
          </div>
          <div className={`${heroAnim.isVisible ? 'animate-blur-in' : 'opacity-0'} stagger-1`}>
            <p className="text-white/90 max-w-2xl text-lg md:text-xl mb-8">
              Be part of a mission-driven team working towards a sustainable future.
              Together, we build clean energy solutions that power the world.
            </p>
          </div>

          <div className={`${heroAnim.isVisible ? 'animate-pop-in' : 'opacity-0'} stagger-2`}>
            <Button
              className="bg-white text-amber-600 font-semibold hover:bg-yellow-50 transition px-8 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 duration-300"
            >
              Explore Openings
            </Button>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Team Members', value: '500+', icon: <Users className="w-6 h-6" /> },
              { label: 'Open Positions', value: '12', icon: <Briefcase className="w-6 h-6" /> },
              { label: 'Countries', value: '8', icon: <MapPin className="w-6 h-6" /> },
              { label: 'Growth Rate', value: '45%', icon: <TrendingUp className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center ${heroAnim.isVisible ? `animate-rotate-in stagger-${index % 4 + 1}` : 'opacity-0'}`}
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 text-yellow-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CULTURE SECTION ================= */}
      <section ref={cultureAnim.ref} className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${cultureAnim.isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Work <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Culture</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className={`${cultureAnim.isVisible ? 'animate-blur-in' : 'opacity-0'} stagger-1`}>
            <p className="text-gray-600 max-w-3xl text-lg mb-12 text-center mx-auto">
              At Enfros, our people are our strength. We foster innovation, encourage teamwork,
              and ensure every member grows with the company.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, i) => (
              <div
                key={i}
                className={`group bg-white border-2 border-yellow-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${cultureAnim.isVisible ? `animate-pop-in stagger-${i % 4 + 1}` : 'opacity-0'}`}
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {perk.icon}
                </div>
                <p className="text-gray-700 font-medium">{perk.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOB LISTINGS ================= */}
      <section ref={jobsAnim.ref} className="py-20 bg-white/50">
        <div className="container mx-auto px-4">

          <div className={`flex items-center justify-between mb-12 ${jobsAnim.isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Current Openings</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mt-3 rounded-full"></div>
            </div>
            <div className={`${jobsAnim.isVisible ? 'animate-rotate-in' : 'opacity-0'} stagger-1`}>
              <Briefcase className="h-12 w-12 text-yellow-600" />
            </div>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, i) => (
              <div
                key={i}
                className={`group bg-white border-2 border-yellow-200 rounded-2xl p-6 md:p-8 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 relative overflow-hidden ${jobsAnim.isVisible ? `animate-pop-in stagger-${(i % 4) + 1}` : 'opacity-0'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 mb-2">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-4">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-yellow-500" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-yellow-500" />
                          {job.type}
                        </span>
                      </div>

                      <p className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-gray-700 max-w-2xl">
                        {job.desc}
                      </p>
                    </div>

                    <Button
                      className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section ref={ctaAnim.ref} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-wave"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-wave" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className={`${ctaAnim.isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-xl">
              <Mail className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Can't Find Your Role?
            </h2>
          </div>

          <div className={`${ctaAnim.isVisible ? 'animate-blur-in' : 'opacity-0'} stagger-1`}>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Send us your resume. We'll reach out when a matching position opens.
            </p>
          </div>

          <div className={`${ctaAnim.isVisible ? 'animate-pop-in' : 'opacity-0'} stagger-2`}>
            <Button className="bg-white text-amber-600 hover:bg-yellow-50 px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Submit Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
