import React from 'react';
import { Code, Eye, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function XSSReflejado() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Code className="text-sky-400 w-7 h-7" /> Cross-Site Scripting (XSS) Reflejado
        </h2>
        <span className="bg-amber-500/10 text-amber-400 text-xs px-3 py-1 rounded-full border border-amber-500/20 font-semibold">
          Severidad: 6.1 (Media)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <h3 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-sky-400" /> Riesgo de Negocio (SuperMax)
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Un atacante puede enviar enlaces maliciosos dirigidos a los clientes de <strong>SuperMax</strong>. Al abrirlos, se inyectan scripts maliciosos en sus navegadores capaces de robar sus cookies de sesión activa. Esto permitiría suplantar las cuentas de usuarios registrados para desviar sus puntos de fidelización acumulados y acceder de forma ilegítima a sus historiales transaccionales privados.
            </p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <h3 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Mitigación Propuesta
            </h3>
            <ul className="text-sm text-slate-400 space-y-1.5 list-disc list-inside">
              <li>Aplicar codificación contextual de datos de salida (Output Encoding) antes de renderizar cualquier entrada del usuario en el navegador.</li>
              <li>Configurar cookies de sesión críticas con las directivas de seguridad <code className="text-xs text-slate-300">HttpOnly</code> y <code className="text-xs text-slate-300">Secure</code> para mitigar el secuestro de sesiones vía JavaScript.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
            <Eye className="w-4 h-4 text-slate-400" /> Evidencia del Ataque:
          </h3>
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900 p-2">
            <img 
              src="/img/xss_oliseb.png" 
              alt="Evidencia XSS" 
              className="w-full h-auto rounded-lg object-cover"
              onError={(e) => { e.target.src = 'https://placehold.co/600x400/1e293b/fff?text=Evidencia+xss_oliseb.png'; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}