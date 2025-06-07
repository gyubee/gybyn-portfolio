import React from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

const SectionNav = ({ activeId }: { activeId: string }) => (
  <nav className="hidden lg:flex flex-col fixed top-1/4 left-12 z-30 space-y-6 text-gray-400">
    {sections.map((section) => (
      <a
        key={section.id}
        href={`#${section.id}`}
        className={`text-lg font-semibold transition-colors duration-200 ${
          activeId === section.id ? "text-[#4F46E5]" : "hover:text-[#4F46E5]"
        }`}
      >
        {section.label}
      </a>
    ))}
  </nav>
);

export default SectionNav; 