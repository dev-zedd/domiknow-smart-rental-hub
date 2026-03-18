import { Card } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { StatusChip } from "@/components/shared/StatusChip"; import { KPICard } from "@/components/shared/KPICard"; import { Check, X, Eye, CreditCard, Clock, CheckCircle2 } from "lucide-react";
const payments = [
  { tenant: "Angela Reyes", amount: "₱8,170", method: "GCash", ref: "GC-2026030145", date: "Mar 1, 2026", property: "Domi Residences 3A", status: "Pending Verification" },
  { tenant: "Mark Villanueva", amount: "₱7,930", method: "Maya", ref: "MY-2026030112", date: "Mar 2, 2026", property: "Lakeside Rm 5", status: "Pending Verification" },
  { tenant: "Paulo Garcia", amount: "₱3,000", method: "Bank Transfer", ref: "BT-2026030188", date: "Mar 3, 2026", property: "GreenNest 4C", status: "Pending Verification" },
];
export default function PaymentVerification() {
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">Payment Verification Center</h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <KPICard icon={CheckCircle2} title="Verified Today" value="12" subtitle="₱98,400 total"/>
      <KPICard icon={Clock} title="Pending Review" value="3" subtitle="₱19,100 total"/>
      <KPICard icon={CreditCard} title="Total This Month" value="₱2.5M" trend="15% vs Feb" trendUp/>
    </div>
    <div className="space-y-4">{payments.map((p) => (<Card key={p.ref} className="p-6">
      <div className="flex items-start justify-between mb-3"><div><p className="font-semibold">{p.tenant}</p><p className="text-xs text-muted-foreground">{p.property} • {p.date}</p></div><StatusChip status={p.status}/></div>
      <div className="grid grid-cols-3 gap-3 text-sm mb-4">
        <div><p className="text-muted-foreground text-xs">Amount</p><p className="font-bold text-primary">{p.amount}</p></div>
        <div><p className="text-muted-foreground text-xs">Method</p><p className="font-medium">{p.method}</p></div>
        <div><p className="text-muted-foreground text-xs">Reference</p><p className="font-mono text-xs">{p.ref}</p></div>
      </div>
      <div className="p-3 rounded-lg bg-muted/50 mb-4 text-center text-sm text-muted-foreground">[Payment proof screenshot placeholder]</div>
      <div className="flex gap-2"><Button size="sm"><Check className="h-3 w-3 mr-1"/>Verify</Button><Button size="sm" variant="destructive"><X className="h-3 w-3 mr-1"/>Reject</Button><Button size="sm" variant="outline"><Eye className="h-3 w-3 mr-1"/>View Proof</Button></div>
    </Card>))}</div></div>);
}
