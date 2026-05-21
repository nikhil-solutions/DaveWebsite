import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const inquiryTypes = [
{ value: "quote", label: "Request a Quote" },
{ value: "technical", label: "Technical Inquiry" },
{ value: "order", label: "Order Status" },
{ value: "general", label: "General Inquiry" },
{ value: "tour", label: "Facility Tour Request" }];


const productCategories = [
"Metallic Gaskets",
"Non-Metallic Gaskets",
"Spiral Wound Gaskets",
"RTJ Gaskets",
"Custom-Cut Gaskets",
"Other / Multiple"];


export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const isQuote = searchParams.get("quote") === "true";
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: isQuote ? "quote" : "",
    product: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      product: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-hero">
        <div className="absolute inset-0 industrial-pattern opacity-20 shadow-md" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              {isQuote ? "Request a Quote" : "Contact Us"}
            </h1>
            <p className="text-xl text-steel-light leading-relaxed">
              {isQuote ?
              "Tell us about your sealing requirements and we'll provide a competitive quote within 24 hours." :
              "Get in touch with our team for inquiries, technical support, or to discuss your sealing requirements."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-display font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      Survey No 573, Vill'.-Lilora,<br />
                      Vadodara-Halol Highway, Jarod,<br />
                      Tq-Waghodia, Dist-Vadodara,<br />
                      Gujarat-391510
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="tel:+15551234567" className="hover:text-accent transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Toll-free: 1-800-GASKETS
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="mailto:insidesales2@daveengineers.in" className="hover:text-accent transition-colors">
                        insidesales2@daveengineers.in
                      </a>
                    </p>
                    <p className="text-muted-foreground text-sm">
                    <a href="" className="hover:text-accent transition-colors">
                      insidesales2@daveengineers.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 7:00 AM - 6:00 PM CST<br />
                      Saturday: 8:00 AM - 12:00 PM CST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="font-display font-semibold mb-4">Our Response Promise</h3>
                <div className="space-y-3">
                  {[
                  "Quote requests: Within 24 hours",
                  "Technical inquiries: Within 4 hours",
                  "Emergency support: Available 24/7"].
                  map((item) =>
                  <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <h2 className="text-2xl font-display font-bold mb-6">
                  {isQuote ? "Quote Request Form" : "Send Us a Message"}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Suraj Wankhade"
                        required />
                      
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="wankhadesuraj6@gmail.com"
                        required />
                      
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567" />
                      
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company" />
                      
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, inquiryType: value }))
                        }
                        required>
                        
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) =>
                          <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product">Product Category</Label>
                      <Select
                        value={formData.product}
                        onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, product: value }))
                        }>
                        
                        <SelectTrigger>
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                          {productCategories.map((product) =>
                          <SelectItem key={product} value={product}>
                              {product}
                            </SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                      isQuote ?
                      "Please describe your gasket requirements including material, dimensions, quantity, and any specifications..." :
                      "How can we help you?"
                      }
                      rows={6}
                      required />
                    
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}>
                    
                    {isSubmitting ? "Sending..." : isQuote ? "Submit Quote Request" : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-secondary">
        <iframe
          src="https://maps.google.com/maps?q=Survey%20No%20573,%20Lilora,%20Vadodara-Halol%20Highway,%20Jarod,%20Gujarat%20391510&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DAVE Gaskets Location" />
        
      </section>
    </div>);

}