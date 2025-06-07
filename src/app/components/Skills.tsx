import {
    SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss3,
    SiReact, SiNextdotjs, SiSpringboot, SiExpress, SiTailwindcss, SiFramer,
    SiMysql, SiPostgresql, SiMongodb, SiDocker, SiJenkins, SiGithubactions,
    SiGithub, SiFigma, SiSwagger, SiPostman, SiJira, SiSlack
  } from "react-icons/si";
  import { FaAws, FaJava, FaNodeJs } from "react-icons/fa";
  
  const iconMap: { [key: string]: React.ComponentType<{ className?: string; size?: number }> } = {
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "Java": FaJava,
    "Node.js": FaNodeJs,
    "Python": SiPython,
    "HTML5": SiHtml5,
    "CSS": SiCss3,
    "React": SiReact,
    "Next.js": SiNextdotjs,
    "Spring Boot": SiSpringboot,
    "Express": SiExpress,
    "TailwindCSS": SiTailwindcss,
    "Framer Motion": SiFramer,
    "MySQL": SiMysql,
    "PostgreSQL": SiPostgresql,
    "MongoDB": SiMongodb,
    "AWS": FaAws,
    "Docker": SiDocker,
    "Jenkins": SiJenkins,
    "GitHub Actions": SiGithubactions,
    "Git & GitHub": SiGithub,
    "Figma": SiFigma,
    "Swagger": SiSwagger,
    "Postman": SiPostman,
    "Jira": SiJira,
    "Slack": SiSlack,
  };

const skills = [
    {
      category: "Languages",
      items: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Java" },
        { name: "Python" },
        { name: "HTML5" },
        { name: "CSS" },
      ],
    },
    {
      category: "Frameworks / Libraries",
      items: [
        { name: "Spring Boot" },
        { name: "Node.js" },
        { name: "React" },
        { name: "Next.js" },        
        { name: "Express" },
        { name: "TailwindCSS" },
        { name: "Framer Motion" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
      ],
    },
    {
      category: "Cloud / DevOps",
      items: [
        { name: "AWS" },
        { name: "Docker" },
        { name: "Jenkins" },
        { name: "GitHub Actions" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git & GitHub" },
        { name: "Figma" },
        { name: "Swagger" },
        { name: "Postman" },
        { name: "Jira" },
        { name: "Slack" },
      ],
    },
  ];
  
  export default function Skills() {
    return (
      <section className="mt-8">
        <h4 className="text-lg font-bold text-indigo-700 mb-4 tracking-widest">SKILLS</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((cat) => (
            <div key={cat.category}>
              <div className="font-semibold text-gray-700 mb-2">{cat.category}</div>
              <ul className="space-y-2">
                {cat.items.map((item) => {
                  const Icon = iconMap[item.name];
                  return (
                    <li key={item.name} className="text-gray-800 flex items-center gap-2">
                      {Icon && <Icon className="text-[#94A3B8]" size={18} />}
                      <span>{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }