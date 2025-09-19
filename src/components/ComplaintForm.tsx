import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Shield, MapPin, Clock, Star } from "lucide-react";
import { useState } from "react";

const ComplaintForm = () => {
  const [complaintType, setComplaintType] = useState("");

  const complaintTypes = [
    { value: "fraud", label: "Fraud/Scam", icon: AlertTriangle, severity: "high" },
    { value: "overpricing", label: "Overpricing", icon: AlertTriangle, severity: "medium" },
    { value: "harassment", label: "Harassment", icon: AlertTriangle, severity: "high" },
    { value: "poor-service", label: "Poor Service", icon: Star, severity: "low" },
    { value: "safety", label: "Safety Concern", icon: Shield, severity: "high" },
    { value: "transport", label: "Transport Issue", icon: MapPin, severity: "medium" },
  ];

  return (
    <section id="complaint" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="government" className="mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Blockchain Secured
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            File Your Tourist Complaint
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Report issues instantly with our AI-powered system. Your complaint is secured on blockchain 
            and immediately forwarded to relevant authorities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Complaint Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-card">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Number</label>
                    <Input placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <Input placeholder="Where did this happen?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Complaint Type</label>
                    <Select value={complaintType} onValueChange={setComplaintType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select complaint type" />
                      </SelectTrigger>
                      <SelectContent>
                        {complaintTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center gap-2">
                              <type.icon className="w-4 h-4" />
                              {type.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Describe Your Issue</label>
                  <Textarea 
                    placeholder="Please provide detailed information about your complaint..."
                    className="min-h-32"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="government" size="lg" className="flex-1">
                    <Shield className="w-4 h-4 mr-2" />
                    Submit Complaint
                  </Button>
                  <Button variant="safety" size="lg" className="flex-1">
                    <Clock className="w-4 h-4 mr-2" />
                    Emergency SOS
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Process Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-lg mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-government text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <div className="font-medium">Submit Complaint</div>
                    <div className="text-sm text-muted-foreground">AI categorizes and validates your issue</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-government text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <div className="font-medium">Blockchain Security</div>
                    <div className="text-sm text-muted-foreground">Your complaint is secured immutably</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-government text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <div className="font-medium">Instant Alerts</div>
                    <div className="text-sm text-muted-foreground">Relevant authorities get notified</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-government text-white text-sm font-bold flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <div className="font-medium">Track Progress</div>
                    <div className="text-sm text-muted-foreground">Real-time updates on resolution</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card bg-gradient-safety">
              <div className="text-white">
                <h4 className="font-semibold mb-2">Emergency?</h4>
                <p className="text-sm text-white/90 mb-4">
                  For immediate threats or emergencies, use our SOS feature for instant police assistance.
                </p>
                <Button variant="destructive" className="w-full">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Emergency SOS
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintForm;