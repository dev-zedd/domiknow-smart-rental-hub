import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { cn } from "@/lib/utils";

const steps = ["Personal Info", "ID Verification", "Employment", "Preferences", "Review"];

export default function RentalApplication() {
  const [step, setStep] = useState(0);
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Rental Application</h1>
        <p className="text-sm text-muted-foreground">Apply for Domi Residences – LSPU View, Unit 3A</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div className={cn("h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0",
              i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            )}>{i + 1}</div>
            <span className={cn("text-xs hidden sm:block", i <= step ? "font-medium" : "text-muted-foreground")}>{s}</span>
            {i < steps.length - 1 && <div className={cn("h-0.5 flex-1", i < step ? "bg-primary" : "bg-muted")} />}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader><CardTitle className="text-lg">{steps[step]}</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {step === 0 && (<>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>First Name</Label><Input defaultValue="Angela" /></div>
              <div className="space-y-2"><Label>Last Name</Label><Input defaultValue="Reyes" /></div>
            </div>
            <div className="space-y-2"><Label>Email</Label><Input defaultValue="angela@email.com" /></div>
            <div className="space-y-2"><Label>Phone</Label><Input defaultValue="+63 912 345 6789" /></div>
            <div className="space-y-2"><Label>Date of Birth</Label><Input type="date" defaultValue="1998-05-15" /></div>
          </>)}
          {step === 1 && (<>
            <div className="space-y-2"><Label>Valid ID Type</Label>
              <Select defaultValue="national"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="national">National ID</SelectItem><SelectItem value="passport">Passport</SelectItem><SelectItem value="drivers">Driver's License</SelectItem></SelectContent></Select>
            </div>
            <div className="space-y-2"><Label>Upload ID Photo</Label><Input type="file" /></div>
            <div className="space-y-2"><Label>Upload Selfie with ID</Label><Input type="file" /></div>
          </>)}
          {step === 2 && (<>
            <div className="space-y-2"><Label>Employment Status</Label>
              <Select defaultValue="employed"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="employed">Employed</SelectItem><SelectItem value="self">Self-Employed</SelectItem><SelectItem value="student">Student</SelectItem></SelectContent></Select>
            </div>
            <div className="space-y-2"><Label>Company / School</Label><Input defaultValue="Tech Solutions Inc." /></div>
            <div className="space-y-2"><Label>Monthly Income</Label><Input defaultValue="₱25,000" /></div>
          </>)}
          {step === 3 && (<>
            <div className="space-y-2"><Label>Preferred Move-in Date</Label><Input type="date" defaultValue="2026-04-01" /></div>
            <div className="space-y-2"><Label>Lease Duration</Label>
              <Select defaultValue="12"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="6">6 Months</SelectItem><SelectItem value="12">12 Months</SelectItem><SelectItem value="24">24 Months</SelectItem></SelectContent></Select>
            </div>
            <div className="space-y-2"><Label>Additional Notes</Label><Textarea placeholder="Any special requests or notes..." /></div>
          </>)}
          {step === 4 && (
            <div className="space-y-3 text-sm">
              <p><strong>Name:</strong> Angela Reyes</p>
              <p><strong>Email:</strong> angela@email.com</p>
              <p><strong>Phone:</strong> +63 912 345 6789</p>
              <p><strong>ID Type:</strong> National ID</p>
              <p><strong>Employment:</strong> Employed at Tech Solutions Inc.</p>
              <p><strong>Income:</strong> ₱25,000/month</p>
              <p><strong>Move-in:</strong> April 01, 2026</p>
              <p><strong>Lease:</strong> 12 Months</p>
            </div>
          )}
          <div className="flex justify-between pt-4">
            <Button variant="outline" disabled={step === 0} onClick={() => setStep(step - 1)}>Previous</Button>
            {step < steps.length - 1
              ? <Button onClick={() => setStep(step + 1)}>Next Step</Button>
              : <Button>Submit Application</Button>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
