import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Teacher = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-2xl rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">ՄԵՐ ՍԻՐԵԼԻ ԴԱՍՂԵԿ</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 glass p-10 rounded-2xl border border-white/10"
        >
          <Heart className="w-12 h-12 text-neon-pink mx-auto mb-6 fill-neon-pink/20 animate-bounce" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <span className="text-neon-blue text-sm uppercase tracking-widest">Մեր նախկին դասղեկ</span>
              <h3 className="text-3xl md:text-4xl font-black text-white/90">
                ԱՍՏՂԻԿ ՄԱԹԵՎՈՍՅԱՆ
              </h3>
            </div>
            
            <div className="space-y-2">
              <span className="text-neon-pink text-sm uppercase tracking-widest">Մեր ներկայիս դասղեկ</span>
              <h3 className="text-3xl md:text-4xl font-black text-white/90">
                ԱՆՈՒՇ ԱՖՐԻԿՅԱՆ
              </h3>
            </div>
          </div>

          <p className="mt-10 text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto italic">
            «Մեծարանքի և երախտագիտության խորին խոսքեր մեր սիրելի ուսուցիչներին: Շնորհակալ ենք Աստղիկ Մաթևոսյանին՝ մեր առաջին քայլերն ուղղորդելու և մեզ սիրով կրթելու համար, և Անուշ Աֆրիկյանին՝ այս պատասխանատու տարում մեր կողքին լինելու և մեզ դեպի նոր հորիզոններ առաջնորդելու համար: Ձեր տված լույսն ու գիտելիքը միշտ կուղեկցեն մեզ:»
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Teacher;
