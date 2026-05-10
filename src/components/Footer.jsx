import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="
      flex flex-wrap justify-center items-center 
      gap-6 sm:gap-8 md:gap-10 
      py-6 sm:py-8 
      px-4 
      bg-zinc-700
    ">

      <a href="https://github.com/UmeshChandrayadav" target="_blank" rel="noreferrer">
        <FaGithub className="text-2xl sm:text-3xl md:text-4xl hover:text-cyan-400 duration-300" />
      </a>

      <a href="https://www.linkedin.com/in/umesh-chandra-p/" target="_blank" rel="noreferrer">
        <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl hover:text-cyan-400 duration-300" />
      </a>

      <a href="mailto:umeshpchandra12@gmail.com">
        <FaEnvelope className="text-2xl sm:text-3xl md:text-4xl hover:text-cyan-400 duration-300" />
      </a>

      <a href="tel:+918309227266">
        <FaPhone className="text-2xl sm:text-3xl md:text-4xl hover:text-cyan-400 duration-300" />
      </a>

    </footer>
  );
}

export default Footer;