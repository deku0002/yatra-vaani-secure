import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Phone, Mail, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-government flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">
                  <span className="text-foreground">Yatra</span>
                  <span className="text-primary">Vaani</span>
                </div>
                <div className="text-xs text-muted-foreground">Tourism Safety Platform</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              India's first blockchain-powered AI platform for tourist safety, 
              grievance redressal, and verified reviews.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="government" className="text-xs">
                <Shield className="w-3 h-3 mr-1" />
                Government Verified
              </Badge>
              <Badge variant="verified" className="text-xs">
                Blockchain Secured
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#complaint" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                File Complaint
              </a>
              <a href="#safety" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Safety Dashboard
              </a>
              <a href="#reviews" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Verified Reviews
              </a>
              <a href="#dashboard" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Government Portal
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Emergency SOS
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>Tourist Helpline: 1363</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>Emergency: 112</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@yatravaani.gov.in</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Ministry of Tourism, India</span>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="w-8 h-8">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-8 h-8">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-8 h-8">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-8 h-8">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                Follow us for updates on tourist safety and platform enhancements.
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-muted-foreground">
              © 2024 YatraVaani - Government of India Initiative. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground md:justify-end">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;