import { Card } from "@/components/ui/card";
import { MapPin, CreditCard, Wrench, Gift, Shield, BarChart3, Users, Zap, Cloud, Map, Bell, FileText } from "lucide-react";

const features = [
  { icon: Map, title: "GIS/Map-Based Discovery", desc: "Interactive map browsing with property pins, nearby landmarks, and smart location filters for finding the perfect rental." },
  { icon: Zap, title: "Smart Recommendations", desc: "AI-powered property matching based on preference, location relevance, trust scores, and rental reliability." },
  { icon: CreditCard, title: "Digital Payment System", desc: "Submit payments via GCash, Maya, Bank Transfer, or Cash with proof upload and admin verification." },
  { icon: FileText, title: "Automated Billing", desc: "Monthly bill generation combining rent, electricity, water, internet, and penalties with due date tracking." },
  { icon: Wrench, title: "Maintenance Coordination", desc: "End-to-end maintenance workflow from request submission to personnel assignment and resolution tracking." },
  { icon: Gift, title: "Tenant Rewards Program", desc: "Earn points for on-time payments, long tenancy, and referrals. Redeem for rental perks and utility credits." },
  { icon: Shield, title: "Admin Verification", desc: "Multi-layer verification for landlords and properties ensuring platform trust and quality standards." },
  { icon: Users, title: "Role-Based Access", desc: "Dedicated dashboards and tools for tenants, landlords, administrators, and maintenance personnel." },
  { icon: Cloud, title: "Cloud-Based Platform", desc: "Access your rental operations anywhere, anytime with secure cloud infrastructure and real-time sync." },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Comprehensive dashboards with occupancy rates, collection trends, maintenance metrics, and more." },
  { icon: Bell, title: "Smart Notifications", desc: "Stay informed with real-time alerts for payments, maintenance updates, approvals, and billing reminders." },
  { icon: MapPin, title: "Property Onboarding", desc: "Multi-step wizard for landlords to register properties with details, photos, amenities, and map location." },
];

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">Platform Features</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          DomiKnow provides a complete rental property operations ecosystem with tools designed for every stakeholder.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <Card key={f.title} className="p-6 hover:shadow-lg transition-shadow group">
            <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
