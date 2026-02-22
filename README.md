# JB TRACKER

JB tracker is a web-base dashboard that helps job seekers organize, track,manage, reflect on their job applications across multiple platforms. It provides a centralized platform for users to input and manage their job applications, set reminders for follow-ups, and analyze their job search progress.

## Who is it for?

- Students
- Intern seekers
- Junior developers
- Career switchers
- Anyone applying to multiple jobs weekly

## Problem statement

Most job seekers apply to multiple jobs across various platforms, making it difficult to keep track of their applications, follow-ups, and progress. This can lead to missed opportunities, disorganization, and a lack of insight into their job search efforts.
People literally use:

- Notes app
- Google Sheets
- WhatsApp messages

## TOOL STACK

- React for frontend
- Tailwind CSS for styling
- ShadCN UI for components
- Chart.js for analytics
- Context API for state management
- Local storage for data persistence
- Custom Hooks for reusable logic
- Framer Motion for animations

## FEATURE TOOL STACK

### SOON TO BE ADDED

- Node.js with Express for backend
- MongoDB for database
- Mongoose for data modeling
- JWT for authentication

## MVP Features

## Application Management

- Add a job application
- Edit an application
- Delete an application

## Fields per application

- Company name
- Job title / role
- Application status:
  - Applied
  - Interview
  - Rejected
  - Offer (optional)
- Date applied
- Source (LinkedIn, Indeed, Company Website, Referral)

## Application List View

- View all applications in one dashboard
- See status at a glance
- Sort by date or status

## Status Updates

- Change status without deleting/re-adding
- Quick updates (dropdown or buttons)

## ORGANIZATION & CLARITY

## Filtering

- Filter by status (e.g. show only interviews)
- Filter by source
- Filter by role

## Search

- Search by company name
- Search by job title

## Timeline Awareness

- See when you applied
- Identify old applications
- Know when to follow up

## USER EXPERIENCE

- Clean Dashboard
- Sidebar navigation
- Main content area
- Simple visual hierarchy

- Visual Status Indicators
- Color-coded statuses
- Icons for sources
- Clear typography
- Theme support (light/dark mode)

- Loading & Empty States
- “No applications yet” screen
- Friendly onboarding message

## INSIGHT & REFLECTION (WHAT MAKES IT POWERFUL)

- Basic Analytics
- Total applications
- Interviews received
- Rejections
- Conversion rate

## Patterns

- Which roles get responses?
- Which platforms work best?

## DATA PERSISTENCE

Local storage

## Future features

Reminders
• Follow-up reminders
• Interview reminders

Notes per application
• Interview prep
• Feedback
• Contacts

AI Integration
• Resume-job match score
• Tailored resume suggestions
• Application strategy insights

## Recommended Sidebar Structure (MVP)

## Dashboard

Purpose: Overview

### Shows:

    - Total applications
    - Interviews
    - Rejections
    - Recent activity

This is the “home”.

### Applications

Purpose: Main working area

This is where users:

- View all applications
- Add new ones
- Edit/delete
- Filter & search

## Insights (or Analytics)

Purpose: Reflection

Shows:

- Stats
- Trends
- Platform performance

## Settings (optional for MVP)

Purpose: Preferences

- Data reset
- Theme
- Export data

### UPGRADED FEATURES(MVP+)

1. Dashboard Overview
   • Summary cards showing:
   • Total Applications
   • Interviews
   • Offers
   • Rejections
   • Activity feed with recently added applications.
   • Quick insights:
   • Applications per week
   • Interview conversion rate
   • Quick action button to add a new application.

2. Application Management
   • Add / Edit / Delete Applications
   • Application fields include:
   • Company Name
   • Job Title / Role
   • Status: Applied, Interview, Offer, Rejected
   • Date Applied
   • Source: LinkedIn, Indeed, Referral, Company Website
   • Notes (optional)
   • Update status quickly without deleting applications.

