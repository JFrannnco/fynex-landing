export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e940,transparent_40%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#2563eb25,transparent_40%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-10 min-h-screen flex items-center pt-24">

        <div className="grid lg:grid-cols-[0.82fr_1.38fr] gap-25 items-center w-full">

          {/* Texto */}
          <div>

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs uppercase tracking-[2px] font-semibold mb-8">
              Digitalización Empresarial
            </div>

            <h1 className="text-6xl lg:text-[82px] font-extrabold leading-[1.02] tracking-tight mb-10">

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

            <p className="text-slate-400 text-xl leading-10 max-w-xl mb-16">

              Diseñamos sistemas adaptados a las necesidades de tu
              empresa. Digitalizamos procesos, automatizamos tareas
              y desarrollamos soluciones que mejoran el control y la
              productividad.

            </p>

            <div className="flex gap-5">

              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-9 py-4 rounded-xl transition duration-300 shadow-lg shadow-cyan-500/20"
              >
                Solicitar Demo
              </a>

              <a
                href="#benefits"
                className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 px-9 py-4 rounded-xl transition duration-300"
              >
                Que hacemos
              </a>

            </div>

          </div>

          {/* Dashboard */}
          <div className="relative flex justify-center g:translate-x-12">

            {/* Glow */}
            <div className="absolute w-[750px] h-[750px] rounded-full bg-cyan-500/20 blur-[150px]" />

            <div className="relative rotate-2 hover:rotate-0 transition-all duration-500">

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
                  className="w-full max-w-[900px] mx-auto h-auto object-contain"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}