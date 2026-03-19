import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PublicLayout } from "@/components/layouts/PublicLayout";
import { DashboardLayout, MenuItem } from "@/components/layouts/DashboardLayout";
import NotFound from "./pages/NotFound";

// Public
import Landing from "./pages/public/Landing";
import Features from "./pages/public/Features";
import PropertySearch from "./pages/public/PropertySearch";
import MapDiscovery from "./pages/public/MapDiscovery";
import PropertyDetails from "./pages/public/PropertyDetails";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import RoleSelection from "./pages/public/RoleSelection";

// Tenant
import TenantDashboard from "./pages/tenant/TenantDashboard";
import RecommendedProperties from "./pages/tenant/RecommendedProperties";
import RentalApplication from "./pages/tenant/RentalApplication";
import ApplicationTracking from "./pages/tenant/ApplicationTracking";
import ActiveLease from "./pages/tenant/ActiveLease";
import TenantBilling from "./pages/tenant/TenantBilling";
import PaymentSubmission from "./pages/tenant/PaymentSubmission";
import PaymentHistory from "./pages/tenant/PaymentHistory";
import RewardsDashboard from "./pages/tenant/RewardsDashboard";
import MaintenanceRequest from "./pages/tenant/MaintenanceRequest";
import MaintenanceTracking from "./pages/tenant/MaintenanceTracking";
import TenantNotifications from "./pages/tenant/TenantNotifications";
import TenantSettings from "./pages/tenant/TenantSettings";

// Landlord
import LandlordDashboard from "./pages/landlord/LandlordDashboard";
import SubscriptionPlans from "./pages/landlord/SubscriptionPlans";
import SubscriptionPayment from "./pages/landlord/SubscriptionPayment";
import RegisterProperty from "./pages/landlord/RegisterProperty";
import PropertyManagement from "./pages/landlord/PropertyManagement";
import UnitManagement from "./pages/landlord/UnitManagement";
import ApplicationsReview from "./pages/landlord/ApplicationsReview";
import TenantRecords from "./pages/landlord/TenantRecords";
import RentalRecords from "./pages/landlord/RentalRecords";
import LandlordBilling from "./pages/landlord/LandlordBilling";
import PaymentMonitoring from "./pages/landlord/PaymentMonitoring";
import MaintenanceMonitoring from "./pages/landlord/MaintenanceMonitoring";
import PersonnelCoordination from "./pages/landlord/PersonnelCoordination";
import ReportsAnalytics from "./pages/landlord/ReportsAnalytics";
import LandlordSettings from "./pages/landlord/LandlordSettings";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import VerificationQueue from "./pages/admin/VerificationQueue";
import PropertyApproval from "./pages/admin/PropertyApproval";
import UserManagement from "./pages/admin/UserManagement";
import PaymentVerification from "./pages/admin/PaymentVerification";
import MaintenanceManagement from "./pages/admin/MaintenanceManagement";
import PersonnelBoard from "./pages/admin/PersonnelBoard";
import RewardsManagement from "./pages/admin/RewardsManagement";
import PlatformAnalytics from "./pages/admin/PlatformAnalytics";
import SupportDisputes from "./pages/admin/SupportDisputes";
import AnnouncementCenter from "./pages/admin/AnnouncementCenter";
import AuditLogs from "./pages/admin/AuditLogs";
import AdminSettings from "./pages/admin/AdminSettings";

// Personnel
import PersonnelDashboard from "./pages/personnel/PersonnelDashboard";
import AssignedTasks from "./pages/personnel/AssignedTasks";
import TaskDetails from "./pages/personnel/TaskDetails";
import UpdateProgress from "./pages/personnel/UpdateProgress";
import CompletedWork from "./pages/personnel/CompletedWork";
import PersonnelNotifications from "./pages/personnel/PersonnelNotifications";

import {
  LayoutDashboard, Home, FileText, CreditCard, Star, Wrench, Bell, Settings,
  Users, Building2, ClipboardList, BarChart3, Shield, CheckSquare, MapPin,
  Receipt, UserCheck, ScrollText, Megaphone, Search, ListChecks, History,
  BadgeDollarSign, Briefcase, PenTool, CircleDollarSign, Hammer
} from "lucide-react";

