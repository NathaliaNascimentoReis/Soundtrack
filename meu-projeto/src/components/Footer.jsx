import React from "react";
import {
  FaCompactDisc,
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaPix,
  FaCcVisa,
  FaCcMastercard,
  FaBarcode,
  FaLock,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer id="sobre" className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Informações da Marca */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <FaCompactDisc />
              </div>
              <span className="footer-logo-text">SOUNDTRACK</span>
            </div>
            <p className="footer-brand-desc">
              A Soundtrack é o marketplace definitivo especializado em música
              analógica e digital. Compramos, vendemos e entregamos relíquias em
              vinil LP e CDs em todo o Brasil.
            </p>
            <div className="footer-socials">
              <a
                href="#"
                aria-label="Instagram"
                className="footer-social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Spotify"
                className="footer-social-link"
              >
                <FaSpotify />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="footer-social-link"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="footer-title">Navegação</h4>
            <ul className="footer-links">
              <li>
                <a href="#catalogo">Discos de Vinil</a>
              </li>
              <li>
                <a href="#catalogo">CDs Raros</a>
              </li>
              <li>
                <a href="#colecionaveis">Edições Limitadas</a>
              </li>
              <li>
                <a href="#vender">Venda seu Acervo</a>
              </li>
            </ul>
          </div>

          {/* Ajuda & Suporte */}
          <div>
            <h4 className="footer-title">Ajuda & Suporte</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Graduação de Vinil (Goldmine)</a>
              </li>
              <li>
                <a href="#">Guia de Embalagem</a>
              </li>
              <li>
                <a href="#">Trocas e Devoluções</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
            </ul>
          </div>

          {/* Pagamento Seguro */}
          <div>
            <h4 className="footer-title">Pagamento Seguro</h4>
            <div className="footer-payments">
              <FaPix className="footer-payment-pix" title="PIX" />
              <FaCcVisa title="Visa" />
              <FaCcMastercard title="Mastercard" />
              <FaBarcode title="Boleto" />
            </div>
            <div className="footer-ssl">
              <FaLock className="footer-ssl-icon" />
              <span>SSL 256-bit Encrypted</span>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="footer-bottom">
          <p>© 2026 Soundtrack - Vinil & CDs. Todos os direitos reservados.</p>
          <p>Feito para apaixonados por música 🎵</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;