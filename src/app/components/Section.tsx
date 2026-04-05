import React from "react";

interface SectionProps {
    id?: string; 
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="mx-auto my-16 w-full max-w-6xl scroll-mt-16 px-4 sm:px-6 lg:px-10 xl:px-14">
      <h3 className="text-3xl font-bold text-indigo-700 mb-8">{title}</h3>
      <div>{children}</div>
    </section>
  );
};

export default Section;
