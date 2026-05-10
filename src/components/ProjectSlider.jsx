import { useState, useEffect, useRef } from "react";

function ProjectSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const total = images.length;

  const goTo = (idx) => setCurrent((idx + total) % total);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [total]);

  const getPos = (i) => {
    const offset = ((i - current + total) % total);
    return offset > total / 2 ? offset - total : offset;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* FIXED WIDTH STAGE */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: "320px", height: "260px", perspective: "1000px" }}
      >
        {images.map((img, i) => {
          const pos = getPos(i);
          const absPos = Math.abs(pos);
          if (absPos > 2) return null;

          const x = pos * 90;
          const scale = pos === 0 ? 1.25 : absPos === 1 ? 0.78 : 0.55;
          const z = -absPos * 60;
          const opacity = pos === 0 ? 1 : absPos === 1 ? 0.65 : 0.35;
          const rotateY = pos * -6;

          return (
            <div
              key={i}
              onClick={() => pos !== 0 && goTo(i)}
              className="absolute rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-500"
              style={{
                width: "220px",
                height: "280px",
                transform: `translateX(${x}px) translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
                opacity,
                zIndex: 10 - absPos,
                pointerEvents: pos === 0 ? "auto" : "none",
                boxShadow: pos === 0 ? "0 4px 20px rgba(0,0,0,0.15)" : "none",
                cursor: pos !== 0 ? "pointer" : "default",
              }}
            >
              <img
                src={img}
                alt={`slide-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* CONTROLS */}
      <div className="flex items-center gap-3 mt-8">
        <button
          onClick={() => { goTo(current - 1); resetTimer(); }}
          className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 shadow text-sm"
        >
          ◀
        </button>

        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => { goTo(i); resetTimer(); }}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                i === current ? "bg-cyan-500 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => { goTo(current + 1); resetTimer(); }}
          className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 shadow text-sm"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default ProjectSlider;