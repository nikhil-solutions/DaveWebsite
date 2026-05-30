import { Link } from "react-router-dom";
import { ArrowLeft, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CompositeMaintenance() {
  return (
    <div className="flex flex-col min-h-screen bg-hero text-white relative">
      {/* Background Graphic Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 industrial-pattern opacity-40" />
        {/* Subtle decorative glowing background circle */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-2xl text-center animate-scale-in">
          {/* Spin cog icon with custom gold border glow */}
          <div className="w-24 h-24 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(217,119,6,0.15)]">
            <Cog
              className="h-12 w-12 text-amber-400 animate-spin"
              style={{ animationDuration: "12s" }}
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2 tracking-tight">
            Composite Division
          </h1>
          <h2 className="text-xl md:text-2xl text-amber-400 font-semibold mb-6">
            Website Under Maintenance
          </h2>
          <p className="text-steel-light/85 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto font-medium">
            We are currently preparing our Composite Division website and product portfolio. Please check back later for updates.
          </p>

          <div>
            <Button
              asChild
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-6 text-base rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 group"
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Division Selection
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
