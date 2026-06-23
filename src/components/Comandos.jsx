import { Terminal } from 'lucide-react';

const Comandos = () => {
  const probability = 4;
  const impact = 5;
  const riskScore = probability * impact;

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-8 shadow-xl shadow-slate-950/20">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-400">
            <Terminal className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-amber-400">Inyección de Comandos</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-50">Ejecución de comandos no autorizada</h2>
          </div>
        </div>

        <div className="mt-8 space-y-4 text-slate-400">
          <p>
            Se identificó una vulnerabilidad en la cual la aplicación ejecuta comandos del sistema utilizando entradas del usuario sin validación ni limitación.
          </p>
          <p>
            Esto permite a un atacante ejecutar comandos arbitrarios, comprometer el servidor y exfiltrar archivos sensibles.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 text-slate-400 shadow-xl shadow-slate-950/20">
          <h3 className="text-xl font-semibold text-slate-100">Payload</h3>
          <pre className="mt-4 rounded-3xl bg-slate-900/80 p-4 text-sm text-amber-300">
            <code>{`127.0.0.1; cat /etc/passwd`}</code>
          </pre>
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 text-slate-400 shadow-xl shadow-slate-950/20">
          <h3 className="text-xl font-semibold text-slate-100">Impacto</h3>
          <p className="mt-4">Control del servidor, exfiltración de datos y compromiso de la infraestructura del portal.</p>
          <p className="mt-3 text-sm text-slate-500">CVSS 3.1: 9.8 (Crítica)</p>
          <p className="mt-3 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-200">
            Puntaje de riesgo de negocio: Probabilidad {probability} x Impacto {impact} = {riskScore} (critico).
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Justificacion: el ataque compromete el servidor base y habilita lectura de archivos del sistema con impacto transversal en confidencialidad, integridad y disponibilidad.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 text-slate-400 shadow-xl shadow-slate-950/20">
        <h3 className="text-xl font-semibold text-slate-100">Evidencia Visual</h3>
        <p className="mt-3 text-sm text-slate-400">
          Resultado del ataque de inyeccion de comandos en el entorno de pruebas del portal SuperMax.
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-2">
          <img
            src="/img/comandos_oliseb.png"
            alt="Evidencia de Inyeccion de Comandos"
            className="h-auto w-full rounded-xl object-cover"
            loading="lazy"
            onError={(e) => { e.target.src = 'https://placehold.co/1200x700/1e293b/fff?text=Evidencia+comandos_oliseb.png'; }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 text-slate-400 shadow-xl shadow-slate-950/20">
        <h3 className="text-xl font-semibold text-slate-100">Politica de prevencion (3.1.4)</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
          <li>Evitar la ejecución de comandos del sistema con datos de usuario.</li>
          <li>Usar APIs seguras de alto nivel en lugar de `exec` o `shell`.</li>
          <li>Implementar listas blancas y ejecutar procesos como un usuario con mínimos privilegios.</li>
        </ul>
        <h4 className="mt-5 text-base font-semibold text-slate-100">Control de mitigacion (3.1.5)</h4>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
          <li>Aislar el servicio en contenedor sin acceso directo al sistema operativo anfitrion.</li>
          <li>Monitorear ejecucion de comandos anormales con alertas de seguridad en servidor.</li>
        </ul>
        <p className="mt-3 text-xs text-slate-500">Marco de referencia: OWASP Top 10 A03, OWASP ASVS V10, NIST SP 800-53 SI-4 e IR-4.</p>
      </div>
    </section>
  );
};

export default Comandos;
