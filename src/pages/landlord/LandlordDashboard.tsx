import { KPICard } from "@/components/shared/KPICard";
import { Card } from "@/components/ui/card";
import { StatusChip } from "@/components/shared/StatusChip";
import { Building2, Users, CreditCard, Wrench, TrendingUp, Home } from "lucide-react";

export default function LandlordDashboard() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Landlord Dashboard</h1><p className="text-sm text-muted-foreground">Welcome back, Juan Dela Cruz</p></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={Home} title="Occupancy Rate" value="85%" subtitle="23 of 27 units" trend="5% from last month" trendUp />
        <KPICard icon={CreditCard} title="Monthly Revenue" value="₱189,500" subtitle="March 2026" trend="12% from last month" trendUp />
        <KPICard icon={Users} title="Pending Applications" value="3" subtitle="2 new this week" />
        <KPICard icon={Wrench} title="Active Maintenance" value="2" subtitle="1 high priority" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Revenue Overview</h3>
          <div className="space-y-3">
            {["Jan", "Feb", "Mar"].map((m, i) => (
              <div key={m} className="flex items-center gap-3">
                <span className="text-sm w-8 text-muted-foreground">{m}</span>
                <div className="flex-1 bg-muted rounded-full h-4"><div className="bg-primary h-4 rounded-full" style={{ width: `${70 + i * 10}%` }} /></div>
                <span className="text-sm font-medium w-20 text-right">₱{(165000 + i * 12000).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Properties Overview</h3>
          <div className="space-y-3">
            {[
              { name: "Domi Residences", units: 12, occupied: 10, revenue: "₱65,000" },
              { name: "GreenNest Residences", units: 15, occupied: 13, revenue: "₱39,000" },
            ].map((p) => (
              <div key={p.name} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium text-sm">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.occupied}/{p.units} occupied</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-primary">{p.revenue}</p>
                  <StatusChip status="Active" />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Applications</h3>
          <div className="space-y-3">
            {[
              { name: "Carla Mendoza", unit: "Domi Unit 5B", status: "Pending" },
              { name: "David Santos", unit: "GreenNest Room 8", status: "Under Review" },
            ].map((a) => (
              <div key={a.name} className="flex items-center justify-between p-3 rounded-lg border">
                <div><p className="text-sm font-medium">{a.name}</p><p className="text-xs text-muted-foreground">{a.unit}</p></div>
                <StatusChip status={a.status} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Payment Status</h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-lg bg-success/10"><p className="text-lg font-bold text-success">18</p><p className="text-xs text-muted-foreground">Paid</p></div>
            <div className="p-3 rounded-lg bg-warning/10"><p className="text-lg font-bold text-warning">4</p><p className="text-xs text-muted-foreground">Pending</p></div>
            <div className="p-3 rounded-lg bg-destructive/10"><p className="text-lg font-bold text-destructive">1</p><p className="text-xs text-muted-foreground">Overdue</p></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
