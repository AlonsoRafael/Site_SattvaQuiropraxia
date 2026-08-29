"use client";

import { useState, useEffect } from 'react';
import { WhatsAppIcon } from './Icons';
import { trackWhatsAppClick } from '../data/analytics';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <nav className="navbar container" aria-label="Navegação principal">
        <a href="#inicio" className="nav-logo" onClick={closeMenu} aria-label="Ir para o início">
          <img
            src="/imagens/logo.webp"
            alt="Logo Sattva Saúde Integrativa"
            width="150"
            height="50"
            style={{ width: 'auto', height: '50px' }}
          />
        </a>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#inicio" className="nav-link" onClick={closeMenu}>
              Início
            </a>
          </li>
          <li className="nav-item">
            <a href="#terapias" className="nav-link" onClick={closeMenu}>
              Especialidades
            </a>
          </li>
          <li className="nav-item">
            <a href="#servicos" className="nav-link" onClick={closeMenu}>
              Cuidados
            </a>
          </li>
          <li className="nav-item">
            <a href="#sobre" className="nav-link" onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a href="#avaliacoes" className="nav-link" onClick={closeMenu}>
              Avaliações
            </a>
          </li>
          <li className="nav-item">
            <a href="#contato" className="nav-link" onClick={closeMenu}>
              Nosso Espaço
            </a>
          </li>
          <li className="nav-item">
            <a href="#duvidas" className="nav-link" onClick={closeMenu}>
              Dúvidas
            </a>
          </li>
        </ul>

        <a
          href="https://wa.me/553496416009"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-btn"
          aria-label="Agendar Consulta pelo WhatsApp"
          onClick={() => trackWhatsAppClick('header')}
        >
          <WhatsAppIcon size={18} style={{ marginRight: '6px' }} /> Agendar Consulta
        </a>

        <button
          type="button"
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>
    </header>
  );
}