const queryClient = new QueryClient();

const tenantMenu: MenuItem[] = [
  { label: "Dashboard", path: "/tenant/dashboard", icon: LayoutDashboard },
  { label: "Recommended", path: "/tenant/recommended", icon: Star },
  { label: "Apply", path: "/tenant/apply", icon: FileText },
  { label: "Applications", path: "/tenant/applications", icon: ClipboardList },
  { label: "Active Lease", path: "/tenant/lease", icon: Home },
  { label: "Billing", path: "/tenant/billing", icon: Receipt },
  { label: "Pay", path: "/tenant/payment", icon: CreditCard },
  { label: "Payment History", path: "/tenant/payment-history", icon: History },
  { label: "Rewards", path: "/tenant/rewards", icon: Star },
  { label: "New Request", path: "/tenant/maintenance/new", icon: Wrench },
  { label: "Maintenance", path: "/tenant/maintenance", icon: Hammer },
  { label: "Notifications", path: "/tenant/notifications", icon: Bell },
  { label: "Settings", path: "/tenant/settings", icon: Settings },
];

const landlordMenu: MenuItem[] = [
  { label: "Dashboard", path: "/landlord/dashboard", icon: LayoutDashboard },
  { label: "Subscription", path: "/landlord/subscription", icon: BadgeDollarSign },
  { label: "Pay Subscription", path: "/landlord/subscription/pay", icon: CircleDollarSign },
  { label: "Register Property", path: "/landlord/property/new", icon: Building2 },
  { label: "Properties", path: "/landlord/properties", icon: MapPin },
  { label: "Units", path: "/landlord/units", icon: Home },
  { label: "Applications", path: "/landlord/applications", icon: ClipboardList },
  { label: "Tenants", path: "/landlord/tenants", icon: Users },
  { label: "Rental Records", path: "/landlord/rentals", icon: ScrollText },
  { label: "Billing", path: "/landlord/billing", icon: Receipt },
  { label: "Payments", path: "/landlord/payments", icon: CreditCard },
  { label: "Maintenance", path: "/landlord/maintenance", icon: Wrench },
  { label: "Personnel", path: "/landlord/personnel", icon: Briefcase },
  { label: "Reports", path: "/landlord/reports", icon: BarChart3 },
  { label: "Settings", path: "/landlord/settings", icon: Settings },
];

const adminMenu: MenuItem[] = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Verification", path: "/admin/verification", icon: UserCheck },
  { label: "Property Approval", path: "/admin/property-approval", icon: CheckSquare },
  { label: "Users", path: "/admin/users", icon: Users },
  { label: "Payment Verification", path: "/admin/payment-verification", icon: Shield },
  { label: "Maintenance", path: "/admin/maintenance", icon: Wrench },
  { label: "Personnel Board", path: "/admin/personnel-board", icon: ListChecks },
  { label: "Rewards", path: "/admin/rewards", icon: Star },
  { label: "Analytics", path: "/admin/analytics", icon: BarChart3 },
  { label: "Support", path: "/admin/support", icon: Search },
  { label: "Announcements", path: "/admin/announcements", icon: Megaphone },
  { label: "Audit Logs", path: "/admin/audit-logs", icon: ScrollText },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

