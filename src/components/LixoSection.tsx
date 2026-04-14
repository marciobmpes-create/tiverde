/* ========================================
   LixoSection - Lixo Eletrônico (E-lixo)
   O que é e como descartar corretamente
   ======================================== */

import { Trash2, AlertTriangle, CheckCircle } from "lucide-react";

const LixoSection = () => {
  return (
    <section id="lixo" className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-2 text-foreground">
          🗑️ Lixo Eletrônico
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Equipamentos eletrônicos descartados incorretamente representam um grave problema ambiental.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* O que é e-lixo */}
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-lg text-card-foreground">O que é E-lixo?</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Trash2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Computadores, celulares e periféricos descartados
              </li>
              <li className="flex items-start gap-2">
                <Trash2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Baterias, pilhas e carregadores usados
              </li>
              <li className="flex items-start gap-2">
                <Trash2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Cabos, placas e componentes eletrônicos
              </li>
              <li className="flex items-start gap-2">
                <Trash2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Contêm substâncias tóxicas como chumbo e mercúrio
              </li>
            </ul>
          </div>

          {/* Como descartar */}
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-lg text-card-foreground">Como Descartar?</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-glow mt-0.5 flex-shrink-0" />
                Levar a pontos de coleta especializados
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-glow mt-0.5 flex-shrink-0" />
                Devolver ao fabricante (logística reversa)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-glow mt-0.5 flex-shrink-0" />
                Doar equipamentos ainda funcionais
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-glow mt-0.5 flex-shrink-0" />
                Nunca descartar no lixo comum
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LixoSection;
