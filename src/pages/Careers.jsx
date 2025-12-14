import { Briefcase, Users, Rocket, HeartHandshake, Star, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Careers = () => {
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
    { icon: <Star className="h-6 w-6 text-gold" />, text: "Work with Industry Experts" },
    { icon: <HeartHandshake className="h-6 w-6 text-gold" />, text: "Employee Wellness Programs" },
    { icon: <Rocket className="h-6 w-6 text-gold" />, text: "Fast Career Growth" },
    { icon: <Users className="h-6 w-6 text-gold" />, text: "Collaborative Work Culture" },
  ];

  return (
    <div className="pt-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-b from-black to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute top-10 left-20 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4">Join Our Solar Revolution</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Be part of a mission-driven team working towards a sustainable future.  
            Together, we build clean energy solutions that power the world.
          </p>

          <Button
            className="mt-6 bg-gold text-black font-semibold hover:bg-yellow-500 transition px-8 py-6 text-lg"
          >
            Explore Openings
          </Button>
        </div>
      </section>

      {/* ================= CULTURE SECTION ================= */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gold mb-6">Our Work Culture</h2>

          <p className="text-gray-400 max-w-3xl text-lg mb-10">
            At Enfros, our people are our strength. We foster innovation, encourage teamwork,  
            and ensure every member grows with the company.  
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, i) => (
              <div 
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gold transition"
              >
                <div>{perk.icon}</div>
                <p className="mt-4 text-gray-300 text-sm">{perk.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOB LISTINGS ================= */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Current Openings</h2>
            <Briefcase className="h-10 w-10 text-gold" />
          </div>

          <div className="grid gap-8">
            {jobs.map((job, i) => (
              <div 
                key={i} 
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gold transition relative"
              >
                <h3 className="text-2xl font-semibold text-gold">{job.title}</h3>

                <div className="flex flex-wrap gap-4 mt-2 text-gray-400 text-sm">
                  <span>{job.location}</span>
                  <span>|</span>
                  <span>{job.type}</span>
                </div>

                <p className="bg-gray-800 rounded-2xl p-4 mt-4 text-gray-300 max-w-2xl">{job.desc}</p>

                <Button
                  className=" absolute right-8 top-1/2 -translate-y-1/2 bg-gold text-black hover:bg-yellow-500 transition px-6 py-3"
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-gray-950 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Can't Find Your Role?</h2>
        <p className="text-gray-400 text-lg mb-8">
          Send us your resume. We’ll reach out when a matching position opens.
        </p>

        <Button className="bg-white text-black hover:bg-yellow-500 px-10 py-6 text-lg font-semibold">
          <Mail className="mr-2 h-5 w-5" />
          Submit Resume
        </Button>
      </section>
    </div>
  );
};

export default Careers;
