import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Award, Settings, Factory, Cog, Droplets, Flame, Building2, Car, FlaskConical, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";
import spiralWoundImage from "@/assets/spiral-wound-gasket.png";
import rtjImage from "@/assets/rtj-gasket.jpg";
import nonMetallicImage from "@/assets/non-metallic-gasket.jpg";
import metallicImage from "@/assets/metallic-gasket.jpg";
import customCutImage from "@/assets/custom-cut-gasket.jpg";

const products = [
{
  title: "Metallic Gaskets",
  description: "High-performance metal sealing solutions for extreme conditions",
  image: metallicImage,
  href: "/products/metallic"
},
{
  title: "Non-Metallic Gaskets",
  description: "Versatile sealing for chemical and general industrial applications",
  image: nonMetallicImage,
  href: "/products/non-metallic"
},
{
  title: "Spiral Wound Gaskets",
  description: "Premium sealing for high-pressure, high-temperature environments",
  image: spiralWoundImage,
  href: "/products/spiral-wound"
},
{
  title: "RTJ Gaskets",
  description: "Ring-type joint gaskets for critical flange connections",
  image: rtjImage,
  href: "/products/rtj"
},
{
  title: "Custom-Cut Gaskets",
  description: "Precision-cut gaskets to your exact specifications",
  image: customCutImage,
  href: "/products/custom"
}];


const industries = [
{ name: "Oil & Gas", icon: Droplets },
{ name: "Power Generation", icon: Zap },
{ name: "Chemical", icon: FlaskConical },
{ name: "Pharmaceutical", icon: Shield },
{ name: "Automotive", icon: Car },
{ name: "Refineries", icon: Factory }];


const features = [
{
  icon: Shield,
  title: "Quality Assured",
  description: "ISO 9001:2015 certified manufacturing with rigorous quality control at every step."
},
{
  icon: Settings,
  title: "Custom Solutions",
  description: "From prototype to production, we manufacture gaskets to your exact specifications."
},
{
  icon: Zap,
  title: "Fast Turnaround",
  description: "Rapid manufacturing and delivery to minimize your downtime."
},
{
  icon: Award,
  title: "Industry Standards",
  description: "Products meet ASTM, ASME, and API specifications for reliable performance."
}];


const certifications = [
"ISO 9001:2015",
"API 601",
"ASTM F704",
"ASME B16.20",
"EN 1514-1"];


export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Industrial gasket manufacturing"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-hero opacity-95" />
          <div className="absolute inset-0 industrial-pattern opacity-40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl animate-scale-in">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-200 border border-blue-500/25 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <Cog className="h-4 w-4 text-blue-400" />
              <span>ISO 9001:2015 Certified Manufacturer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-50 to-blue-200">DAVE Engineers Pvt. Ltd.</span>
            </h1>
            <p className="text-lg md:text-xl text-steel-light/90 leading-relaxed mb-8 font-medium">
              Approved gasket manufacturer by Engineers India Ltd. (EIL). Situating our state-of-the-art facilities in Vadodara, Gujarat, we deliver gaskets meeting strict international standards via automated, highly repeatable processes. Supported by dedicated research and expert product specialists, we serve customers globally under ASME, API, DIN, BS, and JIS specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild className="bg-accent hover:bg-orange-dark text-white shadow-lg hover:shadow-xl transition-all">
                <Link to="/contact?quote=true">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                <Link to="/products/spiral-wound">
                  Explore Products
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-2 text-steel-light">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold tracking-wide">41+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-steel-light">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold tracking-wide">10,000+ Products</span>
              </div>
              <div className="flex items-center gap-2 text-steel-light">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold tracking-wide">Global Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) =>
            <div
              key={feature.title}
              className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}>
              
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Product Range
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive sealing solutions engineered for performance, durability, 
              and reliability across all industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) =>
            <Link
              key={product.title}
              to={product.href}
              className="group relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300">
              
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 shadow-2xl">
                  <h3 className="font-display font-semibold text-xl text-primary-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-steel-light text-sm mb-4">{product.description}</p>
                  <span className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-steel-light max-w-2xl mx-auto">
              From oil rigs to pharmaceutical plants, our gaskets seal critical 
              connections in the world's most demanding environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry) =>
            <div
              key={industry.name}
              className="bg-navy-light rounded-xl p-6 text-center hover:bg-accent group transition-colors duration-300">
              
                <industry.icon className="h-10 w-10 mx-auto mb-4 text-accent group-hover:text-accent-foreground transition-colors" />
                <h3 className="font-medium text-sm group-hover:text-accent-foreground transition-colors">
                  {industry.name}
                </h3>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Certified Quality Standards
              </h2>
              <p className="text-muted-foreground">
                Our products meet international quality and safety standards.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {certifications.map((cert) =>
              <div
                key={cert}
                className="bg-card px-6 py-3 rounded-lg shadow-sm border border-border font-medium text-sm">
                
                  {cert}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-hero rounded-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 industrial-pattern opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-steel-light max-w-2xl mx-auto mb-8">
                Contact our engineering team to discuss your sealing requirements. 
                We offer custom solutions, competitive pricing, and fast delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact?quote=true">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}