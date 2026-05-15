import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Cog, Zap, Microscope, Shield, Target, Ruler, FlaskConical, FileCheck } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";
import customCutImage from "@/assets/custom-cut-gasket.jpg";
import qualityControlImage from "@/assets/quality-control.jpg";

const capabilities = [
  {
    icon: Cog,
    title: "CNC Machining",
    description: "Precision CNC lathes and mills for metallic gasket production with tolerances up to ±0.001\"",
  },
  {
    icon: Zap,
    title: "Laser Cutting",
    description: "High-speed fiber laser systems for clean, precise cuts on various gasket materials",
  },
  {
    icon: Target,
    title: "Knife cutting Machine",
    description: "Non metal Gasket cutting systems for clean, precise cuts on various gasket materials",
  },
  {
    icon: Ruler,
    title: "Kamm profile ",
    description: "Accurate serration of Kamm profile Gasket.with tolerance up to  ±0.001\"",
  },
];

const qualityFeatures = [
  {
    icon: Microscope,
    title: "Dimensional Inspection",
    description: "CMM and optical measurement systems verify every critical dimension",
  },
  {
    icon: FlaskConical,
    title: "Material Testing",
    description: "Hardness, tensile strength, and chemical composition analysis",
  },
  {
    icon: Shield,
    title: "Leak Testing",
    description: "Helium leak detection and pressure testing for critical applications",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Full material traceability and certification packages",
  },
];

const standards = [
  { code: "ISO 9001:2015", description: "Quality Management System" },
  { code: "API 601", description: "Metallic Gaskets for Refinery Service" },
  { code: "ASME B16.20", description: "Metallic Gaskets for Pipe Flanges" },
  { code: "ASME B16.21", description: "Non-metallic Gaskets for Pipe Flanges" },
  { code: "ASTM F104", description: "Classification of Rubber Compounds" },
  { code: "EN 1514-1", description: "Metallic Gasket Dimensions" },
];

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-hero">
        <div className="absolute inset-0 industrial-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Manufacturing & Quality
            </h1>
            <p className="text-xl text-steel-light leading-relaxed">
              State-of-the-art manufacturing combined with rigorous quality control 
              ensures every gasket meets the highest standards for performance 
              and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Advanced Manufacturing Capabilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our 50,000 sq. ft. facility houses the latest CNC machining, 
                laser cutting, and die cutting equipment. This enables us to 
                produce gaskets with exceptional precision, whether you need 
                one prototype or thousands of production units.
              </p>
              <div className="space-y-3">
                {[
                  "Tolerances up to ±0.001\" on critical dimensions",
                  "Material sizes from 1/8\" to 60\" diameter",
                  "Rapid prototyping in 24-48 hours",
                  "High-volume production capability",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={customCutImage}
                alt="CNC laser cutting gasket"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-secondary p-6 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <cap.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={qualityControlImage}
                alt="Quality control inspection"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Rigorous Quality Control
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every gasket undergoes comprehensive inspection before shipping. 
                Our quality control processes are designed to catch defects before 
                they reach your facility, ensuring you receive products that perform 
                reliably from day one.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {qualityFeatures.map((feature) => (
                  <div key={feature.title} className="bg-card p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <feature.icon className="h-5 w-5 text-accent" />
                      <h4 className="font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Standards & Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our products are manufactured to meet or exceed international 
              quality and safety standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {standards.map((standard) => (
              <div
                key={standard.code}
                className="bg-card p-6 rounded-xl shadow-md border border-border"
              >
                <div className="text-xl font-display font-bold text-accent mb-2">
                  {standard.code}
                </div>
                <p className="text-muted-foreground text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Environment */}
      <section className="py-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Commitment to Safety & Environment
            </h2>
            <p className="text-steel-light text-lg leading-relaxed mb-8">
              We prioritize safety in our manufacturing processes and minimize 
              our environmental impact through responsible material sourcing 
              and waste reduction practices.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "Zero lost-time incidents in 5+ years",
                "OSHA-compliant safety protocols",
                "Recycling program for metal waste",
                "Energy-efficient equipment",
                "Low-emission manufacturing",
                "Hazardous material handling certification",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-steel-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            See Our Capabilities in Action
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Request a facility tour or discuss your manufacturing requirements 
            with our engineering team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact?quote=true">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">Schedule a Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
