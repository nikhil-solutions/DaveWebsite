import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_v2.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger } from
"@/components/ui/dropdown-menu";

const productLinks = [
{ name: "Metallic Gaskets", href: "/products/metallic" },
{ name: "Non-Metallic Gaskets", href: "/products/non-metallic" },
{ name: "Spiral Wound Gaskets", href: "/products/spiral-wound" },
{ name: "RTJ Gaskets", href: "/products/rtj" },
{ name: "Custom-Cut Gaskets", href: "/products/custom" }];


const navLinks = [
{ name: "Home", href: "/" },
{ name: "About Us", href: "/about" },
{ name: "Manufacturing", href: "/manufacturing" },
{ name: "Contact", href: "/contact" }];


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const isProductActive = productLinks.some((p) => location.pathname === p.href);

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-steel/20">
      {/* Top bar */}
      <div className="hidden lg:block bg-navy-deep border-b border-steel/10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-steel-light">
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              sales@precisiongaskets.com
            </span>
          </div>
          <div className="text-steel-light">
            ISO 9001:2015 Certified | ASTM Compliant
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="DAVE Gaskets" className="h-10 w-auto object-cover" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 1).map((link) =>
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive(link.href) ?
              "text-accent" :
              "text-primary-foreground/80 hover:text-primary-foreground hover:bg-navy-light"}`
              }>
              
                {link.name}
              </Link>
            )}

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                  isProductActive ?
                  "text-accent" :
                  "text-primary-foreground/80 hover:text-primary-foreground hover:bg-navy-light"}`
                  }>
                  
                  Products
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {productLinks.map((product) =>
                <DropdownMenuItem key={product.href} asChild>
                    <Link
                    to={product.href}
                    className={isActive(product.href) ? "text-accent" : ""}>
                    
                      {product.name}
                    </Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) =>
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive(link.href) ?
              "text-accent" :
              "text-primary-foreground/80 hover:text-primary-foreground hover:bg-navy-light"}`
              }>
              
                {link.name}
              </Link>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="hero-outline" size="sm" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact?quote=true">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen &&
        <div className="lg:hidden mt-4 pb-4 border-t border-steel/20 pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) =>
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
              isActive(link.href) ?
              "text-accent bg-navy-light" :
              "text-primary-foreground/80"}`
              }>
              
                  {link.name}
                </Link>
            )}
              <div className="border-t border-steel/20 my-2 pt-2">
                <p className="px-4 text-xs text-steel mb-2">Products</p>
                {productLinks.map((product) =>
              <Link
                key={product.href}
                to={product.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium block ${
                isActive(product.href) ?
                "text-accent bg-navy-light" :
                "text-primary-foreground/80"}`
                }>
                
                    {product.name}
                  </Link>
              )}
              </div>
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="hero" asChild>
                  <Link to="/contact?quote=true" onClick={() => setMobileMenuOpen(false)}>
                    Request Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        }
      </nav>
    </header>);

}