import { motion } from "framer-motion";

export const BackgroundText = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.4 }}
    transition={{ duration: 3 }}
    className="absolute inset-0 -z-10 text-terciar flex items-start justify-center opacity-30"
  >
    <div className="md:text-[16vw] text-[20vw] mt-80 sm:mt-70 lg:mt-20 xl:mt-10 font-bold tracking-tighter">
      {/* <span
        className="block md:hidden mt-50"
        style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
      >
        LET&apos;S TALK
      </span> */}
      <span className="block  whitespace-nowrap">LET&apos;S TALK</span>
    </div>
  </motion.div>
);
