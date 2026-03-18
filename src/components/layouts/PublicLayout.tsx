import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Search Properties", path: "/search" },
  { label: "Map", path: "/map" },
];

export function PublicLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">DomiKnow</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/login"><Button variant="ghost" size="sm">Log In</Button></Link>
            <Link to="/register"><Button size="sm">Sign Up</Button></Link>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t bg-card p-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block px-3 py-2 rounded-md text-sm" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t">
              <Link to="/login" className="flex-1"><Button variant="outline" size="sm" className="w-full">Log In</Button></Link>
              <Link to="/register" className="flex-1"><Button size="sm" className="w-full">Sign Up</Button></Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-7 w-7 rounded bg-primary flex items-center justify-center"><Building2 className="h-4 w-4 text-primary-foreground" /></div>
                <span className="font-bold text-background">DomiKnow</span>
              </div>
              <p className="text-sm text-background/60">Smarter Rental Operations for Long-Term Living</p>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-3 text-sm">Platform</h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li>Features</li><li>Pricing</li><li>For Landlords</li><li>For Tenants</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-3 text-sm">Support</h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li>Help Center</li><li>Contact Us</li><li>Privacy Policy</li><li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-3 text-sm">Connect</h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li>Facebook</li><li>Twitter</li><li>Email Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/40">
            © 2026 DomiKnow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
