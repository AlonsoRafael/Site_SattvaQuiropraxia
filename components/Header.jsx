"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup caso o componente seja desmontado
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#inicio" className="nav-logo" onClick={closeMenu}>
          <img src="/imagens/logo.png" alt="Logo da Clínica" />
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
          rel="noreferrer"
          className="btn btn-primary nav-btn"
        >
          <i className="fa-brands fa-whatsapp" /> Agendar Consulta
        </a>

        <button
          type="button"
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
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
