import { Link } from "react-router-dom";
import { ArrowUpRight, Settings, BookOpen } from "lucide-react";

import spiralWoundImage from "@/assets/spiral-wound-gasket.png";
import rtjImage from "@/assets/rtj-gasket.jpg";
import nonMetallicImage from "@/assets/non-metallic-gasket-new.jpg";
import metallicImage from "@/assets/metallic-gasket-new.jpg";
import customCutImage from "@/assets/custom-cut-gasket.jpg";

const products = [
  {
    title: "Metallic Gaskets",
    description: "High-performance metal sealing for extreme conditions. Designed for high-pressure, high-temperature applications where non-metallic materials would fail.",
    image: metallicImage,
    href: "/products/metallic",
  },
  {
    title: "Non-Metallic Gaskets",
    description: "Versatile sealing for general industrial applications. Offering excellent chemical resistance and sealing performance for a wide range of applications.",
    image: nonMetallicImage,
    href: "/products/non-metallic",
  },
  {
    title: "Spiral Wound Gaskets",
    description: "Premium sealing for critical applications. Combining the resilience of metal with the sealing properties of soft filler materials.",
    image: spiralWoundImage,
    href: "/products/spiral-wound",
  },
  {
    title: "Ring Type Joint (RTJ) Gaskets",
    description: "Metal-to-metal sealing for critical connections. High-integrity metallic sealing rings designed for use with RTJ flanges in high-pressure applications.",
    image: rtjImage,
    href: "/products/rtj",
  },
  {
    title: "Custom-Cut Gaskets",
    description: "Precision-manufactured to your specifications. When standard gaskets won't work, our custom cutting capabilities deliver exact geometry in virtually any material.",
    image: customCutImage,
    href: "/products/custom",
  },
];

export default function ProductsIndex() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Alternating Product List Banners */}
      <section className="flex flex-col w-full">
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          
          // Row colors alternate between slate gray and off-white/light gray
          const bgColor = isEven ? "bg-muted" : "bg-background";
          const titleColor = "text-[#0a3b6f]";
          const textColor = isEven ? "text-gray-800" : "text-gray-600";
          const subtextColor = isEven ? "text-gray-700/80" : "text-gray-500";

          return (
            <div
              key={product.title}
              className={`relative w-full min-h-[320px] md:h-[360px] flex items-center overflow-hidden border-b border-gray-300 ${bgColor}`}
            >
              {/* Full height background image absolute positioning */}
              <div
                className={`hidden md:block absolute top-0 bottom-0 w-[30%] h-full z-0 ${
                  isEven ? "right-0" : "left-0"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text content side wrapped in standard container */}
              <div className="container mx-auto px-4 py-12 md:py-0 h-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
                  
                  {/* On mobile, show the image inline since absolute cover takes full height */}
                  <div className="md:hidden w-full mb-6 flex justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-[200px] w-auto object-contain rounded-lg shadow-md"
                    />
                  </div>

                  <div
                    className={`flex flex-col justify-center text-center md:text-left ${
                      isEven 
                        ? "md:col-start-1 md:col-span-1 md:pr-12" 
                        : "md:col-start-2 md:col-span-1 md:pl-12"
                    }`}
                  >
                    <h2 className={`text-2xl md:text-3xl font-semibold tracking-wide ${titleColor} mb-3`}>
                      {product.title}
                    </h2>
                    <p className={`text-xs md:text-sm max-w-xl md:max-w-lg mb-6 leading-relaxed ${textColor}`}>
                      {product.description}
                    </p>
                    
                    {/* Tiny info / action group */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                      <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        <Link
                          to={product.href}
                          className="bg-white hover:bg-gray-50 text-gray-800 text-xs font-semibold px-4 py-2 rounded-full border border-gray-300 shadow-sm flex items-center gap-1.5 transition-all duration-200"
                        >
                          <Settings className="w-3.5 h-3.5" />
                          Product Pages
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                        </Link>
                        
                        <Link
                          to="/contact"
                          className="bg-white hover:bg-gray-50 text-gray-800 text-xs font-semibold px-4 py-2 rounded-full border border-gray-300 shadow-sm flex items-center gap-1.5 transition-all duration-200"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Brochures & Guides
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                        </Link>
                      </div>
                      
                      <span className={`text-[10px] tracking-wide mt-1.5 ${subtextColor}`}>
                        Visit the global website for more information.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
