import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-4 lg:py-6 flex flex-col md:flex-row md:items-center md:justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-white text-center lg:text-left text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight"
        >
          INVICTA SYSTEMS
        </a>

        {/* Menú móvil */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 min-w-max pt-4">
            <a href="#benefits" className="text-slate-300 whitespace-nowrap">
              Soluciones
            </a>

            <a href="#modules" className="text-slate-300 whitespace-nowrap">
              Módulos
            </a>

            <a href="#plans" className="text-slate-300 whitespace-nowrap">
              Planes
            </a>

            <a href="#contact" className="text-slate-300 whitespace-nowrap">
              Contacto
            </a>
          </div>
        </div>

        {/* Menú */}
        <div className="hidden md:flex items-center gap-12">

          <a
            href="#benefits"
            className="text-slate-300 hover:text-cyan-400 transition font-medium"
          >
            Soluciones
          </a>

          <a
            href="#modules"
            className="text-slate-300 hover:text-cyan-400 transition font-medium"
          >
            Modulos
          </a>

          <a
            href="#plans"
            className="text-slate-300 hover:text-cyan-400 transition font-medium"
          >
            Planes
          </a>

          <a
            href="#contact"
            className="text-slate-300 hover:text-cyan-400 transition font-medium"
          >
            Contacto
          </a>

        </div>

      </div>
    </nav>
  );
}