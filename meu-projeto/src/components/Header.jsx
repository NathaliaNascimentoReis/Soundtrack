import { useState } from 'react'
import {
  FaBars,
  FaXmark,
  FaMagnifyingGlass,
  FaCircleXmark,
  FaBagShopping,
  FaCompactDisc,
  FaRecordVinyl,
  FaCircleDot,
  FaHandHoldingDollar,
  FaStore
} from 'react-icons/fa6'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleClearSearch = () => {
    setSearchTerm('')
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">

          {/* BOTÃO MENU MOBILE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? (
              <FaXmark style={{ fontSize: '1.25rem' }} />
            ) : (
              <FaBars style={{ fontSize: '1.25rem' }} />
            )}
          </button>

          {/* LOGO SOUNDTRACK (SVG) */}
          <a href="#" className="logo-link">
            <div className="logo-svg-wrapper">
              <svg
                viewBox="0 0 200 120"
                className="logo-svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Vinil Preto Base */}
                <circle cx="65" cy="55" r="42" fill="#121316" />
                <circle cx="65" cy="55" r="35" fill="none" stroke="#25282C" strokeWidth="1.5" />
                <circle cx="65" cy="55" r="28" fill="none" stroke="#25282C" strokeWidth="1.5" />
                <circle cx="65" cy="55" r="20" fill="none" stroke="#25282C" strokeWidth="1.5" />
                
                {/* Selo Centro do Vinil Verde Água */}
                <circle cx="65" cy="55" r="15" fill="#5EBEC4" />
                <circle cx="65" cy="55" r="4" fill="#121316" />

                {/* CD Prateado/Verde Água Sobreposto */}
                <circle cx="105" cy="58" r="30" fill="url(#cdGradient)" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="105" cy="58" r="10" fill="none" stroke="#5EBEC4" strokeWidth="2" />
                <circle cx="105" cy="58" r="6" fill="#ffffff" />
                <circle cx="105" cy="58" r="3" fill="#E8F6F6" />

                {/* Onda Sonora e Pauta Musical */}
                <path d="M 15 78 Q 30 65, 45 78 T 75 78 T 105 78 T 135 78" fill="none" stroke="#5EBEC4" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 10 88 C 30 70, 50 100, 70 82 C 85 70, 110 95, 140 75" fill="none" stroke="#48A9A6" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 70 95 L 140 85 M 70 99 L 140 89 M 70 103 L 140 93" fill="none" stroke="#B2E2E3" strokeWidth="1" opacity="0.8" />

                {/* Gradiente */}
                <defs>
                  <linearGradient id="cdGradient" x1="75" y1="28" x2="135" y2="88" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#EBF8F8" />
                    <stop offset="40%" stopColor="#A2E0E2" />
                    <stop offset="70%" stopColor="#5EBEC4" />
                    <stop offset="100%" stopColor="#348B89" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="logo-text-box">
              <span className="logo-title">SOUNDTRACK</span>
              <span className="logo-subtitle">VINIL & CDs</span>
            </div>
          </a>

          {/* BARRA DE PESQUISA (DESKTOP) */}
          <div className="search-box-desktop">
            <input
              type="text"
              placeholder="Buscar artista, álbum, vinil, CD ou gênero..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <FaMagnifyingGlass className="search-icon" />
            
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="clear-search-btn"
                aria-label="Limpar busca"
              >
                <FaCircleXmark />
              </button>
            )}
          </div>

          {/* LINKS DE NAVEGAÇÃO (DESKTOP) */}
          <nav className="nav-links">
            <a href="#inicio" className="nav-link">Início</a>
            <a href="#vinis" className="nav-link">Vinis</a>
            <a href="#cds" className="nav-link">CDs</a>
            <a href="#raridades" className="nav-link">Raridades</a>
            <a href="#vender" className="nav-btn-vender">Vender Discos</a>
          </nav>

          {/* BOTÃO DO CARRINHO */}
          <div>
            <button className="cart-btn" aria-label="Carrinho de Compras">
              <FaBagShopping style={{ fontSize: '1.1rem' }} />
              <span className="cart-badge">0</span>
            </button>
          </div>

        </div>
      </div>

      {/* BARRA DE PESQUISA (MOBILE) */}
      <div className="search-box-mobile">
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Buscar artista, álbum..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <FaMagnifyingGlass className="search-icon" />
        </div>
      </div>

      {/* MENU DRAWER (MOBILE) */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <a href="#catalogo" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">
            <FaCompactDisc className="icon-margin" />
            Catálogo Completo
          </a>
          <a href="#vinis" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">
            <FaRecordVinyl className="icon-margin" />
            Discos de Vinil
          </a>
          <a href="#cds" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">
            <FaCircleDot className="icon-margin" />
            CDs de Acervo
          </a>
          <a href="#vender" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link mobile-nav-link-vender">
            <FaHandHoldingDollar className="icon-margin" />
            Vender Meus Discos
          </a>
          <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">
            <FaStore className="icon-margin" />
            Sobre a Soundtrack
          </a>
        </div>
      )}
    </header>
  )
}

export default Header