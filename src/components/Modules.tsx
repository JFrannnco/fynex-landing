import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  Boxes,
  Settings,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const modules = {
  dashboard: {
    icon: LayoutDashboard,
    title: "Dashboard Ejecutivo",
    description:
      "Visualiza métricas, ventas, indicadores y alertas importantes en tiempo real.",

    features: [
      {
        title: "Indicadores de negocio",
        description:
          "Visualiza los indicadores clave de tu empresa en un solo lugar.",
      },
      {
        title: "Gráficos de ventas",
        description:
          "Analiza el rendimiento de ventas con gráficos claros y actualizados.",
      },
      {
        title: "Productos más vendidos",
        description:
          "Identifica los productos con mayor demanda en tiempo real.",
      },
      {
        title: "Notificaciones automáticas",
        description:
          "Recibe alertas y notificaciones sobre eventos importantes.",
      },
      {
        title: "Alertas de vencimiento",
        description:
          "Controla vencimientos y evita retrasos con alertas automáticas.",
      },
    ],
  },

  ventas: {
    icon: ShoppingBag,
    title: "Gestión de Ventas",
    description:
      "Administra clientes, presupuestos, facturación y cuentas por cobrar.",

    features: [
      {
        title: "Clientes",
        description:
          "Centraliza toda la información de tus clientes.",
      },
      {
        title: "Facturación",
        description:
          "Genera comprobantes y controla todas las ventas.",
      },
      {
        title: "Presupuestos",
        description:
          "Emite presupuestos profesionales en PDF.",
      },
      {
        title: "Cobros",
        description:
          "Controla cuentas por cobrar y pagos pendientes.",
      },
      {
        title: "Reportes",
        description:
          "Analiza el rendimiento comercial de tu empresa.",
      },
    ],
  },

  compras: {
    icon: ShoppingCart,
    title: "Gestión de Compras",
    description:
      "Gestiona proveedores, compras y cuentas por pagar.",

    features: [
      {
        title: "Proveedores",
        description:
          "Administra toda la información de proveedores.",
      },
      {
        title: "Facturas",
        description:
          "Registra compras y comprobantes fácilmente.",
      },
      {
        title: "Pagos",
        description:
          "Controla pagos realizados y pendientes.",
      },
      {
        title: "Cuentas por pagar",
        description:
          "Gestiona vencimientos de proveedores.",
      },
      {
        title: "Reportes",
        description:
          "Obtén información detallada de tus compras.",
      },
    ],
  },

  inventario: {
    icon: Boxes,
    title: "Gestión de Inventario",
    description:
      "Control total del stock y movimientos de productos.",

    features: [
      {
        title: "Productos",
        description:
          "Organiza todos los productos de tu empresa.",
      },
      {
        title: "Categorías",
        description:
          "Clasifica fácilmente tu inventario.",
      },
      {
        title: "Control de Stock",
        description:
          "Conoce las existencias disponibles en tiempo real.",
      },
      {
        title: "Movimientos",
        description:
          "Registra entradas y salidas de productos.",
      },
      {
        title: "Historial",
        description:
          "Consulta todos los movimientos realizados.",
      },
    ],
  },

  administracion: {
    icon: Settings,
    title: "Administración",
    description:
      "Configura el sistema según las necesidades de tu empresa.",

    features: [
      {
        title: "Empleados",
        description:
          "Gestiona usuarios y permisos.",
      },
      {
        title: "IVA",
        description:
          "Configura impuestos rápidamente.",
      },
      {
        title: "Timbrado",
        description:
          "Administra timbrados y comprobantes.",
      },
      {
        title: "Sucursales",
        description:
          "Gestiona múltiples sucursales.",
      },
      {
        title: "Tipos de cambio",
        description:
          "Controla distintas monedas y cotizaciones.",
      },
    ],
  },
};

type ModuleKey = keyof typeof modules;

export default function Modules() {
  const [active, setActive] = useState<ModuleKey>("dashboard");

  const current = modules[active];

  return (
    <section
      id="modules"
      className="py-28 pt-32 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-10">

        <h2 className="text-4xl font-bold mb-5">
          Explora nuestros modulos
        </h2>

        <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-8">
          Cada empresa tiene procesos diferentes. Desarrollamos
          modulos empresariales adaptadas a las necesidades
          de cada negocio para optimizar su gestión.
        </p>

      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-4">

        {(Object.keys(modules) as ModuleKey[]).map((key) => {

          const Icon = modules[key].icon;

          return (

            <motion.button
              key={key}
              onClick={() => setActive(key)}

              whileHover={{
                y: -3,
                scale: 1.03,
              }}
            
              whileTap={{
                scale: 0.98,
              }}
            
              transition={{
                duration: 0.2,
              }}
              
              className={`relative flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 overflow-hidden ${
                active === key
                  ? "border-transparent text-black"
                  : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
              }`}              
            >

              {active === key && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-[2px] rounded-full bg-cyan-500"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

            <div className="relative z-10 flex items-center gap-3">

              <Icon
                size={20}
                className={`relative z-10 ${
                  active === key ? "text-black" : "text-current"
                }`}
              />

              <span
                className={`relative z-10 font-medium ${
                  active === key ? "text-black" : ""
                }`}
              >
                {modules[key].title}
              </span>

            </div>

            </motion.button>

          );

        })}

      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.98,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="rounded-[32px] border border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 p-6"
        >
        
        <div className="text-center mb-10">

          <h3 className="text-4xl font-bold mb-5">
            {current.title}
          </h3>

          <p className="text-slate-400 text-xl">
            {current.description}
          </p>

        </div>

        <div className="grid lg:grid-cols-5 gap-8">
                    {current.features.map((feature, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 25,
              }}
            
              animate={{
                opacity: 1,
                y: 0,
              }}
            
              transition={{
                delay: index * 0.08,
                duration: 0.35,
                ease: "easeOut",
              }}
            
              className={`text-center px-4 ${
                index < current.features.length - 1
                  ? "lg:border-r lg:border-slate-800"
                  : ""
              }`}
            >

              <div className="w-14 h-14 mx-auto rounded-full border-2 border-cyan-500 flex items-center justify-center mb-8">

                <Check
                  size={26}
                  className="text-cyan-400"
                />

              </div>

              <h4 className="text-2xl font-semibold mb-5 leading-snug">
                {feature.title}
              </h4>

              <p className="text-slate-400 leading-8">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

        </motion.div>
      </AnimatePresence>

    </section>
  );
}