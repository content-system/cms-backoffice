# cms-backoffice

> A production-ready back-office reference application built with the **core-ts** ecosystem.

`cms-backoffice` is an enterprise Content Management System (CMS) that demonstrates how the core-ts libraries work together to build a complete business application.

Unlike typical CRUD examples, this project showcases real enterprise patterns including:

- Authentication
- Role-Based Access Control (RBAC)
- Maker / Checker workflow
- Transaction management
- Dynamic search
- Localization
- Audit logging
- Permission-based navigation

It is intended as both:

- a production-ready CMS back office
- a reference implementation for the core-ts ecosystem

---

# Why cms-backoffice?

Most open-source CMS examples focus on CRUD operations.

Real enterprise applications require much more.

Typical enterprise requirements include:

- Multi-user authentication
- Permission management
- Approval workflow
- Transaction consistency
- Audit history
- Localization
- Configurable search
- Modular architecture

`cms-backoffice` demonstrates how these requirements can be implemented using small, reusable libraries instead of a monolithic framework.

---

# Features

## Authentication

- Login
- JWT authentication
- Remember token
- Automatic access token renewal
- Cookie authentication

Powered by:

- authentication-express
- express-jsonwebtoken

---

## Authorization

Role-Based Access Control (RBAC)

```
Users
    │
    ▼
User Roles
    │
    ▼
Roles
    │
    ▼
Role Modules
    │
    ▼
Modules
```

Powered by:

- security-express

---

## Content Management

- Draft articles
- Published articles
- Approval workflow
- Rich content
- Categories
- Tags

---

## Enterprise Workflow

Maker / Checker

```
Maker

↓

Draft

↓

Submit

↓

Approve

↓

Publish
```

---

## Transactions

Atomic business transactions using `sql-core`.

```
Begin Transaction

↓

Repository A

↓

Repository B

↓

Repository C

↓

Commit
```

---

## Localization

Supports multilingual content through `locale-service`.

Examples include:

- Languages
- Locales
- Countries
- Currencies

---

## Dynamic Search

Repositories receive injected query builders instead of embedding SQL logic.

```
Search Filter

↓

buildQuery()

↓

Repository

↓

SQL
```

This keeps repositories generic and reusable.

---

## Logging

- HTTP request logging
- Application logging
- Audit logs

---

# Technology Stack

## Runtime

- Node.js
- TypeScript
- Express

## Database

- PostgreSQL

## Core Libraries

- onecore
- postgres-kit
- sql-core
- authentication-express
- express-jsonwebtoken
- security-express
- express-web-kit
- logger-core
- middleware-logging
- locale-service
- validation-core

---

# Architecture

```
                    Browser
                        │
                        ▼
                   Express API
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
Authentication     Authorization     Controllers
                        │
                        ▼
                    Use Cases
                        │
                        ▼
                  Repository Layer
                        │
                        ▼
                   postgres-kit
                        │
                        ▼
                    PostgreSQL
```

Every layer has a single responsibility.

Business logic remains independent from Express.

---

# Authentication Flow

```
POST /login
        │
        ▼
authentication-express
        │
Authenticate User
        │
        ▼
Generate JWT
        │
        ▼
Cookie

──────────────────────────────

Next Request

        │
        ▼
express-jsonwebtoken
        │
Verify JWT
        │
        ▼
res.locals

──────────────────────────────

security-express
        │
Load Permissions
        │
        ▼
Business Controller
```

Authentication, JWT verification and authorization are handled by separate libraries.

---

# Project Structure

```
src
├── article
│   ├── model
│   ├── repository
│   ├── service
│   ├── controller
│   └── index
│
├── user
│   ├── ...
│
├── role
│   ├── ...
│
│
├── content
│   ├── ...
│
│
├── config
├── route
├── context
└── app.ts
```

The application follows a layered architecture where each layer focuses on a single responsibility.

---

# Quick Start

## Install

```bash
npm install
```

---

## Configure

Create an environment file.

```text
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USER=
DB_PASSWORD=

ACCESS_SECRET=
REMEMBER_SECRET=
```

---

## Run

