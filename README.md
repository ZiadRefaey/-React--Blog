# React Blog

A responsive blog application built with React, TypeScript, Supabase, React Query, React Router, React Hook Form, Tailwind CSS, and Vite.

The project lets users authenticate, view blog posts, create and edit their own posts, upload featured images, delete posts, and comment on individual post pages.

## Features

- User authentication with sign in and sign up flows.
- Protected routes for pages that require an authenticated user.
- Blog feed that displays all posts in responsive cards.
- Empty-state messages when there are no posts or no comments.
- Post details page with post image, content, and scoped comments.
- Create and edit post form with title, content, and image upload.
- Delete post flow with a confirmation modal.
- Comment form with validation and automatic clearing after successful submission.
- Dark and light theme support.
- Responsive layouts for auth, homepage, post form, post details, and mobile navigation.

## Libraries Used

### React

React is used to build the UI with reusable components such as `Header`, `Navbar`, `Post`, `Comment`, `AddComment`, `AuthForms`, and form controls.

### TypeScript

TypeScript is used across the app to type component props, form inputs, hook arguments, and Supabase mutation/query payloads.

### Vite

Vite is used as the development and build tool. It provides the local dev server, fast refresh, and production bundling.

Main scripts:

```bash
npm run dev
npm run build
npm run preview
```

### React Router

React Router handles client-side navigation between pages:

- `/` for the homepage feed.
- `/auth` for authentication.
- `/posts/:id` for a single post page.
- `/post-form/:id` for creating or editing posts.

It is also used for route parameters and navigation after successful actions.

### Supabase

Supabase is used as the backend service for:

- Authentication.
- Reading and writing posts.
- Reading and writing comments.
- Creating user profiles.
- Uploading post images.

The Supabase client is configured in `src/supabaseClient.ts`.

### TanStack React Query

React Query manages server state for Supabase data. Custom hooks are used for fetching and mutating data:

- `usePosts`
- `usePost`
- `useComments`
- `useCreatePost`
- `useEditPost`
- `useDeletePost`
- `useCreateComment`
- `useCreateProfile`
- `useUploadImg`

React Query also invalidates cached queries after mutations so the UI refreshes after creating, editing, deleting, or commenting.

### React Hook Form

React Hook Form is used for form state and validation in:

- Sign in form.
- Sign up form.
- Post create/edit form.
- Comment form.

It validates required fields, email format, password rules, matching passwords, post content length, image requirements, and required comments.

### React Hot Toast

React Hot Toast displays user feedback after actions such as signing in, signing up, creating a post, editing a post, deleting a post, and creating a comment.

### Tailwind CSS

Tailwind CSS is used for styling the entire interface. The app uses utility classes for layout, spacing, colors, responsive breakpoints, cards, buttons, forms, and dark/light theme colors.

Theme colors are defined in `src/index.css`.

### ESLint

ESLint is included to help catch code quality issues during development.

## Project Structure

```text
src/
  components/       Reusable UI components
  hooks/            React Query hooks for Supabase operations
  Pages/            Main route pages
  providers/        Auth context provider
  utils/            Helper functions
  main.tsx          React app entry point
  App.tsx           Routes and app shell
  index.css         Tailwind and theme variables
```

## Responsive Design

The app includes responsive behavior across the main pages:

- The auth page hides the left-side visual panel on mobile.
- The auth form panel scrolls with a hidden scrollbar.
- The homepage cards receive mobile padding.
- The post form stacks its cards on smaller screens.
- The post details page adjusts text, image, and spacing for mobile.
- A simple mobile bottom navbar appears on smaller screens.

## Running The Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```
