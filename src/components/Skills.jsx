import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate,
  SiSpring,
} from "react-icons/si";

function Skills() {
  return (
    <section
      id="skills"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-[#0a0a0a] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
  
  <h2 className="
    text-3xl sm:text-4xl md:text-5xl 
    font-extrabold 
    bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 
    bg-clip-text text-transparent
    tracking-wide
    leading-tight
  ">
    My Skills
  </h2>

  <p className="
    text-gray-400 
    mt-1 sm:mt-2 
    text-sm sm:text-base
  ">
    Technologies I work with
  </p>

</div>

      {/* Backend */}
      <SkillSection title="Backend Development">
        <SkillPill icon={<FaJava className="text-red-500" />} name="Java" />
        <SkillPill icon={<SiHibernate className="text-yellow-500" />} name="Hibernate ORM" />
        <SkillPill icon={<SiSpringboot className="text-green-400" />} name="Spring Boot" />
        <SkillPill icon={<SiSpring className="text-green-500" />} name="Spring MVC" />
        <SkillPill icon={<SiSpring className="text-green-300" />} name="Spring Framework" />
      </SkillSection>

      {/* Frontend */}
      <SkillSection title="Frontend Development">
        <SkillPill icon={<FaHtml5 className="text-orange-500" />} name="HTML5" />
        <SkillPill icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
        <SkillPill icon={<FaJs className="text-yellow-400" />} name="JavaScript" />
        <SkillPill icon={<FaReact className="text-cyan-400" />} name="React.js" />
      </SkillSection>

      {/* Database */}
      <SkillSection title="Database">
        <SkillPill icon={<FaDatabase className="text-red-400" />} name="Oracle SQL" />
      </SkillSection>
    </section>
  );
}

/* Section Wrapper */
function SkillSection({ title, children }) {
  return (
    <div className="mb-12 sm:mb-14 md:mb-16">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 text-cyan-400 text-center">
        {title}
      </h3>

      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-5 
        gap-3 sm:gap-4 md:gap-6 
        max-w-6xl mx-auto
      ">
        {children}
      </div>
    </div>
  );
}

/* Skill Card */
function SkillPill({ icon, name }) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center
      bg-white/5 backdrop-blur-md border border-white/10
      hover:border-cyan-400 rounded-xl sm:rounded-2xl
      px-3 sm:px-4 md:px-5 py-4 sm:py-5
      transition-all duration-300 hover:scale-105
      hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition"></div>

      <div className="text-2xl sm:text-3xl md:text-4xl mb-2 transition-transform group-hover:scale-110">
        {icon}
      </div>

      <span className="text-xs sm:text-sm md:text-base text-center font-medium">
        {name}
      </span>
    </div>
  );
}

export default Skills;