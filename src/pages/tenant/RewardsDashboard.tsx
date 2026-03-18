import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { KPICard } from "@/components/shared/KPICard";
import { rewards } from "@/data/dummy-data";
import { Gift, Star, Trophy, TrendingUp } from "lucide-react";

const redeemOptions = [
  { name: "₱200 Rent Discount", points: 200, desc: "Applied to next month's rent" },
  { name: "₱100 Utility Credit", points: 100, desc: "Deducted from utilities" },
  { name: "Priority Maintenance", points: 150, desc: "Fast-track your next request" },
  { name: "₱500 Voucher", points: 500, desc: "GCash or Maya e-voucher" },
];

export default function RewardsDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Rewards Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KPICard icon={Gift} title="Total Points" value="320" subtitle="Lifetime earned: 520" />
        <KPICard icon={Trophy} title="Current Tier" value="Silver" subtitle="Next: Gold at 500 pts" />
        <KPICard icon={TrendingUp} title="This Month" value="+50 pts" subtitle="On-time payment" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Points History</h3>
          <div className="space-y-3">
            {rewards.map((r) => (
              <div key={r.id} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="text-sm font-medium">{r.type}</p>
                  <p className="text-xs text-muted-foreground">{r.description}</p>
                  <p className="text-xs text-muted-foreground">{r.date}</p>
                </div>
                <span className="text-sm font-bold text-success">+{r.points}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Redeem Rewards</h3>
          <div className="space-y-3">
            {redeemOptions.map((r) => (
              <div key={r.name} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.desc}</p>
                </div>
                <Button size="sm" variant={r.points <= 320 ? "default" : "outline"} disabled={r.points > 320}>
                  {r.points} pts
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
