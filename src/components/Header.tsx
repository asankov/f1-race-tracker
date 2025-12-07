import { motion } from "framer-motion";
import { Flag } from "lucide-react";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-12 mb-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 diagonal-stripe opacity-50" />

      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-sm f1-gradient mb-6 animate-pulse-glow"
        >
          <Flag className="w-8 h-8 text-primary-foreground" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-2"
        >
          <span className="text-gradient-f1">Our F1</span>{" "}
          <span className="text-primary">Journey ❤️</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg uppercase tracking-widest"
        >
          Track Vasi and Tony's F1 journey
        </motion.p>
      </div>
    </motion.header>
  );
};
