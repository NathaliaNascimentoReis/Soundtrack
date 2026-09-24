import React from 'react'
import { FaPlay, FaTag, FaMusic, FaHeadphones } from 'react-icons/fa6'

function Hero() {
  return (
    <section className="hero-section">
      {/* Luzes de Fundo */}
      <div className="hero-ambient-1"></div>
      <div className="hero-ambient-2"></div>

      <div className="hero-container">
        <div className="hero-grid">
          
          {/* Coluna de Texto Hero */}
          <div className="hero-text-col">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              O Templo da Música Analógica e Digital
            </div>

            <h1 className="hero-title">
              Sua coleção merece o <br className="hidden sm:inline" />
              <span className="text-gradient">som autêntico.</span>
            </h1>

            <p className="hero-description">
              Explore milhares de títulos raros em Vinil LP, Compactos 7" e CDs originais curados por apaixonados por música. Compre com garantia MINT ou venda o seu acervo pessoal com rápida avaliação.
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <a href="#catalogo" className="btn-hero-primary">
                <FaPlay style={{ fontSize: '0.85rem' }} />
                Explorar Catálogo
              </a>
              <a href="#vender" className="btn-hero-secondary">
                <FaTag style={{ color: '#5ebec4' }} />
                Quero Vender Discos
              </a>
            </div>

            {/* Indicadores de Confiança / Stats */}
            <div className="hero-stats">
              <div>
                <p className="stat-number">+15.000</p>
                <p className="stat-label">Álbuns em estoque</p>
              </div>
              <div>
                <p className="stat-number">100%</p>
                <p className="stat-label">Higienizados e Testados</p>
              </div>
              <div>
                <p className="stat-number">4.9 ★</p>
                <p className="stat-label">Avaliação de colecionadores</p>
              </div>
            </div>
          </div>

          {/* Coluna do Vinil 3D Interativo */}
          <div className="hero-vinyl-col flex justify-center">
            <div className="hero-vinyl-container">
              
              {/* Capa do Disco */}
              <div className="album-cover">
                <img
                  src="https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?q=80&w=800&auto=format&fit=crop"
                  alt="Capa de Álbum Vintage"
                  className="album-bg-img"
                />
                <div className="album-overlay"></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}>
                  <span className="album-tag">EDITION MINT</span>
                  <FaMusic style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                </div>

                <div className="album-details">
                  <span className="album-artist">Clube da Esquina</span>
                  <h3 className="album-title">Milton Nascimento & Lô Borges</h3>
                  <p className="album-info">LP Duplo 180g (1972) • Edição Especial</p>
                </div>
              </div>

              {/* Disco de Vinil Deslizante */}
              <div className="vinyl-disc">
                <div className="vinyl-grooves">
                  <div className="vinyl-label">
                    <span style={{ fontWeight: 'bold', letterSpacing: '0.05em' }}>SOUNDTRACK</span>
                    <span style={{ fontSize: '7px', opacity: 0.8, marginTop: '2px' }}>STEREO 33⅓ RPM</span>
                    <div className="vinyl-center-hole"></div>
                  </div>
                </div>
              </div>

              {/* Badge Flutuante */}
              <div className="floating-sound-badge">
                <div className="headphone-icon-box">
                  <FaHeadphones style={{ fontSize: '0.9rem' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>
                    Clique para testar o som
                  </p>
                  <p style={{ fontSize: '0.65rem', color: '#348b89', fontWeight: '500', margin: 0 }}>
                    Player interativo com sintetizador
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero