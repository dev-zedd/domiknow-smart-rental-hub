import { Card } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { StatusChip } from "@/components/shared/StatusChip"; import { Check, X, Eye } from "lucide-react";
const queue = [
  { name: "Cedric Ramos Property Rentals", type: "Landlord", email: "cedric@domiknow.ph", docs: ["Business Permit", "Valid ID", "Tax Certificate"], date: "Mar 16, 2026", status: "Pending" },
  { name: "Elena Bautista", type: "Landlord", email: "elena@email.com", docs: ["Valid ID", "Property Deed"], date: "Mar 18, 2026", status: "Pending" },
  { name: "Juan Dela Cruz", type: "Landlord", email: "juan@domiknow.ph", docs: ["Business Permit", "Valid ID"], date: "Mar 10, 2026", status: "Verified" },
];
export default function VerificationQueue() {
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">Verification Queue</h1>
    <div className="space-y-4">{queue.map((q) => (<Card key={q.name} className="p-6">
      <div className="flex items-start justify-between mb-4"><div className="flex items-center gap-3"><div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">{q.name[0]}</div><div><p className="font-semibold">{q.name}</p><p className="text-xs text-muted-foreground">{q.email} • {q.type} • {q.date}</p></div></div><StatusChip status={q.status} /></div>
      <div className="mb-4"><p className="text-xs text-muted-foreground mb-2">Submitted Documents:</p><div className="flex flex-wrap gap-2">{q.docs.map((d) => (<span key={d} className="text-xs bg-muted px-2 py-1 rounded">{d}</span>))}</div></div>
      {q.status === "Pending" && <div className="flex gap-2"><Button size="sm"><Check className="h-3 w-3 mr-1"/>Approve</Button><Button size="sm" variant="destructive"><X className="h-3 w-3 mr-1"/>Deny</Button><Button size="sm" variant="outline"><Eye className="h-3 w-3 mr-1"/>Review</Button></div>}
    </Card>))}</div></div>);
}
