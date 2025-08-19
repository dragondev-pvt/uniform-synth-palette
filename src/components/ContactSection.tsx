import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Main HQ",
      details: ["Vapi, Gujarat", "Manufacturing & R&D Center"],
      action: "+91-830-6001863"
    },
    {
      icon: MapPin,
      title: "Mumbai Office",
      details: ["Borivali (East)", "Sales & Distribution"],
      action: "+91-22-2897-7367"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@uniformsynthetics.com", "Quick Response Guaranteed"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sat: 9:00 AM - 6:00 PM", "24/7 Emergency Support"],
      action: "Available Now"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build the Blend You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate? Whether you need a sample, custom formulation, 
            or technical consultation, our team is here to co-create solutions.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-hero-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground mb-3">
                  {item.details.map((detail, dIndex) => (
                    <div key={dIndex}>{detail}</div>
                  ))}
                </div>
                <div className="text-sm font-medium text-primary">
                  {item.action}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Tell Us Your Challenge
              </CardTitle>
              <p className="text-muted-foreground">
                Share your requirements and we'll create the perfect solution together.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Full Name *
                  </label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Company
                  </label>
                  <Input placeholder="Company name" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone
                  </label>
                  <Input placeholder="+91 XXXX XXXXXX" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Product Interest
                </label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option value="">Select product category</option>
                  <option value="alkyd">Alkyd Resins</option>
                  <option value="epoxy">Epoxy Hardening Agents</option>
                  <option value="polyamide">Polyamide Resins</option>
                  <option value="specialty">Specialty Chemicals</option>
                  <option value="custom">Custom Development</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Details *
                </label>
                <Textarea 
                  placeholder="Describe your application, performance requirements, and any specific challenges..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-hero-gradient text-white hover:opacity-90 font-semibold">
                Submit Inquiry
              </Button>
            </CardContent>
          </Card>

          {/* Map & Additional Info */}
          <div className="space-y-6">
            <Card className="shadow-soft border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Visit Our Facilities
                </h3>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Vapi & Mumbai Locations</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vapi Plant:</span>
                    <span className="font-medium">50,000 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Production Capacity:</span>
                    <span className="font-medium">10,000 MT/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Export Markets:</span>
                    <span className="font-medium">50+ Countries</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-hero-gradient text-white shadow-elevated">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Need Immediate Assistance?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <div>
                      <div className="font-medium">Emergency Hotline</div>
                      <div className="text-white/80 text-sm">24/7 Technical Support</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    Call Now: +91-830-6001863
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;