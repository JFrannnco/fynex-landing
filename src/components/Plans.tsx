import { motion } from "framer-motion";
import {
  Rocket,
  Star,
  Briefcase,
  Check,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";

const plans = [
  {
    icon: Rocket,
    title: "Esencial",
    subtitle: "Ideal para pequeñas empresas que desean comenzar su digitalización.",
    price: "300.000",
    period: "/mes",
    featured: false,
    badge: "",
    features: [
      "Gestión de clientes",
      "Presupuestos y cotizaciones",
      "Ventas",
      "Reportes básicos",
      "Capacitación inicial",
      "Soporte por correo",
    ],
  },

  {
    icon: Star,
    title: "Profesional",
    subtitle:
      "La solución más completa para empresas que necesitan controlar toda su operación.",
    badge: "Más elegido",
    price: "650.000",
    period: "/mes",      
    featured: true,
    features: [
      "Dashboard ejecutivo",
      "Ventas",
      "Compras",
      "Inventario",
      "Administración",
      "Reportes avanzados",
      "Acceso en la nube",
      "Soporte prioritario",
    ],
  },

  {
    icon: Briefcase,
    title: "Empresarial",
    subtitle:
      "Desarrollo totalmente personalizado según los procesos de tu empresa.",
    price: "950.000",
    period: "/mes",        
    featured: false,
    badge: "",
    button: "Solicitar propuesta",
    features: [
      "Desarrollo a medida",
      "Automatización de procesos",
      "Integraciones",
      "Múltiples sucursales",
      "Capacitación avanzada",
      "Soporte dedicado",
    ],
  },
];

export default function Plans() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayPlans = isMobile
    ? [plans[2], plans[1], plans[0]]
    : plans;  


return (
<section
  id="plans"
  className="relative py-30 lg:py-28 overflow-hidden bg-slate-950"
>

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e915,transparent_35%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#06b6d415,transparent_35%)]" />

  <div className="relative max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}
      className="text-center mb-6"
    >

      <h2 className="text-4xl font-bold mb-5 lg:text-4xl">

        Nuestros{" "}

        <span className="text-cyan-400">
          Planes
        </span>

      </h2>

      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Soluciones flexibles que se adaptan al crecimiento de tu empresa.
      </p>

    </motion.div>

    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-end">

      {displayPlans.map((plan, index) => {

        const Icon = plan.icon;

        return (

          <motion.div
            key={plan.title}
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{
              duration: 0.45,
              delay:index*.1
            }}
            whileHover={{
              y: -6,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 25,
              },
            }}
            className={`relative rounded-2xl border border-slate-800 hover:border-cyan-400/50 transition-colors duration-200

            ${
              plan.featured
    ? "bg-slate-900 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.08)] py-6"
    : "bg-slate-900 border-slate-800 py-8"
            }

            px-8`}
          >

            {plan.badge && (
                <div className="absolute top-4 right-4 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

            <div className="flex justify-center mb-5">

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border

              ${
                plan.featured
                ? "bg-white/10 border-white/30"
                : "bg-cyan-500/10 border-cyan-500/40"
              }`}>

                <Icon
                  size={32}
                  className={
                    plan.featured
                    ? "text-white"
                    : "text-cyan-400"
                  }
                />

              </div>

            </div>

            <div className="text-center">

              <h3 className="text-3xl font-bold mb-3">

                {plan.title}

              </h3>

              <p className={`text-sm leading-6

              ${
                plan.featured
                ? "text-white/80"
                : "text-slate-400"
              }`}>

                {plan.subtitle}

              </p>

              <div className="border-t border-white/20 my-5"/>

                <div className="mb-7">
                            
                  <div className="flex justify-center items-end gap-2">
                            
                    <span className="text-5xl font-bold">
                      {plan.price}
                    </span>
                            
                    <span
                      className={`mb-1 ${
                        plan.featured
                          ? "text-white/80"
                          : "text-slate-400"
                      }`}
                    >
                      {plan.period}
                    </span>
                    
                  </div>
                    
                </div>

              <div className="space-y-3 text-left">
{plan.features.map((feature) => (

  <div
    key={feature}
    className="flex items-center gap-3"
  >

    <Check
      size={18}
      className={
        plan.featured
          ? "text-white"
          : "text-cyan-400"
      }
    />

    <span
      className={`text-sm ${
        plan.featured
          ? "text-white"
          : "text-slate-300"
      }`}
    >
      {feature}
    </span>

  </div>

))}

</div>

</div>

</motion.div>

);

})}

</div>

<motion.div
  initial={{
    opacity:0,
    y:20,
  }}
  whileInView={{
    opacity:1,
    y:0,
  }}
  transition={{
    delay:.3,
  }}
  viewport={{
    once:true,
  }}
  className="flex justify-center items-center gap-3 mt-12 text-slate-400"
>

  <Shield
    size={22}
    className="text-cyan-400"
  />

  <p className="text-sm md:text-base">
    Cada empresa recibe una propuesta personalizada según sus necesidades.
  </p>

</motion.div>
  </div>

</section>

);
}