import { Link, useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Thermometer, Gauge, Shield, Cog } from "lucide-react";
import spiralWoundImage from "@/assets/spiral-wound-gasket.png";
import rtjImage from "@/assets/rtj-gasket.jpg";
import nonMetallicImage from "@/assets/non-metallic-gasket-new.jpg";
import metallicImage from "@/assets/metallic-gasket-new.jpg";
import customCutImage from "@/assets/custom-cut-gasket.jpg";

interface ProductData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  materials: string[];
  applications: string[];
  specifications: {
    temperature: string;
    pressure: string;
    sizes: string;
  };
  benefits: string[];
  standards: string[];
}

const productsData: Record<string, ProductData> = {
  metallic: {
    title: "Metallic Gaskets",
    subtitle: "High-performance metal sealing for extreme conditions",
    description:
      "Metallic gaskets are designed for high-pressure, high-temperature applications where non-metallic materials would fail. Our metallic gaskets include solid metal, corrugated metal, and jacketed designs to meet diverse sealing requirements.",
    image: metallicImage,
    materials: [
      "Stainless Steel (304, 316, 316L)",
      "Inconel (600, 625)",
      "Monel 400",
      "Titanium",
      "Copper & Brass",
      "Soft Iron",
    ],
    applications: [
      "High-pressure pipelines",
      "Heat exchangers",
      "Reactor vessels",
      "Turbine connections",
      "Compressor joints",
      "Valve bonnets",
    ],
    specifications: {
      temperature: "-200°C to 1000°C (-328°F to 1832°F)",
      pressure: "Up to 10,000 PSI (689 bar)",
      sizes: "1/2\" to 60\" (12mm to 1500mm)",
    },
    benefits: [
      "Excellent blowout resistance",
      "High recovery and resilience",
      "Resistant to creep and relaxation",
      "Fire-safe performance",
      "Long service life in extreme conditions",
    ],
    standards: ["ASME B16.20", "API 601", "EN 12560"],
  },
  "non-metallic": {
    title: "Non-Metallic Gaskets",
    subtitle: "Versatile sealing for general industrial applications",
    description:
      "Non-metallic gaskets offer excellent chemical resistance and sealing performance for a wide range of industrial applications. Available in various materials including PTFE, rubber, graphite, and compressed fiber.",
    image: nonMetallicImage,
    materials: [
      "PTFE (Virgin & Filled)",
      "Graphite",
      "Compressed Non-Asbestos Fiber",
      "EPDM Rubber",
      "Neoprene",
      "Silicone",
      "Viton/FKM",
    ],
    applications: [
      "Chemical processing",
      "Water treatment",
      "Food & beverage",
      "Pharmaceutical",
      "HVAC systems",
      "General piping",
    ],
    specifications: {
      temperature: "-40°C to 500°C (-40°F to 932°F)",
      pressure: "Up to 3,000 PSI (207 bar)",
      sizes: "1/4\" to 120\" (6mm to 3000mm)",
    },
    benefits: [
      "Wide chemical compatibility",
      "Cost-effective solutions",
      "Easy installation",
      "Low bolt load requirements",
      "FDA-compliant options available",
    ],
    standards: ["ASTM F104", "ASME B16.21", "EN 1514-1"],
  },
  "spiral-wound": {
    title: "Spiral Wound Gaskets",
    subtitle: "Premium sealing for critical applications",
    description:
      "Spiral wound gaskets combine the resilience of metal with the sealing properties of soft filler materials. They're the preferred choice for high-pressure, high-temperature applications in refineries, chemical plants, and power generation.",
    image: spiralWoundImage,
    materials: [
      "Windings: SS 304, 316, 316L, Monel, Inconel",
      "Fillers: Graphite, PTFE, Ceramic",
      "Outer Rings: Carbon Steel, Stainless Steel",
      "Inner Rings: Stainless Steel, Alloy Steel",
    ],
    applications: [
      "Refinery flanges",
      "Chemical reactor vessels",
      "Heat exchanger shells",
      "High-pressure steam lines",
      "Valve body joints",
      "Pump housings",
    ],
    specifications: {
      temperature: "-240°C to 1000°C (-400°F to 1832°F)",
      pressure: "Up to 6,000 PSI (414 bar)",
      sizes: "1/2\" to 60\" (12mm to 1500mm)",
    },
    benefits: [
      "Excellent resilience and recovery",
      "Accommodates flange rotation",
      "Fire-safe construction",
      "Withstands thermal cycling",
      "Self-centering design",
    ],
    standards: ["ASME B16.20", "API 601", "EN 1514-2"],
  },
  rtj: {
    title: "Ring Type Joint (RTJ) Gaskets",
    subtitle: "Metal-to-metal sealing for critical connections",
    description:
      "RTJ gaskets are high-integrity metallic sealing rings designed for use with RTJ flanges in high-pressure applications. Available in oval, octagonal, and BX ring profiles to match various API flange specifications.",
    image: rtjImage,
    materials: [
      "Soft Iron",
      "Low Carbon Steel",
      "Stainless Steel (304, 316, 410)",
      "Inconel 625",
      "Monel 400",
      "Duplex Steel",
    ],
    applications: [
      "Oil & gas wellheads",
      "Christmas trees",
      "High-pressure manifolds",
      "BOP equipment",
      "Subsea connections",
      "Process pressure vessels",
    ],
    specifications: {
      temperature: "-200°C to 650°C (-328°F to 1200°F)",
      pressure: "Up to 20,000 PSI (1379 bar)",
      sizes: "R11 to R105 (API ring numbers)",
    },
    benefits: [
      "Positive metal-to-metal seal",
      "Excellent blowout resistance",
      "Reusable in some applications",
      "Precision machined surfaces",
      "High pressure capability",
    ],
    standards: ["API 6A", "ASME B16.20", "API 17D"],
  },
  custom: {
    title: "Custom-Cut Gaskets",
    subtitle: "Precision-manufactured to your specifications",
    description:
      "When standard gaskets won't work, our custom cutting capabilities deliver. Using CNC, laser, waterjet, knife cutting non metallic , we produce gaskets to your exact specifications in virtually any material and geometry.",
    image: customCutImage,
    materials: [
      "Any metallic material",
      "PTFE and filled PTFE",
      "Graphite sheets",
      "Rubber compounds",
      "Compressed fiber",
      "Specialty materials on request",
    ],
    applications: [
      "OEM equipment",
      "Legacy equipment replacement",
      "Prototype development",
      "Non-standard flanges",
      "Complex geometries",
      "Specialty equipment",
    ],
    specifications: {
      temperature: "Material dependent",
      pressure: "Material dependent",
      sizes: "Up to 120\" x 120\" (3000mm x 3000mm)",
    },
    benefits: [
      "Any shape or geometry",
      "Rapid prototyping (24-48 hours)",
      "Small to large volume production",
      "Tight tolerances (±0.001\")",
      "CAD file compatibility",
    ],
    standards: ["ISO 9001:2015", "Customer specifications"],
  },
};

