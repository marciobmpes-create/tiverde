/* ========================================
   ODS12Section - ODS 12: Consumo e Produção Responsáveis
   Relação com TI Verde
   ======================================== */

import { Target, ArrowRight } from "lucide-react";

/* Relações entre ODS 12 e TI Verde */
const relacoes = [
  "Prolongar a vida útil dos equipamentos eletrônicos",
  "Reduzir o consumo de energia em processos de TI",
  "Promover a reciclagem de componentes eletrônicos",
  "Adotar políticas de compras sustentáveis de TI",
  "Incentivar o uso de softwares e serviços eficientes",
];

const ODS12Section = () => {
  return (
    <section id="ods12" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-2 text-foreground">
          🎯 ODS 12 — Consumo e Produção Responsáveis
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          O Objetivo de Desenvolvimento Sustentável 12 da ONU busca garantir
          padrões de consumo e produção sustentáveis.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Explicação da ODS 12 */}
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-lg text-card-foreground">O que é?</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A ODS 12 faz parte da Agenda 2030 da ONU e propõe que países,
              empresas e cidadãos adotem práticas de consumo consciente. Isso
              inclui reduzir o desperdício, usar recursos naturais de forma
              eficiente e promover estilos de vida sustentáveis.
            </p>
          </div>

          {/* Relação com TI Verde */}
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-card-foreground">
              Relação com TI Verde
            </h3>
            <ul className="space-y-3">
              {relacoes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ODS12Section;
