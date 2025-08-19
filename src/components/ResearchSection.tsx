import { Card, CardContent } from "@/components/ui/card";
import { Beaker, Users, Target, CheckCircle } from "lucide-react";

const ResearchSection = () => {
  const researchPillars = [
    {
      icon: Beaker,
      title: "Think (R&D)",
      description: "Imagine, innovate, iterate. An 85-strong brigade in cutting-edge labs, fine-tuning resin formulas with customer-first precision & green protocols.",
      color: "bg-hero-gradient"
    },
    {
      icon: CheckCircle,
      title: "Test (QA)",
      description: "Every batch is rigorously tested and archived. Advanced analytical equipment ensures consistency and traceability across all production runs.",
      color: "bg-success-gradient"
    },
    {
      icon: Target,
      title: "Trust (You)",
      description: "Consistent, traceable results—no surprises, just performance. Our commitment to quality builds lasting partnerships worldwide.",
      color: "bg-gradient-to-br from-accent to-primary"
    }
  ];

  const capabilities = [
    "Advanced Analytical Testing",
    "Custom Formulation Development",
    "Accelerated Aging Studies",
    "Rheological Analysis",
    "Thermal Analysis (DSC/TGA)",
    "Spectroscopic Analysis",
    "Pilot Plant Scale-up",
    "Application Testing"
  ];

  return (
    <section id="research" className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Lab-to-Label Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced R&D facilities and quality assurance systems ensure every product 
            meets the highest standards of performance and reliability.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {researchPillars.map((pillar, index) => (
            <Card key={index} className="group relative overflow-hidden border-border hover:shadow-elevated transition-all duration-300">
              <div className={`absolute inset-0 ${pillar.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <CardContent className="p-8 relative z-10">
                <div className={`w-16 h-16 ${pillar.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Advanced Testing Capabilities
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our state-of-the-art laboratories are equipped with the latest analytical 
                instruments and testing equipment, enabling comprehensive product development 
                and quality control across our entire portfolio.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  85+ R&D professionals
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Beaker className="w-4 h-4 mr-2 text-primary" />
                  ISO 9001:2015 certified processes
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Target className="w-4 h-4 mr-2 text-primary" />
                  24/7 quality monitoring
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-muted rounded-lg p-4 text-center group hover:bg-primary hover:text-white transition-all duration-300">
                  <div className="text-sm font-medium">
                    {capability}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-card rounded-lg shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Quality Pass Rate</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-soft">
            <div className="text-3xl font-bold text-secondary mb-2">24hrs</div>
            <div className="text-sm text-muted-foreground">Testing Turnaround</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-soft">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Test Parameters</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">Zero</div>
            <div className="text-sm text-muted-foreground">Defect Tolerance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;