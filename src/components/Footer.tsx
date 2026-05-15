import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const productLinks = [
{ name: "Metallic Gaskets", href: "/products/metallic" },
{ name: "Non-Metallic Gaskets", href: "/products/non-metallic" },
{ name: "Spiral Wound Gaskets", href: "/products/spiral-wound" },
{ name: "RTJ Gaskets", href: "/products/rtj" },
{ name: "Custom-Cut Gaskets", href: "/products/custom" }];


const companyLinks = [
{ name: "About Us", href: "/about" },
{ name: "Manufacturing & Quality", href: "/manufacturing" },
{ name: "Contact", href: "/contact" }];


const industries = [
"Oil & Gas",
"Power Generation",
"Chemical Processing",
"Pharmaceutical",
"Automotive",
"Refineries"];


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl font-display">P</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Dave Gaskets</h3>
                <p className="text-steel text-xs">Industrial Sealing Solutions</p>
              </div>
            </div>
            <p className="text-steel-light text-sm leading-relaxed mb-6">
              Delivering Dave Gaskets and sealing solutions to industries 
              worldwide since 2009. Quality, reliability, and innovation at every seal.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center hover:bg-accent transition-colors group">
                
                <Linkedin className="h-5 w-5 text-steel group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center hover:bg-accent transition-colors group">
                
                <Facebook className="h-5 w-5 text-steel group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center hover:bg-accent transition-colors group">
                
                <Twitter className="h-5 w-5 text-steel group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) =>
              <li key={link.href}>
                  <Link
                  to={link.href}
                  className="text-steel-light hover:text-accent transition-colors text-sm">
                  
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3 mb-6">
              {companyLinks.map((link) =>
              <li key={link.href}>
                  <Link
                  to={link.href}
                  className="text-steel-light hover:text-accent transition-colors text-sm">
                  
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
            <h4 className="font-display font-semibold text-lg mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.map((industry) =>
              <li key={industry} className="text-steel text-sm">
                  {industry}
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-steel-light text-sm">
                  Survey No 573, Vill'.-Lilora,<br />
                  Vadodara-Halol Highway, Jarod,<br />
                  Tq-Waghodia, Dist-Vadodara,<br />
                  Gujarat-391510
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-steel-light hover:text-accent transition-colors text-sm">
                  
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:sales@precisiongaskets.com"
                  className="text-steel-light hover:text-accent transition-colors text-sm">
                  
                  sales@precisiongaskets.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-steel">
            <p>© 2024 Precision Gaskets. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}