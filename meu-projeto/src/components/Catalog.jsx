import React, { useState } from 'react'
import {
  FaRecordVinyl,
  FaCompactDisc,
  FaCircleDot,
  FaCartPlus
} from 'react-icons/fa6'

// Lista de discos mockados baseada na imagem fornecida
const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Dark Side of the Moon',
    artist: 'Pink Floyd',
    format: 'vinil',
    formatLabel: 'LP 180G (CAPA DUPLA)',
    status: 'Novo | Lacrado',
    genre: 'Rock',
    year: 1973,
    tag: 'Mais Vendidos',
    price: 249.90,
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop',
    popularity: 98
  },
  {
    id: 2,
    title: 'Clube da Esquina',
    artist: 'Milton Nascimento & Lô Borges',
    format: 'vinil',
    formatLabel: 'LP DUPLO REMASTER',
    status: 'Usado | Mint (NM)',
    genre: 'MPB',
    year: 1972,
    tag: 'Clássico MPB',
    price: 289.00,
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop',
    popularity: 95
  },
  {
    id: 3,
    title: 'Random Access Memories',
    artist: 'Daft Punk',
    format: 'cd',
    formatLabel: 'CD DELUXE BOOKLET',
    status: 'Novo | Lacrado',
    genre: 'Eletronica',
    year: 2013,
    tag: 'Edição Especial',
    price: 89.90,
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop',
    popularity: 90
  },
  {
    id: 4,
    title: 'Fruto Proibido',
    artist: 'Rita Lee & Tutti Frutti',
    format: 'vinil',
    formatLabel: 'LP VINIL VERDE ÁGUA',
    status: 'Usado | Muito Bom (VG+)',
    genre: 'Rock',
    year: 1975,
    tag: 'Raridade',
    price: 210.00,
    cover: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?q=80&w=600&auto=format&fit=crop',
    popularity: 88
  },
  {
    id: 5,
    title: 'Kind of Blue',
    artist: 'Miles Davis',
    format: 'vinil',
    formatLabel: 'LP 180G AUDIÓFILO',
    status: 'Novo | Lacrado',
    genre: 'Jazz',
    year: 1959,
    tag: 'Audiófilo',
    price: 275.00,
    cover: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=600&auto=format&fit=crop',
    popularity: 92
  },
  {
    id: 6,
    title: 'Nevermind',
    artist: 'Nirvana',
    format: 'cd',
    formatLabel: 'CD EDIÇÃO 30 ANOS',
    status: 'Novo | Lacrado',
    genre: 'Rock',
    year: 1991,
    tag: 'Anos 90',
    price: 79.90,
    cover: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=600&auto=format&fit=crop',
    popularity: 85
  },
  {
    id: 7,
    title: 'A Tábua de Esmeralda',
    artist: 'Jorge Ben',
    format: 'vinil',
    formatLabel: 'LP CAPA SIMPLES ORIGINAL',
    status: 'Usado | Mint (NM)',
    genre: 'MPB',
    year: 1974,
    tag: 'Disco do Ano',
    price: 320.00,
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop',
    popularity: 94
  },
  {
    id: 8,
    title: 'To Pimp a Butterfly',
    artist: 'Kendrick Lamar',
    format: 'vinil',
    formatLabel: 'LP DUPLO 12"',
    status: 'Novo | Lacrado',
    genre: 'Hip-Hop',
    year: 2015,
    tag: 'Lançamento',
    price: 260.00,
    cover: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop',
    popularity: 89
  },
  {
    id: 9,
    title: 'Chega de Saudade',
    artist: 'João Gilberto',
    format: 'compacto',
    formatLabel: 'COMPACTO 7" MONOFÔNICO',
    status: 'Usado | Very Good+',
    genre: 'MPB',
    year: 1959,
    tag: 'Histórico',
    price: 180.00,
    cover: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?q=80&w=600&auto=format&fit=crop',
    popularity: 82
  }
]

