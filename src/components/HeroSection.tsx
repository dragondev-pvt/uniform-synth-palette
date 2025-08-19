import { Button } from "@/components/ui/button";
import heroLab from "@/assets/hero-lab.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroLab}
          alt="Modern chemical laboratory with scientists"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl">
          <div className="space-y-6 text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Harmony in
              <span className="block bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                Every Drop
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              30+ years of precision chemistry. From alkyd resins to sustainable solutions, 
              we craft performance that powers your industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-elevated font-semibold"
              >
                Explore Products
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 font-semibold"
              >
                Request Sample
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">85</div>
                <div className="text-white/80">R&D Team</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-white/80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Zero</div>
                <div className="text-white/80">Discharge</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;