import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { StatusChip } from "@/components/shared/StatusChip";
import { User, Shield, Bell, Lock } from "lucide-react";

export default function TenantSettings() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Card className="p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2"><User className="h-4 w-4" /> Profile</h3>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">AR</div>
          <div><p className="font-medium">Angela Reyes</p><p className="text-sm text-muted-foreground">angela@email.com</p></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2"><Label>First Name</Label><Input defaultValue="Angela" /></div>
          <div className="space-y-2"><Label>Last Name</Label><Input defaultValue="Reyes" /></div>
          <div className="space-y-2"><Label>Phone</Label><Input defaultValue="+63 912 345 6789" /></div>
          <div className="space-y-2"><Label>Email</Label><Input defaultValue="angela@email.com" /></div>
        </div>
        <Button className="mt-4" size="sm">Save Changes</Button>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2"><Shield className="h-4 w-4" /> Verification</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between"><span>Email Verified</span><StatusChip status="Verified" /></div>
          <div className="flex items-center justify-between"><span>Phone Verified</span><StatusChip status="Verified" /></div>
          <div className="flex items-center justify-between"><span>ID Verified</span><StatusChip status="Verified" /></div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2"><Bell className="h-4 w-4" /> Notifications</h3>
        <div className="space-y-4">
          {["Payment reminders", "Maintenance updates", "Reward notifications", "Platform announcements"].map((n) => (
            <div key={n} className="flex items-center justify-between">
              <span className="text-sm">{n}</span>
              <Switch defaultChecked />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2"><Lock className="h-4 w-4" /> Security</h3>
        <Button variant="outline" size="sm">Change Password</Button>
      </Card>
    </div>
  );
}
