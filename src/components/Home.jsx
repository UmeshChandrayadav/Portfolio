import profile from "../assets/Photo.jpg";
import bg from "../assets/pexels-pppsdavid-9243608.jpg";
import { FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center 
      gap-8 md:gap-16 
      px-5 sm:px-6 md:px-10 
      py-10 sm:py-14 md:py-20 
      text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Profile */}
      <div className="relative z-10 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-40"></div>

          <img
            src={profile}
            alt="profile"
            className="relative 
              w-[150px] sm:w-[200px] md:w-[300px] 
              h-auto object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl text-center md:text-left">

        {/* Intro */}
        <p className="text-cyan-400 text-sm sm:text-base mb-2">
          👋 Hello, I'm
        </p>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3">
          Umesh Chandra Yadav
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
          Java Full Stack Developer
        </h2>

        <p className="text-gray-400 text-sm sm:text-base leading-6 sm:leading-7">
          I build scalable full stack applications using Java, Spring Boot,
          React, and modern technologies.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">

          <a
            href="mailto:umeshpchandra12@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 
            rounded-xl font-medium 
            bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:scale-105 transition shadow-lg text-sm sm:text-base"
          >
            <FaEnvelope />
            Hire Me
          </a>

          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl border border-gray-400 
            text-gray-300 hover:bg-white hover:text-black 
            transition text-sm sm:text-base"
          >
            View Projects
          </a>

        </div>

        {/* Qualifications */}
        <div className="mt-6 text-gray-300 text-sm sm:text-base">
          <p>🎓 B.E - MVJ College of Engineering</p>
          <p>📊 CGPA: 7.7</p>
        </div>

        {/* About Me (Compact & Clean) */}
        <div className="mt-5 bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg text-gray-300 text-sm sm:text-base leading-6 sm:leading-7">
          
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
            About Me
          </h3>

          <p>
            I have experience in Java, Spring Boot, React, SQL, and Python,
            focusing on building complete full stack applications.
          </p>

          <p className="mt-2">
            I’m passionate about software engineering, modern technologies,
            and continuously improving my development skills through projects.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Home;