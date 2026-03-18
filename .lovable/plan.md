

# DomiKnow — Full UI Storyboard Implementation Plan

## Overview
Build a complete 55+ screen clickable prototype for DomiKnow, a cloud-based smart rental property operations platform. All data will be static/hardcoded with realistic Filipino dummy data. The platform will feature role-based navigation, consistent DomiKnow branding, and production-ready SaaS aesthetics.

---

## Design System Setup
- **Colors:** Deep Navy (#0F172A), Action Blue (#3B82F6), Success Teal (#10B981), Background (#F8FAFC), Borders (#E2E8F0)
- **Font:** Inter (Google Font)
- **Components:** KPI cards, status chips (Paid/Pending/Overdue/Under Review), data tables, progress steppers, billing cards, Kanban boards, profile cards, chart placeholders
- **Navigation:** Top nav for public pages, 260px sidebar for authenticated roles
- **Branding:** DomiKnow logo/wordmark, tagline "Smarter Rental Operations for Long-Term Living"

---

## Shared Infrastructure
- Role-based routing with simulated auth (role selector, no real login)
- Shared dummy data module with all sample landlords, tenants, admins, properties, billing, maintenance, rewards, and notifications
- Reusable layout components: PublicLayout (top nav + hero), AuthenticatedLayout (sidebar + header)
- Reusable widgets: KPICard, StatusChip, DataTable, BillingCard, TimelineStepper, PropertyCard, RecommendationBadge, TrustScoreBadge (circular progress ring)

---

## Module 1: Public / Guest Pages (8 screens)
1. **Landing Page** — Hero with tagline, feature highlights, CTA buttons, sample property cards, trust indicators
2. **Features Overview** — Grid of platform capabilities with icons (GIS, billing, maintenance, rewards, etc.)
3. **Property Search** — Left panel with filterable property cards + right panel with mock map and pins
4. **GIS Map Discovery** — Full-width mock map with property pins, filter sidebar, nearby landmarks
5. **Property Details** — Photo gallery, rent info, amenities, Trust Score badge, location mock map, landlord info, "Apply" CTA
6. **Login Page** — Email/password form with DomiKnow branding
7. **Register Page** — Sign-up form
8. **Role Selection** — Cards for Tenant, Landlord, Admin, Personnel with descriptions

---

## Module 2: Tenant Side (13 screens)
9. **Tenant Dashboard** — KPIs (Active Lease, Next Due Date, Reward Points, Maintenance Requests), quick actions, recent notifications
10. **Recommended Properties** — Property cards with recommendation scores (Preference Match, Location Relevance, Trust Score, Reliability Score)
11. **Rental Application Form** — Multi-step form with personal info, ID upload, employment details
12. **Application Tracking** — Status stepper (Submitted → Under Review → Approved/Denied)
13. **Active Lease Page** — Lease details, unit info, landlord contact, lease timeline
14. **Utilities & Billing** — Monthly breakdown (Rent ₱6,500 + Water ₱350 + Electricity ₱820 + Internet ₱500), due dates, status chips
15. **Payment Submission** — Upload proof, select method (GCash/Maya/Bank/Cash), confirmation
16. **Payment History** — Table with date, amount, method, status chips, downloadable invoice
17. **Rewards Dashboard** — Points balance, history table (+50 On-time, +120 Streak, +100 Referral), redemption options
18. **Maintenance Request** — Form with category, priority, description, photo upload
19. **Maintenance Tracking** — Status progression cards (Submitted → Assigned → In Progress → Resolved)
20. **Notifications** — List with icons and timestamps
21. **Tenant Settings** — Profile, verification status, preferences

---

## Module 3: Landlord Side (15 screens)
22. **Landlord Dashboard** — KPIs (Occupancy Rate, Monthly Revenue, Pending Applications, Active Maintenance), charts
23. **Subscription Plans** — Basic/Pro/Enterprise comparison cards with feature lists
24. **Subscription Payment** — Payment form with plan summary, confirmation
25. **Register Property Wizard** — Multi-step: Property Details → Unit Details → Amenities → Rules → Utility Setup → Photos → Map Pin → Submit
26. **Property Listing Management** — Table/cards of properties with status (Active/Pending/Rejected)
27. **Unit Management** — Units per property with availability, tenant assignment
28. **Applications Review** — Applicant cards with approve/deny actions
29. **Tenant Records** — Table of current/past tenants with lease info
30. **Rental Records** — Historical rental data table
31. **Utilities & Billing Control** — Generate bills, set rates, view billing status per unit
32. **Payment Monitoring** — Payment status table with verification progress
33. **Maintenance Monitoring** — Overview of all maintenance requests across properties
34. **Personnel Coordination** — Assigned staff, task overview
35. **Reports & Analytics** — Charts for collections, occupancy, overdue payments, trends
36. **Landlord Settings** — Profile, subscription status, notifications

---

## Module 4: Admin Side (13 screens)
37. **Admin Dashboard** — Platform-wide KPIs (Total Users, Active Listings, Pending Verifications, Monthly Collections), overview charts
38. **Verification Queue** — Landlord verification cards with documents, approve/deny
39. **Property Approval** — Property submissions with details, approve/reject workflow
40. **User Management** — All users table with role filters, status
41. **Payment Verification Center** — Payment submissions with proof images, verify/reject
42. **Maintenance Management** — All maintenance requests, assignment controls
43. **Personnel Assignment Board** — Kanban board: Unassigned → Assigned → In Progress → Completed
44. **Rewards Management** — Points configuration, reward redemption oversight
45. **Platform Analytics** — Comprehensive charts and summaries
46. **Support & Disputes** — Ticket list with priority and status
47. **Announcement Center** — Create/manage platform announcements
48. **Audit Logs** — Activity records table with filters
49. **Admin Settings** — System configuration, roles

---

## Module 5: Personnel / Maintenance Staff (6 screens)
50. **Personnel Dashboard** — KPIs (Assigned Tasks, In Progress, Completed Today), upcoming schedule
51. **Assigned Tasks** — Task cards with priority, property, category
52. **Task Details** — Full task info, photos, status controls
53. **Update Task Progress** — Status update form with notes, photo upload for proof of work
54. **Completed Work Log** — History table of completed jobs
55. **Personnel Notifications** — Task-related notification list

---

## Navigation & Routing
- Public pages: `/`, `/features`, `/search`, `/map`, `/property/:id`, `/login`, `/register`, `/select-role`
- Tenant: `/tenant/dashboard`, `/tenant/recommended`, `/tenant/apply`, `/tenant/applications`, `/tenant/lease`, `/tenant/billing`, `/tenant/payment`, `/tenant/payment-history`, `/tenant/rewards`, `/tenant/maintenance/new`, `/tenant/maintenance`, `/tenant/notifications`, `/tenant/settings`
- Landlord: `/landlord/dashboard`, `/landlord/subscription`, `/landlord/subscription/pay`, `/landlord/property/new`, `/landlord/properties`, `/landlord/units`, `/landlord/applications`, `/landlord/tenants`, `/landlord/rentals`, `/landlord/billing`, `/landlord/payments`, `/landlord/maintenance`, `/landlord/personnel`, `/landlord/reports`, `/landlord/settings`
- Admin: `/admin/dashboard`, `/admin/verification`, `/admin/property-approval`, `/admin/users`, `/admin/payment-verification`, `/admin/maintenance`, `/admin/personnel-board`, `/admin/rewards`, `/admin/analytics`, `/admin/support`, `/admin/announcements`, `/admin/audit-logs`, `/admin/settings`
- Personnel: `/personnel/dashboard`, `/personnel/tasks`, `/personnel/tasks/:id`, `/personnel/update/:id`, `/personnel/history`, `/personnel/notifications`

---

## Key Interactions
- Role switcher in the demo allows jumping between roles without real auth
- Clickable sidebar navigation per role
- Property cards link to detail pages
- Multi-step wizards with step indicators
- Status chip transitions shown across related screens
- Billing timeline stepper showing payment flow
- Maintenance Kanban with drag-visual columns (static)
- Reward ledger with point calculations

