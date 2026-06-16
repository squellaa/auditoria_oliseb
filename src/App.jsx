import React, { useState } from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSSReflejado from './components/XSSReflejado';
import CommandInjection from './components/CommandInjection';
import { Shield, Database, Code, Terminal, Server } from 'lucide-react';

export default function App() {
  const [tabActual, setTabActual] = useState('resumen');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/25">
            <Shield className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">SuperMax — Portal de Clientes</h1>
            <p className="text-xs text-slate-400 font-medium">Auditoría de Seguridad Web | Oliseb</p>
          </div>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-xs bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md text-slate-300 font-mono">
            Auditor: S. Olivares Squella
          </span>
        </div>
      </header>

      {/* CUERPO PRINCIPAL */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* SIDEBAR / MENÚ LATERAL */}
        <aside className="w-full md:w-64 border-r border-slate-800 bg-slate-900/20 p-4 space-y-2">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider px-3 mb-3">Secciones</p>
          
          {/* Botón: Resumen */}
          <button
            onClick={() => setTabActual('resumen')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              tabActual === 'resumen' 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
            }`}
          >
            <Server className="w-4 h-4" /> Resumen Ejecutivo
          </button>

          {/* Botón: Inyección SQL */}
          <button
            onClick={() => setTabActual('sqli')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              tabActual === 'sqli' 
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
            }`}
          >
            <Database className="w-4 h-4" /> Inyección SQL
          </button>

          {/* Botón: XSS Reflejado */}
          <button
            onClick={() => setTabActual('xss')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              tabActual === 'xss' 
                ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' 
                : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
            }`}
          >
            <Code className="w-4 h-4" /> XSS Reflejado
          </button>

          {/* Botón: Inyección de Comandos */}
          <button
            onClick={() => setTabActual('command')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              tabActual === 'command' 
                ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-4 h-4" /> Inyección de Comandos
          </button>
        </aside>

        {/* CONTENEDOR DE CONTENIDO */}
        <main className="flex-1 p-6 md:p-8 bg-slate-950/40">
          <div className="max-w-5xl mx-auto">
            {tabActual === 'resumen' && <Resumen />}
            {tabActual === 'sqli' && <InyeccionSQL />}
            {tabActual === 'xss' && <XSSReflejado />}
            {tabActual === 'command' && <CommandInjection />}
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 px-6 py-4 text-center text-xs text-slate-500">
        Fundamentos de Seguridad de la Información — INACAP Valparaíso.
      </footer>
    </div>
  );
}