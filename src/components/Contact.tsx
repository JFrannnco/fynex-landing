import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  User,
  Building2,
  Mail,
  Phone,
  PencilLine,
} from "lucide-react";

import {
  FaWhatsapp,
} from "react-icons/fa";



export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setStatus({
      type: null,
      message: "",
    });

    try {

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      form.current.reset();

      setStatus({
        type: "success",
        message: "Consulta enviada correctamente. Nos pondremos en contacto contigo muy pronto.",
      });

    } catch (error) {

      console.error(error);

      setStatus({
        type: "error",
        message: "Ocurrió un error al enviar la consulta. Inténtalo nuevamente.",
      });

    } finally {

      setLoading(false);

    }
  }

  return (
    <section
      id="contact"
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#06b6d420,transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="text-center mb-6"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">

            Hablemos sobre tu{" "}

            <span className="text-cyan-400">
              negocio
            </span>

          </h2>

          <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto">
            Descubre cómo Invicta Systems puede ayudarte
            a digitalizar y/o optimizar los procesos de tu empresa.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-16 items-start">

          {/* FORMULARIO */}

          <motion.form

            initial={{ opacity:0, x:-40 }}

            whileInView={{ opacity:1, x:0 }}

            viewport={{ once:true }}

            transition={{ duration:.45 }}

            className="space-y-4"

            ref={form}
            onSubmit={sendEmail}

          >

            <div className="relative">

              <User
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                placeholder="Nombre completo"
                name="name"
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-14 pr-5 h-14 outline-none focus:border-cyan-400 transition"
              />

            </div>

            <div className="relative">

              <Building2
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                name="company"
                required                
                placeholder="Empresa o Negocio"
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-14 pr-5 h-14 outline-none focus:border-cyan-400 transition"
              />

            </div>

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Correo electrónico"
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-14 pr-5 h-14 outline-none focus:border-cyan-400 transition"
              />

            </div>

            <div className="relative">

              <Phone
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                name="phone"
                required
                placeholder="Teléfono"
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-14 pr-5 h-14 outline-none focus:border-cyan-400 transition"
              />

            </div>

            <div className="relative">

              <PencilLine
                size={20}
                className="absolute left-5 top-6 text-slate-500"
              />

              <textarea
                rows={6}
                name="message"
                required                
                placeholder="Cuéntanos sobre tu proyecto..."
                className="w-full resize-none bg-slate-900 border border-slate-800 rounded-2xl pl-14 pr-5 pt-5 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: .98,
              }}
              type="submit"
              disabled={loading}
              className="w-full h-14 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold transition duration-300"
            >
              {loading ? "Enviando..." : "Enviar Consulta"}
            </motion.button>

            {status.type && (
              <p
                className={`mt-4 text-sm text-center ${
                  status.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}

          </motion.form>

          {/* PANEL DERECHO */}

          <motion.div

            initial={{ opacity:0, x:40 }}

            whileInView={{ opacity:1, x:0 }}

            viewport={{ once:true }}

            transition={{ duration:.45 }}

          >

            <h3 className="text-3xl lg:text-4xl font-bold mb-4">

              Conecta con{" "}

              <span className="text-cyan-400">

                nosotros

              </span>

            </h3>

            <p className="text-slate-400 mb-10 leading-relaxed">

              Elige el canal que prefieras.

            </p>

            <div className="space-y-4">

              {/* WhatsApp */}

              <a
                href="https://wa.me/595981425699"
                className="group flex items-center justify-between pb-6 border-b border-slate-800 hover:translate-x-2 transition-all duration-200"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-14 rounded-2xl border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition">

                    <FaWhatsapp
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  <div>

                    <h4 className="text-2xl font-semibold">

                      WhatsApp

                    </h4>

                    <p className="text-slate-400">

                      +595 981 425699

                    </p>

                  </div>

                </div>

                <span className="text-cyan-400 text-2xl">

                  →

                </span>

              </a>

              {/* Email */}

              <a
                href="#"
                className="group flex items-center justify-between pb-6 border-b border-slate-800"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-14 rounded-2xl border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition">

                    <Mail
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  <div>

                    <h4 className="text-2xl font-semibold">

                      Correo

                    </h4>

                    <p className="text-slate-400">

                      invicta.systems@gmail.com

                    </p>

                  </div>

                </div>

                <span className="text-cyan-400 text-3xl">

                  →

                </span>

              </a>

              {/* LinkedIn */}
              {/*
              <a
                href="#"
                className="group flex items-center justify-between pb-6 border-b border-slate-800"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-14 rounded-2xl border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition">

                    <FaLinkedin
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  <div>

                    <h4 className="text-2xl font-semibold">
                      LinkedIn
                    </h4>

                    <p className="text-slate-400">
                      Invicta Systems
                    </p>

                  </div>

                </div>

                <span className="text-cyan-400 text-3xl">
                  →
                </span>

              </a>
              */}

              {/* Instagram */}
              {/*    
              <a
                href="#"
                className="group flex items-center justify-between pb-6 border-b border-slate-800"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-14 rounded-2xl border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition">

                    <FaInstagram
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  <div>

                    <h4 className="text-2xl font-semibold">
                      Instagram
                    </h4>

                    <p className="text-slate-400">
                      @invictasystems
                    </p>

                  </div>

                </div>

                <span className="text-cyan-400 text-3xl">
                  →
                </span>

              </a>
              */}
              {/* Facebook */}
              {/*
              <a
                href="#"
                className="group flex items-center justify-between pb-2"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-14 rounded-2xl border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition">

                    <FaFacebook
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  <div>

                    <h4 className="text-2xl font-semibold">
                      Facebook
                    </h4>

                    <p className="text-slate-400">
                      Invicta Systems
                    </p>

                  </div>

                </div>

                <span className="text-cyan-400 text-3xl">
                  →
                </span>

              </a>
              */}    
            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
}                            