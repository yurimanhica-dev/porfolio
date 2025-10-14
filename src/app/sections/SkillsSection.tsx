// "use client";

// import { motion, useInView } from "motion/react";
// import Image from "next/image";
// import { useRef } from "react";
// import {
//   SiDocker,
//   SiFigma,
//   SiFramer,
//   SiGit,
//   SiJenkins,
//   SiKubernetes,
//   SiMongodb,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiPostgresql,
//   SiPython,
//   SiReact,
//   SiTailwindcss,
//   SiTerraform,
//   SiTypescript,
//   SiVercel,
//   SiVite,
// } from "react-icons/si";

// const SkillsSection = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const tecnologias = [
//     {
//       nome: "React",
//       icone: <SiReact className="w-8 h-8" />,
//       cor: "#61DAFB",
//       categoria: "Frontend",
//     },
//     {
//       nome: "Next.js",
//       icone: <SiNextdotjs className="w-8 h-8" />,
//       cor: "#000000",
//       categoria: "Fullstack",
//     },
//     {
//       nome: "TypeScript",
//       icone: <SiTypescript className="w-8 h-8" />,
//       cor: "#3178C6",
//       categoria: "Language",
//     },
//     {
//       nome: "Node.js",
//       icone: <SiNodedotjs className="w-8 h-8" />,
//       cor: "#339933",
//       categoria: "Backend",
//     },
//     {
//       nome: "Python",
//       icone: <SiPython className="w-8 h-8" />,
//       cor: "#3776AB",
//       categoria: "Language",
//     },
//     {
//       nome: "C-Sharp",
//       icone: (
//         <Image
//           src="/icons/c-sharp.png"
//           alt="C#"
//           width={32}
//           height={32}
//           className="w-8 h-8"
//         />
//       ),
//       cor: "#8d3076",
//       categoria: "Language",
//     },
//   ];

//   const devops = [
//     {
//       nome: "Docker",
//       icone: <SiDocker className="w-6 h-6" />,
//       cor: "#2496ED",
//     },
//     {
//       nome: "Kubernetes",
//       icone: <SiKubernetes className="w-6 h-6" />,
//       cor: "#326CE5",
//     },
//     {
//       nome: "Terraform",
//       icone: <SiTerraform className="w-6 h-6" />,
//       cor: "#7B42BC",
//     },
//     {
//       nome: "Jenkins",
//       icone: <SiJenkins className="w-6 h-6" />,
//       cor: "#D24939",
//     },
//     {
//       nome: "Git",
//       icone: <SiGit className="w-6 h-6" />,
//       cor: "#F05032",
//     },
//   ];

//   const ferramentas = [
//     {
//       nome: "Tailwind CSS",
//       icone: <SiTailwindcss className="w-5 h-5" />,
//       cor: "#06B6D4",
//     },
//     {
//       nome: "Figma",
//       icone: <SiFigma className="w-5 h-5" />,
//       cor: "#F24E1E",
//     },
//     {
//       nome: "MongoDB",
//       icone: <SiMongodb className="w-5 h-5" />,
//       cor: "#47A248",
//     },
//     {
//       nome: "PostgreSQL",
//       icone: <SiPostgresql className="w-5 h-5" />,
//       cor: "#4169E1",
//     },
//     {
//       nome: "Framer Motion",
//       icone: <SiFramer className="w-5 h-5" />,
//       cor: "#0055FF",
//     },
//     {
//       nome: "Vite",
//       icone: <SiVite className="w-5 h-5" />,
//       cor: "#646CFF",
//     },
//     {
//       nome: "Vercel",
//       icone: <SiVercel className="w-5 h-5" />,
//       cor: "#000000",
//     },
//   ];

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: {
//       opacity: 0,
//       y: 30,
//       scale: 0.9,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   };

//   const cardHoverVariants: Variants = {
//     hover: {
//       y: -8,
//       scale: 1.02,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

//   const badgeHoverVariants: Variants = {
//     hover: {
//       scale: 1.05,
//       transition: {
//         duration: 0.2,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       id="skills"
//       className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-800 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={containerVariants}
//           className="max-w-7xl mx-auto"
//         >
//           {/* Header */}
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
//               Skills & Expertise
//             </h2>
//             <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//               Full-stack development with focus on scalable solutions,
//               <span className="font-semibold text-foreground">
//                 {" "}
//                 DevOps practices
//               </span>
//               , and
//               <span className="font-semibold text-foreground">
//                 {" "}
//                 cloud infrastructure
//               </span>
//               .
//             </p>
//           </motion.div>

//           {/* Core Technologies */}
//           <motion.div variants={itemVariants} className="mb-20">
//             <div className="text-center mb-12">
//               <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
//                 Core Technologies
//               </h3>
//               <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
//             </div>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
//               {tecnologias.map((tech) => (
//                 <motion.div
//                   key={tech.nome}
//                   variants={itemVariants}
//                   whileHover="hover"
//                   variants={cardHoverVariants}
//                   className="group relative"
//                 >
//                   <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer h-full">
//                     <div
//                       className="mb-4 transition-all duration-300 group-hover:scale-110"
//                       style={{ color: tech.cor }}
//                     >
//                       {tech.icone}
//                     </div>
//                     <span className="text-base font-semibold text-card-foreground mb-2">
//                       {tech.nome}
//                     </span>
//                     <span className="text-xs text-muted-foreground font-medium px-2 py-1 bg-muted/50 rounded-full">
//                       {tech.categoria}
//                     </span>
//                   </div>
//                   {/* Glow effect */}
//                   <div
//                     className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
//                     style={{ backgroundColor: tech.cor }}
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* DevOps & Infrastructure */}
//           <motion.div variants={itemVariants} className="mb-20">
//             <div className="text-center mb-12">
//               <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
//                 DevOps & Infrastructure
//               </h3>
//               <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
//             </div>
//             <div className="flex flex-wrap justify-center gap-3 md:gap-4">
//               {devops.map((tool) => (
//                 <motion.div
//                   key={tool.nome}
//                   variants={itemVariants}
//                   whileHover="hover"
//                   variants={badgeHoverVariants}
//                   className="group relative"
//                 >
//                   <div
//                     className="px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer border backdrop-blur-sm"
//                     style={{
//                       backgroundColor: `${tool.cor}15`,
//                       color: tool.cor,
//                       borderColor: `${tool.cor}30`,
//                     }}
//                   >
//                     {tool.icone}
//                     {tool.nome}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Tools & Platforms */}
//           <motion.div variants={itemVariants}>
//             <div className="text-center mb-12">
//               <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
//                 Tools & Platforms
//               </h3>
//               <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
//             </div>
//             <div className="flex flex-wrap justify-center gap-3 md:gap-4">
//               {ferramentas.map((tool) => (
//                 <motion.div
//                   key={tool.nome}
//                   variants={itemVariants}
//                   whileHover="hover"
//                   variants={badgeHoverVariants}
//                   className="group relative"
//                 >
//                   <div
//                     className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer border backdrop-blur-sm hover:shadow-lg"
//                     style={{
//                       backgroundColor: `${tool.cor}10`,
//                       color: tool.cor,
//                       borderColor: `${tool.cor}20`,
//                     }}
//                   >
//                     {tool.icone}
//                     {tool.nome}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;
