import { ShieldCheck, Layers, Settings, CheckCircle2 } from "lucide-react";
import { DivisionCard } from "@/components/DivisionCard";
import sealingImg from "@/assets/hero-manufacturing.jpg";
import compositeImg from "@/assets/quality-control.jpg";

export default function PortalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-hero text-white relative">
      {/* Background Graphic Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 industrial-pattern opacity-40" />
        {/* Subtle division glowing background circles */}
        <div className="absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[35%] right-[25%] translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-12 flex-1 flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 text-center max-w-4xl animate-scale-in">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-200 border border-blue-500/25 px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-6 shadow-sm">
            <Settings className="h-4 w-4 text-blue-400 animate-spin" style={{ animationDuration: "12s" }} />
            <span>Welcome to Dave Engineers Pvt. Ltd.</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight mb-4 tracking-tight">
            Dave Engineers Pvt. Ltd.
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-200 font-semibold tracking-wide mb-6">
            Engineering Excellence Across Specialized Divisions
          </h2>
          <p className="text-base md:text-lg text-steel-light/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Select a division to explore our products, solutions, and engineering expertise.
          </p>
        </div>
      </section>

      {/* Division Selection Section (Centered Dual Cards) */}
      <section className="relative z-10 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-center items-stretch">
            
            {/* Sealing Division Card */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <DivisionCard
                title="Sealing Division"
                description="Advanced sealing solutions engineered for reliability, precision, and performance across critical industrial applications."
                image={sealingImg}
                href="/sealing"
                statusText="Active Operations"
                Icon={ShieldCheck}
                variant="blue"
              />
            </div>

            {/* Composite Division Card */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <DivisionCard
                title="Composite Division"
                description="Innovative composite engineering solutions built for durability, strength, and future-focused industrial applications."
                image={compositeImg}
                href="/composite-maintenance"
                statusText="Website Under Maintenance"
                Icon={Layers}
                variant="gold"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Quality Indicators */}
      <section className="relative z-10 py-12 border-t border-white/10 bg-navy-deep/40 backdrop-blur-md">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <div className="flex items-center gap-2 text-steel-light/80">
              <CheckCircle2 className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-semibold tracking-wide">41+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-steel-light/80">
              <CheckCircle2 className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-semibold tracking-wide">ISO 9001:2015 Quality Assured</span>
            </div>
            <div className="flex items-center gap-2 text-steel-light/80">
              <CheckCircle2 className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-semibold tracking-wide">Serving Global Industries</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
