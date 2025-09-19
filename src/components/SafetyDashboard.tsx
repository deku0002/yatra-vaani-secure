import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin, AlertTriangle, Shield, TrendingUp, Users, Clock } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const SafetyDashboard = () => {
  const safetyZones = [
    { name: "Gateway of India", level: "safe", score: 95, complaints: 2 },
    { name: "Red Fort, Delhi", level: "safe", score: 88, complaints: 5 },
    { name: "Jaipur City Palace", level: "caution", score: 72, complaints: 12 },
    { name: "Goa Beaches", level: "caution", score: 68, complaints: 18 },
    { name: "Agra Central Market", level: "warning", score: 45, complaints: 34 },
  ];

  const recentAlerts = [
    { type: "fraud", location: "Connaught Place", time: "2 hours ago", severity: "high" },
    { type: "overpricing", location: "Marine Drive", time: "4 hours ago", severity: "medium" },
    { type: "harassment", location: "Khan Market", time: "6 hours ago", severity: "high" },
  ];

  const getSafetyColor = (level: string) => {
    switch (level) {
      case "safe": return "text-secondary";
      case "caution": return "text-primary";
      case "warning": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getSafetyBadge = (level: string) => {
    switch (level) {
      case "safe": return "safety";
      case "caution": return "government";
      case "warning": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <section id="safety" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="safety" className="mb-4">
            <Shield className="w-4 h-4 mr-2" />
            AI-Powered Safety Intelligence
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Real-Time Safety Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor tourist safety across India with our AI-driven analysis of complaints, 
            reviews, and real-time incident reports.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Safety Map Preview */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Interactive Safety Map</h3>
                <Button variant="government" size="sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  View Full Map
                </Button>
              </div>
              
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={dashboardImage} 
                  alt="Safety Dashboard Preview" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-card/90 backdrop-blur rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-secondary">Safe</div>
                      <div className="text-sm text-muted-foreground">85% Areas</div>
                    </div>
                    <div className="bg-card/90 backdrop-blur rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-primary">Caution</div>
                      <div className="text-sm text-muted-foreground">12% Areas</div>
                    </div>
                    <div className="bg-card/90 backdrop-blur rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-destructive">Warning</div>
                      <div className="text-sm text-muted-foreground">3% Areas</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Safety Zones List */}
            <Card className="p-6 shadow-card mt-6">
              <h3 className="text-xl font-semibold mb-4">Top Tourist Destinations</h3>
              <div className="space-y-4">
                {safetyZones.map((zone) => (
                  <div key={zone.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-4">
                      <MapPin className={`w-5 h-5 ${getSafetyColor(zone.level)}`} />
                      <div>
                        <div className="font-medium">{zone.name}</div>
                        <div className="text-sm text-muted-foreground">{zone.complaints} complaints this month</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-semibold">{zone.score}%</div>
                        <Progress value={zone.score} className="w-20" />
                      </div>
                      <Badge variant={getSafetyBadge(zone.level)} className="capitalize">
                        {zone.level}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-lg mb-4">Today's Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Safe Reports</span>
                  </div>
                  <span className="font-bold text-secondary">234</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Caution Alerts</span>
                  </div>
                  <span className="font-bold text-primary">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                    <span className="text-sm">High Priority</span>
                  </div>
                  <span className="font-bold text-destructive">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-sm">Resolution Rate</span>
                  </div>
                  <span className="font-bold text-accent">94%</span>
                </div>
              </div>
            </Card>

            {/* Recent Alerts */}
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-lg mb-4">Recent Alerts</h3>
              <div className="space-y-3">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={alert.severity === "high" ? "destructive" : "government"} className="text-xs">
                        {alert.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {alert.time}
                      </div>
                    </div>
                    <div className="text-sm font-medium">{alert.location}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Insights */}
            <Card className="p-6 shadow-card bg-gradient-safety">
              <div className="text-white">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  AI Insights
                </h4>
                <p className="text-sm text-white/90 mb-4">
                  Peak tourist activity detected in Goa. Increased monitoring activated for beach areas.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  View Detailed Analysis
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyDashboard;