'use client'

import { useState } from 'react'

const agentes = [
  {
    nombre: 'Yuderkis Pilier',
    rol: 'Agente Inmobiliario',
    idiomas: ['Español', 'Inglés'],
    desc: 'Especialista en propiedades de lujo con amplia experiencia en el mercado de La Romana.',
    foto: '/yuderkis.jpg',
  },
  {
    nombre: 'Freisy Carolina Castillo Marte',
    rol: 'Agente Inmobiliario',
    idiomas: ['Español', 'Inglés'],
    desc: 'Asesora inmobiliaria comprometida en encontrar la propiedad ideal para cada cliente.',
    foto: '/freisy.jpg',
  },
]

export default function AgentesPage() {
  const [proyectosOpen, setProyectosOpen] = useState(false)

  return (
    <div style={{ background: '#121212', minHeight: '100vh', color: '#fff', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #121212; }
        .containerl { max-width: 1400px; margin-left: auto; margin-right: auto; }
        .agent-card { background: #1a1a1a; border-radius: 1rem; overflow: hidden; border: 1px solid #2a2a2a; transition: transform 0.2s, box-shadow 0.2s; }
        .agent-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
        .tag { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; border: 1px solid #444; color: #d1d5db; font-size: 0.85rem; }
        .agendar-btn { width: 100%; padding: 0.9rem; background: transparent; border: 1px solid #444; border-radius: 0.5rem; color: #fff; font-size: 1rem; cursor: pointer; transition: background 0.2s, border-color 0.2s; }
        .agendar-btn:hover { background: #bee301; border-color: #bee301; color: #000; }
        .foto-placeholder { width: 100%; background: #2a2a2a; }
      `}</style>

      {/* HEADER */}
      <header style={{ position: 'sticky', top: 0, width: '100%', zIndex: 50, background: '#121212', borderBottom: '1px solid #222' }}>
        <div className="containerl" style={{ padding: '0 4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 0' }}>
            <a href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="L'Romana Real Estate" style={{ height: 48, width: 'auto', objectFit: 'contain' }} />
            </a>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.95rem' }}>
              <div style={{ position: 'relative' }}>
                <span style={{ color: '#fff', cursor: 'pointer', userSelect: 'none' }} onClick={() => setProyectosOpen(o => !o)}>Proyectos ▾</span>
                {proyectosOpen && (
                  <div style={{ position: 'absolute', top: 'calc(100% + 0.75rem)', left: 0, background: '#1a1a1a', border: '1px solid #333', borderRadius: '0.5rem', minWidth: 200, zIndex: 100, overflow: 'hidden' }}>
                    <a href="https://frailejon-ii.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }} onMouseOver={e => (e.currentTarget.style.background = '#bee301', e.currentTarget.style.color = '#000')} onMouseOut={e => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = '#fff')}>Altos de Frailejón</a>
                    <a href="https://frailejon-village.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }} onMouseOver={e => (e.currentTarget.style.background = '#bee301', e.currentTarget.style.color = '#000')} onMouseOut={e => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = '#fff')}>Frailejón Village</a>
                    <a href="https://costa-mar-1.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }} onMouseOver={e => (e.currentTarget.style.background = '#bee301', e.currentTarget.style.color = '#000')} onMouseOut={e => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = '#fff')}>Costa Mar</a>
                    <a href="https://stonetowers-iii.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '0.75rem 1.25rem', color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }} onMouseOver={e => (e.currentTarget.style.background = '#bee301', e.currentTarget.style.color = '#000')} onMouseOut={e => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = '#fff')}>Stone Towers III</a>
                  </div>
                )}
              </div>
              <a href="https://propiedades.lromanarealestate.com/" style={{ color: '#fff', textDecoration: 'none' }}>Propiedades</a>
              <a href="/agentes" style={{ color: '#bee301', textDecoration: 'none' }}>Agentes</a>
              <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>Sobre Nosotros</a>
              <a href="/#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contacto</a>
            </nav>
            <a href="/#contact" style={{ background: '#2563eb', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
              Empezar Búsqueda
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: '6rem 1rem 4rem', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', background: '#1e2a0e', border: '1px solid #bee301', color: '#bee301', padding: '0.4rem 1.25rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '2rem' }}>
          AGENTES
        </span>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '0.5rem' }}>
          Conoce a Nuestro Equipo
        </h1>
        <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, color: '#bee301', lineHeight: 1.2 }}>
          de Expertos
        </h2>
      </section>

      {/* AGENTES GRID */}
      <section style={{ padding: '2rem 4rem 6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: 1200, margin: '0 auto' }}>
          {agentes.map(a => (
            <div key={a.nombre} className="agent-card">
              <div className="foto-placeholder">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.foto} alt={a.nombre} style={{ width: '100%', height: 'auto', display: 'block' }}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>{a.nombre}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ color: '#bee301', fontWeight: 500, fontSize: '0.95rem' }}>{a.rol}</span>
                  <span style={{ color: '#555' }}>•</span>
                  {a.idiomas.map(i => (
                    <span key={i} className="tag">{i}</span>
                  ))}
                </div>
                <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{a.desc}</p>
                <button className="agendar-btn">Agendar cita</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
