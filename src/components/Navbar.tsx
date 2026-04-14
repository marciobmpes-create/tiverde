/* ========================================
   Navbar - Menu de navegação principal
   Links âncora para cada seção do site
   ======================================== */

import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

/* Lista de seções do site para gerar os links */
const navItems = [
  { label: "Início", href: "#home" },
  { label: "Eficiência Energética", href: "#eficiencia" },
  { label: "Lixo Eletrônico", href: "#lixo" },
  { label: "Cloud Sustentável", href: "#cloud" },
  { label: "Data Centers", href: "#datacenters" },
  { label: "ODS 12", href: "#ods12" },
  { label: "Dashboard", href: "#dashboard" },
];

const Navbar = () => {
  /* Estado para controlar menu mobile (aberto/fechado) */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo com ícone de folha */}
        <a href="#home" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Leaf className="w-6 h-6" />
          TI Verde
        </a>

        {/* Menu desktop - visível apenas em telas grandes */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Botão hamburger para mobile */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu mobile - aparece quando clicado */}
      {isOpen && (
        <div className="md:hidden bg-background border-b px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