function Catalog() {
  const [selectedFormat, setSelectedFormat] = useState('all')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [sortBy, setSortBy] = useState('relevancia')

  // Filtragem
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesFormat = selectedFormat === 'all' || product.format === selectedFormat
    const matchesGenre = selectedGenre === 'all' || product.genre === selectedGenre
    return matchesFormat && matchesGenre
  })

  // Ordenação
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'preco-asc') return a.price - b.price
    if (sortBy === 'preco-desc') return b.price - a.price
    if (sortBy === 'ano-desc') return b.year - a.year
    return b.popularity - a.popularity // relevancia
  })

  const resetFilters = () => {
    setSelectedFormat('all')
    setSelectedGenre('all')
    setSortBy('relevancia')
  }

  return (
    <section id="catalogo" className="catalog-section">
      <div className="catalog-container">
        
        {/* Seção do Cabeçalho */}
        <div className="catalog-header">
          <div>
            <h2 className="catalog-title">Acervo em Destaque</h2>
            <p className="catalog-subtitle">
              Discos higienizados, capa e vinil inspecionados individualmente.
            </p>
          </div>

          {/* Seleção de Ordenação */}
          <div className="sort-box">
            <label htmlFor="sort-select" className="sort-label">
              Ordenar por:
            </label>
            <select
              id="sort-select"
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevancia">Mais Populares</option>
              <option value="preco-asc">Menor Preço</option>
              <option value="preco-desc">Maior Preço</option>
              <option value="ano-desc">Ano (Mais Recentes)</option>
            </select>
          </div>
        </div>

        {/* Barra de Filtros */}
        <div className="filter-bar">
          
          {/* Filtro por Formato */}
          <div className="filter-row filter-row-bordered">
            <span className="filter-group-label">Formato:</span>
            <button
              onClick={() => setSelectedFormat('all')}
              className={`btn-filter-format ${selectedFormat === 'all' ? 'active' : ''}`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedFormat('vinil')}
              className={`btn-filter-format ${selectedFormat === 'vinil' ? 'active' : ''}`}
            >
              <FaRecordVinyl /> Vinil LP
            </button>
            <button
              onClick={() => setSelectedFormat('cd')}
              className={`btn-filter-format ${selectedFormat === 'cd' ? 'active' : ''}`}
            >
              <FaCompactDisc /> CD Audio
            </button>
            <button
              onClick={() => setSelectedFormat('compacto')}
              className={`btn-filter-format ${selectedFormat === 'compacto' ? 'active' : ''}`}
            >
              <FaCircleDot /> Compacto 7"
            </button>
          </div>

          {/* Filtro por Gênero */}
          <div className="filter-row">
            <span className="filter-group-label">Gênero:</span>
            <button
              onClick={() => setSelectedGenre('all')}
              className={`btn-filter-genre ${selectedGenre === 'all' ? 'active' : ''}`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedGenre('Rock')}
              className={`btn-filter-genre ${selectedGenre === 'Rock' ? 'active' : ''}`}
            >
              Rock
            </button>
            <button
              onClick={() => setSelectedGenre('MPB')}
              className={`btn-filter-genre ${selectedGenre === 'MPB' ? 'active' : ''}`}
            >
              MPB & Bossa Nova
            </button>
            <button
              onClick={() => setSelectedGenre('Jazz')}
              className={`btn-filter-genre ${selectedGenre === 'Jazz' ? 'active' : ''}`}
            >
              Jazz & Blues
            </button>
            <button
              onClick={() => setSelectedGenre('Pop')}
              className={`btn-filter-genre ${selectedGenre === 'Pop' ? 'active' : ''}`}
            >
              Pop
            </button>
            <button
              onClick={() => setSelectedGenre('Eletronica')}
              className={`btn-filter-genre ${selectedGenre === 'Eletronica' ? 'active' : ''}`}
            >
              Eletrônica
            </button>
            <button
              onClick={() => setSelectedGenre('Hip-Hop')}
              className={`btn-filter-genre ${selectedGenre === 'Hip-Hop' ? 'active' : ''}`}
            >
              Hip-Hop & Soul
            </button>
          </div>

        </div>

        {/* Grid de Produtos */}
        {sortedProducts.length > 0 ? (
          <div className="products-grid">
            {sortedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div>
                  {/* Top Badges */}
                  <div className="card-top-badges">
                    <span className="badge-format">{product.formatLabel}</span>
                    <span className="badge-status">{product.status}</span>
                  </div>

                  {/* Imagem da Capa */}
                  <div className="card-img-container">
                    <img
                      src={product.cover}
                      alt={product.title}
                      className="card-img"
                    />
                  </div>

                  {/* Meta (Gênero e Tag) */}
                  <div className="card-meta">
                    <span className="card-genre-year">
                      {product.genre} • {product.year}
                    </span>
                    <span className="card-tag">{product.tag}</span>
                  </div>

                  {/* Título e Artista */}
                  <h3 className="card-title" title={product.title}>
                    {product.title}
                  </h3>
                  <p className="card-artist" title={product.artist}>
                    {product.artist}
                  </p>
                </div>

                {/* Rodapé (Preço + Ação) */}
                <div className="card-footer">
                  <div>
                    <span className="card-price-label">Preço</span>
                    <span className="card-price-value">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <button className="btn-add-cart" aria-label="Adicionar ao Carrinho">
                    <FaCartPlus /> Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Estado Vazio */
          <div className="empty-catalog">
            <FaCompactDisc className="empty-icon" />
            <h3 className="empty-title">Nenhum disco encontrado</h3>
            <p className="empty-desc">Tente mudar os filtros de busca ou gênero.</p>
            <button onClick={resetFilters} className="btn-reset-filter">
              Limpar Filtros
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default Catalog