import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusChip } from "@/components/shared/StatusChip";
import { Badge } from "@/components/ui/badge";
import { Check, X, Eye } from "lucide-react";

const applications = [
  { name: "Carla Mendoza", email: "carla@email.com", unit: "Domi Unit 5B", type: "Studio", rent: "₱7,000", date: "Mar 15, 2026", status: "Pending", employment: "Student at LSPU", income: "₱15,000" },
  { name: "David Santos", email: "david@email.com", unit: "GreenNest Room 8", type: "Bedspace", rent: "₱3,000", date: "Mar 12, 2026", status: "Under Review", employment: "Freelancer", income: "₱20,000" },
  { name: "Rico Cruz", email: "rico@email.com", unit: "Domi Unit 4A", type: "Studio", rent: "₱6,500", date: "Mar 10, 2026", status: "Approved", employment: "BPO Employee", income: "₱28,000" },
];

export default function ApplicationsReview() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Applications Review</h1>
      <div className="space-y-4">
        {applications.map((a) => (
          <Card key={a.name} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">{a.name.split(" ").map(n => n[0]).join("")}</div>
                <div><p className="font-semibold">{a.name}</p><p className="text-xs text-muted-foreground">{a.email} • Applied {a.date}</p></div>
              </div>
              <StatusChip status={a.status} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
              <div><p className="text-muted-foreground text-xs">Unit</p><p className="font-medium">{a.unit}</p></div>
              <div><p className="text-muted-foreground text-xs">Type</p><p className="font-medium">{a.type}</p></div>
              <div><p className="text-muted-foreground text-xs">Employment</p><p className="font-medium">{a.employment}</p></div>
              <div><p className="text-muted-foreground text-xs">Monthly Income</p><p className="font-medium">{a.income}</p></div>
            </div>
            {a.status !== "Approved" && (
              <div className="flex gap-2">
                <Button size="sm"><Check className="h-3 w-3 mr-1" />Approve</Button>
                <Button size="sm" variant="destructive"><X className="h-3 w-3 mr-1" />Deny</Button>
                <Button size="sm" variant="outline"><Eye className="h-3 w-3 mr-1" />View Full</Button>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