```bash
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Database

Create a PostgreSQL database and execute the provided `schema.sql`.

The schema includes:

- Users
- Passwords
- Roles
- Modules
- Articles
- Draft Articles
- Notifications
- Audit Logs
- History
- Localization
- Master Data

---

# Design Philosophy

`cms-backoffice` is intentionally built from small, focused libraries.

```
authentication-express

↓

express-jsonwebtoken

↓

security-express

↓

Application

↓

postgres-kit

↓

PostgreSQL
```

Each library owns one responsibility.

This makes the application:

- Easy to understand
- Easy to test
- Easy to extend
- Easy to maintain

without depending on a large application framework.

# Part 2 — Modules & Enterprise Features

The application is organized around **business modules** instead of technical layers.

Each module owns its models, repositories, use cases, controllers, routes, and SQL definitions. This keeps related code together and allows each module to evolve independently.

```
Application

├── Authentication
├── User
├── Role
├── Article
├── Content
├── Notification
├── Common
└── Shared Infrastructure
```

This modular organization improves:

- Readability
- Maintainability
- Scalability
- Team collaboration

---

# Authentication Module

The Authentication module is responsible for user authentication.

It demonstrates how **authentication-express** integrates with application business logic.

```
Login Request
        │
        ▼
AuthenticationController
        │
        ▼
Authentication Service
        │
        ▼
User Repository
        │
        ▼
PostgreSQL
```

Responsibilities include:

- User login
- Password verification
- Passcode verification
- JWT generation
- Remember token generation

JWT verification is intentionally delegated to **express-jsonwebtoken**, keeping authentication and request verification independent.

---

# User Module

The User module manages system users.

Typical responsibilities include:

- User management
- User search
- User activation
- Password management
- Role assignment

The module demonstrates:

- Generic repositories
- Dynamic search
- Reusable CRUD use cases

---

# Role Module

The Role module implements Role-Based Access Control (RBAC).

```
Users
    │
    ▼
User Roles
    │
    ▼
Roles
    │
    ▼
Role Modules
    │
    ▼
Modules
```

Permissions are assigned through roles rather than individual users.

This makes authorization flexible and easy to maintain.

The module integrates directly with **security-express**.

## Role-Based Access Control (RBAC)

`cms-backoffice` implements Role-Based Access Control (RBAC) using permission bitmasks.

```
Users
    │
    ▼
User Roles
    │
    ▼
Roles
    │
    ▼
Role Modules
    │
    ▼
Modules
```

Instead of creating one permission record for every operation, permissions are stored as a single integer.

Example:

| Permission | Value |
| ---------- | ----: |
| View       |     1 |
| Create     |     2 |
| Edit       |     4 |
| Delete     |     8 |
| Approve    |    16 |
| Export     |    32 |

Permissions are combined using bitwise OR.

```
View
1

Create
2

Edit
4

────────────

1 | 2 | 4

=

7
```

A role with permission value **7** can:

- View
- Create
- Edit

Permission checks use bitwise AND.

```
Permission = 7

Edit = 4

7 & 4

=

4

✓ Allowed
```

```
Permission = 7

Delete = 8

7 & 8

=

0

✗ Denied
```

Using bitmasks keeps permission storage compact while allowing multiple operations to be represented by a single integer.

This design is particularly suitable for enterprise applications with many modules and operations because it reduces storage requirements and makes permission checks extremely efficient.

---

# Article Module

The Article module demonstrates one of the most important enterprise patterns:

**Maker / Checker**

```
Maker

↓

Create Draft

↓

Submit

↓

Checker

↓

Approve

↓

Publish
```

Unlike a simple CRUD example, publishing an article requires an approval workflow before it becomes available.

This demonstrates how business workflows can be implemented cleanly within the application layer.

---

# Transaction Management

The article approval process also demonstrates transaction management using **sql-core**.

```
Begin Transaction

↓

Save Published Article

↓

Update Draft Status

↓

Write History

↓

