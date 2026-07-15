# Smart QR Pro

# Folder Architecture

---

# Document Information

| Property | Value |
|----------|-------|
| Project | Smart QR Pro |
| Version | 1.0 |
| Document | Folder Architecture |

---

# 1. Purpose

This document defines the folder structure for Smart QR Pro.

The primary objectives are:

- Scalability
- Maintainability
- Reusability
- Separation of Concerns
- Easy Navigation
- Future Expansion

Every developer contributing to the project should follow this structure.

---

# 2. Root Structure

```text
smart-qr-pro/

.github/

assets/

docs/

firebase/

src/

public/

README.md

LICENSE

package.json

vite.config.ts

tsconfig.json
```

---

# 3. Source Folder

```text
src/

app/

components/

features/

hooks/

layouts/

lib/

pages/

routes/

services/

store/

styles/

types/

utils/

main.tsx

App.tsx
```

---

# 4. Folder Responsibilities

## app

Contains application-level configuration.

Examples:

Application Providers

Global Context

Theme Provider

---

## components

Reusable UI components.

Examples:

Buttons

Cards

Inputs

Dialogs

Tables

Navbar

Sidebar

Charts

Badges

Modals

---

## features

Business modules.

Each feature owns its UI, hooks, services and utilities.

Example:

```text
features/

attendance/

students/

faculty/

reports/

dashboard/

authentication/
```

---

## hooks

Reusable React hooks.

Examples

useAuth()

useAttendance()

useTheme()

useStudents()

---

## layouts

Application layouts.

Examples

Dashboard Layout

Authentication Layout

Landing Layout

---

## lib

Third-party configuration.

Examples

Firebase

Axios

Utilities

---

## pages

Application pages.

Examples

Dashboard

Login

Students

Faculty

Attendance

Reports

Settings

---

## routes

Application routing.

Contains:

Protected Routes

Route Configuration

Role Guards

---

## services

Application services.

Examples

Attendance Service

Student Service

Faculty Service

Report Service

Authentication Service

---

## store

Global state management.

Examples

Theme

Authentication

Notifications

User

---

## styles

Global styles.

Examples

Tailwind

Typography

Variables

Animations

---

## types

Global TypeScript types.

Examples

Student

Faculty

Attendance

Session

Department

---

## utils

Reusable helper functions.

Examples

Date Formatting

QR Utilities

Validators

Constants

---

# 5. Feature Structure

Each feature follows the same structure.

Example

```text
features/

attendance/

components/

hooks/

pages/

services/

types/

utils/
```

This keeps business logic isolated.

---

# 6. Firebase Structure

```text
firebase/

config/

firestore.rules

firestore.indexes.json

README.md
```

---

# 7. Assets Structure

```text
assets/

logos/

branding/

icons/

illustrations/

screenshots/
```

---

# 8. Documentation Structure

```text
docs/

01-product/

02-requirements/

03-architecture/

04-database/

05-design/

06-api/

07-deployment/

08-testing/

09-roadmap/

diagrams/
```

---

# 9. Naming Convention

Folders

lowercase

Examples

attendance

dashboard

students

Files

PascalCase for React components.

camelCase for utilities.

Examples

Dashboard.tsx

AttendanceTable.tsx

StudentCard.tsx

dateFormatter.ts

attendanceValidator.ts

---

# 10. Architecture Rules

Business logic must never exist inside components.

Pages should remain lightweight.

Reusable components belong in components.

Business-specific UI belongs inside features.

Firebase configuration belongs in lib.

Global state belongs in store.

Utilities must remain framework-independent.

---

# 11. Future Expansion

The folder architecture supports future additions such as:

AI

Notifications

Parent Portal

Mobile App

Campus ERP

without restructuring the project.

---

# End of Document