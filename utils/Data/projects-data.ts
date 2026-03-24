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
    "/projects/docs-now/chain-assist.png",
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
