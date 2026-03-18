import { KPICard } from "@/components/shared/KPICard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusChip } from "@/components/shared/StatusChip";
import { notifications } from "@/data/dummy-data";
import { Home, CalendarDays, Gift, Wrench, CreditCard, FileText, Bell, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TenantDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, Angela! 👋</h1>
        <p className="text-muted-foreground text-sm">Here's your rental overview for March 2026</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={Home} title="Active Lease" value="Domi Residences" subtitle="Unit 3A • Studio" />
        <KPICard icon={CalendarDays} title="Next Due Date" value="Apr 5, 2026" subtitle="₱8,170 total" />
        <KPICard icon={Gift} title="Reward Points" value="320 pts" subtitle="+50 this month" trend="15.6% from last month" trendUp />
        <KPICard icon={Wrench} title="Maintenance" value="1 Active" subtitle="Leaking pipe • In Progress" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: CreditCard, label: "Pay Bill", path: "/tenant/payment" },
              { icon: Wrench, label: "New Request", path: "/tenant/maintenance/new" },
              { icon: FileText, label: "View Lease", path: "/tenant/lease" },
              { icon: Gift, label: "Rewards", path: "/tenant/rewards" },
            ].map((a) => (
              <Link to={a.path} key={a.label}>
                <Card className="p-4 text-center hover:bg-muted/50 cursor-pointer transition-colors">
                  <a.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">{a.label}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Card>

        {/* Recent Notifications */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Notifications</h3>
            <Link to="/tenant/notifications"><Button variant="ghost" size="sm" className="text-xs">View All</Button></Link>
          </div>
          <div className="space-y-3">
            {notifications.slice(0, 4).map((n) => (
              <div key={n.id} className="flex items-start gap-2">
                <div className={`h-2 w-2 rounded-full mt-1.5 shrink-0 ${n.read ? "bg-muted" : "bg-primary"}`} />
                <div>
                  <p className="text-sm">{n.message}</p>
                  <p className="text-xs text-muted-foreground">{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Billing Summary */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Current Billing Period</h3>
          <Link to="/tenant/billing"><Button variant="outline" size="sm">View Details <ChevronRight className="ml-1 h-3 w-3" /></Button></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Rent", amount: "₱6,500" },
            { label: "Water", amount: "₱350" },
            { label: "Electricity", amount: "₱820" },
            { label: "Internet", amount: "₱500" },
            { label: "Total Due", amount: "₱8,170", highlight: true },
          ].map((b) => (
            <div key={b.label} className={`text-center p-3 rounded-lg ${b.highlight ? "bg-primary/10" : "bg-muted/50"}`}>
              <p className="text-xs text-muted-foreground mb-1">{b.label}</p>
              <p className={`font-bold ${b.highlight ? "text-primary text-lg" : "text-sm"}`}>{b.amount}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <StatusChip status="Pending Verification" />
            <span className="text-sm text-muted-foreground">Due: April 05, 2026</span>
          </div>
          <Link to="/tenant/payment"><Button size="sm">Submit Payment</Button></Link>
        </div>
      </Card>
    </div>
  );
}
