import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar"
          className="w-full h-full object-cover scale-105 animate-[pulse_7s_ease-in-out_infinite]"
        />
        {/* YOUR ORIGINAL OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/50 to-background/30" />
      </div>

      {/* Decorative Floating Light */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-300/20 rounded-full blur-xl animate-float" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-left">
          
          {/* Subtitle */}
          <div className="flex items-center space-x-2 mb-6 animate-fade-in">
            <Zap className="h-6 w-6 text-accent animate-pulse" />
            <span className="text-accent font-semibold tracking-wide">
              Clean Energy Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
            Power Your Future with{" "}
            <span className="text-[#f98b26]">
              Solar Energy
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up max-w-xl">
            Transform your home or business with cutting-edge solar technology.
            Save money, reduce your carbon footprint, and invest in a sustainable future.
          </p>

          {/* Buttons (Left aligned) */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button
              size="lg"
              onClick={() => scrollToSection("calculator")}
              className="bg-primary hover:bg-primary/90 text-black group animate-pulse-glow"
            >
              Calculate Savings
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-2 hover:bg-primary/10"
            >
              <Sun className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Stats (Left aligned) */}
          <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in-up">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sun Icon */}
      <div className="absolute bottom-10 right-10 animate-float opacity-25">
        <Sun className="h-28 w-28 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
