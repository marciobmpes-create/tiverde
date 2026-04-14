/* ========================================
   DataCentersSection - Data Centers Verdes
   Práticas sustentáveis em data centers
   ======================================== */

import { Server, Wind, Droplets, Sun } from "lucide-react";

/* Exemplos de práticas sustentáveis em data centers */
const praticas = [
  {
    icon: Wind,
    titulo: "Refrigeração natural",
    texto: "Usar o ar externo frio para resfriar servidores, reduzindo o uso de ar-condicionado.",
  },
  {
    icon: Sun,
    titulo: "Energia renovável",
    texto: "Utilizar painéis solares e energia eólica para alimentar a infraestrutura.",
  },
  {
    icon: Droplets,
    titulo: "Reuso de água",
    texto: "Sistemas de resfriamento que reciclam água, minimizando o desperdício.",
  },
  {
    icon: Server,
    titulo: "Hardware eficiente",
    texto: "Servidores de baixo consumo energético com componentes otimizados.",
  },
];

const DataCentersSection = () => {
  return (
    <section id="datacenters" className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-2 text-foreground">
          🏢 Data Centers Verdes
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Data centers verdes são instalações projetadas para minimizar o impacto
          ambiental através de tecnologias e práticas sustentáveis.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {praticas.map((p) => (
            <div key={p.titulo} className="bg-card border rounded-lg p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-card-foreground">{p.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{p.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataCentersSection;
