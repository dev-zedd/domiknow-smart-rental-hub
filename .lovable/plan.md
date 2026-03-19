

# Wire Complete Routing for DomiKnow (55+ Screens)

## What We're Doing
Replace `App.tsx` with the full routing tree connecting all 55+ screens, using nested routes with the existing `PublicLayout` and `DashboardLayout` components. Also replace the placeholder `Index.tsx` to redirect to the Landing page.

## Changes

### 1. Rewrite `App.tsx`
- Import all 55+ page components and both layout components
- Define menu item arrays for each role (Tenant, Landlord, Admin, Personnel) with icons and paths
- Set up nested route structure:
  - **Public routes** wrapped in `<PublicLayout>`: `/` (Landing), `/features`, `/search`, `/map`, `/property/:id`, `/login`, `/register`, `/select-role`
  - **Tenant routes** under `/tenant` wrapped in `<DashboardLayout>` with tenant menu/user: 13 child routes
  - **Landlord routes** under `/landlord` wrapped in `<DashboardLayout>` with landlord menu/user: 15 child routes
  - **Admin routes** under `/admin` wrapped in `<DashboardLayout>` with admin menu/user: 13 child routes
  - **Personnel routes** under `/personnel` wrapped in `<DashboardLayout>` with personnel menu/user: 6 child routes
  - Catch-all `*` → NotFound

### 2. Delete placeholder `Index.tsx`
The `/` route will now render `Landing` directly via the public layout group.

### Menu Items Per Role
- **Tenant (13):** Dashboard, Recommended, Apply, Applications, Lease, Billing, Payment, Payment History, Rewards, New Maintenance, Maintenance, Notifications, Settings
- **Landlord (15):** Dashboard, Subscription, Subscription Pay, Register Property, Properties, Units, Applications, Tenants, Rentals, Billing, Payments, Maintenance, Personnel, Reports, Settings
- **Admin (13):** Dashboard, Verification, Property Approval, Users, Payment Verification, Maintenance, Personnel Board, Rewards, Analytics, Support, Announcements, Audit Logs, Settings
- **Personnel (6):** Dashboard, Tasks, History, Notifications

### Icon Mapping
Each menu item gets an appropriate Lucide icon (LayoutDashboard, Home, FileText, CreditCard, Star, Wrench, Bell, Settings, Users, Building2, ClipboardList, BarChart3, Shield, etc.)

## Technical Notes
- `DashboardLayout` already accepts `role`, `roleLabel`, `menuItems`, `userName`, `userEmail` and renders `<Outlet />`
- Each role layout wrapper is a simple component that passes the correct props to `DashboardLayout`
- No new files needed beyond editing `App.tsx` and removing `Index.tsx`

