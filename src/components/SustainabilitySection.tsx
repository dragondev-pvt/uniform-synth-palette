import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Droplets, Wind } from "lucide-react";
import sustainabilityFacility from "@/assets/sustainability-facility.jpg";

const SustainabilitySection = () => {
  const greenPrinciples = [
    {
      icon: Leaf,
      title: "Renewable Resources",
      description: "From renewable inputs to natural-gas-powered production, minimizing environmental impact."
    },
    {
      icon: Droplets,
      title: "Zero Discharge",
      description: "Closed-loop systems ensure zero liquid discharge with comprehensive water recycling."
    },
    {
      icon: Wind,
      title: "Clean Air",
      description: "Zero dust, zero fume emissions through advanced filtration and containment systems."
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Complete solvent recovery and recycling systems for sustainable operations."
    }
  ];

  const certifications = [
    "ISO 14001:2015",
    "Green Chemistry Principles",
    "Zero Liquid Discharge",
    "Export Certified",
    "Eco-Compliance",
    "Carbon Neutral Goals"
  ];

  return (
    <section id="sustainability" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Green From Molecule to Marketplace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to sustainability isn't just a policy—it's embedded in every process, 
            from molecular design to global distribution.
          </p>
        </div>

        {/* Hero Image with Overlay Content */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-elevated">
          <img
            src={sustainabilityFacility}
            alt="Sustainable chemical manufacturing facility"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-transparent flex items-center">
            <div className="p-8 md:p-12 text-white max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Green Manifesto
              </h3>
              <ul className="space-y-2 text-lg">
                <li>✓ 12 Green Chemistry principles—built into every process</li>
                <li>✓ Renewable inputs with natural-gas-powered production</li>
                <li>✓ Zero dust, zero waste, zero compromise on quality</li>
                <li>✓ Closed-loop recycling and zero-discharge promise</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Green Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {greenPrinciples.map((principle, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-success-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Sustainability Info */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Sustainable by Design
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our sustainability approach is rooted in the 12 principles of green chemistry, 
                  ensuring every product we develop minimizes environmental impact without 
                  compromising performance.
                </p>
                <p>
                  From using renewable raw materials to implementing closed-loop manufacturing 
                  processes, we've eliminated waste streams and achieved zero liquid discharge 
                  across all our facilities.
                </p>
                <p>
                  Our natural gas-powered operations, combined with advanced air filtration 
                  systems, ensure clean production with minimal carbon footprint.
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Certifications & Standards
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-muted rounded-lg p-3 text-center text-sm font-medium hover:bg-secondary hover:text-white transition-colors">
                    {cert}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Water Recycling</span>
                  <span className="text-sm font-semibold text-secondary">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Waste Reduction</span>
                  <span className="text-sm font-semibold text-secondary">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Energy Efficiency</span>
                  <span className="text-sm font-semibold text-secondary">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Carbon Reduction</span>
                  <span className="text-sm font-semibold text-secondary">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;