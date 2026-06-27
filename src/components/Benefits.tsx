import {
  FileText,
  Wallet,
  TrendingUp,
  Boxes,
  Receipt,
  BarChart3,
} from "lucide-react";

const processes = [
  {
    icon: FileText,
    title: "Presupuestos Profesionales",
    description:
      "Genera presupuestos claros y profesionales en PDF listos para enviar a tus clientes.",
  },
  {
    icon: Wallet,
    title: "Control de Gastos",
    description:
      "Registra todos los egresos de tu empresa y conoce exactamente en qué se está invirtiendo.",
  },
  {
    icon: TrendingUp,
    title: "Control de Ingresos",
    description:
      "Supervisa ventas, cobros e ingresos para mantener una visión completa de tu negocio.",
  },
  {
    icon: Boxes,
    title: "Control de Stock",
    description:
      "Gestiona productos, existencias y movimientos para evitar pérdidas y faltantes.",
  },
  {
    icon: Receipt,
    title: "Facturación",
    description:
      "Administra el proceso completo de ventas, compras y emisión de comprobantes.",
  },
  {
    icon: BarChart3,
    title: "Reportes y Dashboards",
    description:
      "Obtén información en tiempo real mediante indicadores y reportes para tomar mejores decisiones.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-28 px-6 bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs uppercase tracking-[2px] font-semibold mb-6">
            Soluciones
          </div>

          <h2 className="text-5xl font-bold text-white mb-5">
            Procesos que ayudamos a optimizar
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-8">
            Diseñamos soluciones empresariales que automatizan tareas,
            eliminan procesos manuales y centralizan la información
            para que tu empresa sea más eficiente.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {processes.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-4 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
              >

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">

                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}