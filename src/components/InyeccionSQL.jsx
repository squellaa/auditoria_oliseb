import React from 'react';
import { Database, Eye, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function InyeccionSQL() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Database className="text-amber-500 w-7 h-7" /> Inyección SQL
        </h2>
        <span className="bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-full border border-red-500/20 font-semibold">
          CVSS 3.1: 7.5 (Alta)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Impacto en SuperMax
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              El portal concatena la entrada del usuario directamente en la consulta SQL sin sanitizarla. Con el payload <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-400 text-xs">' OR '1'='1</code>, la consulta se altera y puede devolver datos de clientes, puntos de fidelización y contraseñas hash.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Defensa recomendada
            </h3>
            <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
              <li>Implementar Consultas Parametrizadas (Prepared Statements).</li>
              <li>Separar siempre el código SQL de los datos de usuario.</li>
              <li>Validar y sanitizar entradas antes de ejecutar consultas.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2 rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <h3 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
            <Eye className="w-4 h-4 text-slate-400" /> Evidencia del Laboratorio
          </h3>
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900 p-2">
            <img
              src="/img/sqli_oliseb.png"
              alt="Evidencia SQLi"
              className="w-full h-auto rounded-lg object-cover"
              onError={(e) => { e.target.src = 'https://placehold.co/600x400/1e293b/fff?text=Evidencia+sqli_oliseb.png'; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
