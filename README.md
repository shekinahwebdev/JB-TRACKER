# JB TRACKER

JB tracker is a web-base dashboard that helps job seekers organize, track,manage, reflect on their job applications across multiple platforms. It provides a centralized platform for users to input and manage their job applications, set reminders for follow-ups, and analyze their job search progress.

# Who is it for?

- Students
- Intern seekers
- Junior developers
- Career switchers
- Anyone applying to multiple jobs weekly

# Problem statement

Most job seekers apply to multiple jobs across various platforms, making it difficult to keep track of their applications, follow-ups, and progress. This can lead to missed opportunities, disorganization, and a lack of insight into their job search efforts.
People literally use:

- Notes app
- Google Sheets
- WhatsApp messages

# TOOL STACK

- React for frontend
- Tailwind CSS for styling
- ShadCN UI for components
- Chart.js for analytics
- Context API for state management
- Local storage for data persistence
- Custom Hooks for reusable logic
- Framer Motion for animations

# FEATURE TOOL STACK

# SOON TO BE ADDED

- Node.js with Express for backend
- MongoDB for database
- Mongoose for data modeling
- JWT for authentication

## MVP Features

# Application Management

- Add a job application
- Edit an application
- Delete an application

# Fields per application

- Company name
- Job title / role
- Application status:
  - Applied
  - Interview
  - Rejected
  - Offer (optional)
- Date applied
- Source (LinkedIn, Indeed, Company Website, Referral)

# Application List View

- View all applications in one dashboard
- See status at a glance
- Sort by date or status

# Status Updates

- Change status without deleting/re-adding
- Quick updates (dropdown or buttons)

# ORGANIZATION & CLARITY

# Filtering

- Filter by status (e.g. show only interviews)
- Filter by source
- Filter by role

# Search

- Search by company name
- Search by job title

# Timeline Awareness

- See when you applied
- Identify old applications
- Know when to follow up

# USER EXPERIENCE

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

# INSIGHT & REFLECTION (WHAT MAKES IT POWERFUL)

- Basic Analytics
- Total applications
- Interviews received
- Rejections
- Conversion rate

# Patterns

- Which roles get responses?
- Which platforms work best?

# DATA PERSISTENCE

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

# Recommended Sidebar Structure (MVP)

# Dashboard

Purpose: Overview

# Shows:

    - Total applications
    - Interviews
    - Rejections
    - Recent activity

This is the “home”.

# Applications

Purpose: Main working area

This is where users:

- View all applications
- Add new ones
- Edit/delete
- Filter & search

# Insights (or Analytics)

Purpose: Reflection

Shows:

- Stats
- Trends
- Platform performance

# Settings (optional for MVP)

Purpose: Preferences

- Data reset
- Theme
- Export data

# FOLDER STRUCTURE

`src/
components/ # Reusable UI components
pages/ # Main page components (Dashboard, Applications, Insights)
hooks/ # Custom hooks for logic
context/ # Context API for state management
utils/ # Utility functions (e.g. local storage)
api/ # API calls (for future backend integration)
data/ # Sample data for testing
lib/ # Libraries or helpers (e.g. Chart.js setup)
services/ # Services for analytics, reminders, etc.
auth/ # Authentication logic (for future features)`
