import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ComplaintForm from "@/components/ComplaintForm";
import SafetyDashboard from "@/components/SafetyDashboard";
import ReviewsSection from "@/components/ReviewsSection";
import GovernmentDashboard from "@/components/GovernmentDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ComplaintForm />
      <SafetyDashboard />
      <ReviewsSection />
      <GovernmentDashboard />
      <Footer />
    </div>
  );
};

export default Index;
