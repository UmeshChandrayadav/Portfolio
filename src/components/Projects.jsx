import { useState } from "react";
import ProjectSlider from "./ProjectSlider";

import p2 from "../assets/project1/Screenshot (248).png";
import p3 from "../assets/project1/Screenshot (249).png";
import p4 from "../assets/project1/Screenshot (250).png";
import p5 from "../assets/project1/Screenshot (251).png";
import p6 from "../assets/project1/Screenshot (252).png";
import p7 from "../assets/project1/Screenshot (253).png";

import h1 from "../assets/project2/Screenshot (254).png";
import h2 from "../assets/project2/Screenshot (255).png";
import h3 from "../assets/project2/Screenshot (256).png";
import h4 from "../assets/project2/Screenshot (257).png";


import c1 from "../assets/project4/Screenshot (262).png";
import c2 from "../assets/project4/Screenshot (263).png";
import c3 from "../assets/project4/Screenshot (264).png";
import c4 from "../assets/project4/Screenshot (266).png";
import c5 from "../assets/project4/Screenshot (267).png";
import c6 from "../assets/project4/Screenshot (270).png";
import c7 from "../assets/project4/Screenshot (271).png";
import c8 from "../assets/project4/Screenshot (273).png";
import c9 from "../assets/project4/Screenshot (275).png";
import c10 from "../assets/project4/Screenshot (276).png";


import i1 from "../assets/project3/WhatsApp Image 2026-05-10 at 10.22.28 AM.jpeg";
import i2 from "../assets/project3/WhatsApp Image 2026-05-10 at 10.22.29 AM (1).jpeg"
import i3 from "../assets/project3/WhatsApp Image 2026-05-10 at 10.22.29 AM (2).jpeg"
import i4 from "../assets/project3/WhatsApp Image 2026-05-10 at 10.22.29 AM (3).jpeg"
import i5 from "../assets/project3/WhatsApp Image 2026-05-10 at 10.22.29 AM.jpeg"
import i6 from "../assets/project3/WhatsApp Image 2026-05-10 at 10.22.30 AM (1).jpeg"
import i7 from "../assets/project3/WhatsApp Image 2026-05-10 at 10.22.30 AM (2).jpeg"
import i8 from "../assets/project3/WhatsApp Image 2026-05-10 at 10.22.30 AM (3).jpeg"
import i9 from "../assets/project3/WhatsApp Image 2026-05-10 at 10.22.30 AM.jpeg"
import i10 from "../assets/project3/WhatsApp Image 2026-05-10 at 10.22.31 AM.jpeg"


