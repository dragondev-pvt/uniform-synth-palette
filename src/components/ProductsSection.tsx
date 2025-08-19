import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductsSection = () => {
  const productCategories = {
    paints: {
      title: "Paints & Coatings",
      description: "High-performance resins and additives for superior coating solutions",
      products: [
        {
          name: "Alkyd Resins",
          tagline: "long | short | medium oil excellence",
          variants: ["Long Oil", "Short Oil", "Medium Oil", "Rosin-Modified", "Chain-Stopped", "Styrenated"],
          description: "Premium alkyd resins offering superior film formation and durability"
        },
        {
          name: "Epoxy Hardening Agents", 
          tagline: "chemical resistance perfection",
          variants: ["Standard Grade", "Fast Cure", "High Temperature"],
          description: "Advanced curing agents for exceptional chemical and thermal resistance"
        },
        {
          name: "Phenalkamine & Adducts",
          tagline: "quick cure, tough bond",
          variants: ["Standard", "Modified", "High Solids"],
          description: "Fast-curing solutions for demanding industrial applications"
        },
        {
          name: "Liquid Polyamide Resins",
          tagline: "flexible, glossy, durable",
          variants: ["Co-solvent", "Alcohol-soluble", "Low Gel"],
          description: "Versatile resins delivering flexibility and superior gloss retention"
        }
      ]
    },
    specialty: {
      title: "Specialty & Adhesives", 
      description: "Specialized formulations for advanced adhesive and coating applications",
      products: [
        {
          name: "Acrylic Polyol Resin",
          tagline: "crystal clarity enhancement",
          variants: ["Standard", "High Solids", "UV Stable"],
          description: "Premium polyol resins for high-performance coating systems"
        },
        {
          name: "Tackifier Resins",
          tagline: "adhesion mastery",
          variants: ["Hot Melt", "Solvent-based", "Water-based"],
          description: "Specialized tackifiers for superior adhesive performance"
        },
        {
          name: "Polyvinyl Butyral (PVB)",
          tagline: "safety glass bonding",
          variants: ["Standard Grade", "High Clarity", "Low Temperature"],
          description: "Premium PVB for automotive and architectural safety glass"
        },
        {
          name: "Titanium Chelate",
          tagline: "adhesion promoter supreme",
          variants: ["Standard", "Modified", "High Performance"],
          description: "Advanced adhesion promoters for challenging substrates"
        }
      ]
    }
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Chemistry, Our Canvas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive product portfolio organized by application, each engineered 
            for specific performance requirements and industry standards.
          </p>
        </div>

        <Tabs defaultValue="paints" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="paints">Paints & Coatings</TabsTrigger>
            <TabsTrigger value="specialty">Specialty & Adhesives</TabsTrigger>
          </TabsList>

          {Object.entries(productCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.products.map((product, index) => (
                  <Card key={index} className="group hover:shadow-primary transition-all duration-300 border-border">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                          <CardDescription className="text-accent font-medium mt-1">
                            {product.tagline}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-success-gradient text-white border-0">
                          {product.variants.length} Variants
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.variants.map((variant, vIndex) => (
                          <Badge key={vIndex} variant="outline" className="text-xs">
                            {variant}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-center text-white mt-16">
          <h3 className="text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Our R&D team can develop bespoke formulations tailored to your specific requirements. 
            From concept to commercial scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Request Custom Development
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Product Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;