import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Award, Target, History, Building2 } from "lucide-react";
import qualityControlImage from "@/assets/quality-control.jpg";

const stats = [
{ value: "41+", label: "Years Experience" },
{ value: "10,000+", label: "Products Delivered" },
{ value: "500+", label: "Global Clients" },
{ value: "99.8%", label: "Quality Rate" }];


const values = [
{
  icon: Target,
  title: "Precision Engineering",
  description: "Every gasket is manufactured to exacting tolerances, ensuring reliable sealing performance in critical applications."
},
{
  icon: Award,
  title: "Quality First",
  description: "ISO 9001:2015 certified processes with comprehensive quality control at every production stage."
},
{
  icon: Users,
  title: "Customer Partnership",
  description: "We work closely with clients to understand their needs and deliver customized sealing solutions."
},
{
  icon: History,
  title: "Continuous Innovation",
  description: "Investing in advanced manufacturing technology and materials to stay ahead of industry demands."
}];


const timeline = [
{ year: "2009", event: "Founded as a small gasket cutting shop in Gorava GIDC,Vadodara,Gujarat" },
{ year: "2010", event: "Expanded to full-service manufacturing ." },
{ year: "2010", event: "Achieved ISO 9001 certification and international expansion" },
{ year: "2025", event: "Invested in Advance machining and advanced testing facilities" },
{ year: "2024", event: "Serving 500+ clients across 40 countries worldwide" }];


export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-hero">
        <div className="absolute inset-0 industrial-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              About DAVE Gaskets
            </h1>
            <p className="text-xl text-steel-light leading-relaxed">
              For over 41 years, we've been engineering sealing solutions that keep industries running. Our commitment to quality, precision, and customer service has made us a trusted partner for companies worldwide.
            

            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) =>
            <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dave Gaskets was founded in 2009 by a team of mechanical engineers 
                  who recognized the critical role sealing solutions play in industrial 
                  safety and efficiency. Starting from a small workshop in Houston, Texas, 
                  we've grown into a global manufacturer serving diverse industries.
                </p>
                <p>
                  Our journey has been marked by continuous investment in technology, 
                  people, and processes. From manual cutting to CNC precision, from 
                  local delivery to worldwide logistics—we've evolved while maintaining 
                  our founding principles of quality and reliability.
                </p>
                <p>
                  Today, Dave Gaskets operates state-of-the-art manufacturing 
                  facilities equipped with the latest CNC, laser cutting, and quality 
                  testing equipment. Our team of experienced engineers works alongside 
                  skilled technicians to deliver gaskets that meet the most demanding 
                  specifications.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={qualityControlImage}
                alt="Quality control at Precision Gaskets"
                className="rounded-xl shadow-xl" />
              
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-display font-bold">41+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product development 
              to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) =>
            <div key={value.title} className="bg-card p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth from a local shop to a global manufacturer.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) =>
            <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-sm">
                    {item.year.slice(-2)}
                  </div>
                  {index !== timeline.length - 1 &&
                <div className="w-0.5 flex-1 bg-border mt-2" />
                }
                </div>
                <div className="flex-1 pb-8">
                  <div className="font-display font-bold text-lg text-accent mb-1">
                    {item.year}
                  </div>
                  <p className="text-muted-foreground">{item.event}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Commitment to You
            </h2>
            <p className="text-steel-light text-lg leading-relaxed mb-8">
              At Precision Gaskets, we understand that a gasket failure can mean 
              costly downtime, safety risks, and environmental concerns. That's why 
              we're committed to delivering products that exceed specifications and 
              provide reliable, long-lasting sealing performance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
              "100% inspection on critical dimensions",
              "Material traceability and certification",
              "Responsive technical support",
              "Competitive pricing and fast delivery",
              "Custom engineering solutions",
              "Quality guarantee on every product"].
              map((item) =>
              <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-steel-light text-sm">{item}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact our team to discuss your sealing requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact?quote=true">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/manufacturing">View Our Capabilities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>);

}