const allProducts = [
  { slug: "metallic", name: "Metallic Gaskets" },
  { slug: "non-metallic", name: "Non-Metallic Gaskets" },
  { slug: "spiral-wound", name: "Spiral Wound Gaskets" },
  { slug: "rtj", name: "RTJ Gaskets" },
  { slug: "custom", name: "Custom-Cut Gaskets" },
];

export default function ProductPage() {
  const { productType } = useParams<{ productType: string }>();
  const product = productType ? productsData[productType] : null;

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = allProducts.findIndex((p) => p.slug === productType);
  const prevProduct = currentIndex > 0 ? allProducts[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < allProducts.length - 1 ? allProducts[currentIndex + 1] : null;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-hero">
        <div className="absolute inset-0 industrial-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-steel-light hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              {product.title}
            </h1>
            <p className="text-xl text-steel-light leading-relaxed">
              {product.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section id="overview" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-secondary p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-sm">Temperature</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {product.specifications.temperature}
                  </p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-sm">Pressure</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {product.specifications.pressure}
                  </p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Cog className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-sm">Sizes</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {product.specifications.sizes}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <h3 className="font-display font-semibold text-lg mb-4">Key Benefits</h3>
              <div className="space-y-3 mb-8">
                {product.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact?quote=true">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Technical Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Applications */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">
                Available Materials
              </h3>
              <ul className="space-y-3">
                {product.materials.map((material) => (
                  <li key={material} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{material}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">
                Typical Applications
              </h3>
              <ul className="space-y-3">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-muted-foreground font-medium">
              Manufactured to:
            </span>
            {product.standards.map((standard) => (
              <div
                key={standard}
                className="bg-secondary px-4 py-2 rounded-lg text-sm font-medium"
              >
                {standard}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {prevProduct ? (
              <Link
                to={`/products/${prevProduct.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{prevProduct.name}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : (
              <div />
            )}
            {nextProduct ? (
              <Link
                to={`/products/${nextProduct.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <span className="hidden sm:inline">{nextProduct.name}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-steel-light mb-8 max-w-xl mx-auto">
            Our engineering team can help you select the right gasket or design 
            a custom solution for your specific application.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact?quote=true">
              Get Expert Assistance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
