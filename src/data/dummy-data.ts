export const properties = [
  {
    id: "1",
    name: "Domi Residences – LSPU View",
    location: "Siniloan, Laguna",
    type: "Studio Apartment",
    rent: 6500,
    status: "Available",
    amenities: ["WiFi Ready", "Own CR", "Near Campus", "Laundry Nearby"],
    image: "🏢",
    rating: 4.8,
    trustScore: 92,
    landlord: "Juan Dela Cruz",
    units: 12,
    occupied: 10,
    description: "Modern studio apartments near LSPU campus with complete amenities for students and young professionals.",
  },
  {
    id: "2",
    name: "Lakeside Boarding Hub",
    location: "Siniloan, Laguna",
    type: "Boarding House",
    rent: 4200,
    status: "2 Units Left",
    amenities: ["Shared Kitchen", "Water Included", "Security Gate"],
    image: "🏠",
    rating: 4.5,
    trustScore: 87,
    landlord: "Maria Santos",
    units: 8,
    occupied: 6,
    description: "Affordable boarding house with lake views, shared facilities, and 24/7 security.",
  },
  {
    id: "3",
    name: "Maharlika Apartment Homes",
    location: "Famy-Siniloan Road",
    type: "1 Bedroom Unit",
    rent: 8900,
    status: "Available",
    amenities: ["Parking", "Balcony", "Internet Ready"],
    image: "🏗️",
    rating: 4.9,
    trustScore: 95,
    landlord: "Cedric Ramos Property Rentals",
    units: 20,
    occupied: 17,
    description: "Premium 1-bedroom apartments along the main road with parking and private balconies.",
  },
  {
    id: "4",
    name: "GreenNest Residences",
    location: "Poblacion, Siniloan",
    type: "Bedspace / Shared Room",
    rent: 3000,
    status: "Limited Slots",
    amenities: ["Furnished", "Utilities Shared", "Walking Distance to Market"],
    image: "🌿",
    rating: 4.3,
    trustScore: 82,
    landlord: "Juan Dela Cruz",
    units: 15,
    occupied: 13,
    description: "Budget-friendly shared rooms in the heart of Poblacion, walking distance to the market and public transport.",
  },
];

export const landlords = [
  { id: "l1", name: "Juan Dela Cruz", email: "juan@domiknow.ph", properties: 2, status: "Verified", plan: "Pro", joined: "2024-08-15" },
  { id: "l2", name: "Maria Santos", email: "maria@domiknow.ph", properties: 1, status: "Verified", plan: "Basic", joined: "2024-11-02" },
  { id: "l3", name: "Cedric Ramos Property Rentals", email: "cedric@domiknow.ph", properties: 1, status: "Pending", plan: "Enterprise", joined: "2025-01-20" },
];

export const tenants = [
  { id: "t1", name: "Angela Reyes", email: "angela@email.com", unit: "Domi Residences Unit 3A", status: "Active", leaseStart: "2025-01-15", leaseEnd: "2026-01-14", rewardPoints: 320 },
  { id: "t2", name: "Mark Villanueva", email: "mark@email.com", unit: "Lakeside Boarding Hub Rm 5", status: "Active", leaseStart: "2025-03-01", leaseEnd: "2026-02-28", rewardPoints: 180 },
  { id: "t3", name: "Carla Mendoza", email: "carla@email.com", unit: "Maharlika Unit 7B", status: "Pending", leaseStart: "", leaseEnd: "", rewardPoints: 0 },
];

export const admins = [
  { id: "a1", name: "Patricia Gomez", email: "patricia@domiknow.ph", role: "Super Admin" },
  { id: "a2", name: "Leo Fernandez", email: "leo@domiknow.ph", role: "Operations Admin" },
];

export const personnel = [
  { id: "p1", name: "Noel Aquino", specialty: "Electrician", status: "Available", tasksCompleted: 47, activeTasks: 2 },
  { id: "p2", name: "Benjie Cruz", specialty: "Plumber", status: "On Task", tasksCompleted: 35, activeTasks: 1 },
  { id: "p3", name: "Carlo Magsino", specialty: "General Technician", status: "Available", tasksCompleted: 62, activeTasks: 3 },
];

export const billingEntry = {
  rent: 6500,
  water: 350,
  electricity: 820,
  internet: 500,
  total: 8170,
  dueDate: "April 05, 2026",
  status: "Pending Verification",
};

export const maintenanceRequests = [
  { id: "m1", issue: "Leaking bathroom pipe", category: "Plumbing", priority: "High", status: "In Progress", assignedTo: "Benjie Cruz", property: "Domi Residences", unit: "3A", tenant: "Angela Reyes", date: "2026-03-10" },
  { id: "m2", issue: "Flickering hallway lights", category: "Electrical", priority: "Medium", status: "Assigned", assignedTo: "Noel Aquino", property: "Lakeside Boarding Hub", unit: "Common Area", tenant: "Mark Villanueva", date: "2026-03-12" },
  { id: "m3", issue: "Broken door lock", category: "General", priority: "High", status: "Submitted", assignedTo: "", property: "Maharlika Apartment Homes", unit: "7B", tenant: "Carla Mendoza", date: "2026-03-15" },
  { id: "m4", issue: "Slow internet router issue", category: "IT/Network", priority: "Low", status: "Resolved", assignedTo: "Carlo Magsino", property: "GreenNest Residences", unit: "2C", tenant: "Angela Reyes", date: "2026-03-05" },
];

