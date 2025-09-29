import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Star,
  Shield,
  Verified,
  ThumbsUp,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const ReviewsSection = () => {
  const [expandedReviewId, setExpandedReviewId] = useState<number | null>(null);

  const reviews = [
    {
      id: 1,
      name: "Rahul Verma",
      location: "Varanasi",
      rating: 1,
      verified: true,
      business: "Boat Operators, Assi Ghat",
      comment:
        "I was followed and harassed by a group of local boatmen who kept pressuring me to take their services. One even used abusive language when I declined. I felt unsafe and had to leave the area.",
      date: "1 day ago",
      helpful: 41,
      category: "Harassment",
      department: "Tourist Police",
      resolved: false,
      currentStatus:
        "Complaint acknowledged. Awaiting investigation by local authorities.",
    },
    {
      id: 2,
      name: "Sneha Rathi",
      location: "Agra",
      rating: 2,
      verified: true,
      business: "Taj Mahal Premises",
      comment:
        "Visitors were seen scratching names and drawing symbols on the inner walls of the Taj Mahal. Security personnel were present but did not intervene. It's heartbreaking to see a world heritage site being damaged like this.",
      date: "3 days ago",
      helpful: 52,
      category: "Monument Damage",
      department: "ASI (Archaeological Survey of India)",
      resolved: false,
      currentStatus: "Forwarded to ASI. Action pending.",
    },
    {
      id: 3,
      name: "Ravi Kumar",
      location: "Delhi",
      rating: 2,
      verified: true,
      business: "Express Travel Agency",
      comment:
        "Poor service and overpricing. Thankfully I could report this through YatraVaani and got proper assistance from authorities.",
      date: "3 days ago",
      helpful: 31,
      category: "Travel Agency",
      department: "State/Central Police",
      resolved: false,
      currentStatus:
        "Under investigation by state cyber cell for fraudulent practices.",
    },
    {
      id: 5,
      name: "Fatima Khan",
      location: "Manali",
      rating: 2,
      verified: true,
      business: "Manali Government Hospital",
      comment:
        "After a trekking injury, I visited the government hospital. There was no doctor on duty for over 2 hours. The staff was unresponsive and refused to provide basic first aid until I paid unofficial charges.",
      date: "4 days ago",
      helpful: 47,
      category: "Medical Services",
      department: "Tourism & Health Department",
      resolved: false,
      currentStatus:
        "Escalated to state health authorities. Investigation initiated.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-primary fill-primary" : "text-muted-foreground"
        }`}
      />
    ));
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Hotel":
        return "secondary";
      case "Tour Guide":
        return "government";
      case "Travel Agency":
        return "outline";
      case "Resort":
        return "safety";
      default:
        return "secondary";
    }
  };

  return (
    <section id="reviews" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="verified" className="mb-4">
            <Verified className="w-4 h-4 mr-2" />
            Blockchain Verified Reviews
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Authentic Tourist Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read genuine, blockchain-verified reviews from real tourists. Our AI
            prevents fake reviews to ensure you get authentic feedback about
            hotels, guides, and services.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card
                  key={review.id}
                  className={`p-6 shadow-card transition-all duration-200 ${
                    expandedReviewId === review.id ? "ring-1 ring-primary" : ""
                  }`}
                >
                  <div
                    className="flex items-start gap-4 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      setExpandedReviewId((prev) =>
                        prev === review.id ? null : review.id
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setExpandedReviewId((prev) =>
                          prev === review.id ? null : review.id
                        );
                      }
                    }}
                    aria-expanded={expandedReviewId === review.id}
                    aria-controls={`review-details-${review.id}`}
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-government text-white font-semibold">
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h4 className="font-semibold">{review.name}</h4>
                          {review.verified && (
                            <Badge variant="verified" className="text-xs">
                              <Shield className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                          <Badge
                            variant={getCategoryBadge(review.category)}
                            className="text-xs"
                          >
                            {review.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-sm text-muted-foreground">
                            {review.date}
                          </div>
                          {expandedReviewId === review.id ? (
                            <ChevronUp className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          • {review.location}
                        </span>
                      </div>

                      <div className="font-medium text-primary mb-2">
                        {review.business}
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {review.comment}
                      </p>

                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          Helpful ({review.helpful})
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>

                  {expandedReviewId === review.id && (
                    <div
                      id={`review-details-${review.id}`}
                      className="mt-4 border-t pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                      <div className="space-y-1">
                        <div className="text-xs uppercase text-muted-foreground">
                          Status
                        </div>
                        <Badge
                          variant={review.resolved ? "secondary" : "destructive"}
                          className="w-fit"
                        >
                          {review.resolved ? "Resolved" : "Not Resolved"}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs uppercase text-muted-foreground">
                          Department
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {review.department}
                        </Badge>
                      </div>
                      <div className="sm:col-span-3 space-y-1">
                        <div className="text-xs uppercase text-muted-foreground">
                          Current Status
                        </div>
                        <div className="text-sm text-foreground">
                          {review.currentStatus}
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="government" size="lg">
                Load More Reviews
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Review Stats */}
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-lg mb-4">Review Statistics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">5 Stars</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-secondary h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">4 Stars</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">3 Stars</span>
                    <span className="text-sm font-medium">8%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full"
                      style={{ width: "8%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">2 Stars</span>
                    <span className="text-sm font-medium">4%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "4%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">1 Star</span>
                    <span className="text-sm font-medium">3%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-destructive h-2 rounded-full"
                      style={{ width: "3%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Write Review CTA */}
            <Card className="p-6 shadow-card bg-gradient-government">
              <div className="text-white text-center">
                <Verified className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Share Your Experience</h4>
                <p className="text-sm text-white/90 mb-4">
                  Help fellow travelers with your verified, blockchain-secured
                  review.
                </p>
                <Button variant="secondary" className="w-full">
                  Write a Review
                </Button>
              </div>
            </Card>

            {/* Trust Indicators */}
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-lg mb-4">
                Why Trust Our Reviews?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-secondary" />
                  <div className="text-sm">
                    <div className="font-medium">Blockchain Verified</div>
                    <div className="text-muted-foreground">
                      Immutable and transparent
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Verified className="w-5 h-5 text-accent" />
                  <div className="text-sm">
                    <div className="font-medium">AI Fraud Detection</div>
                    <div className="text-muted-foreground">
                      Fake reviews prevented
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <div className="text-sm">
                    <div className="font-medium">Real Experiences</div>
                    <div className="text-muted-foreground">
                      From verified tourists
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