function Projects() {
  const projects = [
    {
      title: "Grocery App",
      purpose: (
        <div className="space-y-3">
          <p className="font-semibold text-cyan-400">Main Purpose</p>
          <ul className="text-sm space-y-1.5 text-gray-300">
            <li className="flex items-start gap-2">• Browse and view grocery items easily</li>
            <li className="flex items-start gap-2">• Add products to a shopping cart</li>
            <li className="flex items-start gap-2">• Manage quantities and selections efficiently</li>
            <li className="flex items-start gap-2">• Simulate real online grocery shopping</li>
            <li className="flex items-start gap-2">• Improve convenience over traditional shopping</li>
          </ul>
        </div>
      ),
      challenge: (
        <div className="space-y-3">
          <p className="font-semibold text-rose-400">Key Challenges</p>
          <ul className="text-sm space-y-1.5 text-gray-300">
            <li>• State management across components</li>
            <li>• Efficient data flow & prop drilling</li>
            <li>• Real-time cart updates</li>
            <li>• Component reusability</li>
            <li>• Responsive design consistency</li>
            <li>• Bug fixing (duplicates, quantity sync)</li>
          </ul>
        </div>
      ),
      interesting: (
        <div className="space-y-3">
          <p className="font-semibold text-amber-400">What Was Interesting</p>
          <ul className="text-sm space-y-1.5 text-gray-300">
            <li>• Real-time interactive UI with React</li>
            <li>• Building smooth cart logic</li>
            <li>• Component reusability patterns</li>
            <li>• Creating e-commerce-like UX</li>
            <li>• Deep understanding of hooks & state</li>
          </ul>
        </div>
      ),
      description: (
        <div className="space-y-2 text-sm text-gray-300">
          <p><strong>Product Listing</strong> with images, name & price</p>
          <p><strong>Add to Cart</strong> + Quantity Management</p>
          <p><strong>Cart Page</strong> with live total calculation</p>
          <p><strong>Fully Responsive</strong> design</p>
          <p><strong>Modern React</strong> architecture with hooks</p>
        </div>
      ),
      github: "https://github.com/UmeshChandrayadav/Grocery-application",
      tags: ["HTML", "TailwindCSS", "JavaScript(ES6)", "React.js", "React hooks", "Axios", "Json server"],
      images: [p2, p3, p4, p5, p6, p7],
    },
{
  title: "Hospital Management",

  purpose: (
    <div className="space-y-3">
      <p className="font-semibold text-cyan-400">Main Purpose</p>
      <ul className="text-sm space-y-1.5 text-gray-300">
        <li className="flex items-start gap-2">• Digitize hospital operations and records</li>
        <li className="flex items-start gap-2">• Manage patient registration and details</li>
        <li className="flex items-start gap-2">• Simplify doctor appointment scheduling</li>
        <li className="flex items-start gap-2">• Maintain secure medical history records</li>
        <li className="flex items-start gap-2">• Improve hospital workflow efficiency</li>
      </ul>
    </div>
  ),

  challenge: (
    <div className="space-y-3">
      <p className="font-semibold text-rose-400">Key Challenges</p>
      <ul className="text-sm space-y-1.5 text-gray-300">
        <li>• Handling patient & doctor data structure</li>
        <li>• Designing secure login/authentication flow</li>
        <li>• Managing appointment scheduling conflicts</li>
        <li>• Database relationship handling (patients, doctors, records)</li>
        <li>• Ensuring data consistency across modules</li>
        <li>• UI responsiveness for multiple dashboards</li>
      </ul>
    </div>
  ),

  interesting: (
    <div className="space-y-3">
      <p className="font-semibold text-amber-400">What Was Interesting</p>
      <ul className="text-sm space-y-1.5 text-gray-300">
        <li>• Designing multi-role system (Admin, Doctor, Patient)</li>
        <li>• Working with structured medical data flow</li>
        <li>• Creating appointment management logic</li>
        <li>• Understanding real-world hospital workflows</li>
        <li>• Building dashboard-style UI interfaces</li>
      </ul>
    </div>
  ),

  description: (
    <div className="space-y-2 text-sm text-gray-300">
      <p><strong>Patient Management</strong> with registration & records</p>
      <p><strong>Doctor Dashboard</strong> for schedules & appointments</p>
      <p><strong>Appointment System</strong> for booking & tracking</p>
      <p><strong>Secure Database</strong> for medical history storage</p>
      <p><strong>Role-based System</strong> (Doctor / Patient / Patient Records / Prescription)</p>
    </div>
  ),

  github: "https://github.com/UmeshChandrayadav/Hospital-Management",

  tags: [
    "Java",
    "Hibernate ORM Mapping",
    "SpringBoot",
    "Spring Framework",
    "Postman",
    "Postgre SQL"
  ],

  images: [h1, h2, h3, h4],
},
{
  title: "IPO Application",

  purpose: (
    <div className="space-y-3">
      <p className="font-semibold text-cyan-400">Main Purpose</p>
      <ul className="text-sm space-y-1.5 text-gray-300">
        <li className="flex items-start gap-2">• Simplify IPO application and tracking process for users</li>
        <li className="flex items-start gap-2">• Provide real-time IPO listing data in a structured UI</li>
        <li className="flex items-start gap-2">• Enable users to view issue details, price bands, and status</li>
        <li className="flex items-start gap-2">• Improve transparency in IPO investment information</li>
        <li className="flex items-start gap-2">• Build a fintech-style dashboard for IPO monitoring</li>
      </ul>
    </div>
  ),

  challenge: (
    <div className="space-y-3">
      <p className="font-semibold text-rose-400">Key Challenges</p>
      <ul className="text-sm space-y-1.5 text-gray-300">
        <li>• Handling dynamic IPO data from backend/API</li>
        <li>• Structuring complex financial data (price band, issue size, dates)</li>
        <li>• Designing clean fintech dashboard UI</li>
        <li>• Managing state for multiple IPO listings</li>
        <li>• Ensuring responsive design for tables/cards</li>
        <li>• Integrating downloadable documents (RHP/DRHP links)</li>
      </ul>
    </div>
  ),

  interesting: (
    <div className="space-y-3">
      <p className="font-semibold text-amber-400">What Was Interesting</p>
      <ul className="text-sm space-y-1.5 text-gray-300">
        <li>• Working with real-world fintech UI design patterns</li>
        <li>• Displaying structured IPO financial data in dashboards</li>
        <li>• Creating reusable IPO card components</li>
        <li>• Understanding stock market / IPO lifecycle basics</li>
        <li>• Building professional UI similar to investment platforms</li>
      </ul>
    </div>
  ),

  description: (
    <div className="space-y-2 text-sm text-gray-300">
      <p><strong>IPO Listing Dashboard</strong> with company details</p>
      <p><strong>Price Band & Issue Size</strong> display system</p>
      <p><strong>Open / Close Date tracking</strong></p>
      <p><strong>Downloadable RHP/DRHP documents</strong></p>
      <p><strong>Responsive fintech UI (React + Tailwind)</strong></p>
    </div>
  ),

  github: "https://github.com/UmeshChandrayadav/IPO-application",

  tags: [
    "HTML",
    "Boostrap",
    "JavaScript",
    "Java",
    "MySql"
  ],

  images: [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10],
},
{
  title: "Online Crime Reporting System",

  purpose: (
    <div className="space-y-3">
      <p className="font-semibold text-cyan-400">Main Purpose</p>
      <ul className="text-sm space-y-1.5 text-gray-300">
        <li className="flex items-start gap-2">• Provide a digital platform for citizens to report crimes online</li>
        <li className="flex items-start gap-2">• Replace manual complaint filing with web-based system</li>
        <li className="flex items-start gap-2">• Enable users to track complaint status easily</li>
        <li className="flex items-start gap-2">• Help police/admin manage complaints efficiently</li>
        <li className="flex items-start gap-2">• Improve transparency between public and law enforcement</li>
      </ul>
    </div>
  ),

  challenge: (
    <div className="space-y-3">
      <p className="font-semibold text-rose-400">Key Challenges</p>
      <ul className="text-sm space-y-1.5 text-gray-300">
        <li>• Handling backend logic using PHP for form submissions</li>
        <li>• Connecting frontend with database using MySQL</li>
        <li>• Managing user authentication (login/register system)</li>
        <li>• Designing admin panel for complaint management</li>
        <li>• Ensuring secure data handling and validation</li>
        <li>• Maintaining clean UI with HTML, CSS, JavaScript</li>
      </ul>
    </div>
  ),

  interesting: (
    <div className="space-y-3">
      <p className="font-semibold text-amber-400">What Was Interesting</p>
      <ul className="text-sm space-y-1.5 text-gray-300">
        <li>• Learning full-stack development using PHP & MySQL</li>
        <li>• Building real-world CRUD operations</li>
        <li>• Creating login-based role system (User/Admin)</li>
        <li>• Understanding backend form handling with PHP</li>
        <li>• Designing functional admin dashboard system</li>
      </ul>
    </div>
  ),

  description: (
  <div className="space-y-2 text-sm text-gray-300">
    <p><strong>Crime Reporting Module</strong> allowing users to submit complaints online with details and evidence</p>
    <p><strong>User Authentication System</strong> with secure login and registration using PHP & MySQL</p>
    <p><strong>Admin Dashboard</strong> to view, manage, and update complaint status</p>
    <p><strong>Complaint Tracking System</strong> to monitor progress from pending to resolved</p>
    <p><strong>Database Integration</strong> for storing user and complaint records securely</p>
  </div>
),

  github: "https://github.com/UmeshChandrayadav/Online-Crime-Reporting-System",

  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL"
  ],

  images: [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10],
}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null); // ✅ NEW STATE

  const project = projects[currentIndex];

  const githubButtonClass =
    "px-5 py-2.5 bg-cyan-500 text-white rounded-xl shadow-lg hover:bg-cyan-600 transition font-medium text-sm whitespace-nowrap";

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16">
  
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-24 text-gray-800">
    Projects
  </h1>

  {/* TABS */}
  <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-7 mb-10 sm:mb-14 md:mb-20">
    {projects.map((proj, index) => (
      <button
        key={index}
        onClick={() => {
          setCurrentIndex(index);
          setActiveIndex(null);
        }}
        className={`px-4 py-2 sm:px-5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition ${
          currentIndex === index
            ? "bg-cyan-500 text-white"
            : "bg-gray-200 hover:bg-cyan-100"
        }`}
      >
        {proj.title}
      </button>
    ))}
  </div>

  {/* MAIN LAYOUT */}
  <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8">

    {/* Slider */}
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[400px] flex-shrink-0">
      <ProjectSlider images={project.images} />
    </div>

    {/* Desktop View Code */}
    <div className="hidden lg:flex flex-col items-center self-stretch">
      <div className="w-px flex-1 bg-gray-300" />
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="my-4 px-5 py-2.5 bg-cyan-500 text-white rounded-xl shadow-lg hover:bg-cyan-600 transition font-medium text-sm whitespace-nowrap"
      >
        View Code
      </a>
      <div className="w-px flex-1 bg-gray-300" />
    </div>

    {/* Mobile View Code */}
    <div className="lg:hidden flex justify-center mb-4">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="px-5 py-2.5 bg-cyan-500 text-white rounded-xl shadow-lg hover:bg-cyan-600 transition font-medium text-sm"
      >
        View Code
      </a>
    </div>

    {/* Content */}
    <div className="w-full max-w-sm sm:max-w-md text-left flex flex-col gap-4">
      
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
        {project.title}
      </h2>

      {/* Cards */}
      {[
        { label: "🎯 Purpose", content: project.purpose, color: "cyan" },
        { label: "🧠 Challenge", content: project.challenge, color: "rose" },
        { label: "✨ Interesting", content: project.interesting, color: "amber" },
        { label: "📌 Description", content: project.description, color: "emerald" },
      ].map((item, i) => (
        <div
          key={i}
          onClick={() =>
            setActiveIndex(activeIndex === i ? null : i)
          }
          onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(i)}
          onMouseLeave={() => window.innerWidth >= 768 && setActiveIndex(null)}
          className="relative p-4 rounded-2xl bg-gray-900/70 border border-gray-700 hover:border-cyan-400 hover:bg-gray-900 transition-all duration-300 cursor-pointer"
        >
          <p className={`text-${item.color}-400 font-semibold`}>
            {item.label}
          </p>

          {/* Popup */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 sm:w-72 p-4 sm:p-5 rounded-2xl 
            bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-600 
            shadow-2xl transition-all duration-300 z-50
            ${
              activeIndex === i
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 border-l border-t border-gray-600 rotate-45" />
            {item.content}
          </div>
        </div>
      ))}

      {/* Tech Stack */}
      <div className="mt-4">
        <p className="text-cyan-400 font-semibold mb-3">
          🛠 Tech Stack
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white border border-blue-400 hover:bg-blue-700 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
  );
}

export default Projects;