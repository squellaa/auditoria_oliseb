import { useState } from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Matriz from './components/Matriz';
import Galeria from './components/Galeria';
import { Shield, Database, Code, Terminal, Server, Image } from 'lucide-react';

const sections = [
  { key: 'resumen', label: 'Resumen Ejecutivo', icon: Server, accent: 'emerald' },
  { key: 'sqli', label: 'Inyección SQL', icon: Database, accent: 'amber' },
  { key: 'xss', label: 'XSS Reflejado', icon: Code, accent: 'sky' },
  { key: 'comandos', label: 'Inyección de Comandos', icon: Terminal, accent: 'red' },
  { key: 'matriz', label: 'Matriz de Riesgo', icon: Shield, accent: 'violet' },
  { key: 'galeria', label: 'Galería de Evidencias', icon: Image, accent: 'emerald' },
];

const accentStyles = {
  emerald: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
  amber: 'text-amber-400 border-amber-500/20 bg-amber-500/10',
  sky: 'text-sky-400 border-sky-500/20 bg-sky-500/10',
  violet: 'text-violet-400 border-violet-500/20 bg-violet-500/10',
  red: 'text-red-400 border-red-500/20 bg-red-500/10',
};

const indicadores = [
  { title: 'Hallazgos críticos', value: '3', detail: 'Riesgos de alta prioridad identificados' },
  { title: 'Activos revisados', value: '12', detail: 'Datos de clientes, sesiones y fidelización' },
  { title: 'Controles sugeridos', value: '9', detail: 'Técnicos, preventivos y de monitoreo' },
  { title: 'Estado actual', value: 'Expuesto', detail: 'Requiere plan de remediación inmediato' },
];

const planMitigacion = [
  { fase: '0-15 días', objetivo: 'Contención urgente', acciones: 'Prepared statements, sanitización de salida y bloqueo de payloads conocidos.' },
  { fase: '15-45 días', objetivo: 'Fortalecimiento', acciones: 'Hardening de sesión, CSP estricta, validaciones de backend y logging de seguridad.' },
  { fase: '45-90 días', objetivo: 'Madurez operativa', acciones: 'Pruebas continuas, revisiones de código y monitoreo de indicadores de riesgo.' },
];

export default function App() {
  const [tabActual, setTabActual] = useState('resumen');

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:22px_22px] opacity-20" />
      </div>
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-4 shadow-[0_1px_0_rgba(148,163,184,0.08)] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-2 text-cyan-300">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Informe de Auditoría</p>
              <h1 className="text-xl font-semibold text-white sm:text-2xl">Auditoría de Seguridad - SuperMax</h1>
              <p className="mt-1 text-sm text-slate-400">Presentación ejecutiva y técnica de hallazgos para despliegue profesional en Vercel.</p>
            </div>
          </div>
          <div className="hidden items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-300 sm:flex">
            <span>Auditor: S. Olivares Squella</span>
            <span className="h-4 w-px bg-slate-700" />
            <span>INACAP Valparaíso</span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30">
            <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Resumen del informe</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Análisis técnico con trazabilidad de riesgo y priorización ejecutiva</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                  Este informe cruza evidencia técnica de laboratorio con impacto de negocio para SuperMax. Cada vulnerabilidad incluye su CVSS, su ubicación en la matriz de riesgo y la justificación del puntaje asignado.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Alcance</p>
                  <p className="mt-2 font-semibold text-white">Portal de clientes</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Riesgos</p>
                  <p className="mt-2 font-semibold text-white">Priorizados por matriz</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Formato</p>
                  <p className="mt-2 font-semibold text-white">CVSS + Riesgo negocio</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {indicadores.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/20">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.title}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
              </article>
            ))}
          </section>

          <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Plan ejecutivo</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Hoja de ruta de mitigación</h3>
              </div>
                <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-red-300">
                Prioridad: alta
              </span>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {planMitigacion.map((item) => (
                <article key={item.fase} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{item.fase}</p>
                  <h4 className="mt-2 text-base font-semibold text-white">{item.objetivo}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.acciones}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
            <aside className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/20">
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-slate-500">Secciones</p>
              <div className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = tabActual === section.key;
                  return (
                    <button
                      key={section.key}
                      onClick={() => setTabActual(section.key)}
                      className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-medium transition duration-200 ${
                        isActive
                          ? `border-current ${accentStyles[section.accent]} bg-slate-950/70`
                          : 'border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950/60 hover:text-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="rounded-xl bg-slate-950/80 p-2 text-slate-400">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>{section.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Acciones inmediatas</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>1. Corregir consultas vulnerables a SQLi.</li>
                  <li>2. Aplicar Output Encoding para XSS.</li>
                  <li>3. Bloquear ejecución de comandos del SO.</li>
                </ul>
              </div>
            </aside>

            <section className="space-y-6">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-xl shadow-slate-950/30">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Contenido activo</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{sections.find((item) => item.key === tabActual)?.label}</h2>
                  </div>
                  <div className="inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-400">
                    {tabActual === 'resumen' ? 'Resumen ejecutivo' : 'Detalle técnico'}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30">
                {tabActual === 'resumen' && <Resumen />}
                {tabActual === 'sqli' && <InyeccionSQL />}
                {tabActual === 'xss' && <XSS />}
                {tabActual === 'comandos' && <Comandos />}
                {tabActual === 'matriz' && <Matriz />}
                {tabActual === 'galeria' && <Galeria />}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-900 bg-slate-950 px-4 py-5 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        <p>Auditoría SuperMax — Presentación profesional para Vercel.</p>
        <p className="mt-1">Diseño optimizado para claridad ejecutiva y evidencia técnica.</p>
      </footer>
    </div>
  );
}
