import { Boxes, ShieldAlert } from 'lucide-react';

const activos = [
  {
    activo: 'Base de datos de clientes y fidelizacion',
    clasificacion: 'Critico',
    industria: 'Retail: concentra puntos, historial de compra y datos personales.',
    vulnerabilidades: 'Inyeccion SQL, Inyeccion de comandos',
  },
  {
    activo: 'Servidor del portal de clientes',
    clasificacion: 'Critico',
    industria: 'Retail: continuidad operativa del canal digital y promociones.',
    vulnerabilidades: 'Inyeccion de comandos',
  },
  {
    activo: 'Sesion y autenticacion de clientes',
    clasificacion: 'Alto',
    industria: 'Retail: protege canje de beneficios y fraude de cuentas.',
    vulnerabilidades: 'XSS reflejado',
  },
  {
    activo: 'Catalogo de promociones y reglas de puntos',
    clasificacion: 'Alto',
    industria: 'Retail: impacto directo en ingresos y fidelizacion.',
    vulnerabilidades: 'Inyeccion SQL, XSS reflejado',
  },
  {
    activo: 'Registros de auditoria y trazabilidad',
    clasificacion: 'Medio-Alto',
    industria: 'Retail: permite investigacion de fraude y cumplimiento.',
    vulnerabilidades: 'Inyeccion de comandos',
  },
];

export default function Activos() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          <Boxes className="w-7 h-7 text-cyan-300" /> Activos y Riesgos por Industria
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          En SuperMax (rubro retail), los activos de informacion no tienen el mismo peso. Esta seccion clasifica los activos del portal y vincula cada vulnerabilidad con los activos de negocio que quedan expuestos.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-800 text-slate-300">
              <th className="px-3 py-3 text-left">Activo</th>
              <th className="px-3 py-3 text-left">Clasificacion</th>
              <th className="px-3 py-3 text-left">Relacion con industria</th>
              <th className="px-3 py-3 text-left">Vulnerabilidades asociadas</th>
            </tr>
          </thead>
          <tbody>
            {activos.map((row) => (
              <tr key={row.activo} className="border-b border-slate-800/70 align-top">
                <td className="px-3 py-3 text-white font-medium">{row.activo}</td>
                <td className="px-3 py-3 text-slate-300">{row.clasificacion}</td>
                <td className="px-3 py-3 text-slate-300">{row.industria}</td>
                <td className="px-3 py-3 text-slate-300">{row.vulnerabilidades}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-400" /> Riesgo transversal del rubro retail
        </h3>
        <p className="mt-3 text-sm text-slate-300 leading-7">
          El riesgo mas sensible para SuperMax es el fraude de fidelizacion y el dano reputacional por fuga de datos. Por eso, la priorizacion pone primero vulnerabilidades que afectan base de clientes y continuidad del portal.
        </p>
      </div>
    </section>
  );
}
