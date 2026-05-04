"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function ResponsiveHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar container">
        <Link href="/" className="nav-logo" onClick={closeMenu}>
          <img src="/imagens/logo.png" alt="Logo da Clínica" />
        </Link>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/#inicio" className="nav-link" onClick={closeMenu}>
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#sobre" className="nav-link" onClick={closeMenu}>
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#servicos" className="nav-link" onClick={closeMenu}>
              Serviços
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#terapias" className="nav-link" onClick={closeMenu}>
              Especialidades
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#contato" className="nav-link" onClick={closeMenu}>
              Nosso Espaço
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#avaliacoes" className="nav-link" onClick={closeMenu}>
              Feedbacks
            </Link>
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
          onClick={() => setMenuOpen((value) => !value)}
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
