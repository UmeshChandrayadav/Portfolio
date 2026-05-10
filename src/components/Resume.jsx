import resumePDF from "../assets/resume/umesh resume 2026.pdf";
import resumePreview from "../assets/resume/Screenshot 2026-05-10 202326.png"; // ← add a screenshot of your resume as PNG

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 text-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        My Resume
      </h2>

      {/* PDF Preview */}
      <div className="flex justify-center mb-6">

        {/* Mobile & Tablet: show image screenshot of resume */}
        <img
          src={resumePreview}
          alt="Resume preview"
          className="
            block md:hidden
            w-full sm:w-[90%]
            rounded-lg shadow border
            object-contain
          "
        />

        {/* Desktop only: show real interactive PDF iframe */}
        <iframe
          src={resumePDF}
          title="Resume"
          className="
            hidden md:block
            w-[80%]
            h-[500px]
            border rounded-lg shadow
          "
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
        <a
          href="https://drive.google.com/file/d/1kEWxWxyz6Bzm3mD3uGrLlXN30qYr5fkK/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2 rounded-lg text-sm sm:text-base"
        >
          View Latest Resume
        </a>

        <a
          href="https://drive.google.com/file/d/1kEWxWxyz6Bzm3mD3uGrLlXN30qYr5fkK/view?usp=sharing"
          download="Umesh_Resume_2026.pdf"
          className="w-full sm:w-auto bg-green-600 text-white px-5 py-2 rounded-lg text-sm sm:text-base"
        >
          Download Latest Resume
        </a>
      </div>
    </section>
  );
}