export const rewards = [
  { id: "r1", type: "On-time Payment Bonus", points: 50, date: "2026-03-01", description: "March 2026 rent paid on time" },
  { id: "r2", type: "6-Month Good Tenant Streak", points: 120, date: "2026-02-15", description: "Consistent on-time payments for 6 months" },
  { id: "r3", type: "Referral Bonus", points: 100, date: "2026-01-20", description: "Referred Mark Villanueva" },
  { id: "r4", type: "On-time Payment Bonus", points: 50, date: "2026-02-01", description: "February 2026 rent paid on time" },
];

export const notifications = [
  { id: "n1", message: "Your payment is under verification", time: "2 hours ago", type: "payment", read: false },
  { id: "n2", message: "Maintenance task has been assigned", time: "5 hours ago", type: "maintenance", read: false },
  { id: "n3", message: "Property application approved", time: "1 day ago", type: "application", read: true },
  { id: "n4", message: "Bill due in 3 days", time: "1 day ago", type: "billing", read: false },
  { id: "n5", message: "You earned 50 reward points", time: "3 days ago", type: "reward", read: true },
  { id: "n6", message: "New announcement from DomiKnow", time: "5 days ago", type: "announcement", read: true },
];

export const paymentHistory = [
  { id: "ph1", date: "2026-03-01", amount: 8170, method: "GCash", status: "Verified", reference: "GC-2026030145" },
  { id: "ph2", date: "2026-02-01", amount: 8170, method: "Maya", status: "Verified", reference: "MY-2026020178" },
  { id: "ph3", date: "2026-01-01", amount: 8170, method: "Bank Transfer", status: "Verified", reference: "BT-2026010192" },
  { id: "ph4", date: "2025-12-01", amount: 7850, method: "GCash", status: "Verified", reference: "GC-2025120134" },
  { id: "ph5", date: "2025-11-01", amount: 7850, method: "Cash", status: "Verified", reference: "CS-2025110101" },
];

export const subscriptionPlans = [
  {
    name: "Basic",
    price: 499,
    period: "month",
    features: ["Up to 5 property listings", "Basic tenant management", "Email support", "Monthly reports"],
    popular: false,
  },
  {
    name: "Pro",
    price: 1299,
    period: "month",
    features: ["Up to 25 property listings", "Advanced tenant management", "Priority support", "Real-time analytics", "Subscription boost in search", "Maintenance coordination"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 2999,
    period: "month",
    features: ["Unlimited property listings", "Full operations suite", "Dedicated account manager", "Custom reports", "API access", "White-label options", "Personnel management"],
    popular: false,
  },
];

export const auditLogs = [
  { id: "al1", action: "Property Approved", user: "Admin Patricia Gomez", target: "Domi Residences", timestamp: "2026-03-18 09:15:00", type: "approval" },
  { id: "al2", action: "Payment Verified", user: "Admin Leo Fernandez", target: "Angela Reyes - March Bill", timestamp: "2026-03-17 14:30:00", type: "payment" },
  { id: "al3", action: "Landlord Verified", user: "Admin Patricia Gomez", target: "Juan Dela Cruz", timestamp: "2026-03-16 11:00:00", type: "verification" },
  { id: "al4", action: "Maintenance Assigned", user: "Admin Leo Fernandez", target: "Task #M2 → Noel Aquino", timestamp: "2026-03-15 16:45:00", type: "maintenance" },
  { id: "al5", action: "User Suspended", user: "Admin Patricia Gomez", target: "Test Account", timestamp: "2026-03-14 10:20:00", type: "user" },
];

export const announcements = [
  { id: "an1", title: "System Maintenance Notice", content: "DomiKnow will undergo scheduled maintenance on March 25, 2026 from 2:00 AM to 4:00 AM.", date: "2026-03-18", status: "Published", audience: "All Users" },
  { id: "an2", title: "New Reward Program Update", content: "We're excited to announce enhanced reward tiers for long-term tenants!", date: "2026-03-15", status: "Published", audience: "Tenants" },
  { id: "an3", title: "Landlord Verification Policy Update", content: "Starting April 2026, additional documentation will be required for property verification.", date: "2026-03-10", status: "Draft", audience: "Landlords" },
];

export const supportTickets = [
  { id: "st1", subject: "Payment not reflected after 3 days", reporter: "Angela Reyes", role: "Tenant", priority: "High", status: "Open", date: "2026-03-16" },
  { id: "st2", subject: "Cannot upload property photos", reporter: "Juan Dela Cruz", role: "Landlord", priority: "Medium", status: "In Progress", date: "2026-03-14" },
  { id: "st3", subject: "Dispute on utility charges", reporter: "Mark Villanueva", role: "Tenant", priority: "High", status: "Open", date: "2026-03-12" },
  { id: "st4", subject: "Request for lease termination", reporter: "Carla Mendoza", role: "Tenant", priority: "Low", status: "Resolved", date: "2026-03-08" },
];
