import { LifeBuoy, ServerCrash } from 'lucide-react';

const mejoras = [
  'WAF administrado frente al portal para filtrar SQLi/XSS/Command Injection.',
  'Segmentacion de red entre capa web, aplicacion y base de datos.',
  'Backups inmutables de base de datos y configuracion critica.',
  'SIEM centralizado con alertas de eventos de seguridad.',
];

const dr = [
  'Deteccion y declaracion del incidente por el CSIRT interno (0-15 min).',
  'Contencion: aislar host o servicio comprometido y cortar vector de ataque (15-45 min).',
  'Restauracion desde backup verificado en entorno limpio (RTO objetivo: 4 horas).',
  'Validacion funcional y de integridad antes de reabrir el portal.',
  'Notificacion a gerencia, equipo legal y clientes afectados segun impacto.',
  'Lecciones aprendidas y ajuste de controles en maximo 72 horas.',
];

export default function Recuperacion() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          <LifeBuoy className="w-7 h-7 text-sky-300" /> Mejora Tecnologica y Recuperacion (DR)
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Para el rubro retail, la continuidad del portal de clientes impacta ventas, promociones y reputacion. Este plan combina mejora tecnologica con recuperacion operativa ante incidentes graves.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
          <h3 className="text-lg font-semibold text-white">Mejoras tecnologicas (3.1.6)</h3>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-slate-300">
            {mejoras.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <ServerCrash className="w-5 h-5 text-red-300" /> Plan DR (respaldo, restauracion y notificacion)
          </h3>
          <ol className="mt-4 list-decimal pl-5 space-y-2 text-sm text-slate-300">
            {dr.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">Referencias: NIST SP 800-34 (Contingency Planning), ISO 22301 (Continuidad), NIST SP 800-61 (Incident Response).</p>
        </article>
      </div>
    </section>
  );
}
