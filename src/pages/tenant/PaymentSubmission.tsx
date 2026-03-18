import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function PaymentSubmission() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-20 space-y-4">
        <CheckCircle2 className="h-16 w-16 text-success mx-auto" />
        <h2 className="text-2xl font-bold">Payment Submitted!</h2>
        <p className="text-muted-foreground">Your payment proof has been uploaded and is now under verification. You'll be notified once it's confirmed.</p>
        <p className="text-sm text-muted-foreground">Reference: GC-2026040501</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Submit Payment</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">March 2026 Bill</CardTitle>
          <p className="text-2xl font-bold text-primary">₱8,170.00</p>
          <p className="text-sm text-muted-foreground">Due: April 05, 2026</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Payment Method</Label>
            <Select defaultValue="gcash">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="gcash">GCash</SelectItem>
                <SelectItem value="maya">Maya</SelectItem>
                <SelectItem value="bank">Bank Transfer</SelectItem>
                <SelectItem value="cash">Cash (Logged by Admin)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Reference Number</Label>
            <Input placeholder="Enter transaction reference..." />
          </div>
          <div className="space-y-2">
            <Label>Amount Paid</Label>
            <Input type="number" defaultValue="8170" />
          </div>
          <div className="space-y-2">
            <Label>Upload Proof of Payment</Label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Click or drag to upload screenshot</p>
              <p className="text-xs text-muted-foreground">JPG, PNG up to 5MB</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Notes (optional)</Label>
            <Textarea placeholder="Any additional notes..." />
          </div>
          <Button className="w-full" size="lg" onClick={() => setSubmitted(true)}>Submit Payment</Button>
        </CardContent>
      </Card>
    </div>
  );
}
