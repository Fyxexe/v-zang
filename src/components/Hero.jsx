import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 p-4 rounded-full glass border border-neon-blue/20"
      >
        <GraduationCap className="w-12 h-12 text-neon-blue animate-pulse-slow" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl font-medium text-neon-blue tracking-widest uppercase mb-4"
      >
        Ախուրյանի թիվ 1 հիմնական դպրոց
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
      >
        ՎԵՐՋԻՆ <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">ԶԱՆԳ</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white/90 mb-12"
      >
        9<span className="text-neon-pink">Բ</span> ԴԱՍԱՐԱՆ
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-neon-blue rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
