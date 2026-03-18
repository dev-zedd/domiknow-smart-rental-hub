import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusChip } from "@/components/shared/StatusChip";
import { Plus } from "lucide-react";

const bills = [
  { tenant: "Angela Reyes", unit: "3A", rent: 6500, water: 350, electric: 820, internet: 500, total: 8170, status: "Pending Verification", due: "Apr 5" },
  { tenant: "Mark Villanueva", unit: "3B", rent: 6500, water: 280, electric: 650, internet: 500, total: 7930, status: "Paid", due: "Apr 5" },
  { tenant: "David Santos", unit: "5A", rent: 7000, water: 320, electric: 780, internet: 500, total: 8600, status: "Overdue", due: "Mar 5" },
];

export default function LandlordBilling() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><h1 className="text-2xl font-bold">Utilities & Billing</h1><Button><Plus className="h-4 w-4 mr-2" />Generate Bills</Button></div>
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-2 font-medium">Tenant</th><th className="text-left py-2 font-medium">Unit</th><th className="text-right py-2 font-medium">Rent</th><th className="text-right py-2 font-medium">Water</th><th className="text-right py-2 font-medium">Electric</th><th className="text-right py-2 font-medium">Internet</th><th className="text-right py-2 font-medium">Total</th><th className="text-left py-2 font-medium">Due</th><th className="text-left py-2 font-medium">Status</th></tr></thead>
            <tbody>
              {bills.map((b) => (
                <tr key={b.tenant} className="border-b last:border-0">
                  <td className="py-3 font-medium">{b.tenant}</td>
                  <td>{b.unit}</td>
                  <td className="text-right">₱{b.rent.toLocaleString()}</td>
                  <td className="text-right">₱{b.water}</td>
                  <td className="text-right">₱{b.electric}</td>
                  <td className="text-right">₱{b.internet}</td>
                  <td className="text-right font-semibold">₱{b.total.toLocaleString()}</td>
                  <td>{b.due}</td>
                  <td><StatusChip status={b.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
