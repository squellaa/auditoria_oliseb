import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

export default function Matriz() {
  const probabilityLevels = [1, 2, 3, 4, 5];
  const impactLevels = [5, 4, 3, 2, 1];

  const riskItems = [
    {
      name: 'Inyeccion de comandos',
      probability: 4,
      impact: 5,
      cvss: '9.8 (Critica)',
      reason: 'Requiere poca complejidad tecnica y permite lectura de archivos del sistema con alto impacto operacional.',
    },
    {
      name: 'Inyeccion SQL',
      probability: 4,
      impact: 4,
      cvss: '8.2 (Alta)',
      reason: 'El payload bypassa filtros basicos y permite exponer datos masivos de clientes del portal.',
    },
    {
      name: 'XSS reflejado',
      probability: 3,
      impact: 3,
      cvss: '6.1 (Media)',
      reason: 'Depende de interaccion del usuario, pero habilita robo de sesion y suplantacion de cuentas.',
    },
  ];

  const getScore = (impact, probability) => impact * probability;

  const getCellClasses = (score) => {
    if (score >= 15) return 'bg-red-500/20 text-red-100 border-red-600';
    if (score >= 8) return 'bg-amber-500/20 text-amber-100 border-amber-600';
    return 'bg-emerald-500/20 text-emerald-100 border-emerald-600';
  };

  const getBadgeClasses = (score) => {
    if (score >= 15) return 'border-red-500/25 bg-red-500/10 text-red-300';
    if (score >= 8) return 'border-amber-500/25 bg-amber-500/10 text-amber-300';
    return 'border-emerald-500/25 bg-emerald-500/10 text-emerald-300';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Shield className="text-violet-400 w-7 h-7" /> Matriz de Riesgo
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Evaluacion de riesgos para SuperMax. La matriz cruza probabilidad e impacto con el modelo riesgo = probabilidad x impacto, para priorizar la remediacion de forma coherente con la evidencia tecnica.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-300">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="font-semibold">Mayor riesgo:</span>
          </div>
          <p>Inyeccion de comandos en backend: probabilidad 4 e impacto 5, puntaje 20 (critico).</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/30">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-slate-400">Impacto \ Probabilidad</th>
              {probabilityLevels.map((value) => (
                <th key={value} className="px-4 py-3 text-center text-slate-300 font-semibold">{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {impactLevels.map((impact) => (
              <tr key={impact}>
                <td className="px-4 py-3 text-slate-300 font-semibold">{impact}</td>
                {probabilityLevels.map((probability) => {
                  const score = getScore(impact, probability);
                  return (
                  <td
                    key={`${impact}-${probability}`}
                    className={`${getCellClasses(score)} border px-4 py-4 text-center font-semibold`}
                  >
                    {score}
                  </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
        <h3 className="text-base font-semibold text-white">Asignacion de puntaje por vulnerabilidad</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {riskItems.map((item) => {
            const score = getScore(item.impact, item.probability);
            return (
              <article key={item.name} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs text-slate-400">CVSS 3.1: {item.cvss}</p>
                <div className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${getBadgeClasses(score)}`}>
                  P {item.probability} x I {item.impact} = {score}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.reason}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Verde</span>
          <p className="mt-2 text-sm text-slate-300">Riesgo bajo: 1 a 7, mantener controles y monitoreo.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Amarillo</span>
          <p className="mt-2 text-sm text-slate-300">Riesgo medio: 8 a 14, requiere mitigacion priorizada.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Rojo</span>
          <p className="mt-2 text-sm text-slate-300">Riesgo alto: 15 a 25, remediacion inmediata y plan de contingencia.</p>
        </div>
      </div>
    </div>
  );
}
