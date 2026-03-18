import { Card } from "@/components/ui/card";
import { StatusChip } from "@/components/shared/StatusChip";

const records = [
  { id: "R001", tenant: "Angela Reyes", unit: "Domi 3A", start: "Jan 2025", end: "Jan 2026", rent: "₱6,500", status: "Active" },
  { id: "R002", tenant: "Mark Villanueva", unit: "Lakeside Rm 5", start: "Mar 2025", end: "Mar 2026", rent: "₱4,200", status: "Active" },
  { id: "R003", tenant: "Sara Lim", unit: "Domi 2B", start: "Jun 2024", end: "Jun 2025", rent: "₱6,500", status: "Completed" },
  { id: "R004", tenant: "Paulo Garcia", unit: "GreenNest 4C", start: "Jan 2025", end: "Jul 2025", rent: "₱3,000", status: "Active" },
];

export default function RentalRecords() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Rental Records</h1>
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-2 font-medium">ID</th><th className="text-left py-2 font-medium">Tenant</th><th className="text-left py-2 font-medium">Unit</th><th className="text-left py-2 font-medium">Start</th><th className="text-left py-2 font-medium">End</th><th className="text-right py-2 font-medium">Monthly Rent</th><th className="text-left py-2 font-medium">Status</th></tr></thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-b last:border-0">
                  <td className="py-3 font-mono text-xs">{r.id}</td>
                  <td className="font-medium">{r.tenant}</td>
                  <td>{r.unit}</td>
                  <td>{r.start}</td>
                  <td>{r.end}</td>
                  <td className="text-right font-medium">{r.rent}</td>
                  <td><StatusChip status={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
