/* ========================================
   EficienciaSection - Eficiência Energética
   Como reduzir consumo de energia em TI
   ======================================== */

import { BatteryCharging, Monitor, Server, Lightbulb } from "lucide-react";

/* Dados das dicas de eficiência energética */
const dicas = [
  {
    icon: Monitor,
    titulo: "Desligar monitores",
    texto: "Configurar o desligamento automático de monitores após períodos de inatividade economiza até 70% de energia.",
  },
  {
    icon: BatteryCharging,
    titulo: "Fontes eficientes",
    texto: "Utilizar fontes de alimentação com certificação 80 Plus garante maior eficiência na conversão de energia.",
  },
  {
    icon: Server,
    titulo: "Virtualização",
    texto: "Consolidar múltiplos servidores em máquinas virtuais reduz o número de equipamentos físicos necessários.",
  },
  {
    icon: Lightbulb,
    titulo: "Modo de economia",
    texto: "Ativar modos de economia de energia nos sistemas operacionais reduz o consumo sem afetar a produtividade.",
  },
];

const EficienciaSection = () => {
  return (
    <section id="eficiencia" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2 text-foreground">
          ⚡ Eficiência Energética
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Práticas simples para reduzir o consumo de energia em computadores e data centers.
        </p>

        {/* Grid com as 4 dicas de eficiência */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {dicas.map((dica) => (
            <div key={dica.titulo} className="bg-card border rounded-lg p-5 card-hover">
              <div className="flex items-start gap-4">
                <dica.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-card-foreground">{dica.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{dica.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EficienciaSection;
