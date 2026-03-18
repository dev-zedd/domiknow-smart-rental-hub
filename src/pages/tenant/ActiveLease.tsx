import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatusChip } from "@/components/shared/StatusChip";
import { Home, User, CalendarDays, MapPin, FileText } from "lucide-react";

export default function ActiveLease() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Active Lease</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Lease Agreement</h3>
            <StatusChip status="Active" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><p className="text-muted-foreground">Property</p><p className="font-medium">Domi Residences – LSPU View</p></div>
            <div><p className="text-muted-foreground">Unit</p><p className="font-medium">Unit 3A – Studio Apartment</p></div>
            <div><p className="text-muted-foreground">Monthly Rent</p><p className="font-medium text-primary">₱6,500</p></div>
            <div><p className="text-muted-foreground">Lease Duration</p><p className="font-medium">12 Months</p></div>
            <div><p className="text-muted-foreground">Start Date</p><p className="font-medium">January 15, 2025</p></div>
            <div><p className="text-muted-foreground">End Date</p><p className="font-medium">January 14, 2026</p></div>
            <div><p className="text-muted-foreground">Security Deposit</p><p className="font-medium">₱13,000 (2 months)</p></div>
            <div><p className="text-muted-foreground">Payment Due</p><p className="font-medium">5th of every month</p></div>
          </div>
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2 text-sm">Lease Timeline</h4>
            <div className="relative">
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-primary rounded-full" style={{ width: "75%" }} />
              </div>
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>Jan 2025</span>
                <span>75% completed</span>
                <span>Jan 2026</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><User className="h-4 w-4" />Landlord</h3>
            <p className="font-medium text-sm">Juan Dela Cruz</p>
            <p className="text-xs text-muted-foreground">juan@domiknow.ph</p>
            <p className="text-xs text-muted-foreground">+63 917 123 4567</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><MapPin className="h-4 w-4" />Location</h3>
            <p className="text-sm text-muted-foreground">Siniloan, Laguna</p>
            <p className="text-sm text-muted-foreground">Near LSPU Campus</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><FileText className="h-4 w-4" />Documents</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm"><span>Lease Contract</span><Badge variant="secondary">PDF</Badge></div>
              <div className="flex items-center justify-between text-sm"><span>House Rules</span><Badge variant="secondary">PDF</Badge></div>
              <div className="flex items-center justify-between text-sm"><span>Move-in Checklist</span><Badge variant="secondary">PDF</Badge></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
