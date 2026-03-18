import { Card } from "@/components/ui/card";
import { StatusChip } from "@/components/shared/StatusChip";
import { KPICard } from "@/components/shared/KPICard";
import { CreditCard, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const payments = [
  { tenant: "Angela Reyes", unit: "3A", amount: "₱8,170", method: "GCash", ref: "GC-2026030145", date: "Mar 1", status: "Verified" },
  { tenant: "Mark Villanueva", unit: "3B", amount: "₱7,930", method: "Maya", ref: "MY-2026030112", date: "Mar 2", status: "Pending Verification" },
  { tenant: "David Santos", unit: "5A", amount: "₱8,600", method: "—", ref: "—", date: "—", status: "Overdue" },
];

export default function PaymentMonitoring() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Payment Monitoring</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KPICard icon={CheckCircle2} title="Collected" value="₱152,400" subtitle="18 tenants paid" />
        <KPICard icon={Clock} title="Pending" value="₱31,860" subtitle="4 awaiting verification" />
        <KPICard icon={AlertTriangle} title="Overdue" value="₱8,600" subtitle="1 tenant overdue" />
      </div>
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-2 font-medium">Tenant</th><th className="text-left py-2 font-medium">Unit</th><th className="text-right py-2 font-medium">Amount</th><th className="text-left py-2 font-medium">Method</th><th className="text-left py-2 font-medium">Reference</th><th className="text-left py-2 font-medium">Date</th><th className="text-left py-2 font-medium">Status</th></tr></thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.tenant} className="border-b last:border-0">
                  <td className="py-3 font-medium">{p.tenant}</td><td>{p.unit}</td><td className="text-right font-semibold">{p.amount}</td><td>{p.method}</td><td className="font-mono text-xs text-muted-foreground">{p.ref}</td><td>{p.date}</td><td><StatusChip status={p.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
