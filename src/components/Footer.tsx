/* ========================================
   Footer - Rodapé do site
   Informações finais e créditos
   ======================================== */

import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Leaf className="w-5 h-5" />
          <span className="font-semibold">TI Verde</span>
        </div>
        <p className="text-sm opacity-80">
          Trabalho acadêmico sobre Tecnologia da Informação Sustentável
        </p>
        <p className="text-xs opacity-60 mt-2">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
