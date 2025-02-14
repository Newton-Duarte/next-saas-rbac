# Next.js SaaS RBAC Project

## Overview

This project is a SaaS (Software as a Service) application built with Next.js, featuring Role-Based Access Control (RBAC) to manage user permissions and access levels. The application is designed to be scalable, secure, and easy to maintain.

## Features

- **User Authentication**: Secure login and registration system.
- **Role-Based Access Control**: Define roles and permissions to control access to different parts of the application.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **API Integration**: Connects with external services and APIs.
- **Scalable Architecture**: Built to handle growing user bases and data.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side development.
- **Fastify**: Web application framework for Node.js.
- **PostgreSQL**: NoSQL database for storing user data and application information.
- **JWT**: JSON Web Tokens for secure authentication.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/newton-duarte/next-saas-rbac.git
   cd next-saas-rbac
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```plaintext
   DATABASE_URL="postgresql://docker:docker@localhost:5432/next-saas-rbac?schema=public"
   JWT_SECRET="my-jwt-secret"
   GITHUB_OAUTH_CLIENT_ID=""
   GITHUB_OAUTH_CLIENT_SECRET=""
   GITHUB_OAUTH_CLIENT_REDIRECT_URI="http://localhost:3000/api/auth/callback"
   NEXT_PUBLIC_API_URL="http://localhost:3333"
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- **Admin Dashboard**: Manage users, roles, and permissions.
- **Organization Management**: Add, edit, and delete organizations.
- **Project Management**: Add, edit, and delete organization projects.
- **Invites Management**: Add, and revoke invites for users to join organizations.
- **Role Management**: Define roles and assign permissions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact [newton_@hotmail.com](mailto:newton_@hotmail.com).
