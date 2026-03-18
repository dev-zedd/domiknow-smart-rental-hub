import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

const steps = ["Property Details", "Unit Details", "Amenities", "Rules & Policies", "Utility Setup", "Photos", "Map Location", "Submit"];

export default function RegisterProperty() {
  const [step, setStep] = useState(0);
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Register New Property</h1>
      <div className="flex gap-1 overflow-x-auto pb-2">
        {steps.map((s, i) => (
          <div key={s} className={cn("flex items-center gap-1 shrink-0")}>
            <div className={cn("h-7 w-7 rounded-full flex items-center justify-center text-xs font-semibold", i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>{i + 1}</div>
            <span className={cn("text-xs pr-2", i <= step ? "font-medium" : "text-muted-foreground")}>{s}</span>
            {i < steps.length - 1 && <div className={cn("w-4 h-0.5", i < step ? "bg-primary" : "bg-muted")} />}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader><CardTitle className="text-lg">{steps[step]}</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {step === 0 && (<>
            <div className="space-y-2"><Label>Property Name</Label><Input placeholder="e.g., Domi Residences" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Property Type</Label><Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="apartment">Apartment</SelectItem><SelectItem value="boarding">Boarding House</SelectItem><SelectItem value="condo">Condo</SelectItem></SelectContent></Select></div>
              <div className="space-y-2"><Label>Location</Label><Input placeholder="City, Province" /></div>
            </div>
            <div className="space-y-2"><Label>Full Address</Label><Input placeholder="Street, Barangay, City" /></div>
            <div className="space-y-2"><Label>Description</Label><Textarea placeholder="Describe your property..." /></div>
          </>)}
          {step === 1 && (<>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Total Units</Label><Input type="number" placeholder="12" /></div>
              <div className="space-y-2"><Label>Unit Type</Label><Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="studio">Studio</SelectItem><SelectItem value="1br">1 Bedroom</SelectItem><SelectItem value="bedspace">Bedspace</SelectItem></SelectContent></Select></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Monthly Rent (₱)</Label><Input type="number" placeholder="6500" /></div>
              <div className="space-y-2"><Label>Security Deposit</Label><Input placeholder="2 months" /></div>
            </div>
            <div className="space-y-2"><Label>Floor Area (sqm)</Label><Input type="number" placeholder="24" /></div>
          </>)}
          {step === 2 && (
            <div className="grid grid-cols-2 gap-3">
              {["WiFi Ready", "Own CR", "Shared Kitchen", "Parking", "Balcony", "Laundry Nearby", "Security Gate", "CCTV", "Furnished", "Water Included", "Air Conditioning", "Pet Friendly"].map((a) => (
                <div key={a} className="flex items-center gap-2"><Checkbox /><Label className="text-sm">{a}</Label></div>
              ))}
            </div>
          )}
          {step === 3 && (<>
            <div className="space-y-2"><Label>House Rules</Label><Textarea placeholder="List your property rules..." rows={4} defaultValue="1. No smoking inside the unit\n2. Quiet hours: 10PM - 6AM\n3. Visitors must register at the gate\n4. No pets without prior approval" /></div>
            <div className="space-y-2"><Label>Cancellation Policy</Label><Select defaultValue="30"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="30">30-day notice</SelectItem><SelectItem value="60">60-day notice</SelectItem></SelectContent></Select></div>
          </>)}
          {step === 4 && (<>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Water Rate (₱/month)</Label><Input type="number" placeholder="350" /></div>
              <div className="space-y-2"><Label>Electricity Rate</Label><Select defaultValue="metered"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="metered">Metered (per kWh)</SelectItem><SelectItem value="flat">Flat Rate</SelectItem><SelectItem value="included">Included in Rent</SelectItem></SelectContent></Select></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Internet (₱/month)</Label><Input type="number" placeholder="500" /></div>
              <div className="space-y-2"><Label>Late Payment Penalty</Label><Input placeholder="₱200/day" /></div>
            </div>
          </>)}
          {step === 5 && (
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50">
                  <Upload className="h-6 w-6 mx-auto mb-1 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">Photo {n}</p>
                </div>
              ))}
            </div>
          )}
          {step === 6 && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Pin your property location on the map</p>
              <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border flex items-center justify-center">
                <div className="text-center"><span className="text-3xl">📍</span><p className="text-sm text-muted-foreground mt-2">Click to pin location</p><p className="text-xs text-muted-foreground">Siniloan, Laguna</p></div>
              </div>
            </div>
          )}
          {step === 7 && (
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">Your property will be submitted for admin review and approval.</p>
              <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                <p><strong>Property Name:</strong> Domi Residences – LSPU View</p>
                <p><strong>Type:</strong> Apartment • Studio</p>
                <p><strong>Location:</strong> Siniloan, Laguna</p>
                <p><strong>Units:</strong> 12 • ₱6,500/month</p>
                <p><strong>Amenities:</strong> WiFi, Own CR, Parking, Security</p>
              </div>
            </div>
          )}
          <div className="flex justify-between pt-4">
            <Button variant="outline" disabled={step === 0} onClick={() => setStep(step - 1)}>Previous</Button>
            {step < steps.length - 1 ? <Button onClick={() => setStep(step + 1)}>Next Step</Button> : <Button>Submit for Approval</Button>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