const personnelMenu: MenuItem[] = [
  { label: "Dashboard", path: "/personnel/dashboard", icon: LayoutDashboard },
  { label: "My Tasks", path: "/personnel/tasks", icon: ClipboardList },
  { label: "Completed", path: "/personnel/history", icon: CheckSquare },
  { label: "Notifications", path: "/personnel/notifications", icon: Bell },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/search" element={<PropertySearch />} />
            <Route path="/map" element={<MapDiscovery />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/select-role" element={<RoleSelection />} />
          </Route>

          {/* Tenant */}
          <Route element={<DashboardLayout role="tenant" roleLabel="Tenant Portal" menuItems={tenantMenu} userName="Angela Santos" userEmail="angela@email.com" />}>
            <Route path="/tenant/dashboard" element={<TenantDashboard />} />
            <Route path="/tenant/recommended" element={<RecommendedProperties />} />
            <Route path="/tenant/apply" element={<RentalApplication />} />
            <Route path="/tenant/applications" element={<ApplicationTracking />} />
            <Route path="/tenant/lease" element={<ActiveLease />} />
            <Route path="/tenant/billing" element={<TenantBilling />} />
            <Route path="/tenant/payment" element={<PaymentSubmission />} />
            <Route path="/tenant/payment-history" element={<PaymentHistory />} />
            <Route path="/tenant/rewards" element={<RewardsDashboard />} />
            <Route path="/tenant/maintenance/new" element={<MaintenanceRequest />} />
            <Route path="/tenant/maintenance" element={<MaintenanceTracking />} />
            <Route path="/tenant/notifications" element={<TenantNotifications />} />
            <Route path="/tenant/settings" element={<TenantSettings />} />
          </Route>

          {/* Landlord */}
          <Route element={<DashboardLayout role="landlord" roleLabel="Landlord Portal" menuItems={landlordMenu} userName="Carlos Reyes" userEmail="carlos@domiknow.ph" />}>
            <Route path="/landlord/dashboard" element={<LandlordDashboard />} />
            <Route path="/landlord/subscription" element={<SubscriptionPlans />} />
            <Route path="/landlord/subscription/pay" element={<SubscriptionPayment />} />
            <Route path="/landlord/property/new" element={<RegisterProperty />} />
            <Route path="/landlord/properties" element={<PropertyManagement />} />
            <Route path="/landlord/units" element={<UnitManagement />} />
            <Route path="/landlord/applications" element={<ApplicationsReview />} />
            <Route path="/landlord/tenants" element={<TenantRecords />} />
            <Route path="/landlord/rentals" element={<RentalRecords />} />
            <Route path="/landlord/billing" element={<LandlordBilling />} />
            <Route path="/landlord/payments" element={<PaymentMonitoring />} />
            <Route path="/landlord/maintenance" element={<MaintenanceMonitoring />} />
            <Route path="/landlord/personnel" element={<PersonnelCoordination />} />
            <Route path="/landlord/reports" element={<ReportsAnalytics />} />
            <Route path="/landlord/settings" element={<LandlordSettings />} />
          </Route>

          {/* Admin */}
          <Route element={<DashboardLayout role="admin" roleLabel="Admin Console" menuItems={adminMenu} userName="Patricia Gomez" userEmail="patricia@domiknow.ph" />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/verification" element={<VerificationQueue />} />
            <Route path="/admin/property-approval" element={<PropertyApproval />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/payment-verification" element={<PaymentVerification />} />
            <Route path="/admin/maintenance" element={<MaintenanceManagement />} />
            <Route path="/admin/personnel-board" element={<PersonnelBoard />} />
            <Route path="/admin/rewards" element={<RewardsManagement />} />
            <Route path="/admin/analytics" element={<PlatformAnalytics />} />
            <Route path="/admin/support" element={<SupportDisputes />} />
            <Route path="/admin/announcements" element={<AnnouncementCenter />} />
            <Route path="/admin/audit-logs" element={<AuditLogs />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
          </Route>

          {/* Personnel */}
          <Route element={<DashboardLayout role="personnel" roleLabel="Maintenance Staff" menuItems={personnelMenu} userName="Marco Villanueva" userEmail="marco@domiknow.ph" />}>
            <Route path="/personnel/dashboard" element={<PersonnelDashboard />} />
            <Route path="/personnel/tasks" element={<AssignedTasks />} />
            <Route path="/personnel/tasks/:id" element={<TaskDetails />} />
            <Route path="/personnel/update/:id" element={<UpdateProgress />} />
            <Route path="/personnel/history" element={<CompletedWork />} />
            <Route path="/personnel/notifications" element={<PersonnelNotifications />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
