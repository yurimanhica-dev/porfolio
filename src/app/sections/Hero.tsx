"use client";

import Button from "@/components/Button";
import { motion } from "motion/react";
import Image from "next/image";
import { BsChevronDoubleDown } from "react-icons/bs";
import DistortionEffect from "../components/ParticlesBackground";

const Hero = () => {
  return (
    <section id="home" className="relative z-10">
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-terciar translate-x-1/2 translate-y-1/2 rotate-45 z-0 opacity-50 overflow-hidden"
        />
        <motion.div
          animate={{ y: [4, 15, 8] }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute top-1/3 right-1/3  w-[10rem] h-[10rem] rounded-full blur-xl bg-terciar opacity-10 -translate-x-1/2 -translate-y-1/2 rotate-45 z-0"
        />
      </div>
      <div className="grid md:grid-cols-12 md:h-[90vh] items-stretch sticky top-0 ">
        <div className="relative pl-5 md:pl-10 lg:pl-15 md:col-span-6 lg:col-span-7 flex flex-col justify-center items-center">
          <div className="container mx-auto flex flex-col items-start mb-20">
            <DistortionEffect />
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.25,
                  },
                },
              }}
              className={`text-4xl max-w-3xl xl:text-5xl mt-40 md:mt-0 leading-14 md:leading-tight  dark:text-accent-foreground`}
            >
              {"Criando Experiências Digitais Através de Código e Design Criativo."
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    style={{ display: "inline-block", marginRight: "0.25em" }}
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.h1>
            <div className="flex flex-col dark:text-accent-foreground cursor-none mt-10 md:flex-row font-semibold gap-4 outfit">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.4 }}
                href="#projects"
                className="cursor-none"
              >
                <Button
                  variant="secondary"
                  iconAfter={
                    <div className="overflow-hidden size-5">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2  transition-transform duration-500">
                        <BsChevronDoubleDown className=" w-5 h-5 animate-pulse" />
                        <BsChevronDoubleDown className=" w-5 h-5" />
                      </div>
                    </div>
                  }
                >
                  <span>Projectos</span>
                </Button>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=" md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full flex items-center justify-center bg-foreground"
          >
            <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[520px] flex items-center justify-center">
              {/* Moldura elíptica com gradiente (simula a borda curva) */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  clipPath: "ellipse(60% 80% at 50% 50%)",
                }}
              />

              {/* Imagem com recorte oval */}
              <div
                className="relative w-full h-full overflow-hidden mt-40 md:mt-0"
                style={{
                  clipPath: "ellipse(60% 80% at 50% 50%)",
                }}
              >
                <Image
                  src="/her.jpg"
                  alt="hero"
                  width={1000}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
