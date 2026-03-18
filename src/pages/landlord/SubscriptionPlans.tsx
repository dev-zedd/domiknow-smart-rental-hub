import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { subscriptionPlans } from "@/data/dummy-data";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function SubscriptionPlans() {
  return (
    <div className="space-y-6">
      <div className="text-center"><h1 className="text-2xl font-bold">Subscription Plans</h1><p className="text-muted-foreground text-sm">Choose the plan that fits your property portfolio</p></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {subscriptionPlans.map((p) => (
          <Card key={p.name} className={cn("p-6 relative", p.popular && "border-2 border-primary shadow-lg")}>
            {p.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-3xl font-extrabold text-primary mt-2">₱{p.price.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/{p.period}</span></p>
            </div>
            <ul className="space-y-2 mb-6">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-success shrink-0 mt-0.5" />{f}</li>
              ))}
            </ul>
            <Link to="/landlord/subscription/pay">
              <Button className="w-full" variant={p.popular ? "default" : "outline"}>
                {p.name === "Basic" ? "Current Plan" : `Upgrade to ${p.name}`}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
