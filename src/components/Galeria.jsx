import React from 'react';
import { Image, Camera } from 'lucide-react';

const images = [
  {
    src: '/img/sqli_oliseb.png',
    alt: 'Evidencia de Inyección SQL',
    label: 'SQLi - Payload: "\' OR \'1\'=\'1\'"',
  },
  {
    src: '/img/xss_oliseb.png',
    alt: 'Evidencia de XSS Reflejado',
    label: 'XSS Reflejado - Evidencia de script malicioso',
  },
  {
    src: '/img/comandos_oliseb.png',
    alt: 'Evidencia de Inyección de Comandos',
    label: 'Inyección de comandos - Lista de usuarios del sistema',
  },
];

export default function Galeria() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Image className="text-emerald-400 w-7 h-7" /> Galería de Evidencias
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Capturas de los ataques documentados en la auditoría de SuperMax. Las imágenes muestran los resultados reales de cada prueba.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-400">
          <Camera className="w-4 h-4 text-slate-300" /> 3 evidencias
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {images.map((image) => (
          <div key={image.src} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-slate-950/20">
            <img
              src={image.src}
              alt={image.alt}
              className="h-64 w-full object-cover"
              loading="lazy"
              onError={(e) => { e.target.src = 'https://placehold.co/600x400/1e293b/fff?text=Evidencia'; }}
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-white">{image.alt}</h3>
              <p className="mt-2 text-sm text-slate-400">{image.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
