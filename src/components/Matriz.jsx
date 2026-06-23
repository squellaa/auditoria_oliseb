import React from 'react';
import { Shield, AlertTriangle, Target } from 'lucide-react';

export default function Matriz() {
  const probabilityLevels = [1, 2, 3, 4, 5];
  const impactLevels = [5, 4, 3, 2, 1];

  const riskItems = [
    {
      name: 'Inyeccion de comandos',
      short: 'CMD',
      probability: 4,
      impact: 5,
      cvss: '9.8 (Critica)',
      reason: 'Requiere poca complejidad tecnica y permite lectura de archivos del sistema con alto impacto operacional.',
    },
    {
      name: 'Inyeccion SQL',
      short: 'SQLi',
      probability: 4,
      impact: 4,
      cvss: '8.2 (Alta)',
      reason: 'El payload bypassa filtros basicos y permite exponer datos masivos de clientes del portal.',
    },
    {
      name: 'XSS reflejado',
      short: 'XSS',
      probability: 3,
      impact: 3,
      cvss: '6.1 (Media)',
      reason: 'Depende de interaccion del usuario, pero habilita robo de sesion y suplantacion de cuentas.',
    },
  ];

  const getScore = (impact, probability) => impact * probability;

  const getCellClasses = (score) => {
    if (score >= 15) return 'bg-red-600/25 text-red-50 border-red-500';
    if (score >= 8) return 'bg-amber-500/25 text-amber-50 border-amber-500';
    return 'bg-emerald-500/20 text-emerald-50 border-emerald-500';
  };

  const getBadgeClasses = (score) => {
    if (score >= 15) return 'border-red-500/25 bg-red-500/10 text-red-300';
    if (score >= 8) return 'border-amber-500/25 bg-amber-500/10 text-amber-300';
    return 'border-emerald-500/25 bg-emerald-500/10 text-emerald-300';
  };

  const getAttackAtCell = (impact, probability) =>
    riskItems.find((item) => item.impact === impact && item.probability === probability);

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

      <div className="overflow-x-auto rounded-3xl border border-slate-700 bg-slate-900/90 p-4 shadow-xl shadow-red-950/20">
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
                  const attack = getAttackAtCell(impact, probability);
                  return (
                  <td
                    key={`${impact}-${probability}`}
                    className={`${getCellClasses(score)} border px-3 py-3 text-center font-semibold align-top min-w-28`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-bold tracking-[0.08em] ${score >= 15 ? 'bg-red-700/60 ring-2 ring-red-300/60' : score >= 8 ? 'bg-amber-700/50' : 'bg-emerald-700/40'}`}>
                        {score}
                      </span>
                      {attack ? (
                        <div className="w-full rounded-lg border border-white/30 bg-slate-950/55 px-2 py-1 text-[11px] leading-4 text-white ring-1 ring-white/20">
                          <div className="inline-flex items-center gap-1 font-semibold">
                            <Target className="w-3 h-3" /> {attack.short}
                          </div>
                          <div className="mt-0.5 text-[10px] text-slate-200">P {attack.probability} x I {attack.impact}</div>
                        </div>
                      ) : (
                        <span className="text-[10px] text-slate-300/70">-</span>
                      )}
                    </div>
                  </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-3xl border border-slate-700 bg-slate-900/85 p-5">
        <h3 className="text-base font-semibold text-white">Ataques marcados y justificacion del puntaje</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {riskItems.map((item) => {
            const score = getScore(item.impact, item.probability);
            return (
              <article key={item.name} className={`rounded-2xl border bg-slate-950/70 p-4 ${score >= 15 ? 'border-red-500/50 ring-1 ring-red-400/30 shadow-lg shadow-red-950/30' : score >= 8 ? 'border-amber-500/40 ring-1 ring-amber-300/20' : 'border-emerald-500/30'}`}>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs text-slate-400">CVSS 3.1: {item.cvss}</p>
                <div className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${getBadgeClasses(score)}`}>
                  P {item.probability} x I {item.impact} = {score}
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Celda marcada en matriz: ({item.impact}, {item.probability})
                </p>
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
