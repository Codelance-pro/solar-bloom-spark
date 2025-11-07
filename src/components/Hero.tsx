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
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panels on modern building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in">
            <Zap className="h-6 w-6 text-accent animate-pulse" />
            <span className="text-accent font-semibold">Clean Energy Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Power Your Future with{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Solar Energy
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up max-w-2xl">
            Transform your home or business with cutting-edge solar technology. 
            Save money, reduce your carbon footprint, and invest in a sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button 
              size="lg"
              onClick={() => scrollToSection("calculator")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground group animate-pulse-glow"
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in-up">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 animate-float opacity-20">
        <Sun className="h-32 w-32 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
