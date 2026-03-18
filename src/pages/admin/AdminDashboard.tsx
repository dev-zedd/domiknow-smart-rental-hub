import { KPICard } from "@/components/shared/KPICard";
import { Card } from "@/components/ui/card";
import { StatusChip } from "@/components/shared/StatusChip";
import { Users, Building2, CreditCard, Shield, FileCheck, Wrench } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Admin Dashboard</h1><p className="text-sm text-muted-foreground">Platform overview • March 18, 2026</p></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={Users} title="Total Users" value="1,247" trend="8% this month" trendUp />
        <KPICard icon={Building2} title="Active Listings" value="342" subtitle="28 pending approval" />
        <KPICard icon={Shield} title="Pending Verifications" value="5" subtitle="3 landlords, 2 properties" />
        <KPICard icon={CreditCard} title="Monthly Collections" value="₱2.5M" trend="15% vs last month" trendUp />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6"><h3 className="font-semibold mb-4">Verification Queue</h3>
          <div className="space-y-3">{[
            { name: "Cedric Ramos Property Rentals", type: "Landlord", date: "Mar 16" },
            { name: "Sunrise Apartments", type: "Property", date: "Mar 17" },
            { name: "Elena Bautista", type: "Landlord", date: "Mar 18" },
          ].map((v) => (<div key={v.name} className="flex items-center justify-between p-3 rounded-lg border"><div><p className="text-sm font-medium">{v.name}</p><p className="text-xs text-muted-foreground">{v.type} • {v.date}</p></div><StatusChip status="Pending" /></div>))}</div>
        </Card>
        <Card className="p-6"><h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">{[
            { action: "Payment verified for Angela Reyes", time: "2 hours ago" },
            { action: "Property approved: Domi Residences", time: "5 hours ago" },
            { action: "Maintenance task assigned to Noel Aquino", time: "1 day ago" },
            { action: "New landlord registered: Cedric Ramos", time: "1 day ago" },
          ].map((a) => (<div key={a.action} className="flex items-start gap-2 py-2 border-b last:border-0"><div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" /><div><p className="text-sm">{a.action}</p><p className="text-xs text-muted-foreground">{a.time}</p></div></div>))}</div>
        </Card>
        <Card className="p-6"><h3 className="font-semibold mb-4">Platform Stats</h3>
          <div className="grid grid-cols-2 gap-3">{[
            { label: "Landlords", value: "89" }, { label: "Tenants", value: "1,105" },
            { label: "Properties", value: "342" }, { label: "Personnel", value: "53" },
          ].map((s) => (<div key={s.label} className="p-3 rounded-lg bg-muted/50 text-center"><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>))}</div>
        </Card>
        <Card className="p-6"><h3 className="font-semibold mb-4">Payment Summary</h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-lg bg-success/10"><p className="text-lg font-bold text-success">892</p><p className="text-xs text-muted-foreground">Verified</p></div>
            <div className="p-3 rounded-lg bg-warning/10"><p className="text-lg font-bold text-warning">47</p><p className="text-xs text-muted-foreground">Pending</p></div>
            <div className="p-3 rounded-lg bg-destructive/10"><p className="text-lg font-bold text-destructive">12</p><p className="text-xs text-muted-foreground">Overdue</p></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
