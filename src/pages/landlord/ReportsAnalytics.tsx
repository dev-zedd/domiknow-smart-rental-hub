import { Card } from "@/components/ui/card";
import { KPICard } from "@/components/shared/KPICard";
import { BarChart3, TrendingUp, Users, Home, CreditCard, Wrench } from "lucide-react";

export default function ReportsAnalytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Reports & Analytics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={CreditCard} title="Monthly Collections" value="₱189,500" trend="12% vs last month" trendUp />
        <KPICard icon={Home} title="Occupancy Rate" value="85%" trend="5% vs last month" trendUp />
        <KPICard icon={Users} title="Active Tenants" value="23" subtitle="27 total units" />
        <KPICard icon={Wrench} title="Maintenance Resolved" value="45" subtitle="This quarter" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Monthly Collections Trend</h3>
          <div className="space-y-3">
            {[
              { month: "Oct 2025", amount: 145000 },
              { month: "Nov 2025", amount: 152000 },
              { month: "Dec 2025", amount: 158000 },
              { month: "Jan 2026", amount: 165000 },
              { month: "Feb 2026", amount: 177000 },
              { month: "Mar 2026", amount: 189500 },
            ].map((m) => (
              <div key={m.month} className="flex items-center gap-3">
                <span className="text-xs w-16 text-muted-foreground">{m.month}</span>
                <div className="flex-1 bg-muted rounded-full h-3"><div className="bg-primary h-3 rounded-full transition-all" style={{ width: `${(m.amount / 200000) * 100}%` }} /></div>
                <span className="text-xs font-medium w-16 text-right">₱{(m.amount / 1000).toFixed(0)}K</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Top Performing Properties</h3>
          <div className="space-y-3">
            {[
              { name: "Domi Residences", occupancy: "92%", revenue: "₱65,000", rating: 4.8 },
              { name: "GreenNest Residences", occupancy: "87%", revenue: "₱39,000", rating: 4.3 },
            ].map((p) => (
              <div key={p.name} className="p-3 rounded-lg border">
                <p className="font-medium text-sm">{p.name}</p>
                <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                  <div><span className="text-muted-foreground">Occupancy</span><p className="font-semibold">{p.occupancy}</p></div>
                  <div><span className="text-muted-foreground">Revenue</span><p className="font-semibold">{p.revenue}</p></div>
                  <div><span className="text-muted-foreground">Rating</span><p className="font-semibold">{p.rating}</p></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Overdue Payments</h3>
          <div className="space-y-2">
            {[
              { tenant: "David Santos", unit: "5A", amount: "₱8,600", days: 13 },
            ].map((o) => (
              <div key={o.tenant} className="flex items-center justify-between p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                <div><p className="text-sm font-medium">{o.tenant}</p><p className="text-xs text-muted-foreground">Unit {o.unit}</p></div>
                <div className="text-right"><p className="text-sm font-bold text-destructive">{o.amount}</p><p className="text-xs text-destructive">{o.days} days overdue</p></div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Maintenance Trends</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Plumbing", count: 12 },
              { label: "Electrical", count: 8 },
              { label: "General", count: 15 },
              { label: "IT/Network", count: 5 },
            ].map((c) => (
              <div key={c.label} className="p-3 rounded-lg bg-muted/50 text-center">
                <p className="text-lg font-bold">{c.count}</p>
                <p className="text-xs text-muted-foreground">{c.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
