import React from 'react';
import { Image, Camera, ShieldAlert, CheckCircle2 } from 'lucide-react';

const evidencias = [
  {
    src: '/img/sqli_oliseb.png',
    alt: 'Evidencia de Inyeccion SQL',
    ataque: 'Inyeccion SQL',
    payload: "' OR '1'='1",
    resultado: 'La consulta devuelve multiples registros y expone datos de clientes.',
    cvss: '8.2 (Alta)',
    riesgo: '16/25',
    prioridad: 'Prioridad 2',
    color: 'red',
    figura:
      'Figura 1. Ejecucion propia en DVWA: se ingresa payload SQLi y se observa bypass de filtro con salida de multiples clientes.',
    prevencion: 'Prepared statements obligatorios y validacion tipada de entradas.',
    mitigacion: 'WAF + monitoreo de consultas anomalas + minimo privilegio en BD.',
    marco: 'OWASP Top 10 A03, OWASP ASVS V5, NIST SP 800-53 SI-10',
  },
  {
    src: '/img/comandos_oliseb.png',
    alt: 'Evidencia de Inyeccion de Comandos',
    ataque: 'Inyeccion de Comandos',
    payload: '127.0.0.1; cat /etc/passwd',
    resultado: 'Se ejecuta comando del sistema y se expone informacion sensible del host.',
    cvss: '9.8 (Critica)',
    riesgo: '20/25',
    prioridad: 'Prioridad 1',
    color: 'critical',
    figura:
      'Figura 2. Ejecucion propia en DVWA: el payload concatena comando de shell y evidencia lectura de archivos del servidor.',
    prevencion: 'Eliminar ejecucion de shell con entrada de usuario y aplicar allowlist estricta.',
    mitigacion: 'Aislamiento del servicio, SIEM/EDR y contencion rapida del host comprometido.',
    marco: 'OWASP Top 10 A03, OWASP ASVS V10, NIST SP 800-53 SI-4 e IR-4',
  },
  {
    src: '/img/xss_oliseb.png',
    alt: 'Evidencia de XSS Reflejado',
    ataque: 'XSS Reflejado',
    payload: "<script>alert('XSS')</script>",
    resultado: 'El script se refleja y ejecuta en navegador de la victima.',
    cvss: '6.1 (Media)',
    riesgo: '9/25',
    prioridad: 'Prioridad 3',
    color: 'amber',
    figura:
      'Figura 3. Ejecucion propia en DVWA: el payload XSS se refleja en la respuesta y ejecuta JavaScript.',
    prevencion: 'Output encoding contextual + CSP estricta sin scripts inline.',
    mitigacion: 'Cookies HttpOnly/Secure/SameSite + deteccion de secuestro de sesion.',
    marco: 'OWASP Top 10 A03, OWASP ASVS V5/V14, NIST SP 800-53 AU-6 y SI-10',
  },
];

const badgeStyles = {
  critical: 'border-red-300/45 bg-red-600/45 text-red-50',
  red: 'border-red-400/35 bg-red-500/30 text-red-50',
  amber: 'border-amber-300/45 bg-amber-500/30 text-amber-50',
};

export default function Galeria() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Image className="text-emerald-400 w-7 h-7" /> Galería de Evidencias
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Evidencia alineada con rubrica: cada ataque muestra payload, resultado observado, CVSS, puntaje de riesgo y controles asociados para prevencion/mitigacion.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-400">
          <Camera className="w-4 h-4 text-slate-300" /> 3 evidencias
        </span>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
        <h3 className="text-base font-semibold text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-300" /> Checklist de cumplimiento (rubrica)
        </h3>
        <div className="mt-3 grid gap-2 text-sm text-slate-300 md:grid-cols-3">
          <p>1. Evidencia propia de los 3 ataques con resultado visible.</p>
          <p>2. Clasificacion CVSS y riesgo de negocio por prueba.</p>
          <p>3. Politica de prevencion y control de mitigacion vinculados.</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-1 xl:grid-cols-3">
        {evidencias.map((item) => (
          <article key={item.ataque} className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/90 shadow-xl shadow-slate-950/30">
            <div className="relative">
              <div className={`absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm ${badgeStyles[item.color]}`}>
                <ShieldAlert className="w-3.5 h-3.5" /> {item.prioridad}
              </div>
            <img
              src={item.src}
              alt={item.alt}
              className="h-64 w-full object-cover"
              loading="lazy"
              onError={(e) => { e.target.src = 'https://placehold.co/600x400/1e293b/fff?text=Evidencia'; }}
            />
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-white">{item.ataque}</h3>

              <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Payload ejecutado</p>
                <p className="mt-1 text-sm font-semibold text-slate-100">{item.payload}</p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Resultado observado</p>
                <p className="mt-1 text-sm text-slate-300">{item.resultado}</p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg border border-slate-700 bg-slate-950/70 p-2 text-center">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">CVSS</p>
                  <p className="mt-1 text-sm font-bold text-white">{item.cvss}</p>
                </div>
                <div className="rounded-lg border border-red-400/35 bg-red-500/20 p-2 text-center">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-red-100">Riesgo</p>
                  <p className="mt-1 text-sm font-extrabold text-red-50">{item.riesgo}</p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-950/70 p-2 text-center">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Estado</p>
                  <p className="mt-1 text-sm font-bold text-white">{item.prioridad}</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Figura</p>
                <p className="mt-1 text-xs text-slate-300">{item.figura}</p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Prevencion y mitigacion vinculadas</p>
                <p className="mt-1 text-xs text-slate-300"><strong className="text-slate-100">Prevencion:</strong> {item.prevencion}</p>
                <p className="mt-1 text-xs text-slate-300"><strong className="text-slate-100">Mitigacion:</strong> {item.mitigacion}</p>
                <p className="mt-2 text-[11px] text-slate-500">Marco: {item.marco}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
