import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PropertyCard } from "@/components/shared/PropertyCard";
import { properties } from "@/data/dummy-data";
import { Building2, MapPin, Shield, Zap, Heart, ChevronRight, Users, Star, TrendingUp } from "lucide-react";

const features = [
  { icon: MapPin, title: "GIS-Based Discovery", desc: "Find properties on an interactive map with smart filters" },
  { icon: Shield, title: "Verified Listings", desc: "All properties and landlords undergo admin verification" },
  { icon: Zap, title: "Automated Billing", desc: "Monthly bills generated with rent, utilities, and penalties" },
  { icon: Heart, title: "Tenant Rewards", desc: "Earn points for on-time payments and referrals" },
];

const stats = [
  { value: "1,200+", label: "Active Properties" },
  { value: "5,000+", label: "Happy Tenants" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "₱2.5M+", label: "Monthly Transactions" },
];

export default function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" /> Cloud-Based Smart Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Smarter Rental Operations for{" "}
              <span className="text-primary">Long-Term Living</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              DomiKnow automates the entire residential leasing process — from property discovery and tenant onboarding to billing, payments, maintenance, and rewards.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/search">
                <Button size="lg" className="h-12 px-8 text-base">
                  Browse Properties <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose DomiKnow?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A complete ecosystem that connects landlords, tenants, administrators, and maintenance staff in one platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Featured Properties</h2>
              <p className="text-sm text-muted-foreground">Discover verified rental spaces near you</p>
            </div>
            <Link to="/search"><Button variant="outline" size="sm">View All <ChevronRight className="ml-1 h-3 w-3" /></Button></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((p) => (
              <PropertyCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Built for Every Role</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, role: "Tenant", desc: "Browse, apply, pay, and manage your rental life" },
            { icon: Building2, role: "Landlord", desc: "List properties, manage tenants, track payments" },
            { icon: Shield, role: "Admin", desc: "Oversee platform operations and verify users" },
            { icon: TrendingUp, role: "Personnel", desc: "Manage maintenance tasks and track progress" },
          ].map((r) => (
            <Card key={r.role} className="p-6 text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{r.role}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to streamline your rental operations?</h2>
          <p className="text-primary-foreground/80 mb-8">Join thousands of landlords and tenants who trust DomiKnow.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/register"><Button size="lg" variant="secondary" className="h-12 px-8">Get Started</Button></Link>
            <Link to="/features"><Button size="lg" variant="outline" className="h-12 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">Learn More</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
