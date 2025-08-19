import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Startup",
      price: "₹25,000",
      period: "per order",
      description: "Perfect for small-scale testing and prototyping",
      icon: Zap,
      popular: false,
      features: [
        "Minimum order quantity: 100kg",
        "Standard product range",
        "Email support",
        "Basic quality documentation",
        "30-day payment terms",
        "Standard packaging",
        "Regional delivery"
      ],
      cta: "Start Small",
      gradient: "bg-accent-gradient"
    },
    {
      name: "Professional",
      price: "₹1,50,000",
      period: "per order",
      description: "Ideal for established businesses with regular needs",
      icon: Star,
      popular: true,
      features: [
        "Minimum order quantity: 500kg",
        "Full product portfolio access",
        "Priority phone & email support",
        "Comprehensive COA & testing",
        "45-day payment terms",
        "Custom packaging options",
        "Express delivery available",
        "Dedicated account manager",
        "Technical consultation included"
      ],
      cta: "Most Popular",
      gradient: "bg-hero-gradient"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Large-scale operations with bespoke requirements",
      icon: Crown,
      popular: false,
      features: [
        "Volume-based pricing",
        "Custom formulation services",
        "24/7 technical support hotline",
        "On-site quality verification",
        "Extended payment terms",
        "Bulk packaging & logistics",
        "Global shipping arrangements",
        "R&D collaboration",
        "Exclusive product development",
        "Annual supply agreements"
      ],
      cta: "Contact Sales",
      gradient: "bg-success-gradient"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Flexible Solutions for Every Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startup quantities to enterprise volumes, we offer transparent pricing 
            and value-driven chemical solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-elevated transition-all duration-300 border-border ${
                plan.popular ? 'ring-2 ring-primary shadow-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 ${plan.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                
                <div className="mt-4">
                  <div className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.period}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-semibold ${
                    plan.popular 
                      ? 'bg-hero-gradient text-white hover:opacity-90' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-6 h-6 text-primary mr-2" />
                Volume Discounts Available
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Enjoy progressive savings with higher order volumes:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>1-5 MT annual volume:</span>
                  <span className="font-medium">Standard pricing</span>
                </li>
                <li className="flex justify-between">
                  <span>5-20 MT annual volume:</span>
                  <span className="font-medium text-primary">5% discount</span>
                </li>
                <li className="flex justify-between">
                  <span>20+ MT annual volume:</span>
                  <span className="font-medium text-primary">10% discount</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="w-6 h-6 text-primary mr-2" />
                Custom Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Need something specific? We offer:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Bespoke formulation development</li>
                <li>• Private labeling services</li>
                <li>• Technical training programs</li>
                <li>• Supply chain optimization</li>
                <li>• Regulatory compliance support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-center text-white mt-16">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Partner with Industry Leaders?
          </h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Join 500+ satisfied customers across 50 countries. Get your custom quote today 
            and experience the Uniform Synthetics difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Get Custom Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;