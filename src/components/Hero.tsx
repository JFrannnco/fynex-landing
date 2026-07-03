export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen overflow-hidden bg-slate-950">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e940,transparent_40%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#2563eb25,transparent_40%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-10 min-h-[85vh] lg:min-h-screen flex items-center pt-30 lg:pt-24">

        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.38fr] gap-16 lg:gap-20 items-center w-full">

          {/* Texto */}
          <div className="text-center lg:text-left">

            <div className="hidden sm:inline-flex items-center px-4 py-2 lg:py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs uppercase tracking-[2px] font-semibold mb-8">
              Digitalización Empresarial
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight mb-10">

              Digitalizamos

              <br />

              procesos.

              <br />

              <span className="text-cyan-400">

                Impulsamos

                <br />

                empresas.

              </span>

            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-9 md:leading-10 max-w-xl mb-12 lg:mb-16">

              Diseñamos sistemas adaptados a las necesidades de tu
              empresa. Digitalizamos procesos, automatizamos tareas
              y desarrollamos soluciones que mejoran el control y la
              productividad.

            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="#contact"
                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl transition duration-300 shadow-lg shadow-cyan-500/20 text-center"
              >
                Consultar
              </a>

              <a
                href="#benefits"
                className="w-full sm:w-auto border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-xl transition duration-300 text-center"
              >
                Que hacemos
              </a>

            </div>

          </div>

          {/* Dashboard */}
          <div className="hidden lg:flex relative justify-center lg:translate-x-12">

            {/* Glow */}
            <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[750px] lg:h-[750px] rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="relative pb-10">

              <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-[0_60px_150px_rgba(0,0,0,.55)]">

                {/* Barra navegador */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800">

                  <div className="flex gap-2">

                    <div className="w-3 h-3 rounded-full bg-red-500" />

                    <div className="w-3 h-3 rounded-full bg-yellow-500" />

                    <div className="w-3 h-3 rounded-full bg-green-500" />

                  </div>

                  <span className="text-xs text-slate-500 tracking-wider">

                    Invicta Systems

                  </span> 

                </div>

                 <img
                  src="/dashboard.png"
                  alt="Dashboard Invicta Systems"
                  className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[520px] lg:max-w-[950px] mx-auto h-auto object-contain"
                 />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}