import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: ["Alkyd Resins", "Epoxy Agents", "Polyamide Resins", "Specialty Chemicals", "Custom Solutions"]
    },
    {
      title: "Company", 
      links: ["About Us", "R&D Labs", "Quality", "Sustainability", "Careers"]
    },
    {
      title: "Support",
      links: ["Technical Data", "Safety Sheets", "Certifications", "Documentation", "Contact"]
    },
    {
      title: "Connect",
      links: ["LinkedIn", "Email Updates", "Trade Shows", "Distributors", "Partners"]
    }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">US</span>
              </div>
              <span className="text-xl font-bold">Uniform Synthetics</span>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              30+ years of chemical excellence. From precision resins to sustainable solutions, 
              we power industries worldwide with harmony in every drop.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="font-medium mr-2">HQ:</span>
                <span className="text-white/80">Vapi, Gujarat, India</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Export:</span>
                <span className="text-white/80">50+ Countries Worldwide</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} Uniform Synthetics. All rights reserved. | ISO 9001:2015 Certified
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Environmental Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;