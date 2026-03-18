import { Card } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { Label } from "@/components/ui/label"; import { Switch } from "@/components/ui/switch"; import { User, Shield, Bell, Settings } from "lucide-react";
export default function AdminSettings() {
  return (<div className="max-w-3xl mx-auto space-y-6"><h1 className="text-2xl font-bold">Admin Settings</h1>
    <Card className="p-6"><h3 className="font-semibold mb-4 flex items-center gap-2"><User className="h-4 w-4"/>Profile</h3>
      <div className="flex items-center gap-4 mb-4"><div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">PG</div><div><p className="font-medium">Patricia Gomez</p><p className="text-sm text-muted-foreground">Super Admin • patricia@domiknow.ph</p></div></div>
      <div className="grid grid-cols-2 gap-4"><div className="space-y-2"><Label>Name</Label><Input defaultValue="Patricia Gomez"/></div><div className="space-y-2"><Label>Email</Label><Input defaultValue="patricia@domiknow.ph"/></div></div><Button className="mt-4" size="sm">Save</Button></Card>
    <Card className="p-6"><h3 className="font-semibold mb-4 flex items-center gap-2"><Settings className="h-4 w-4"/>System</h3>
      <div className="space-y-4">{["Maintenance Mode","Auto-approve verified landlords","Email notifications for new registrations","Payment verification required"].map(s=>(<div key={s} className="flex items-center justify-between"><span className="text-sm">{s}</span><Switch defaultChecked={s.includes("Email")||s.includes("Payment")}/></div>))}</div></Card></div>);
}
