import { ShieldCheck, ShieldX } from 'lucide-react';

const prevencion = [
  {
    riesgo: 'Inyeccion de comandos (Prioridad 1)',
    politica: 'Eliminar ejecucion de shell con entrada de usuario y aplicar listas blancas estrictas.',
  },
  {
    riesgo: 'Inyeccion SQL (Prioridad 2)',
    politica: 'Prepared statements obligatorios y validacion de entrada tipada en backend.',
  },
  {
    riesgo: 'XSS reflejado (Prioridad 3)',
    politica: 'Output encoding contextual + CSP estricta sin inline scripts.',
  },
];

const mitigacion = [
  {
    riesgo: 'Riesgos rojos/naranjos (20 y 16)',
    control: 'WAF con reglas de inyeccion y bloqueo por reputacion de IP.',
  },
  {
    riesgo: 'Compromiso de servidor',
    control: 'Segmentacion de red, hardening del host y minimo privilegio en servicios.',
  },
  {
    riesgo: 'Fraude de sesion y cuentas',
    control: 'Monitoreo SIEM, deteccion de anomalias y respuesta automatizada de cuentas.',
  },
];

export default function Controles() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          <ShieldCheck className="w-7 h-7 text-emerald-300" /> Prevencion y Mitigacion Priorizada
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Las medidas se aplican segun criticidad de la matriz: primero riesgos rojos, luego naranjos. Se separa prevencion (causa raiz) de mitigacion (reduccion de impacto y tiempo de exposicion).
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
          <h3 className="text-lg font-semibold text-white">Politicas de prevencion (3.1.4)</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {prevencion.map((item) => (
              <li key={item.riesgo} className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                <p className="font-semibold text-white">{item.riesgo}</p>
                <p className="mt-1">{item.politica}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <ShieldX className="w-5 h-5 text-amber-300" /> Controles de mitigacion (3.1.5)
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {mitigacion.map((item) => (
              <li key={item.riesgo} className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                <p className="font-semibold text-white">{item.riesgo}</p>
                <p className="mt-1">{item.control}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">Marco de referencia: OWASP Top 10 2021 (A03), CIS Controls v8 (4, 8, 13), NIST SP 800-53 (SI-4, IR-4, AC-6).</p>
        </article>
      </div>
    </section>
  );
}