Commit
```

If any operation fails:

```
Rollback
```

The transaction is managed by the use case rather than individual repositories.

This keeps transaction boundaries aligned with business operations.

---

# Content Module

The Content module manages multilingual application content.

Typical examples include:

- Labels
- Static pages
- Messages
- Localized resources

The module works together with **locale-service** to support multiple languages and locales.

---

# Notification Module

The Notification module demonstrates how application notifications can be managed independently from business modules.

Typical use cases include:

- User notifications
- Approval notifications
- System announcements

Keeping notifications isolated allows them to evolve independently from other business domains.

---

# Dynamic Search

One of the architectural patterns used throughout the application is dynamic query generation.

Instead of embedding SQL filtering inside repositories, each repository receives a query builder.

```
Search Filter
        │
        ▼
buildQuery()
        │
        ▼
Repository
        │
        ▼
Generated SQL
```

For example:

```
User Module

UserFilter

↓

buildQuery()

↓

SqlUserRepository
```

and

```
Role Module

RoleFilter

↓

buildQuery()

↓

SqlRoleRepository
```

This design keeps repositories generic while allowing each business module to define its own search behavior.

Benefits include:

- Separation of concerns
- Reusable repositories
- Easier maintenance
- Extensible filtering

---

# Generic CRUD with onecore

Many business modules reuse generic CRUD functionality provided by **onecore**.

```
UseCase<T>

        ▲

UserUseCase
RoleUseCase
ContentUseCase
...
```

Business use cases inherit common CRUD operations while adding module-specific business logic where necessary.

This minimizes boilerplate without sacrificing flexibility.

---

# Repository Architecture

Repositories focus on persistence only.

```
Use Case
     │
     ▼
Repository
     │
     ▼
postgres-kit
     │
     ▼
PostgreSQL
```

Repositories are responsible for:

- Executing SQL
- Mapping database rows
- Pagination
- Sorting

Business rules remain inside use cases.

---

# Audit & History

Enterprise systems often require both operational auditing and business history.

The project demonstrates both concepts.

## Audit Log

Records application activities such as:

- Login
- Update
- Delete
- Approval

```
User

↓

Action

↓

Audit Log
```

---

## Entity History

Stores historical versions of business entities.

```
Entity

↓

Before

↓

After

↓

History
```

This allows changes to be tracked independently from operational logs.

---

# Enterprise Design Principles

The application demonstrates several enterprise architecture patterns.

- Modular organization
- Separation of concerns
- Dependency injection
- Repository pattern
- Generic use cases
- Role-Based Access Control
- Maker / Checker workflow
- Transaction management
- Dynamic query generation
- Localization
- Audit logging

Together, these patterns provide a solid foundation for building scalable enterprise applications with TypeScript.

# Part 3 — Core-ts Ecosystem, Examples & Best Practices

One of the primary goals of **cms-backoffice** is to demonstrate how independent **core-ts** libraries can be composed into a complete enterprise application.

Instead of introducing a large framework, the application combines specialized libraries, each responsible for a single concern.

---

# Core-ts Ecosystem

```
                           Browser
                               │
                               ▼
                           Express API
                               │
        ┌──────────────────────┼──────────────────────┐
        ▼                      ▼                      ▼
authentication-express  express-jsonwebtoken  middleware-logging
        │                      │
        ▼                      ▼
 security-express       express-web-kit
                │
                ▼
             onecore
                │
                ▼
             sql-core
                │
                ▼
           postgres-kit
                │
                ▼
            PostgreSQL
```

Each library is completely independent and can be used separately or together.

---

# Authentication Stack

Authentication is implemented using three independent libraries.

## Step 1 — User Login

```
POST /login

↓

authentication-express

↓

Authentication Service

↓

Generate JWT

↓

HTTP Cookie
```

`authentication-express` is responsible only for authentication.

It does not verify future requests.

---

## Step 2 — Verify JWT

Every protected request passes through **express-jsonwebtoken**.

```
Incoming Request

↓

Verify Access Token

↓

Expired?

↓

Verify Remember Token

↓

Generate New Access Token

↓

Continue Request
```

After successful verification, authenticated information is available through:

```
res.locals.account

res.locals.userId

res.locals.username
```

Business controllers never need to parse JWT tokens directly.

---

## Step 3 — Authorization

After authentication succeeds, **security-express** performs authorization.

```
Authenticated User

↓

Load Roles

↓

Load Modules

↓

Permission Check

↓

Allow / Deny
```

The authorization model is based on RBAC.

```
Users

↓

User Roles

↓

Roles

↓

