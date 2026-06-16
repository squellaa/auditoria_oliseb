import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

export default function Matriz() {
  const rows = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 5],
    [3, 4, 5, 5, 5],
    [4, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
  ];

  const getCellClasses = (score) => {
    if (score >= 4) return 'bg-red-500/20 text-red-100 border-red-600';
    if (score === 3) return 'bg-amber-500/20 text-amber-100 border-amber-600';
    return 'bg-emerald-500/20 text-emerald-100 border-emerald-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Shield className="text-violet-400 w-7 h-7" /> Matriz de Riesgo
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Evaluación de riesgos para SuperMax. Esta matriz cruza la probabilidad de que ocurra un evento con su impacto sobre la confidencialidad, integridad y disponibilidad de los datos de fidelización.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-300">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="font-semibold">Mayor riesgo:</span>
          </div>
          <p>Filtración de la base de datos de clientes de fidelización, incluyendo puntos, compras y datos de sesión.</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/30">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-slate-400">Impacto \ Probabilidad</th>
              {[1, 2, 3, 4, 5].map((value) => (
                <th key={value} className="px-4 py-3 text-center text-slate-300 font-semibold">{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td className="px-4 py-3 text-slate-300 font-semibold">{5 - idx}</td>
                {row.map((score, index) => (
                  <td
                    key={index}
                    className={`${getCellClasses(score)} border px-4 py-4 text-center font-semibold`}
                  >
                    {score}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Verde</span>
          <p className="mt-2 text-sm text-slate-300">Riesgo bajo: impacto y probabilidad reducidos.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Amarillo</span>
          <p className="mt-2 text-sm text-slate-300">Riesgo medio: requiere controles adicionales y monitoreo.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Rojo</span>
          <p className="mt-2 text-sm text-slate-300">Riesgo alto: prioridad máxima para mitigar la filtración de datos críticos.</p>
        </div>
      </div>
    </div>
  );
}
