import { Card } from "@/components/ui/card"; import { auditLogs } from "@/data/dummy-data"; import { Input } from "@/components/ui/input"; import { Search } from "lucide-react";
export default function AuditLogs() {
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">Audit Logs</h1>
    <div className="relative max-w-sm"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/><Input placeholder="Search logs..." className="pl-9"/></div>
    <Card className="p-6"><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b text-muted-foreground"><th className="text-left py-2 font-medium">Action</th><th className="text-left py-2 font-medium">Performed By</th><th className="text-left py-2 font-medium">Target</th><th className="text-left py-2 font-medium">Timestamp</th></tr></thead>
    <tbody>{auditLogs.map(l=>(<tr key={l.id} className="border-b last:border-0"><td className="py-3 font-medium">{l.action}</td><td className="text-muted-foreground">{l.user}</td><td>{l.target}</td><td className="text-muted-foreground font-mono text-xs">{l.timestamp}</td></tr>))}</tbody></table></div></Card></div>);
}
