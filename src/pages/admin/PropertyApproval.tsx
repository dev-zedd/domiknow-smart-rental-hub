import { Card } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { StatusChip } from "@/components/shared/StatusChip"; import { Check, X, Eye } from "lucide-react"; import { properties } from "@/data/dummy-data";
export default function PropertyApproval() {
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">Property Approval</h1>
    <div className="space-y-4">{properties.map((p) => (<Card key={p.id} className="p-6">
      <div className="flex items-start justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">{p.image}</span><div><p className="font-semibold">{p.name}</p><p className="text-xs text-muted-foreground">{p.location} • {p.type} • By {p.landlord}</p></div></div><StatusChip status="Pending" /></div>
      <div className="grid grid-cols-4 gap-3 text-sm mb-4">
        <div><p className="text-muted-foreground text-xs">Units</p><p className="font-medium">{p.units}</p></div>
        <div><p className="text-muted-foreground text-xs">Rent</p><p className="font-medium">₱{p.rent.toLocaleString()}</p></div>
        <div><p className="text-muted-foreground text-xs">Trust Score</p><p className="font-medium">{p.trustScore}</p></div>
        <div><p className="text-muted-foreground text-xs">Amenities</p><p className="font-medium">{p.amenities.length}</p></div>
      </div>
      <div className="flex gap-2"><Button size="sm"><Check className="h-3 w-3 mr-1"/>Approve</Button><Button size="sm" variant="destructive"><X className="h-3 w-3 mr-1"/>Reject</Button><Button size="sm" variant="outline"><Eye className="h-3 w-3 mr-1"/>Details</Button></div>
    </Card>))}</div></div>);
}
