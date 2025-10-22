"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { BackgroundText } from "../components/BackgroundText";
import ContactForm from "../components/ContactForm";
import DistortionEffect from "../components/ParticlesBackground";

export default function ContactFooter() {
  return (
    <footer id="contact" className="pt-14 relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute md:-top-20 -top-20 right-4 md:right-10 md:w-60 md:h-60 w-32 h-32 bg-terciar rounded-full blur-xl z-0"
      />
      <div className="container mx-auto c-space py-10">
        {/* Header */}
        <div className="text-start mb-12">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-foreground via-terciar/50 to-terciar bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-lg max-w-4xl outfit">
            Estou sempre aberto a novas oportunidades e projetos desafiadores.
            Entre em contacto e vamos conversar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 outfit relative">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl uppercase font-semibold mb-6 dark:text-accent-foreground">
                Informações de Contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:yurimanhica4@gmail.com"
                      className="font-medium text-terciar underline"
                    >
                      yurimanhica4@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <a
                      href="tel:+258852129634"
                      className="font-medium text-terciar"
                    >
                      +258 85 212 9634
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-medium">Maputo, Moçambique</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/yuri-manhi%C3%A7a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 bg-background border border-border rounded-lg hover:bg-primary/10 transition-all"
                >
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/yurimanhica-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 bg-background border border-border rounded-lg hover:bg-primary/10 transition-all"
                >
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.instagram.com/yxc_yuri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 bg-background border border-border rounded-lg hover:bg-primary/10 transition-all"
                >
                  <span className="font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
          {/* Decorative Background Elements */}
          <BackgroundText />
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border mt-12 py-8 text-center outfit z-30 relative ">
          <DistortionEffect />
          <p className="dark:text-terciar">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
