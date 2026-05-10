import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 sticky top-0 z-50">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 md:px-10 py-5">
        
        <h1 className="text-xl md:text-2xl font-bold text-cyan-400">
          Umesh Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg text-gray-300">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#certificates" className="nav-link">Certificates</a></li>
          <li><a href="#resume" className="nav-link">Resume</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-6 text-lg text-gray-300 bg-zinc-900">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#certificates" onClick={() => setIsOpen(false)}>Certificates</a></li>
          <li><a href="#resume" onClick={() => setIsOpen(false)}>Resume</a></li>
        </ul>
      )}

    </nav>
  );
}

export default Navbar;