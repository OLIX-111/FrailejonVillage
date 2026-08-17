'use client'

import { useState, useEffect } from 'react'

const sliderImages = [
  { src: '/1.jpg', alt: 'Villa exterior con piscina' },
  { src: '/4.jpg', alt: 'Terraza con vista al jardín' },
  { src: '/5.jpg', alt: 'Villa exterior con escaleras' },
  { src: '/6.jpg', alt: 'Interior sala con ventanales' },
  { src: '/campo.jpg', alt: 'Campo de golf La Estancia' },
]

export default function FrailejonVillagePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  const open = (src: string, alt: string) => setLightbox({ src, alt })

  return (
    <>
      {/* LIGHTBOX */}
      {lightbox && (
        <div onClick={() => setLightbox(null)}
             style={{ position:'fixed', inset:0, zIndex:9999, background:'rgba(0,0,0,0.92)', display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem', cursor:'zoom-out' }}>
          <button onClick={() => setLightbox(null)}
                  style={{ position:'absolute', top:'1.25rem', right:'1.5rem', background:'none', border:'none', color:'#fff', fontSize:'2rem', cursor:'pointer', lineHeight:1 }}>✕</button>
          <img src={lightbox.src} alt={lightbox.alt}
               onClick={e => e.stopPropagation()}
               style={{ maxWidth:'95vw', maxHeight:'92vh', objectFit:'contain', borderRadius:'0.5rem', boxShadow:'0 0 60px rgba(0,0,0,0.8)', cursor:'default' }} />
        </div>
      )}
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background-color: #121212; color: #fff; font-family: ui-sans-serif, system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        .containerl { max-width: 1400px; margin-left: auto; margin-right: auto; }
        .hero-section { position: relative; height: 100vh; width: 100%; overflow: hidden; }
        .hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.5); }
        .hero-content { position: relative; z-index: 10; display: flex; height: 100%; align-items: center; justify-content: center; padding: 0 1rem; }
        .slider-track { display: flex; transition: transform 0.5s ease-in-out; height: 100%; }
        .slider-slide { width: 100%; height: 100%; flex-shrink: 0; position: relative; }
        .slider-dot { width: 12px; height: 12px; border-radius: 50%; border: none; cursor: pointer; transition: background 0.2s; }
        .check-item { display: flex; align-items: center; gap: 1rem; }
        .check-circle { width: 32px; height: 32px; background: #bee301; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .prop-card { background: #222; border-radius: 0.5rem; padding: 1.25rem; overflow: hidden; }
        .badge-accent { background: #bee301; color: #000; border-radius: 9999px; padding: 0.25rem 0.75rem; font-size: 0.875rem; font-weight: 600; display: inline-block; }
        .price-pill { background: #bee301; color: #000; border-radius: 9999px; padding: 0.2rem 0.75rem; font-weight: 600; display: inline-block; }
        .why-icon { background: #bee301; border-radius: 0.75rem; padding: 0.75rem; flex-shrink: 0; display: flex; }
        .nearby-card { position: relative; overflow: hidden; aspect-ratio: 1 / 1; }
        .nearby-overlay { position: absolute; inset: 0; background: linear-gradient(rgba(190,227,1,0) 0%, rgba(190,227,1,0.5) 100%); }
        .nearby-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5rem; }
        .form-input { width: 100%; padding: 0.75rem 1rem; border-radius: 0.75rem; background: #fff; color: #000; border: none; outline: none; }
        .form-input:focus { box-shadow: 0 0 0 2px #bee301; }
        .form-input::placeholder { color: #6b7280; }
      `}</style>

      {/* HEADER */}
      <header style={{ position:'fixed', top:0, width:'100%', zIndex:50, background:'transparent', borderBottom:'1px solid transparent' }}>
        <div className="containerl" style={{ padding:'0 4rem' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1.5rem 0' }}>
            <a href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="L'Romana Real Estate" style={{ height:48, width:'auto', objectFit:'contain' }} />
            </a>
            <nav style={{ display:'flex', alignItems:'center', gap:'2rem', fontSize:'0.95rem' }}>
              <span style={{ color:'#fff', cursor:'pointer' }}>Proyectos ▾</span>
              <a href="https://propiedades.lromanarealestate.com/" style={{ color:'#fff', textDecoration:'none' }}>Propiedades</a>
              <a href="/agentes" style={{ color:'#fff', textDecoration:'none' }}>Agentes</a>
              <a href="/about" style={{ color:'#fff', textDecoration:'none' }}>Sobre Nosotros</a>
              <a href="https://propiedades.lromanarealestate.com/contactos" style={{ color:'#fff', textDecoration:'none' }}>Contacto</a>
            </nav>
            <a href="https://propiedades.lromanarealestate.com/" target="_blank" rel="noopener noreferrer"
               style={{ background:'#1e63b5', color:'#fff', padding:'0.75rem 1.5rem', borderRadius:'9999px', textDecoration:'none', fontSize:'0.875rem', fontWeight:500 }}>
              Empezar Búsqueda
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/1.jpg" alt="Villa exterior con piscina y jardín tropical" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div style={{ textAlign:'center', maxWidth:900, margin:'0 auto' }}>
            <h1 style={{ fontSize:'clamp(2rem, 5vw, 4rem)', fontWeight:600, color:'#fff', marginBottom:'2rem', lineHeight:1.2 }}>
              Descubre el Hogar Donde Tus Sueños Cobran Vida
            </h1>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center' }}>
              <a href="#modelos">
                <button style={{ background:'#bee301', color:'#000', fontWeight:600, padding:'1rem 2rem', border:'none', borderRadius:4, cursor:'pointer', minWidth:200, fontSize:'1rem' }}>
                  Explorar Modelos
                </button>
              </a>
              <a href="#contact">
                <button style={{ background:'#000', color:'#fff', fontWeight:600, padding:'1rem 2rem', border:'1px solid #fff', borderRadius:4, cursor:'pointer', minWidth:200, fontSize:'1rem' }}>
                  Solicitar Más Información
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background:'#121212', padding:'5rem 1rem' }}>
        <div className="containerl" style={{ paddingLeft:'4rem', paddingRight:'4rem', textAlign:'center' }}>
          <p style={{ color:'#fff', fontSize:'clamp(1.1rem,2.5vw,2rem)', lineHeight:1.7, fontWeight:500 }}>
            Descubre una comunidad única de villas de lujo ubicadas en La Estancia Golf &amp; Country Club,
            donde el diseño minimalista tropical y el entorno paradisíaco se combinan para ofrecerte un estilo
            de vida incomparable.
          </p>
        </div>
      </section>

      {/* REFUGIO NATURAL */}
      <section style={{ background:'#121212', marginBottom:'2.5rem' }}>
        <div className="containerl" style={{ padding:'0 4rem' }}>
          <div style={{ maxHeight:580, overflow:'hidden', borderRadius:'0.5rem', marginBottom:'2rem' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/campo.jpg" alt="Campo de golf La Estancia con lago y palmeras" onClick={() => open('/campo.jpg', 'Campo de golf La Estancia con lago y palmeras')} style={{ width:'100%', height:'auto', objectFit:'cover', cursor:'zoom-in' }} />
          </div>
          <div style={{ padding:'4rem 0' }}>
            <h2 style={{ color:'#fff', fontSize:'clamp(1.8rem,4vw,3.5rem)', fontWeight:300, marginBottom:'2rem', lineHeight:1.2 }}>
              Un Refugio Natural en La Estancia Golf &amp; Country Club
            </h2>
            <p style={{ color:'#d1d5db', fontSize:'1.1rem', lineHeight:1.8, fontWeight:300, maxWidth:900 }}>
              Ubicado en el corazón de la exclusiva comunidad de La Estancia, Frailejón Village ofrece un entorno
              que fusiona naturaleza y sofisticación. Rodeado por la exuberante vegetación de la región y con vistas
              panorámicas al majestuoso río Chavón, este destino es un santuario para quienes buscan equilibrio entre
              el lujo y la tranquilidad. La Estancia es más que un residencial, es una experiencia de vida que se
              complementa con un campo de golf de clase mundial, senderos naturales y un ambiente diseñado para el
              descanso absoluto.
            </p>
          </div>
        </div>
      </section>

      {/* ESTILO DE VIDA */}
      <section style={{ background:'#121212', marginBottom:'2.5rem', padding:'4rem 0' }}>
        <div className="containerl" style={{ paddingLeft:'4rem', paddingRight:'4rem' }}>
          <div style={{ marginBottom:'3rem', borderRadius:'0.5rem', overflow:'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/4.jpg" alt="Terraza con comedor y vista al jardín y piscina" onClick={() => open('/4.jpg', 'Terraza con comedor y vista al jardín y piscina')} style={{ width:'100%', height:'auto', objectFit:'cover', cursor:'zoom-in' }} />
          </div>
          <h2 style={{ color:'#fff', fontSize:'clamp(1.8rem,4vw,3.2rem)', fontWeight:300, marginBottom:'2rem', lineHeight:1.2 }}>
            Un Estilo de Vida Exclusivo con Conexión a Todo
          </h2>
          <p style={{ color:'#d1d5db', fontSize:'1.1rem', lineHeight:1.8, maxWidth:900 }}>
            Frailejón Village goza de una ubicación privilegiada a solo minutos de algunos de los destinos más
            emblemáticos del Caribe. A pocos minutos del Aeropuerto Internacional de La Romana, y con acceso a
            playas paradisíacas como Bayahibe e Isla Saona, los residentes pueden disfrutar de la brisa marina y
            arenas blancas en cualquier momento. Además, la cercanía con Casa de Campo y el icónico Altos de Chavón
            brinda una oferta cultural y gastronómica de primer nivel, asegurando que cada día esté lleno de nuevas
            experiencias.
          </p>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section style={{ background:'#121212', padding:'5rem 1rem' }}>
        <div className="containerl" style={{ paddingLeft:'4rem', paddingRight:'4rem' }}>
          <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:'3rem' }}>
            <div style={{ flex:1, minWidth:280 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/VILLAS.jpg" alt="Villas Frailejón Village vista nocturna" onClick={() => open('/VILLAS.jpg', 'Villas Frailejón Village')} style={{ width:'100%', height:500, objectFit:'cover', borderRadius:4, cursor:'zoom-in' }} />
            </div>
            <div style={{ flex:1, minWidth:280, color:'#fff' }}>
              <h2 style={{ fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:300, marginBottom:'2rem', lineHeight:1.2 }}>
                Una Inversión que Crece Contigo
              </h2>
              <p style={{ color:'#d1d5db', fontSize:'1.1rem', lineHeight:1.8 }}>
                Ubicado en el exclusivo Estancia Golf &amp; Country Club, Frailejón Village redefine el lujo en La
                Romana. Este proyecto residencial combina diseño minimalista tropical con espacios amplios y amenidades
                premium para ofrecerte un estilo de vida inigualable en armonía con la naturaleza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIR */}
      <section style={{ background:'#121212', padding:'5rem 1rem' }}>
        <div className="containerl" style={{ paddingLeft:'4rem', paddingRight:'4rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'3rem', alignItems:'start' }}>
            <div>
              <h2 style={{ color:'#fff', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:600, marginBottom:'1.5rem', lineHeight:1.2 }}>
                ¿Por Qué Elegir Frailejón Village?
              </h2>
              <p style={{ color:'#9ca3af', fontSize:'1.2rem', lineHeight:1.6 }}>
                Descubre las razones que hacen de Frailejón Village el lugar ideal para vivir o invertir.
              </p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>
              {[
                { icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', title: 'Ubicación Estratégica', desc: 'A solo 7 minutos del Aeropuerto Internacional de La Romana, con fácil acceso a las playas de Bayahibe, Isla Catalina e Isla Saona.' },
                { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', title: 'Diseño de Clase Mundial', desc: 'Villas inspiradas en el minimalismo tropical, con techos altos, ventanales amplios y acabados de primera calidad como porcelanato y roble brasileño.' },
                { icon: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z', title: 'Inversión Inteligente', desc: 'Con potencial de plusvalía y oportunidades de renta vacacional, Frailejón Village es ideal para vivir o invertir.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ display:'flex', alignItems:'flex-start', gap:'1rem' }}>
                  <div className="why-icon">
                    <svg style={{ color:'#000', width:24, height:24 }} fill="currentColor" viewBox="0 0 24 24">
                      <path d={icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ color:'#fff', fontSize:'1.4rem', fontWeight:500, marginBottom:'0.5rem' }}>{title}</h3>
                    <p style={{ color:'#9ca3af', fontSize:'1.1rem', lineHeight:1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMENIDADES */}
      <section style={{ background:'#121212', padding:'5rem 1rem', marginBottom:'2.5rem' }}>
        <div className="containerl" style={{ paddingLeft:'4rem', paddingRight:'4rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'3rem', alignItems:'center' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>
              <h2 style={{ color:'#fff', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:500, lineHeight:1.2 }}>
                Amenidades de Clase Mundial
              </h2>
              <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
                {['Seguridad Integral 24/7', 'Club Social y Deportivo', 'Campos de Golf de Clase Mundial', 'Restaurantes Gourmet', 'Entorno Natural Exuberante'].map(item => (
                  <div key={item} className="check-item">
                    <div className="check-circle">
                      <svg style={{ width:20, height:20, color:'#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color:'#fff', fontSize:'1.1rem', fontWeight:500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display:'flex', justifyContent:'flex-end' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/fachada.jpg" alt="Fachada Frailejón Village con piscina y jardín tropical" onClick={() => open('/fachada.jpg', 'Fachada Frailejón Village con piscina y jardín tropical')} style={{ width:'100%', maxWidth:600, height:600, objectFit:'cover', borderRadius:'0.5rem', cursor:'zoom-in' }} />
            </div>
          </div>
        </div>
      </section>

      {/* MODELOS */}
      <section id="modelos" style={{ background:'#121212', padding:'5rem 1rem', marginBottom:'3rem' }}>
        <div className="containerl" style={{ paddingLeft:'4rem', paddingRight:'4rem' }}>
          <div style={{ display:'flex', justifyContent:'center', marginBottom:'2rem' }}>
            <span style={{ background:'#302413', border:'1px solid #bee301', color:'#fff', padding:'0.5rem 1.5rem', borderRadius:'9999px', fontWeight:500 }}>
              Modelos del proyecto
            </span>
          </div>
          <h2 style={{ color:'#fff', fontSize:'clamp(1.5rem,3vw,2.5rem)', fontWeight:500, textAlign:'center', marginBottom:'4rem', maxWidth:800, marginLeft:'auto', marginRight:'auto', lineHeight:1.4 }}>
            Villas con estilos y configuraciones variadas que se adaptan a tus necesidades, priorizando elegancia y confort.
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'2rem' }}>
            {[
              { src:'/1.jpg', name:'Frailejón Golf Platinum', beds:4, baths:4, area:'376 m²' },
              { src:'/5.jpg', name:'Frailejón Standard Golf', beds:3, baths:3, area:'250 m²' },
              { src:'/6.jpg', name:'Frailejón Golf Premium',  beds:3, baths:3, area:'345 m²' },
            ].map(card => (
              <div key={card.name} className="prop-card">
                <div style={{ position:'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.src} alt={card.name} onClick={() => open(card.src, card.name)} style={{ width:'100%', borderRadius:4, height:276, objectFit:'cover', cursor:'zoom-in' }} />
                  <div style={{ position:'absolute', top:'1rem', left:'1rem' }}>
                    <span className="badge-accent">En venta</span>
                  </div>
                </div>
                <div style={{ padding:'1.5rem 0 0.5rem' }}>
                  <p style={{ color:'#fff', fontSize:'1.3rem', fontWeight:600, marginBottom:'1rem' }}>
                    <span className="price-pill">USD $</span> 3,000 Para Reservar
                  </p>
                  <h3 style={{ color:'#fff', fontSize:'1.1rem', fontWeight:500, marginBottom:'1rem' }}>{card.name}</h3>
                  <div style={{ display:'flex', alignItems:'center', gap:'1rem', color:'#9ca3af', fontSize:'0.875rem' }}>
                    <span>🏠 {card.beds}</span>
                    <span>🛁 {card.baths}</span>
                    <span>📐 {card.area}</span>
                    <span>📍 La Romana</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATRACTIVOS */}
      <section style={{ background:'#121212', padding:'5rem 1rem' }}>
        <div className="containerl" style={{ paddingLeft:'4rem', paddingRight:'4rem' }}>
          <h2 style={{ color:'#fff', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:700, textAlign:'center', marginBottom:'3rem' }}>
            Atractivos Cerca de ti
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:'2.5rem' }}>
            {[
              { src:'/Captainkid.avif',      alt:'Capitan Kid Restaurant', name:'Capitan Kid',  desc:'Restaurante (a 15 minutos)' },
              { src:'/hiltonromana.avif',     alt:'Hotel Hilton',          name:'Hotel Hilton', desc:'Hotel (a 15 minutos)' },
              { src:'/avionfrailejon.avif',   alt:'Aeropuerto',            name:'Aeropuerto',   desc:'Aeropuerto (a 5 minutos)' },
            ].map(place => (
              <div key={place.name} className="nearby-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={place.src} alt={place.alt} onClick={() => open(place.src, place.alt)} style={{ width:'100%', height:'100%', objectFit:'cover', cursor:'zoom-in' }} />
                <div className="nearby-overlay" style={{ pointerEvents:'none' }} />
                <div className="nearby-info">
                  <h3 style={{ fontSize:'1.5rem', fontWeight:700, color:'#fff', marginBottom:'0.25rem' }}>{place.name}</h3>
                  <p style={{ color:'#e5e7eb', fontSize:'1rem' }}>{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" style={{ background:'#121212', padding:'5rem 1rem' }}>
        <div className="containerl" style={{ paddingLeft:'4rem', paddingRight:'4rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'3rem' }}>
            <div>
              <h2 style={{ color:'#fff', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:700, marginBottom:'1.5rem', lineHeight:1.2 }}>
                Agenda tu Visita a Frailejón Village
              </h2>
              <p style={{ color:'#d1d5db', fontSize:'1.1rem', marginBottom:'2rem', lineHeight:1.6 }}>
                Descubre en persona el lujo y la exclusividad que ofrecemos. Completa el formulario y programa una
                cita con nuestro equipo.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem', color:'#d1d5db', marginBottom:'2rem' }}>
                <div><span style={{ color:'#fff', fontWeight:600 }}>Teléfono:</span> (829) 222-2484</div>
                <div><span style={{ color:'#fff', fontWeight:600 }}>Correo Electrónico:</span> info@romanarealestate.com</div>
                <div><span style={{ color:'#fff', fontWeight:600 }}>Dirección:</span> Reparto Torres Calle 4ta #5. La Romana. República Dominicana.</div>
              </div>
              <form style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                  <div>
                    <label style={{ display:'block', color:'#fff', fontWeight:500, marginBottom:'0.5rem' }}>Nombre y Apellido</label>
                    <input type="text" className="form-input" placeholder="Mitchell" name="name" />
                  </div>
                  <div>
                    <label style={{ display:'block', color:'#fff', fontWeight:500, marginBottom:'0.5rem' }}>Teléfono</label>
                    <input type="tel" className="form-input" placeholder="+123 456 789 00" name="phone" />
                  </div>
                </div>
                <div>
                  <label style={{ display:'block', color:'#fff', fontWeight:500, marginBottom:'0.5rem' }}>Correo Electrónico</label>
                  <input type="email" className="form-input" placeholder="test@gmail.com" name="email" />
                </div>
                <div>
                  <label style={{ display:'block', color:'#fff', fontWeight:500, marginBottom:'0.5rem' }}>Mensaje</label>
                  <textarea className="form-input" name="message" rows={4} placeholder="Explain it in details..." style={{ resize:'none', borderRadius:'0.75rem' }} />
                </div>
                <button type="submit"
                        style={{ background:'#bee301', color:'#000', fontWeight:500, padding:'1rem 1.5rem', border:'none', borderRadius:'9999px', cursor:'pointer', fontSize:'1rem', width:'100%', transition:'background 0.2s' }}
                        onMouseOver={e => (e.currentTarget.style.background = '#a8c900')}
                        onMouseOut={e => (e.currentTarget.style.background = '#bee301')}>
                  Enviar mi mensaje
                </button>
              </form>
            </div>

            {/* Slider */}
            <div style={{ position:'relative', minHeight:600, borderRadius:'0.5rem', overflow:'hidden' }}>
              <div style={{ display:'flex', transform:`translateX(-${currentSlide * 100}%)`, transition:'transform 0.5s ease-in-out', height:'100%' }}>
                {sliderImages.map((img, i) => (
                  <div key={i} style={{ width:'100%', height:'100%', flexShrink:0, minHeight:600 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} onClick={() => open(img.src, img.alt)} style={{ width:'100%', height:'100%', objectFit:'cover', cursor:'zoom-in' }} />
                  </div>
                ))}
              </div>
              <div style={{ position:'absolute', bottom:'1.5rem', left:'50%', transform:'translateX(-50%)', display:'flex', gap:'0.5rem' }}>
                {sliderImages.map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)}
                          style={{ width:12, height:12, borderRadius:'50%', border:'none', cursor:'pointer', background: i === currentSlide ? '#fff' : 'rgba(255,255,255,0.4)', transition:'background 0.2s' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:'#030712', padding:'4rem 1rem' }}>
        <div className="containerl" style={{ paddingLeft:'4rem', paddingRight:'4rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'3rem' }}>
            <div>
              <h3 style={{ color:'#f9fafb', fontSize:'0.75rem', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'1.5rem' }}>Navegación</h3>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                {[['/', 'Inicio'], ['/about', 'Nosotros'], ['https://propiedades.lromanarealestate.com/', 'Propiedades'], ['/contacto', 'Contacto'], ['/agentes', 'Agentes 360'], ['/politica-de-privacidad', 'Política de Privacidad'], ['/terminos-y-condiciones', 'Términos y Condiciones']].map(([href, label]) => (
                  <li key={label}><a href={href} style={{ color:'#d1d5db', textDecoration:'none' }}>{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ color:'#f9fafb', fontSize:'0.75rem', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'1.5rem' }}>Agentes 360</h3>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                <li><a href="/agentes" style={{ color:'#d1d5db', textDecoration:'none' }}>Freisy Carolina</a></li>
                <li><a href="/agentes" style={{ color:'#d1d5db', textDecoration:'none' }}>Yuderkis Pilier</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ color:'#f9fafb', fontSize:'0.75rem', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'1.5rem' }}>Proyectos</h3>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                {['/costamar,Costa Mar', '/stone-tower-3,Stone Tower 3', '/frailejonvillage,Frailejon Village'].map(s => {
                  const [href, label] = s.split(',')
                  return <li key={label}><a href={href} style={{ color:'#d1d5db', textDecoration:'none' }}>{label}</a></li>
                })}
                <li><a href="https://propiedades.lromanarealestate.com/" target="_blank" rel="noopener noreferrer" style={{ color:'#d1d5db', textDecoration:'none' }}>Ver propiedades</a></li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop:'3rem', borderTop:'1px solid #1f2937', paddingTop:'2rem' }}>
            <p style={{ color:'#9ca3af', fontSize:'0.875rem' }}>© 2025 L&apos; Romana Real Estate. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
