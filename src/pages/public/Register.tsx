import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2 } from "lucide-react";

export default function Register() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-3">
            <Building2 className="h-7 w-7 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <p className="text-sm text-muted-foreground">Join DomiKnow today</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2"><Label>First Name</Label><Input placeholder="Juan" /></div>
            <div className="space-y-2"><Label>Last Name</Label><Input placeholder="Dela Cruz" /></div>
          </div>
          <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@email.com" /></div>
          <div className="space-y-2"><Label>Phone Number</Label><Input placeholder="+63 9XX XXX XXXX" /></div>
          <div className="space-y-2"><Label>Password</Label><Input type="password" placeholder="••••••••" /></div>
          <div className="space-y-2"><Label>Confirm Password</Label><Input type="password" placeholder="••••••••" /></div>
          <Link to="/select-role"><Button className="w-full" size="lg">Create Account</Button></Link>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
