export const projectsData = [
  {
  id: 1,
  name: "Chain Assist",
  description:
    "Chain Assist is a full-stack blockchain submission platform that enables users to securely submit wallet information and transactions for verification. Built with React, Express, and MongoDB, it features a role-based admin dashboard, JWT authentication, and real-time email notifications via SendGrid. The platform ensures data security, scalable performance, and seamless user experience for crypto asset management.",
  tools: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "SendGrid",
    "JWT",
    "Render"
  ],
  role: "Full-stack Developer",
  code: "",
  demo: "https://chain-assist.com",
  date: "2026-03-20",
  images: [
    "/projects/docs-now/Chain-assist.png",
  ],
  videos: [""],
  highlights: [
    "Secure wallet submission form with multiple wallet types and networks",
    "Role-based admin dashboard for submission management",
    "JWT authentication with httpOnly cookies",
    "Real-time email notifications with SendGrid integration",
    "MongoDB data persistence with IP and user-agent tracking"
  ],
  challenges: [
    "Migrating from nodemailer to SendGrid for production email reliability",
    "Implementing secure JWT-based authentication with role separation",
    "Handling CORS configuration across localhost and production domains",
    "Database schema design for secure wallet data storage"
  ],
},
{
    id: 2,
    name: "View Price",
    description:
      "View Price is a modern, role-based e-commerce web application built with React, Node.js, MongoDB, and Paystack integration. The platform allows users to browse premium wristwatches, securely place orders, and manage their cart, while providing administrators with a real-time inventory management dashboard and user management features.",
    tools: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "Cloudinary",
      "Bcryptjs",
      "Paystack",
      "Nodemailer",
    ],
    role: "Full-stack Developer",
    code: "", // Add your GitHub repo when available
    demo: "https://www.viewpricestore.live",
    date: "2025-10-14",
    images: [
      "/projects/docs-now/view-price.png",
      
    ],
    videos: [],
    highlights: [
      "Email & password authentication with JWT tokens",
      "Admin signup with secret code verification",
      "Role-based access control (Admin vs User routes)",
      "Product management with Cloudinary image uploads",
      "Shopping cart with context-based state management",
      "Order management system with status tracking",
      "Admin dashboard for real-time inventory management",
      "Password hashing with bcryptjs for security",
      "Protected API routes with authAdmin middleware",
      "Toast notifications for user feedback",
      "Responsive design with Tailwind CSS",
    ],
    challenges: [
      "Implementing secure role-based authentication with JWT",
      "Admin secret code verification during signup",
      "Managing cart state across multiple pages with Context API",
      "Protecting admin routes with middleware validation",
      "Cloudinary image upload integration and optimization",
      "Order data persistence and status management",
      "Token expiration handling and refresh logic",
      "Preventing unauthorized admin access to dashboard",
    ],
  },

  {
    id: 3,
    name: "JWRLD Watches",
    description:
      "JWRLD Watches is a modern, role-based e-commerce web application built with Vanilla JavaScript, Firebase Authentication, Firestore, and Paystack integration. The platform allows users to browse premium wristwatches, securely place orders, and track deliveries, while providing administrators with a real-time inventory management dashboard.",
    tools: [
      "HTML",
      "JavaScript",
      "Tailwind CSS",
      "Firebase",
      "Paystack",
    ],
    role: "Full-stack Developer",
    code: "",
    demo: "https://jwrld-watches.web.app",
    date: "2025-10-14",
    images: [
      "/projects/docs-now/docs-now-landing.png",
    ],
    videos: [""],
    highlights: [
      " Email & password login",
      "Google sign-in",
      "Firestore-backed user profiles",
      "Protected routes with requireAuth() guard"
    ],
    challenges: [
      "permission-denied",
      "rules resetting after deploy",
      "admin-only updates blocking checkout",
      "stock update conflicts"
    ],
  },

];
