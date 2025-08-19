import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Award, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Users,
      title: "People",
      description: "85-strong R&D brigade driving innovation with customer-first precision"
    },
    {
      icon: Target,
      title: "Purpose", 
      description: "Sustainable chemistry solutions that power industries worldwide"
    },
    {
      icon: Globe,
      title: "Progress",
      description: "Export presence in 50+ countries with zero-compromise quality"
    },
    {
      icon: Award,
      title: "Performance",
      description: "ISO 9001:2015 certified with 30+ years of proven excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            People, Purpose, Progress
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since our foundation, we've been at the forefront of chemical innovation, 
            building trust through quality, sustainability, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-hero-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Legacy
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to revolutionize chemical manufacturing, 
                  Uniform Synthetics has grown from a pioneering startup to a 
                  globally recognized leader in specialty chemicals.
                </p>
                <p>
                  Our journey spans three decades of continuous innovation, 
                  sustainable practices, and unwavering commitment to quality 
                  that has earned trust from industries worldwide.
                </p>
                <p>
                  Today, we stand as a testament to what's possible when 
                  scientific excellence meets environmental responsibility 
                  and customer-centric innovation.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">1990</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;