import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusChip } from "@/components/shared/StatusChip";
import { paymentHistory } from "@/data/dummy-data";
import { Download } from "lucide-react";

export default function PaymentHistory() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Payment History</h1>
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-2 font-medium">Date</th><th className="text-right py-2 font-medium">Amount</th><th className="text-left py-2 font-medium">Method</th><th className="text-left py-2 font-medium">Reference</th><th className="text-left py-2 font-medium">Status</th><th className="text-right py-2 font-medium">Invoice</th></tr></thead>
            <tbody>
              {paymentHistory.map((p) => (
                <tr key={p.id} className="border-b last:border-0">
                  <td className="py-3">{p.date}</td>
                  <td className="text-right font-semibold">₱{p.amount.toLocaleString()}</td>
                  <td>{p.method}</td>
                  <td className="text-muted-foreground font-mono text-xs">{p.reference}</td>
                  <td><StatusChip status={p.status} /></td>
                  <td className="text-right"><Button variant="ghost" size="sm"><Download className="h-3 w-3" /></Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
