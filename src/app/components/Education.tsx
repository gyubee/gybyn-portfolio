export default function Education() {
    return (
      <section>
        <h4 className="text-lg font-bold text-indigo-700 mb-6 tracking-widest">EDUCATION</h4>
        <div className="space-y-6">
          {/* 1. University of Sydney */}
          <div className="bg-white/80 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <span className="font-bold text-[#5C4033]">University of Sydney</span>
              <span className="text-sm text-[#94A3B8]">Feb 2024 – Present</span>
            </div>
            <div className="mb-1 text-sm text-gray-700">NSW, Australia</div>
            <div className="mb-2 text-gray-800">Master of Computer Science</div>
            <div className="text-xs text-gray-500 mb-2">GPA: </div>
            <ul className="list-disc ml-5 text-sm text-gray-700 mb-1">
              <li>
                <span className="font-semibold">Major Courses:</span> Object-Oriented Programming, Database Management Systems, Design of Networks and Distributed Systems, Data Structures and Algorithms, Cybersecurity Engineering, Web Application Development, Data Engineering, Natural Language Processing, Software Quality Engineering, Project Management in IT
              </li>
              <li>
                <span className="font-semibold">Capstone Project:</span>
              </li>
            </ul>
          </div>
          {/* 2. Hanyang University */}
          <div className="bg-white/80 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <span className="font-bold text-[#5C4033]">Hanyang University ERICA</span>
              <span className="text-sm text-[#94A3B8]">Mar 2019 – Feb 2023</span>
            </div>
            <div className="mb-1 text-sm text-gray-700">Ansan, Korea</div>
            <div className="mb-2 text-gray-800">Bachelor of Media and Social Informatics, Bachelor of ICT - Culture Technology</div>
            <div className="text-xs text-gray-500 mb-2">GPA: 3.9/4.5</div>
            <ul className="list-disc ml-5 text-sm text-gray-700 mb-1">
              <li>
                <span className="font-semibold">Major Courses:</span> Web Application Development, Human-Computer System Design, Foundation of Data Science, Data Analysis and Machine Learning for Social Science, Data Structures, Engineering and Psychology
              </li>
              <li>
                <span className="font-semibold">Capstone Project:</span> Development of an Immersive Sound Device for Head-Mounted Displays (HMD)
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }