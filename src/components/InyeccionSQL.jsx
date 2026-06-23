import React from 'react';
import { Database, Eye, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function InyeccionSQL() {
  const probability = 4;
  const impact = 4;
  const riskScore = probability * impact;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Database className="text-amber-500 w-7 h-7" /> Inyección SQL (SQLi)
        </h2>
        <span className="bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-full border border-red-500/20 font-semibold">
          Severidad: 8.2 (Alta)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <h3 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Impacto en SuperMax
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Al ingresar el payload malicioso <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-400 text-xs">' OR '1'='1</code> en el portal, se altera la lógica de la consulta backend. En el contexto de <strong>SuperMax</strong>, esto expone masivamente las tarjetas de fidelización, contraseñas hash, saldos de puntos y el historial de compras de todos los clientes registrados.
            </p>
            <p className="mt-3 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-200">
              Puntaje de riesgo de negocio: Probabilidad {probability} x Impacto {impact} = {riskScore} (alto).
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Justificacion: la explotacion es repetible con payload simple y compromete datos masivos del activo principal del negocio.
            </p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <h3 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Politica de prevencion (3.1.4)
            </h3>
            <ul className="text-sm text-slate-400 space-y-1.5 list-disc list-inside">
              <li>Implementar de forma obligatoria Consultas Parametrizadas (Prepared Statements).</li>
              <li>Validar y sanitizar fuertemente las entradas numéricas de los IDs de clientes.</li>
            </ul>
            <h3 className="mt-4 text-sm font-semibold text-slate-300 mb-2">Control de mitigacion (3.1.5)</h3>
            <ul className="text-sm text-slate-400 space-y-1.5 list-disc list-inside">
              <li>Aplicar principio de minimo privilegio al usuario de base de datos y segmentar tablas sensibles.</li>
              <li>Monitorear consultas anomalas y activar alertas por patrones de SQLi.</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">Marco de referencia: OWASP Top 10 A03, OWASP ASVS V5, NIST SP 800-53 SI-10.</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
            <Eye className="w-4 h-4 text-slate-400" /> Evidencia del Laboratorio:
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