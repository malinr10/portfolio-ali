import { link } from 'framer-motion/client';
import { Code, Server, Database, Brain, Briefcase, GraduationCap } from 'lucide-react';

export const personalData = {
  name: "Muhammad Ali Nur Rohman",
  role: "Backend Developer & Software Engineer",
  contact: {
    email: "m.alinurrohman10@gmail.com",
    phone: "+62 85860711507",
    location: "Bandung, West Java"
  },
  summary: "High-achieving Software Engineering undergraduate (GPA 3.92) at UPI with a passion for Backend Systems and AI Integration. Experienced in building SaaS architectures and intelligent web applications.", // [cite: 3, 5]
};

export const skills = [
  { name: "Backend Dev", icon: Server, items: ["Laravel", "Python", "PHP", "Java"] }, // [cite: 4, 72]
  { name: "Frontend & AI", icon: Code, items: ["React", "Next.js", "Tailwind CSS", "Gemini AI"] }, // [cite: 27, 28, 30]
  { name: "Database", icon: Database, items: ["SQL", "Supabase", "PostgreSQL"] }, // [cite: 29, 72]
  { name: "Tools", icon: Briefcase, items: ["Git", "Postman", "VS Code"] }, // [cite: 73, 77]
];

export const experience = [
  {
    role: "Laboratory Assistant Coordinator",
    company: "Informatics Laboratory UPI Cibiru",
    period: "2025 - Present",
    desc: "Facilitating hands-on lab sessions for OS and Software Testing courses. Supervising test case design and defect tracking." // [cite: 14, 15, 19, 21]
  },
  {
    role: "Backend Developer",
    company: "BBGP Jabar (Ministry of Education)",
    period: "Apr 2022 - Aug 2022",
    desc: "Contributed to Open Education Resources website using Laravel. Collaborated on database design and API integration." // [cite: 8, 11, 12]
  }
];

export const projects = [
  {
    title: "Muezza Petshop",
    tech: "Next.js 15, Gemini AI, Supabase",
    desc: "Dynamic Company Profile with intelligent chatbot for automated customer service.",
    type: "Fullstack",
    link: "https://muezza-petshop.vercel.app"
  },    
  {
    title: "Fintory SaaS",
    tech: "Laravel, React, Multi-tenant",
    desc: "SaaS platform for inventory & finance management with real-time transaction recording.",
    type: "Backend",
    link: "https://github.com/ryan-gabriel/fintory"
  }, 
  {
    title: "Student Data REST API",
    tech: "Flask, Python",
    desc: "Lightweight RESTful API handling CRUD operations with standardized JSON responses.",
    type: "Backend",
    link: "https://github.com/malinr10/praktik_rest"
  },
  {
    title: "Agri History",
    tech: "React, Tailwind CSS",
    desc: "Educational web app showcasing the history of agriculture with interactive timelines and multimedia content.",
    type: "Frontend",
    link: "https://agri-history.vercel.app"
  },
  {
    title: "Inventory Management System",
    tech: "React, Tailwind CSS",
    desc: "Web-based system for tracking inventory levels, orders, and deliveries with user authentication.",
    type: "Frontend",
    link: "https://inventory-app-nu-seven.vercel.app/"
  },
  {
    title: "Sentira Digital Solutions",
    tech: "React, Tailwind CSS",
    desc: "Company profile website for a digital solutions provider, featuring service offerings and contact forms.",
    type: "Fullstack",
    link: "https://sentira.my.id/"
  }
];

export const education = [
  {
    school: "Universitas Pendidikan Indonesia (UPI)",
    degree: "S1 Software Engineering",
    period: "2023 - Present",
    desc: "Cumulative GPA: 3.92/4.00. Active in Himpunan Mahasiswa Rekayasa Perangkat Lunak."// [cite: 50, 51, 54, 58]
  },
  {
    school: "SMK Negeri 4 Bandung",
    degree: "Vocational High School in Software Engineering",
    period: "2020 - 2023",
    desc: "Final Score Average: 89/100."
  }
];

export const certifications = [
  {
    title: "Best Staff of Advocacy and Strategic Studies",
    issuer: "Himpunan Mahasiswa RPL UPI",
    year: "2024",
    desc: "Awarded for outstanding performance and dedication in student advocacy."
  },
  {
    title: "Supervisor of Community Service",
    issuer: "Trias Bakti Desa Derwati",
    year: "2025",
    desc: "Monitored execution of social impact projects in rural areas."
  },
  {
    title: "Supervisor of Student Orientation (Mabim)",
    issuer: "Himpunan Mahasiswa RPL UPI",
    year: "2025",
    desc: "Oversaw the onboarding process for new Software Engineering students."
  }
];
