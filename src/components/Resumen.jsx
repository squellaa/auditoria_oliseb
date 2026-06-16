import React from 'react';
import { Store, ShieldCheck, ClipboardList } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-300">
            <Store className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">SuperMax — Auditoría de Portal de Clientes</h1>
            <p className="text-sm text-slate-400">Evaluación de seguridad de datos de fidelización y comportamiento de compra.</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-300">
          <p>
            Este portal auditado representa el sistema de SuperMax para que los clientes consulten sus puntos de fidelidad, sus hábitos de compra y los beneficios acumulados en su cuenta. Su diseño simula un entorno de gestión de información sensible donde la integridad de los datos es crítica.
          </p>
          <p>
            Proteger los activos de información de SuperMax es clave porque las tarjetas de fidelidad y los historiales transaccionales permiten rastrear patrones de consumo y, en manos equivocadas, facilitan el fraude, el robo de identidad y la manipulación de recompensas.
          </p>
          <p>
            Esta auditoría identifica las amenazas más relevantes al portal, documenta las vulnerabilidades técnicas encontradas y propone controles para asegurar que los clientes puedan consultar sus datos sin exponer su privacidad ni comprometer la operación comercial.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" /> Alcance de la auditoría
          </h2>
          <p className="text-sm text-slate-400">
            Revisión de mecanismos de autenticación, protección de consultas en el backend, y control de salida de datos hacia el navegador en un portal de clientes enfocado en fidelización.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-sky-400" /> Activos críticos
          </h2>
          <p className="text-sm text-slate-400">
            Tarjetas de fidelización, saldos de puntos, historial de compras, datos personales de clientes y controles de sesión en el navegador.
          </p>
        </div>
      </div>
    </div>
  );
}
