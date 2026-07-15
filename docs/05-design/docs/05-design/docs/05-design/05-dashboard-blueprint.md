# Smart QR Pro

# Dashboard Blueprint

---

# Document Information

| Property | Value |
|----------|-------|
| Project | Smart QR Pro |
| Version | 1.0 |
| Document | Dashboard Blueprint |
| Status | Draft |

---

# 1. Purpose

The Dashboard is the primary workspace of Smart QR Pro.

It provides faculty and administrators with an overview of attendance activity, quick actions, analytics, notifications, and live session monitoring.

The dashboard should prioritize clarity, speed, and ease of use.

---

# 2. Dashboard Layout

```text
 ------------------------------------------------------------

 Logo

 Smart QR Pro

 ------------------------------------------------------------

 Sidebar

 Dashboard

 Students

 Faculty

 Departments

 Subjects

 Attendance

 Reports

 Analytics

 Settings

 ------------------------------------------------------------

 Top Navigation

 Search

 Notifications

 User Profile

 ------------------------------------------------------------

 Statistics Cards

 ------------------------------------------------------------

 Charts

 ------------------------------------------------------------

 Active Attendance Session

 ------------------------------------------------------------

 Recent Sessions

 ------------------------------------------------------------

 Quick Actions

 ------------------------------------------------------------

 Recent Activity

 ------------------------------------------------------------

 Footer

 ------------------------------------------------------------
```

---

# 3. Sidebar

The sidebar is permanently visible on desktop.

It collapses on tablet.

It becomes a navigation drawer on mobile.

Menu Items

- Dashboard
- Students
- Faculty
- Departments
- Subjects
- Attendance
- Reports
- Analytics
- Settings

---

# 4. Top Navigation

Contains

- Global Search
- Notifications
- Institution Name
- Theme Switch
- User Profile

---

# 5. Statistics Cards

Display the following metrics.

- Total Students
- Total Faculty
- Present Today
- Absent Today
- Active Sessions
- Attendance Percentage

Each card displays:

- Icon
- Title
- Value
- Percentage Change (Future)
- Mini Trend (Future)

---

# 6. Attendance Analytics

Charts

Attendance Trend

Weekly Attendance

Monthly Attendance

Department Comparison

Section Comparison

Future AI Prediction

---

# 7. Active Attendance Session

Displays

Subject

Faculty

Department

Section

Remaining Time

Attendance Count

QR Status

Actions

- View Session
- Close Session

---

# 8. Recent Sessions

Table Columns

Date

Subject

Faculty

Section

Present

Absent

Status

Actions

- View
- Export

---

# 9. Quick Actions

Buttons

Create Session

Generate QR

View Reports

Add Student

Add Faculty

Export Data

---

# 10. Notifications

Examples

Attendance Session Started

Attendance Session Closed

Low Attendance Alert

System Update

Future AI Recommendation

---

# 11. Responsive Behaviour

Desktop

Three-column layout

Tablet

Two-column layout

Mobile

Single-column layout

---

# 12. Empty States

If no attendance sessions exist

Display

"No attendance sessions have been created."

Provide button

Create Session

---

# 13. Loading States

Display skeleton loaders for

Statistics

Charts

Tables

Recent Sessions

---

# 14. Error States

Unable to load dashboard

Provide

Retry Button

Refresh Button

---

# 15. Dashboard Principles

The dashboard should

Be clean

Be responsive

Load quickly

Display real-time information

Support dark mode

Provide quick access to common tasks

Minimize unnecessary clicks

---

# End of Document