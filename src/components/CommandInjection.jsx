import React from 'react';
import { Terminal, ShieldOff, AlertTriangle } from 'lucide-react';

export default function CommandInjection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <Terminal className="text-red-400 w-7 h-7" />
          <h2 className="text-2xl font-bold text-white">Inyección de Comandos</h2>
        </div>
        <span className="bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-full border border-red-500/20 font-semibold">
          Severidad: 9.8 (Crítica)
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <p className="text-slate-400 text-sm leading-relaxed">
            La vulnerabilidad de inyección de comandos permite a un atacante ejecutar instrucciones arbitrarias en el servidor de la aplicación. En SuperMax, esto pondría en riesgo la operación logística del portal, los datos de los clientes y la infraestructura de cajas y almacenes.
          </p>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400" /> Impacto técnico
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm">
              <li>Ejecución de comandos del sistema operativo.</li>
              <li>Exposición de archivos críticos como /etc/passwd.</li>
              <li>Control total del servidor web y posible interrupción del servicio.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-3">Mitigación recomendada</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>Deshabilitar la ejecución de comandos desde entradas de usuario.</li>
            <li>Usar validación estricta y permitir sólo parámetros esperados.</li>
            <li>Ejecutar procesos con el menor privilegio posible y aislar el servidor.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
