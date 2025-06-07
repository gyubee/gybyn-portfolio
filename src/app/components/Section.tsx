import React from "react";

interface SectionProps {
    id?: string; 
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="max-w-5xl mx-auto my-16 px-6 scroll-mt-16">
      <h3 className="text-3xl font-bold text-indigo-700 mb-8">{title}</h3>
      <div>{children}</div>
    </section>
  );
};

export default Section;
