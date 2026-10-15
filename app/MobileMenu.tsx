"use client";

import { useRef } from "react";
import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";

export default function MobileMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => {
    if (menu.current) menu.current.open = false;
  };

  return (
    <details className="mobile-menu" ref={menu}>
      <summary>Menu</summary>
      <nav className="mobile-menu-panel" aria-label="Navegação no celular">
        <Link href="/#servicos" onClick={closeMenu}>Serviços <span aria-hidden="true">↗</span></Link>
        <Link href="/#como-trabalhamos" onClick={closeMenu}>Como trabalhamos <span aria-hidden="true">↗</span></Link>
        <Link href="/orcamento" onClick={closeMenu}>Pedir orçamento <span aria-hidden="true">↗</span></Link>
        <WhatsAppLink source="mobile" className="mobile-menu-primary">
          Conversar no WhatsApp <span aria-hidden="true">↗</span>
        </WhatsAppLink>
      </nav>
    </details>
  );
}
