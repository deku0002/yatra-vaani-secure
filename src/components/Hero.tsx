import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, MessageSquare, MapPin, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="YatraVaani - Digital Tourism Safety Platform" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Government Badge */}
            <div className="flex items-center gap-3">
              <Badge variant="government" className="text-sm px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Government Verified Platform
              </Badge>
              <Badge variant="verified">
                Blockchain Secured
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Yatra</span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">Vaani</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                India's First Blockchain-Powered AI Platform for Tourist Safety, 
                Grievance Redressal & Verified Reviews
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 backdrop-blur border">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">AI-Powered Support</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 backdrop-blur border">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Blockchain Security</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 backdrop-blur border">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Real-time Safety</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 backdrop-blur border">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="text-sm font-medium">Instant Alerts</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                File a Complaint
                <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="safety" size="xl">
                Check Safety Reports
                <Shield className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Complaints Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">1M+</div>
                <div className="text-sm text-muted-foreground">Verified Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Features Preview */}
          <div className="lg:block hidden">
            <div className="relative">
              <div className="bg-card/80 backdrop-blur border rounded-2xl p-6 shadow-government">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Platform Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-8 h-8 rounded-full bg-gradient-government flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Grievance Redressal</div>
                      <div className="text-sm text-muted-foreground">Blockchain-secured complaints</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-8 h-8 rounded-full bg-gradient-safety flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">AI Chat Support</div>
                      <div className="text-sm text-muted-foreground">Instant help & guidance</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Safety Heatmap</div>
                      <div className="text-sm text-muted-foreground">Real-time danger zones</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;