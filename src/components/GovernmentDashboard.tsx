import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Shield,
  MapPin,
  BarChart3,
  FileText,
  Bell
} from "lucide-react";

const GovernmentDashboard = () => {
  const complaintStats = [
    { category: "Fraud/Scam", count: 145, trend: "+12%", severity: "high" },
    { category: "Overpricing", count: 89, trend: "-5%", severity: "medium" },
    { category: "Poor Service", count: 234, trend: "+8%", severity: "low" },
    { category: "Harassment", count: 34, trend: "-15%", severity: "high" },
    { category: "Transport Issues", count: 67, trend: "+3%", severity: "medium" },
  ];

  const resolutionMetrics = [
    { metric: "Average Resolution Time", value: "4.2 hours", target: "< 6 hours", progress: 85 },
    { metric: "Complaint Resolution Rate", value: "94%", target: "> 90%", progress: 94 },
    { metric: "Tourist Satisfaction", value: "4.6/5", target: "> 4.0", progress: 92 },
    { metric: "Authority Response Time", value: "1.8 hours", target: "< 2 hours", progress: 90 },
  ];

  const recentComplaints = [
    { 
      id: "TC001", 
      type: "Fraud", 
      location: "Goa Beach Resort", 
      status: "investigating", 
      priority: "high",
      time: "2 hours ago"
    },
    { 
      id: "TC002", 
      type: "Overpricing", 
      location: "Delhi Auto Rickshaw", 
      status: "resolved", 
      priority: "medium",
      time: "4 hours ago"
    },
    { 
      id: "TC003", 
      type: "Poor Service", 
      location: "Mumbai Hotel", 
      status: "pending", 
      priority: "low",
      time: "6 hours ago"
    },
    { 
      id: "TC004", 
      type: "Harassment", 
      location: "Jaipur Market", 
      status: "investigating", 
      priority: "high",
      time: "8 hours ago"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "resolved": return "secondary";
      case "investigating": return "government";
      case "pending": return "outline";
      default: return "secondary";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-destructive";
      case "medium": return "text-primary";
      case "low": return "text-secondary";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="dashboard" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="government" className="mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Government Official Dashboard
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Tourism Department Control Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor, analyze, and respond to tourist complaints and safety concerns 
            with real-time blockchain-secured data and AI-powered insights.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="complaints">Complaints</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              {/* Key Metrics */}
              <Card className="p-6 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-government flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1,247</div>
                    <div className="text-sm text-muted-foreground">Active Complaints</div>
                  </div>
                </div>
                <div className="text-xs text-secondary">+12% from last month</div>
              </Card>

              <Card className="p-6 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-safety flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">94%</div>
                    <div className="text-sm text-muted-foreground">Resolution Rate</div>
                  </div>
                </div>
                <div className="text-xs text-secondary">Target: 90%</div>
              </Card>

              <Card className="p-6 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.2h</div>
                    <div className="text-sm text-muted-foreground">Avg Response</div>
                  </div>
                </div>
                <div className="text-xs text-secondary">Under 6h target</div>
              </Card>

              <Card className="p-6 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.6</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Score</div>
                  </div>
                </div>
                <div className="text-xs text-secondary">Out of 5.0</div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Resolution Metrics */}
              <div className="lg:col-span-2">
                <Card className="p-6 shadow-card">
                  <h3 className="text-xl font-semibold mb-6">Performance Metrics</h3>
                  <div className="space-y-6">
                    {resolutionMetrics.map((metric) => (
                      <div key={metric.metric}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{metric.metric}</span>
                          <div className="text-right">
                            <span className="font-bold text-lg">{metric.value}</span>
                            <span className="text-sm text-muted-foreground ml-2">({metric.target})</span>
                          </div>
                        </div>
                        <Progress value={metric.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card className="p-6 shadow-card">
                  <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="government" className="w-full justify-start">
                      <Bell className="w-4 h-4 mr-2" />
                      Send Alert Broadcast
                    </Button>
                    <Button variant="safety" className="w-full justify-start">
                      <MapPin className="w-4 h-4 mr-2" />
                      Update Safety Zone
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 shadow-card bg-gradient-government">
                  <div className="text-white">
                    <h4 className="font-semibold mb-2">Emergency Protocol</h4>
                    <p className="text-sm text-white/90 mb-4">
                      Activate emergency response for high-priority safety incidents.
                    </p>
                    <Button variant="destructive" className="w-full">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Emergency Response
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="complaints">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Complaints List */}
              <div className="lg:col-span-2">
                <Card className="p-6 shadow-card">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Recent Complaints</h3>
                    <Button variant="government" size="sm">
                      View All
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {recentComplaints.map((complaint) => (
                      <div key={complaint.id} className="p-4 rounded-lg border bg-muted/30">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-sm font-medium">{complaint.id}</span>
                            <Badge variant={getStatusBadge(complaint.status)} className="text-xs">
                              {complaint.status}
                            </Badge>
                            <span className={`text-xs font-medium ${getPriorityColor(complaint.priority)}`}>
                              {complaint.priority} priority
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">{complaint.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{complaint.type}</div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {complaint.location}
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Complaint Categories */}
              <div>
                <Card className="p-6 shadow-card">
                  <h3 className="font-semibold text-lg mb-4">Complaint Categories</h3>
                  <div className="space-y-4">
                    {complaintStats.map((stat) => (
                      <div key={stat.category} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{stat.category}</div>
                          <div className="text-sm text-muted-foreground">{stat.count} cases</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${stat.trend.startsWith('+') ? 'text-primary' : 'text-secondary'}`}>
                            {stat.trend}
                          </div>
                          <Badge variant={stat.severity === 'high' ? 'destructive' : stat.severity === 'medium' ? 'government' : 'secondary'} className="text-xs">
                            {stat.severity}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-4">Coming Soon: Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Detailed charts, trends, and predictive analytics will be available here.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-4">Coming Soon: Detailed Reports</h3>
              <p className="text-muted-foreground">
                Comprehensive reporting and export functionality will be available here.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default GovernmentDashboard;