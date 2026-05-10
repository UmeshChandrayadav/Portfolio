import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import java from "../assets/course/Java course-1.png";
import html from "../assets/course/Html course.png";
import mysql from "../assets/course/PHP and Mysql course-1.png";
import b from "../assets/internship/Bluestock Intern.jpeg";
import d from "../assets/internship/Dotch Endeavours Intern-1.png";

import Java from "../assets/course/Java course.pdf";
import HTML from "../assets/course/HTML course.pdf";
import MySQL from "../assets/course/PHP and Mysql course.pdf";
import Dotch from "../assets/internship/Dotch Endeavours Intern.pdf";
import Bluestock from "../assets/internship/Bluestock Intern.pdf";

const courseCertificates = [
  { title: "Java Programming", issuer: "Course • 2024", image: java, file: Java, tag: "Course" },
  { title: "HTML", issuer: "Course • 2024", image: html, file: HTML, tag: "Course" },
  { title: "MySQL", issuer: "Course • 2024", image: mysql, file: MySQL, tag: "Course" },
];

const internshipCertificates = [
  { title: "Software Development Engineer Internship", issuer: "Internship • 2025", image: b, file: Bluestock, tag: "Internship" },
  { title: "Full Stack Web Development Internship", issuer: "Internship • 2025", image: d, file: Dotch, tag: "Internship" },
];

const tagColors = {
  Course: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-300",
    border: "border-indigo-500/30",
  },
  Internship: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-300",
    border: "border-emerald-500/30",
  },
};

function CertSlider({ data, onOpen }) {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        breakpoints={{
          0:    { slidesPerView: 1.15, spaceBetween: 12 },
          480:  { slidesPerView: 1.3,  spaceBetween: 14 },
          640:  { slidesPerView: 1.5,  spaceBetween: 16 },
          1024: { slidesPerView: 1.8,  spaceBetween: 20 },
        }}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={600}
      >
        {data.map((cert, i) => {
          const colors = tagColors[cert.tag];
          return (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  onClick={() => isActive && onOpen(cert)}
                  style={{
                    border: isActive
                      ? "1px solid rgba(255,255,255,0.2)"
                      : "1px solid rgba(255,255,255,0.05)",
                    opacity: isActive ? 1 : 0.45,
                    transform: isActive ? "scale(1)" : "scale(0.92)",
                    cursor: isActive ? "pointer" : "default",
                    boxShadow: isActive ? "0 0 50px rgba(255,255,255,0.06)" : "none",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                  }}
                  className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-2xl shadow-2xl group"
                >
                  <div
                    className="relative flex items-center justify-center bg-black overflow-hidden"
                    style={{ height: "clamp(180px, 40vw, 288px)" }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <span
                      className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-md ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      {cert.tag}
                    </span>

                    {isActive && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30">
                        <span className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm px-6 py-2.5 rounded-2xl">
                          View Certificate →
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="text-white font-semibold text-base sm:text-lg leading-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-white/50 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation — wired directly via swiperRef, no CSS class magic */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="px-5 py-2 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-xl text-white transition-colors select-none text-lg"
          aria-label="Previous"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="px-5 py-2 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-xl text-white transition-colors select-none text-lg"
          aria-label="Next"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

function Modal({ cert, onClose }) {
  if (!cert) return null;
  const colors = tagColors[cert.tag];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0f1117] border border-white/10 rounded-3xl overflow-hidden w-full max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <div
          className="relative bg-black"
          style={{ height: "clamp(200px, 50vw, 320px)" }}
        >
          <iframe
            src={cert.file}
            className="w-full h-full"
            title="Certificate PDF"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] to-transparent pointer-events-none" />
        </div>

        <div className="px-6 pb-8 -mt-6 relative">
          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${colors.bg} ${colors.text} ${colors.border}`}
          >
            {cert.tag}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{cert.title}</h3>
          <p className="text-white/60 mb-6">{cert.issuer}</p>
          <a
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 text-center rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-95 transition-all"
          >
            ↓ Download Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="relative py-16 sm:py-20 md:py-24 px-4 md:px-10 bg-[#07090f] text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-white/40 text-sm font-medium tracking-widest uppercase">
            Achievements
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Certificates
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-3 h-3 rounded-full bg-indigo-400 shrink-0" />
              <h2 className="text-lg sm:text-xl font-semibold text-white/80">Course Completion</h2>
            </div>
            <CertSlider data={courseCertificates} onOpen={setSelectedCert} />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-3 h-3 rounded-full bg-emerald-400 shrink-0" />
              <h2 className="text-lg sm:text-xl font-semibold text-white/80">Internship Completion</h2>
            </div>
            <CertSlider data={internshipCertificates} onOpen={setSelectedCert} />
          </div>
        </div>
      </div>

      <Modal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}