import { KPICard } from "@/components/shared/KPICard"; import { Card } from "@/components/ui/card"; import { Users, Building2, CreditCard, TrendingUp, Home, Wrench } from "lucide-react";
export default function PlatformAnalytics() {
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">Platform Analytics</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KPICard icon={Users} title="Total Users" value="1,247" trend="8% growth" trendUp/>
      <KPICard icon={Building2} title="Properties" value="342" trend="12 new this month" trendUp/>
      <KPICard icon={CreditCard} title="Total Revenue" value="₱2.5M" trend="15% vs last month" trendUp/>
      <KPICard icon={Home} title="Avg Occupancy" value="87%" trend="3% improvement" trendUp/>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6"><h3 className="font-semibold mb-4">Monthly Revenue</h3>
        <div className="space-y-2">{[{m:"Oct",v:1800},{m:"Nov",v:2000},{m:"Dec",v:2100},{m:"Jan",v:2200},{m:"Feb",v:2350},{m:"Mar",v:2500}].map(d=>(<div key={d.m} className="flex items-center gap-3"><span className="text-xs w-8 text-muted-foreground">{d.m}</span><div className="flex-1 bg-muted rounded-full h-3"><div className="bg-primary h-3 rounded-full" style={{width:`${(d.v/2500)*100}%`}}/></div><span className="text-xs font-medium w-12 text-right">₱{d.v/1000}M</span></div>))}</div>
      </Card>
      <Card className="p-6"><h3 className="font-semibold mb-4">User Growth</h3>
        <div className="grid grid-cols-2 gap-3">{[{l:"Tenants",v:"1,105",g:"+82"},{l:"Landlords",v:"89",g:"+7"},{l:"Properties",v:"342",g:"+28"},{l:"Personnel",v:"53",g:"+5"}].map(s=>(<div key={s.l} className="p-3 rounded-lg bg-muted/50 text-center"><p className="text-lg font-bold">{s.v}</p><p className="text-xs text-muted-foreground">{s.l}</p><p className="text-xs text-success">{s.g} this month</p></div>))}</div>
      </Card>
    </div></div>);
}
