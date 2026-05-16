import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Details = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-22T10:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { icon: Calendar, label: "Ամսաթիվ", value: "Մայիսի 22, 2026", color: "text-neon-blue" },
          { icon: Clock, label: "Ժամ", value: "10:00", color: "text-neon-purple" },
          { icon: MapPin, label: "Վայր", value: "Դպրոցի հանդիսությունների դահլիճ", color: "text-neon-pink" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-white/20 transition-all"
          >
            <item.icon className={`w-8 h-8 ${item.color} mb-4 group-hover:scale-110 transition-transform`} />
            <span className="text-slate-400 text-sm uppercase tracking-widest mb-2">{item.label}</span>
            <span className="text-xl font-bold">{item.value}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass p-12 rounded-3xl border border-white/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 pointer-events-none" />
        
        <h3 className="text-2xl font-bold text-center mb-10 tracking-wider">ՄԻՆՉ ՄԻՋՈՑԱՌՄԱՆ ՄԵԿՆԱՐԿԸ</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={unit} className="flex flex-col">
              <span className="text-5xl md:text-7xl font-black text-white mb-2 tabular-nums">
                {value.toString().padStart(2, '0')}
              </span>
              <span className="text-slate-500 uppercase tracking-widest text-xs">
                {unit === 'days' ? 'Օր' : unit === 'hours' ? 'Ժամ' : unit === 'minutes' ? 'Րոպե' : 'Վայրկյան'}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Details;
