/* ========================================
   HeroSection - Seção inicial (Home)
   Explica o que é TI Verde e sua importância
   ======================================== */

import { Leaf, Recycle, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20">
      {/* Banner principal com gradiente verde */}
      <div className="hero-gradient text-primary-foreground py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl fade-in-up">
          <Leaf className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TI Verde</h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Tecnologia da Informação sustentável: práticas que reduzem o impacto
            ambiental da tecnologia, promovendo eficiência energética e
            responsabilidade ecológica.
          </p>
        </div>
      </div>

      {/* Cards explicativos sobre TI Verde */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-4 text-foreground">
          O que é TI Verde?
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          TI Verde é o conjunto de práticas sustentáveis aplicadas à tecnologia
          da informação, buscando minimizar o impacto ambiental durante todo o
          ciclo de vida dos equipamentos e serviços de TI.
        </p>

        {/* Grid com 3 pilares principais */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Zap,
              title: "Eficiência",
              desc: "Reduzir o consumo de energia em equipamentos e infraestrutura de TI.",
            },
            {
              icon: Recycle,
              title: "Reciclagem",
              desc: "Descartar corretamente equipamentos eletrônicos e promover a reutilização.",
            },
            {
              icon: Leaf,
              title: "Sustentabilidade",
              desc: "Adotar soluções tecnológicas que respeitem o meio ambiente.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card border rounded-lg p-6 text-center card-hover"
            >
              <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
