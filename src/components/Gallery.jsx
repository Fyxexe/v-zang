import React from 'react';
import { motion } from 'framer-motion';

const students = [
  { name: "Աննա Ծերունյան", image: "/students/Anna_Ceruynyan.jpg" },
  { name: "Արման Գասպարյան", image: "/students/Arman_Gasparyan.jpg" },
  { name: "Արման Մաթևոսյան", image: "/students/Arman_Matevosyan.jpg" },
  { name: "Էլեն Մարտիրոսյան", image: "/students/Elen_Martirosyan.jpg" },
  { name: "Էսթեր Մինասյան", image: "/students/Ester_Minasyan.jpg" },
  { name: "Գևորգ Ոսկանյան", image: "/students/Gevorg_Voskanyan.jpg" },
  { name: "Հովհաննես Մարտիրոսյան", image: "/students/Hovhannes_Martirosyan.jpg" },
  { name: "Ջուլյա Հարությունյան", image: "/students/Julya_Harutyunyan.jpg" },
  { name: "Կարինե Իգիթյան", image: "/students/Karine_Igityan.jpg" },
  { name: "Կարինե Պետրոսյան", image: "/students/Karine_Petrosyan.jpg" },
  { name: "Լիա Առաքելյան", image: "/students/Lia_Arakelyan.jpg" },
  { name: "Լիպարիտ Տիգրանյան", image: "/students/Liiparit_Tigranyan.jpg" },
  { name: "Լիլի Բաբուջյան", image: "/students/Lili_Babujyan.jpg" },
  { name: "Մանե Փանոսյան", image: "/students/Mane_Panosyan.jpg" },
  { name: "Մարգարիտա Գևորգյան", image: "/students/Margarita_Gevorgyan.jpg" },
  { name: "Մերի Սաֆարյան", image: "/students/Meri_Safaryan.jpg" },
  { name: "Նաիրա Հովհաննիսյան", image: "/students/Naira_Hovhannisyan.jpg" },
  { name: "Ռիմա Եղոյան", image: "/students/Rima_Exoyan.jpg" },
  { name: "Սամվել Սահակյան", image: "/students/Samvel_Sahakyan.jpg" },
  { name: "Սամվել Շավալադյան", image: "/students/Samvel_Shavaladzyan.jpg" },
  { name: "Սոֆյա Սարգսյան", image: "/students/Sofia_Sargsyan.jpg" },
];

const collective = [
  { name: "Մեր Աղջիկները", image: "/students/AllGirls.jpg", rotation: -5, x: -20 },
  { name: "Մեր Տղաները", image: "/students/AllBoys.jpg", rotation: 3, x: 0 },
  { name: "Մեր Դասարանը", image: "/students/All.jpg", rotation: -2, x: 20 },
];

const Gallery = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">ՄԵՐ ԴԱՍԱՐԱՆԸ</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32">
        {students.map((student, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: (index % 4) * 0.1 }}
            viewport={{ once: true }}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl glass border border-white/5 neon-border"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xl font-bold text-white tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform">
                {student.name}
              </p>
              <p className="text-neon-blue text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                9Բ Դասարան
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scattered Photos Section */}
      <div className="relative py-20 mt-20">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4 text-slate-400">ՀՈՒՇԵՐ ԴՊՐՈՑԱԿԱՆ ԿՅԱՆՔԻՑ</h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {collective.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotate: photo.rotation,
                transition: { duration: 0.8, delay: index * 0.2 }
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 50,
                transition: { duration: 0.3 } 
              }}
              viewport={{ once: true }}
              className="relative p-3 pb-12 bg-white shadow-2xl shadow-black/50 border border-slate-200"
              style={{ width: '300px' }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 mb-4">
                <img 
                  src={photo.image} 
                  alt={photo.name}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-center font-handwriting text-slate-800 text-xl font-bold" style={{ fontFamily: 'cursive' }}>
                {photo.name}
              </p>
              
              {/* Photo paper texture/shine effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
