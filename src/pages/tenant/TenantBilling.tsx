import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusChip } from "@/components/shared/StatusChip";
import { billingEntry } from "@/data/dummy-data";
import { Link } from "react-router-dom";
import { Download, CreditCard } from "lucide-react";

const billingHistory = [
  { month: "March 2026", rent: 6500, water: 350, electricity: 820, internet: 500, total: 8170, status: "Pending Verification", due: "Apr 5, 2026" },
  { month: "February 2026", rent: 6500, water: 320, electricity: 780, internet: 500, total: 8100, status: "Paid", due: "Mar 5, 2026" },
  { month: "January 2026", rent: 6500, water: 300, electricity: 750, internet: 500, total: 8050, status: "Paid", due: "Feb 5, 2026" },
];

export default function TenantBilling() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Utilities & Billing</h1>

      {/* Current Bill */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Current Bill – March 2026</h3>
          <StatusChip status={billingEntry.status} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
          <div className="p-3 rounded-lg bg-muted/50 text-center"><p className="text-xs text-muted-foreground">Rent</p><p className="font-bold">₱{billingEntry.rent.toLocaleString()}</p></div>
          <div className="p-3 rounded-lg bg-muted/50 text-center"><p className="text-xs text-muted-foreground">Water</p><p className="font-bold">₱{billingEntry.water}</p></div>
          <div className="p-3 rounded-lg bg-muted/50 text-center"><p className="text-xs text-muted-foreground">Electricity</p><p className="font-bold">₱{billingEntry.electricity}</p></div>
          <div className="p-3 rounded-lg bg-muted/50 text-center"><p className="text-xs text-muted-foreground">Internet</p><p className="font-bold">₱{billingEntry.internet}</p></div>
          <div className="p-3 rounded-lg bg-primary/10 text-center"><p className="text-xs text-muted-foreground">Total Due</p><p className="font-bold text-primary text-lg">₱{billingEntry.total.toLocaleString()}</p></div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-sm text-muted-foreground">Due: {billingEntry.dueDate}</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Download className="h-3 w-3 mr-1" />Invoice</Button>
            <Link to="/tenant/payment"><Button size="sm"><CreditCard className="h-3 w-3 mr-1" />Pay Now</Button></Link>
          </div>
        </div>
      </Card>

      {/* History */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Billing History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-2 font-medium">Month</th><th className="text-right py-2 font-medium">Rent</th><th className="text-right py-2 font-medium">Water</th><th className="text-right py-2 font-medium">Electric</th><th className="text-right py-2 font-medium">Internet</th><th className="text-right py-2 font-medium">Total</th><th className="text-right py-2 font-medium">Due Date</th><th className="text-right py-2 font-medium">Status</th></tr></thead>
            <tbody>
              {billingHistory.map((b) => (
                <tr key={b.month} className="border-b last:border-0">
                  <td className="py-3 font-medium">{b.month}</td>
                  <td className="text-right">₱{b.rent.toLocaleString()}</td>
                  <td className="text-right">₱{b.water}</td>
                  <td className="text-right">₱{b.electricity}</td>
                  <td className="text-right">₱{b.internet}</td>
                  <td className="text-right font-semibold">₱{b.total.toLocaleString()}</td>
                  <td className="text-right text-muted-foreground">{b.due}</td>
                  <td className="text-right"><StatusChip status={b.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
