import { Card } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { KPICard } from "@/components/shared/KPICard"; import { Gift, Users, TrendingUp } from "lucide-react";
export default function RewardsManagement() {
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">Rewards Management</h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <KPICard icon={Gift} title="Total Points Issued" value="45,200" subtitle="This month"/>
      <KPICard icon={Users} title="Active Reward Users" value="892" subtitle="72% of tenants"/>
      <KPICard icon={TrendingUp} title="Points Redeemed" value="12,400" subtitle="₱24,800 equivalent"/>
    </div>
    <Card className="p-6"><h3 className="font-semibold mb-4">Reward Configuration</h3>
      <div className="space-y-3">{[
        { action: "On-time Payment", points: 50 },
        { action: "6-Month Streak", points: 120 },
        { action: "Referral Bonus", points: 100 },
        { action: "12-Month Lease Renewal", points: 200 },
      ].map((r) => (<div key={r.action} className="flex items-center justify-between p-3 rounded-lg border"><span className="text-sm font-medium">{r.action}</span><span className="text-sm font-bold text-primary">+{r.points} pts</span></div>))}</div>
    </Card>
    <Card className="p-6"><h3 className="font-semibold mb-4">Recent Redemptions</h3>
      <div className="space-y-3">{[
        { tenant: "Angela Reyes", reward: "₱200 Rent Discount", points: 200, date: "Mar 15, 2026" },
        { tenant: "Mark Villanueva", reward: "₱100 Utility Credit", points: 100, date: "Mar 10, 2026" },
      ].map((r) => (<div key={r.tenant+r.date} className="flex items-center justify-between p-3 rounded-lg border"><div><p className="text-sm font-medium">{r.tenant}</p><p className="text-xs text-muted-foreground">{r.reward} • {r.date}</p></div><span className="text-sm font-bold text-destructive">-{r.points} pts</span></div>))}</div>
    </Card></div>);
}