Role Modules

↓

Modules
```

Authentication and authorization remain completely independent.

---

# SQL Architecture

Database access is implemented using **postgres-kit** and **sql-core**.

```
Use Case

↓

Repository

↓

sql-core

↓

postgres-kit

↓

PostgreSQL
```

Repositories focus only on persistence.

Business rules remain inside use cases.

---

# Dynamic Query Builder

Rather than embedding search logic inside repositories, search conditions are injected.

```
Search Filter

↓

buildQuery()

↓

Repository

↓

Generated SQL
```

Benefits include:

- Generic repositories
- Reusable search infrastructure
- Better separation of concerns
- Easier maintenance

Each business module controls its own search behavior without modifying repository implementations.

---

# Generic Business Logic

Many modules reuse generic functionality provided by **onecore**.

```
UseCase<T>

        ▲

UserUseCase

RoleUseCase

ContentUseCase

NotificationUseCase
```

Only business-specific operations need to be implemented.

Common CRUD functionality is inherited.

This significantly reduces boilerplate while keeping business logic explicit.

---

# Transaction Example

The article approval workflow demonstrates transaction management.

```
Approve Article

↓

Begin Transaction

↓

Insert Published Article

↓

Update Draft Status

↓

Insert History

↓

Commit
```

If any operation fails:

```
Rollback
```

Transaction boundaries are defined by business operations rather than repositories.

This approach keeps transactions aligned with business requirements.

---

# Modular Development

Each business module is developed independently.

```
Article Module

├── Models
├── Repository
├── Use Cases
├── Controller
├── Routes
└── SQL
```

```
User Module

├── Models
├── Repository
├── Use Cases
├── Controller
├── Routes
└── SQL
```

This organization provides:

- Clear ownership
- Better scalability
- Easier maintenance
- Simpler onboarding
- Better code navigation

Developers can work on a single business module without understanding the entire application.

---

# Enterprise Patterns

The project demonstrates several patterns commonly found in enterprise applications.

## Role-Based Access Control

```
User

↓

Role

↓

Permission

↓

Module
```

---

## Maker / Checker

```
Maker

↓

Draft

↓

Submit

↓

Checker

↓

Approve

↓

Publish
```

---

## Dependency Injection

```
Controller

↓

Use Case

↓

Repository

↓

Database
```

Dependencies are injected rather than created inside business classes.

---

## Audit Logging

Application activities are recorded independently from business logic.

```
Business Operation

↓

Audit Log
```

---

## Entity History

Business entities maintain historical records.

```
Entity

↓

Previous Version

↓

Current Version

↓

History
```

---

# Why Modular Architecture?

Large enterprise systems continue to grow over time.

Organizing source code by technical layers often results in large directories containing hundreds of files.

A modular architecture keeps everything related to a business capability together.

```
Authentication

User

Role

Article

Content

Notification
```

Each module becomes easier to:

- Understand
- Test
- Maintain
- Extend

without affecting unrelated parts of the system.

---

# Learning Objectives

This project demonstrates how to build enterprise applications with TypeScript using reusable infrastructure libraries.

Topics covered include:

- Modular application architecture
- Authentication
- JWT verification
- Role-Based Access Control
- Dynamic SQL generation
- Repository pattern
- Generic use cases
- Transaction management
- Maker / Checker workflow
- Localization
- Audit logging
- Dependency injection

Rather than presenting isolated examples, **cms-backoffice** shows how these patterns work together in a complete production-style application.

---

# Related Projects

The following core-ts libraries are used throughout this application.

| Library                | Purpose                                           |
| ---------------------- | ------------------------------------------------- |
| onecore                | Generic use cases, shared abstractions and models |
| sql-core               | Repository framework and transaction management   |
| postgres-kit           | PostgreSQL integration                            |
| authentication-express | Login and JWT generation                          |
| express-jsonwebtoken   | JWT verification and token renewal                |
| security-express       | Role-Based Access Control                         |
| express-web-kit        | Express infrastructure                            |
| logger-core            | Logging infrastructure                            |
| middleware-logging     | HTTP request logging                              |
| validation-core        | High-performance validation                       |
| locale-service         | Languages, locales and currencies                 |

---

# License

MIT License
