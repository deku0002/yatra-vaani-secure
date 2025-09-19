import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Menu, X, MessageSquare, Map, FileText, Users } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "File Complaint", icon: MessageSquare, href: "#complaint" },
    { name: "Safety Map", icon: Map, href: "#safety" },
    { name: "Reviews", icon: FileText, href: "#reviews" },
    { name: "Dashboard", icon: Users, href: "#dashboard" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <Badge variant="government" className="text-xs">
              <Shield className="w-3 h-3 mr-1" />
              Govt. Verified
            </Badge>
            <Button variant="government" size="sm">
              Login / Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <div className="pt-3 border-t border-border/50">
                <Button variant="government" className="w-full">
                  Login / Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;