3. Table View
   • View all applications in a clean, sortable table.
   • Columns include:
   • Company Name
   • Job Role
   • Status (color-coded badges)
   • Date Applied
   • Application Source
   • Actions: Edit / Delete
   • Search & Filter:
   • Search by Company or Role
   • Filter by Status, Source, or Date Applied
   • Sort by Newest, Oldest, or Status

4. Kanban Board
   • Track job applications visually across columns:
   • Applied
   • Interview
   • Offer
   • Rejected
   • Drag-and-drop job cards between columns to update status.
   • Job card includes:
   • Company Name
   • Job Role
   • Date Applied
   • Source icon (LinkedIn, Indeed, etc.)

5. Analytics
   • Visual insights into your job search performance:
   • Total applications
   • Interview, offer, and rejection rates
   • Applications by role type or source
   • Charts include:
   • Bar charts
   • Pie charts
   • Timeline charts

6. UI / UX Enhancements
   • Clean sidebar navigation & top nav with search, notifications, and profile avatar.
   • Responsive design for desktop-first experience.
   • Color-coded statuses for at-a-glance clarity.
   • Friendly empty states when no applications exist:
   • “No job applications yet. Start tracking your job search.”
   • Quick Add Application button

7. Reusable Components
   • Sidebar & Top Navigation
   • Buttons, Badges, Dropdowns
   • Table Rows & Job Cards
   • Modal dialogs & Forms

8. State Management & Data
   • Centralized state using React Context / Hooks
   • Local storage support for MVP
   • Easy backend integration for persistent data

## FOLDER STRUCTURE

```
jobtrackr/
│
├─ public/                           Public assets
│   ├─ images/                       Logos, icons, illustrations
│   └─ favicon.ico
│
├─ src/
│   ├─ assets/                       Static assets used in React
│   │   ├─ icons/
│   │   └─ illustrations/
│   │
│   ├─ components/                   Reusable UI components
│   │   ├─ Sidebar/
│   │   │   ├─ Sidebar.tsx
│   │   │   └─ SidebarItem.tsx
│   │   ├─ TopNav/
│   │   │   ├─ TopNav.tsx
│   │   │   └─ Notification.tsx
│   │   ├─ Table/
│   │   │   ├─ ApplicationTable.tsx
│   │   │   └─ TableRow.tsx
│   │   ├─ Kanban/
│   │   │   ├─ KanbanBoard.tsx
│   │   │   └─ KanbanCard.tsx
│   │   ├─ Cards/
│   │   │   ├─ SummaryCard.tsx
│   │   │   └─ ActivityCard.tsx
│   │   ├─ Modals/
│   │   │   └─ AddApplicationModal.tsx
│   │   ├─ Forms/
│   │   │   ├─ InputField.tsx
│   │   │   └─ Dropdown.tsx
│   │   ├─ Buttons/
│   │   │   └─ Button.tsx
│   │   └─ Badges/
│   │       └─ StatusBadge.tsx
│   │
│   ├─ pages/                        Main Pages
│   │   ├─ Dashboard/
│   │   │   └─ DashboardPage.tsx
│   │   ├─ Applications/
│   │   │   └─ ApplicationsPage.tsx
│   │   ├─ Analytics/
│   │   │   └─ AnalyticsPage.tsx
│   │   └─ Settings/
│   │       └─ SettingsPage.tsx
│   │
│   ├─ contexts/                     Context & global state
│   │   └─ ApplicationContext.tsx
│   │
│   ├─ hooks/                        Custom hooks
│   │   └─ useApplications.ts
│   │
│   ├─ services/                     API calls
│   │   └─ applicationsAPI.ts
│   │
│   ├─ types/                        TypeScript interfaces
│   │   └─ application.d.ts
│   │
│   ├─ utils/                        Utility functions
│   │   └─ dateFormatter.ts
│   │
│   ├─ App.tsx
│   ├─ index.tsx
│   └─ routes.tsx
│
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ tsconfig.json
```
