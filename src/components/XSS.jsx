import { AlertTriangle } from 'lucide-react';

const XSS = () => {
  const probability = 3;
  const impact = 3;
  const riskScore = probability * impact;

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-8 shadow-xl shadow-slate-950/20">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-rose-500/10 text-rose-400">
            <AlertTriangle className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-rose-400">XSS Reflejado</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-50">Inyección de Script en la Interfaz</h2>
          </div>
        </div>

        <div className="mt-8 space-y-4 text-slate-400">
          <p>
            Se encontró una vulnerabilidad de Cross-Site Scripting reflejado en el portal de clientes. La aplicación devuelve contenido de usuario en HTML sin escape adecuado, permitiendo inyectar código JavaScript.
          </p>
          <p>
            Este problema puede ser aprovechado para robar cookies de sesión, capturar datos del cliente o redirigir a la víctima a páginas maliciosas.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 text-slate-400 shadow-xl shadow-slate-950/20">
          <h3 className="text-xl font-semibold text-slate-100">Payload</h3>
          <pre className="mt-4 rounded-3xl bg-slate-900/80 p-4 text-sm text-rose-300">
            <code>{`<script>alert('XSS')</script>`}</code>
          </pre>
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 text-slate-400 shadow-xl shadow-slate-950/20">
          <h3 className="text-xl font-semibold text-slate-100">Impacto</h3>
          <p className="mt-4">Robo de credenciales, secuestro de sesión, manipulación de contenido y potencial acceso no autorizado a datos del cliente.</p>
          <p className="mt-3 text-sm text-slate-500">CVSS 3.1: 6.1 (Media)</p>
          <p className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs text-amber-200">
            Puntaje de riesgo de negocio: Probabilidad {probability} x Impacto {impact} = {riskScore} (medio).
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Justificacion: requiere que la victima abra un enlace manipulado, pero puede secuestrar sesion y afectar cuentas de fidelizacion.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 text-slate-400 shadow-xl shadow-slate-950/20">
        <h3 className="text-xl font-semibold text-slate-100">Evidencia Visual</h3>
        <p className="mt-3 text-sm text-slate-400">
          Resultado del ataque XSS reflejado en el entorno de pruebas del portal SuperMax.
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-2">
          <img
            src="/img/xss_oliseb.png"
            alt="Evidencia de XSS Reflejado"
            className="h-auto w-full rounded-xl object-cover"
            loading="lazy"
            onError={(e) => { e.target.src = 'https://placehold.co/1200x700/1e293b/fff?text=Evidencia+xss_oliseb.png'; }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 text-slate-400 shadow-xl shadow-slate-950/20">
        <h3 className="text-xl font-semibold text-slate-100">Politica de prevencion (3.1.4)</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
          <li>Escapar o codificar toda salida de datos controlada por el usuario.</li>
          <li>Aplicar políticas CSP estrictas.</li>
          <li>Validar y sanitizar entradas antes de renderizarlas.</li>
        </ul>
        <h4 className="mt-5 text-base font-semibold text-slate-100">Control de mitigacion (3.1.5)</h4>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
          <li>Configurar cookies de sesion con HttpOnly, Secure y SameSite.</li>
          <li>Monitorear eventos de secuestro de sesion y accesos anormales.</li>
        </ul>
        <p className="mt-3 text-xs text-slate-500">Marco de referencia: OWASP Top 10 A03, OWASP ASVS V5/V14, NIST SP 800-53 AU-6 y SI-10.</p>
      </div>
    </section>
  );
};

export default XSS;
