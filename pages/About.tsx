
import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';
import Reveal from '../components/Reveal';

const doctors = [
  {
    name: "Dr Marko Petrović",
    role: "Specijalista oralne hirurgije",
    image: "https://ik.imagekit.io/digitusmarkus/Nova%20Dent/Dr%20Marko%20V2.jpg"
  },
  {
    name: "Dr Ana Jovanović",
    role: "Specijalista ortodoncije",
    image: "https://ik.imagekit.io/digitusmarkus/Nova%20Dent/Dr%20Ana%20V2.jpg"
  },
  {
    name: "Dr Katarina Baštinac",
    role: "Estetska stomatologija",
    image: "https://ik.imagekit.io/digitusmarkus/Nova%20Dent/Dr%20Katarina.jpg"
  },
  {
    name: "Ivana Pantić",
    role: "Asistent",
    image: "https://ik.imagekit.io/digitusmarkus/Nova%20Dent/Ivana%20V2.jpg"
  }
];

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-24 lg:pt-52 lg:pb-32 bg-white relative">
      {/* Zaglavlje */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 lg:mb-32">
        <Reveal className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">O nama</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Nova Dent je osnovan sa vizijom da stomatologiju učini prijatnom, pristupačnom i beskompromisno kvalitetnom.
          </p>
        </Reveal>
      </div>

      {/* Priča sekcija */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 lg:mb-40 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal width="100%">
            <div className="relative group">
              <div className="absolute -inset-4 bg-teal-100 rounded-2xl transform rotate-3 -z-10"></div>
              <div className="rounded-2xl shadow-lg overflow-hidden h-[450px]">
                <img 
                  src="https://ik.imagekit.io/digitusmarkus/Nova%20Dent/ENV%20V2.jpg" 
                  alt="Enterijer Nova Dent ordinacije" 
                  className="w-full h-full object-cover object-[25%_center] lg:object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
          <Reveal className="space-y-8" delay={0.2}>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Tradicija i inovacija</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Naša ordinacija posluje više od 10 godina, neprestano ulažući u edukaciju našeg kadra i modernizaciju opreme. Verujemo da pacijent treba da se oseća kao kod kuće, a ne u kliničkom okruženju.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Kombinujemo dokazane metode lečenja sa najnovijim dostignućima digitalne stomatologije kako bismo osigurali brze, precizne i dugotrajne rezultate.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="border-l-4 border-teal-500 pl-6">
                <p className="text-4xl font-bold text-slate-900">800+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Zadovoljnih pacijenata</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-6">
                <p className="text-4xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Posvećenost</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Vrednosti */}
      <div className="bg-slate-50 py-24 lg:py-32 mb-32 lg:mb-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: <Users size={28} />, title: "Pacijent u centru", desc: "Slušamo vaše želje i strahove kako bismo kreirali najugodnije iskustvo." },
               { icon: <Award size={28} />, title: "Izvrsnost", desc: "Ne pristajemo na prosečnost. Težimo perfekciji u svakom zahvatu." },
               { icon: <BookOpen size={28} />, title: "Edukacija", desc: "Naš tim redovno posećuje svetske kongrese i seminare." }
             ].map((val, idx) => (
               <Reveal key={idx} delay={idx * 0.15}>
                 <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      {val.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                 </div>
               </Reveal>
             ))}
          </div>
        </div>
      </div>

      {/* Tim sekcija */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pb-12">
        <Reveal className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900">Upoznajte naš tim</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 aspect-[3/4] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold">{doc.name}</h3>
                    <p className="text-teal-400 text-sm font-medium">{doc.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
