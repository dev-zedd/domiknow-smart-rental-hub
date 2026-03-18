import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, CreditCard } from "lucide-react";

export default function SubscriptionPayment() {
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Subscription Payment</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Pro Plan – ₱1,299/month</CardTitle>
          <p className="text-sm text-muted-foreground">Up to 25 property listings, advanced management, priority support</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2"><Label>Payment Method</Label>
            <Select defaultValue="gcash"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="gcash">GCash</SelectItem><SelectItem value="maya">Maya</SelectItem><SelectItem value="bank">Bank Transfer</SelectItem><SelectItem value="card">Credit/Debit Card</SelectItem></SelectContent></Select>
          </div>
          <div className="space-y-2"><Label>Account Name</Label><Input defaultValue="Juan Dela Cruz" /></div>
          <div className="p-4 rounded-lg bg-muted/50 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Plan</span><span>Pro</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Billing Cycle</span><span>Monthly</span></div>
            <div className="flex justify-between font-semibold border-t pt-2"><span>Total</span><span className="text-primary">₱1,299.00</span></div>
          </div>
          <Button className="w-full" size="lg"><CreditCard className="h-4 w-4 mr-2" />Confirm Payment</Button>
        </CardContent>
      </Card>
    </div>
  );
}
