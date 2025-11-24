# RFC 0002: Supabase Schema Design

- **Status**: Implemented
- **Author**: B-Team
- **Date**: 2024-11-24

## Summary

This RFC outlines the database schema design for MyBizAI, which will be implemented using Supabase's PostgreSQL database. The schema is designed to support the core features of the platform, including task management, project tracking, and team collaboration.

## Motivation

A well-designed database schema is crucial for the performance, scalability, and maintainability of the MyBizAI platform. This RFC provides a clear and comprehensive plan for the database schema, which will serve as a blueprint for the development of the backend and data layer.

## Detailed Design

The database schema will consist of the following tables:

- `profiles`: Stores user profile information and is linked to Supabase's `auth.users` table.
- `projects`: Stores information about projects, including a `team_id` to associate projects with teams.
- `tasks`: Stores information about tasks.
- `teams`: Stores information about teams.
- `team_members`: A join table that links users and teams.
- `roles`: Stores a list of user roles (e.g., "admin", "member").
- `permissions`: Stores a list of permissions (e.g., "create_project", "delete_task").
- `role_permissions`: A join table that links roles and permissions.
- `user_roles`: A join table that links users and roles.

### Enum Types

The schema also defines the following `enum` types to ensure data consistency:

- `task_status`: ('todo', 'in_progress', 'done')
- `task_priority`: ('low', 'medium', 'high')
- `team_role`: ('admin', 'member')

### Authentication

The schema leverages Supabase's built-in authentication system. A `profiles` table is used to store application-specific user data, and a trigger is set up to automatically create a new profile when a user signs up.

### Row-Level Security

The schema includes row-level security policies to ensure that users can only access the data that they are authorized to see.

## How to Execute

To execute this schema in your Supabase project, follow these steps:

1.  **Navigate to the SQL Editor:** In your Supabase project dashboard, go to the "SQL Editor" section.
2.  **Create a New Query:** Click on "New query" to open a new editor window.
3.  **Copy and Paste the Schema:** Copy the entire contents of the `schema.sql` file and paste it into the SQL editor.
4.  **Run the Query:** Click the "Run" button to execute the SQL query. This will create all the tables, relationships, and security policies defined in the schema.
