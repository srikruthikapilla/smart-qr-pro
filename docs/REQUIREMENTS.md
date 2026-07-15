# Software Requirements Specification (SRS)

# Smart QR Pro

---

# Document Information

| Item | Details |
|------|---------|
| Project Name | Smart QR Pro |
| Version | 1.0 |
| Document Version | 1.0 |
| Status | Draft |
| Prepared By | Sri Kruthika |

---

# 1. Purpose

The purpose of this document is to define the functional and non-functional requirements for Smart QR Pro Version 1.

This document serves as the primary reference for designing, developing, testing, deploying, and maintaining the application.

---

# 2. Project Scope

Version 1 focuses on building a secure cloud-based attendance management platform for educational institutions.

The application enables faculty members to conduct attendance using dynamic QR codes while allowing administrators to monitor attendance in real time.

Future AI and Smart Campus modules are outside the scope of Version 1.

---

# 3. User Roles

Version 1 contains the following roles.

## Super Administrator

Permissions

- Manage entire system
- Manage faculty
- Manage students
- View reports
- View analytics
- Configure settings

---

## Faculty

Permissions

- Login
- Create attendance session
- Generate QR
- Monitor attendance
- Download reports
- View attendance history

---

## Student

Permissions

- Login
- Scan QR
- Submit attendance
- View attendance history
- View attendance percentage

---

# 4. Functional Requirements

## Authentication Module

The system shall:

- Allow secure login.
- Support Firebase Authentication.
- Protect authenticated routes.
- Allow logout.
- Remember active sessions.
- Reset passwords.

---

## Student Management

The system shall:

- View students.
- Search students.
- Filter students.
- Display student profile.
- Display attendance percentage.

---

## Faculty Management

The system shall:

- View faculty.
- Add faculty.
- Edit faculty.
- Delete faculty.
- Assign departments.
- Assign subjects.

---

## Attendance Session

Faculty shall be able to:

- Create attendance session.
- Select subject.
- Select department.
- Select section.
- Set attendance duration.
- Generate secure QR.

---

## QR Attendance

Students shall:

- Scan QR.
- Validate session.
- Submit attendance.

System shall:

- Prevent duplicate attendance.
- Reject expired sessions.
- Reject invalid sessions.
- Store attendance.
- Update dashboard.

---

## Dashboard

Dashboard shall display:

- Present students.
- Absent students.
- Attendance percentage.
- Recent sessions.
- Active session.
- Attendance statistics.

---

## Reports

System shall generate:

- Daily report.
- Weekly report.
- Monthly report.
- Student report.
- Faculty report.
- Department report.

Export formats:

- PDF
- Excel
- CSV

---

# 5. Non-Functional Requirements

The application shall be:

Secure

Responsive

Fast

Scalable

Reliable

Maintainable

Cloud-based

Accessible

Cross-browser compatible

Mobile responsive

---

# 6. Security Requirements

The application shall implement:

Firebase Authentication

Role Based Access Control

Protected Routes

Session Validation

Duplicate Attendance Prevention

Secure Firestore Rules

Audit Logs

Input Validation

---

# 7. Performance Requirements

Dashboard loading time should be less than three seconds.

Attendance submission should complete within five seconds.

Real-time updates should appear instantly.

Reports should generate within ten seconds.

---

# 8. Business Rules

Each attendance session must generate a unique QR.

QR must expire after the configured duration.

Attendance cannot be submitted twice.

Only authenticated users may access protected pages.

Students can only mark attendance for active sessions.

Faculty can only manage their assigned classes.

---

# 9. Constraints

Version 1 uses Firebase services.

Internet connection is required.

Attendance requires QR scanning.

The application is browser based.

---

# 10. Future Enhancements

AI Chatbot

Face Recognition

Parent Portal

Push Notifications

Mobile Application

AI Attendance Prediction

Placement Module

Library Module

Hostel Module

Smart Campus Platform

---

# 11. Acceptance Criteria

Version 1 will be considered complete when:

Authentication works.

Faculty can create attendance sessions.

Students can scan QR.

Attendance is stored successfully.

Dashboard updates in real time.

Reports generate successfully.

Application is deployed on Firebase Hosting.

---

# End of Document