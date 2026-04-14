/* ========================================
   CloudSection - Cloud Computing Sustentável
   Benefícios da nuvem para o meio ambiente
   ======================================== */

import { Cloud, TrendingDown, Users, Globe } from "lucide-react";

/* Benefícios da computação em nuvem sustentável */
const beneficios = [
  {
    icon: TrendingDown,
    titulo: "Menos hardware",
    texto: "Reduz a necessidade de servidores locais, diminuindo o consumo de energia e materiais.",
  },
  {
    icon: Users,
    titulo: "Recursos compartilhados",
    texto: "Múltiplos usuários compartilham a mesma infraestrutura, otimizando o uso de recursos.",
  },
  {
    icon: Globe,
    titulo: "Escalabilidade",
    texto: "Ajusta recursos conforme a demanda, evitando desperdício de capacidade ociosa.",
  },
];

const CloudSection = () => {
  return (
    <section id="cloud" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-2 text-foreground">
          ☁️ Cloud Computing Sustentável
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          A computação em nuvem permite usar recursos de TI de forma mais
          eficiente, reduzindo o impacto ambiental.
        </p>

        {/* Card explicativo principal */}
        <div className="bg-card border rounded-lg p-6 mb-8 text-center">
          <Cloud className="w-12 h-12 mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Em vez de cada empresa manter seus próprios servidores, a nuvem
            centraliza os recursos em data centers otimizados, que são muito
            mais eficientes energeticamente.
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className="grid md:grid-cols-3 gap-6">
          {beneficios.map((b) => (
            <div key={b.titulo} className="bg-card border rounded-lg p-5 text-center card-hover">
              <b.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2 text-card-foreground">{b.titulo}</h3>
              <p className="text-sm text-muted-foreground">{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudSection;
