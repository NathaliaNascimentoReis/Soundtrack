import React, { useState, useRef } from "react";
import {
  FaCoins,
  FaShieldHeart,
  FaCloudArrowUp,
  FaPaperPlane,
  FaCircleCheck,
  FaFileImage,
} from "react-icons/fa6";

function Formulario() {
  const [formData, setFormData] = useState({
    albumName: "",
    artist: "",
    format: "vinil-lp",
    condition: "mint",
    desiredPrice: "",
  });

  const [files, setFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        albumName: "",
        artist: "",
        format: "vinil-lp",
        condition: "mint",
        desiredPrice: "",
      });
      setFiles([]);
    }, 4000);
  };

  return (
    <section id="vender" className="vender-section">
      <div className="vender-container">
        <div className="vender-grid">
          {/* Coluna Esquerda: Informações */}
          <div className="vender-info">
            <span className="vender-badge">
              <FaCoins /> Desapegue com Segurança
            </span>

            <h2 className="vender-title">
              Quer vender ou avaliar seu acervo de discos?
            </h2>

            <p className="vender-desc">
              Compramos coleções completas ou discos avulsos em bom estado.
              Preencha o formulário e nossa equipe de curadores entrará em
              contato com uma proposta em até 24 horas úteis.
            </p>

            <ul className="vender-steps">
              <li className="vender-step-item">
                <span className="vender-step-num">1</span>
                <span>Cadastre as informações e fotos do disco/CD</span>
              </li>
              <li className="vender-step-item">
                <span className="vender-step-num">2</span>
                <span>
                  Receba nossa oferta justa de compra direta ou consignação
                </span>
              </li>
              <li className="vender-step-item">
                <span className="vender-step-num">3</span>
                <span>
                  Coleta gratuita ou envio com frete pago pela Soundtrack
                </span>
              </li>
            </ul>

            <div className="vender-guarantee">
              <FaShieldHeart className="vender-guarantee-icon" />
              <p className="vender-guarantee-text">
                Mais de R$ 500 mil pagos a colecionadores em todo o Brasil com
                transações transparentes e PIX imediato.
              </p>
            </div>
          </div>

          {/* Coluna Direita: Card do Formulário */}
          <div className="vender-card">
            {isSubmitted ? (
              <div className="vender-success">
                <FaCircleCheck className="vender-success-icon" />
                <h3 className="vender-success-title">
                  Proposta Enviada com Sucesso!
                </h3>
                <p className="vender-success-desc">
                  Analisaremos os dados do seu álbum e entraremos em contato
                  em até 24 horas.
                </p>
              </div>
            ) : (
              <>
                <h3 className="vender-card-title">
                  Avaliação do seu Disco / CD
                </h3>
                <p className="vender-card-subtitle">
                  Preencha os detalhes abaixo para receber uma estimativa do
                  valor.
                </p>

                <form onSubmit={handleSubmit} className="vender-form">
                  <div className="vender-row-2">
                    <div className="vender-field">
                      <label className="vender-label">Nome do Álbum *</label>
                      <input
                        type="text"
                        name="albumName"
                        required
                        value={formData.albumName}
                        onChange={handleChange}
                        placeholder="Ex: Dark Side of the Moon"
                        className="vender-input"
                      />
                    </div>

                    <div className="vender-field">
                      <label className="vender-label">Artista / Banda *</label>
                      <input
                        type="text"
                        name="artist"
                        required
                        value={formData.artist}
                        onChange={handleChange}
                        placeholder="Ex: Pink Floyd"
                        className="vender-input"
                      />
                    </div>
                  </div>

                  <div className="vender-row-3">
                    <div className="vender-field">
                      <label className="vender-label">Formato</label>
                      <select
                        name="format"
                        value={formData.format}
                        onChange={handleChange}
                        className="vender-select"
                      >
                        <option value="vinil-lp">Vinil LP 12"</option>
                        <option value="cd">CD de Áudio</option>
                        <option value="compacto">Compacto 7"</option>
                        <option value="box">Box Set / Caixas</option>
                      </select>
                    </div>

                    <div className="vender-field">
                      <label className="vender-label">Estado do Mídia</label>
                      <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        className="vender-select"
                      >
                        <option value="mint">Lacrado / Novo (Mint)</option>
                        <option value="near-mint">Excelente (Near Mint)</option>
                        <option value="very-good">Muito Bom (VG+)</option>
                        <option value="good">Com marcas leves (Good)</option>
                      </select>
                    </div>

                    <div className="vender-field">
                      <label className="vender-label">
                        Preço Pretendido (R$)
                      </label>
                      <input
                        type="number"
                        name="desiredPrice"
                        value={formData.desiredPrice}
                        onChange={handleChange}
                        placeholder="Ex: 150"
                        className="vender-input"
                      />
                    </div>
                  </div>

                  <div className="vender-field">
                    <label className="vender-label">
                      Fotos da Capa e Mídia
                    </label>

                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      multiple
                      accept="image/*"
                      style={{ display: "none" }}
                    />

                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`vender-dropzone ${
                        isDragging ? "dragging" : ""
                      }`}
                    >
                      <FaCloudArrowUp className="vender-dropzone-icon" />
                      <p className="vender-dropzone-text">
                        Clique para anexar fotos ou arraste aqui
                      </p>
                      <p className="vender-dropzone-subtext">
                        Formatos JPG, PNG até 10MB
                      </p>

                      {files.length > 0 && (
                        <div className="vender-file-tags">
                          {files.map((file, idx) => (
                            <span key={idx} className="vender-file-tag">
                              <FaFileImage />
                              {file.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="vender-btn">
                    <FaPaperPlane /> Enviar para Avaliação Gratuita
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formulario;