import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { StatusChip } from "@/components/shared/StatusChip";
import { Badge } from "@/components/ui/badge";
import { User, CreditCard, Bell, Lock } from "lucide-react";

export default function LandlordSettings() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      <Card className="p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2"><User className="h-4 w-4" /> Profile</h3>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">JD</div>
          <div><p className="font-medium">Juan Dela Cruz</p><p className="text-sm text-muted-foreground">juan@domiknow.ph</p><StatusChip status="Verified" /></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2"><Label>Name</Label><Input defaultValue="Juan Dela Cruz" /></div>
          <div className="space-y-2"><Label>Phone</Label><Input defaultValue="+63 917 123 4567" /></div>
        </div>
        <Button className="mt-4" size="sm">Save Changes</Button>
      </Card>
      <Card className="p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2"><CreditCard className="h-4 w-4" /> Subscription</h3>
        <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/20">
          <div><p className="font-semibold">Pro Plan</p><p className="text-sm text-muted-foreground">₱1,299/month • Renews Apr 15, 2026</p></div>
          <Badge>Active</Badge>
        </div>
      </Card>
      <Card className="p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2"><Bell className="h-4 w-4" /> Notifications</h3>
        <div className="space-y-4">
          {["New applications", "Payment received", "Maintenance updates", "Platform announcements"].map((n) => (
            <div key={n} className="flex items-center justify-between"><span className="text-sm">{n}</span><Switch defaultChecked /></div>
          ))}
        </div>
      </Card>
    </div>
  );
}
