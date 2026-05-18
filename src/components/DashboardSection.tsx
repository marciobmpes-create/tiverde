/* ========================================
   DashboardSection - Gráficos Interativos
   Exibe gráficos reais via iframe
   ======================================== */

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GraficoItem {
  titulo: string;
  descricao: string;
  src: string;
  width: number;
  height: number;
}

/* ========================================
   DADOS - Pesquisa ao Público
   ======================================== */
const graficosPublico: GraficoItem[] = [
  {
    titulo: "Conhece T.I Verde?",
    descricao: "Resultados da pesquisa sobre o conhecimento do público em relação ao conceito de TI Verde.",
    src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTvdA3H4pWRajC5QxF7dAT1QiomsJddYF5kheiDcoo8vrwx0P_3fCxaEBCPSEReQW24CbcMMn2ei3iB/pubchart?oid=1501387955&format=interactive",
    width: 600,
    height: 371,
  },
  {
    titulo: "Lixo Eletrônico",
    descricao: "Dados sobre conscientização e descarte de lixo eletrônico.",
    src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTvdA3H4pWRajC5QxF7dAT1QiomsJddYF5kheiDcoo8vrwx0P_3fCxaEBCPSEReQW24CbcMMn2ei3iB/pubchart?oid=744493053&format=interactive",
    width: 600,
    height: 371,
  },
  {
    titulo: "Qual o maior problema causado pela tecnologia hoje?",
    descricao: "Opinião do público sobre impactos tecnológicos atuais.",
    src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpLamq5xgz14B0qnrnwXbli-0Jbc6ww64ssRffV-NVpwiytjTCz5KeCY-v6CiidfOpl3-Tl1aihabK/pubchart?oid=868453597&format=interactive",
    width: 600,
    height: 371,
  },
  {
    titulo: "Como a tecnologia pode ajudar o meio ambiente?",
    descricao: "Percepção do público sobre tecnologia sustentável.",
    src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpLamq5xgz14B0qnrnwXbli-0Jbc6ww64ssRffV-NVpwiytjTCz5KeCY-v6CiidfOpl3-Tl1aihabK/pubchart?oid=1366683510&format=interactive",
    width: 600,
    height: 371,
  },
];

/* ========================================
   DADOS - Pesquisa as Empresas
   ======================================== */
const graficosEmpresa: GraficoItem[] = [
  {
    titulo: "A empresa conhece o conceito de TI Verde?",
    descricao: "Empresas e práticas sustentáveis adotadas.",
    src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpLamq5xgz14B0qnrnwXbli-0Jbc6ww64ssRffV-NVpwiytjTCz5KeCY-v6CiidfOpl3-Tl1aihabK/pubchart?oid=1142315813&format=interactive",
    width: 600,
    height: 371,
  },
  {
    titulo: "Benefícios da TI Verde",
    descricao: "Benefícios que as empresas acreditam obter.",
    src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpLamq5xgz14B0qnrnwXbli-0Jbc6ww64ssRffV-NVpwiytjTCz5KeCY-v6CiidfOpl3-Tl1aihabK/pubchart?oid=705198308&format=interactive",
    width: 600,
    height: 371,
  },
  {
    titulo: "Dificuldades no descarte correto do lixo eletrônico",
    descricao: "Principais obstáculos enfrentados pelas empresas.",
    src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpLamq5xgz14B0qnrnwXbli-0Jbc6ww64ssRffV-NVpwiytjTCz5KeCY-v6CiidfOpl3-Tl1aihabK/pubchart?oid=278018177&format=interactive",
    width: 600,
    height: 371,
  },
];

/* ========================================
   Componente Card do Gráfico
   ======================================== */
const GraficoCard = ({ grafico, delay }: { grafico: GraficoItem; delay: number }) => {
  const [carregado, setCarregado] = useState(false);

  return (
    <Card
      className="overflow-hidden border border-border/60 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-500 bg-card/80 backdrop-blur-sm opacity-0 animate-fade-in-up"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-lg md:text-xl text-card-foreground leading-snug">
          {grafico.titulo}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          {grafico.descricao}
        </p>
      </CardHeader>
      <CardContent className="px-4 pb-4 md:px-6 md:pb-6">
        <div className="relative w-full rounded-lg overflow-hidden bg-muted/30 border border-border/40">
          {/* Skeleton de carregamento */}
          {!carregado && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
              <div className="animate-pulse flex flex-col items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                <span className="text-sm text-muted-foreground">Carregando gráfico...</span>
              </div>
            </div>
          )}
          <div
            className="relative w-full"
            style={{ aspectRatio: `${grafico.width} / ${grafico.height}` }}
          >
            <iframe
              src={grafico.src}
              title={grafico.titulo}
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              onLoad={() => setCarregado(true)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/* ========================================
   Seção Principal - Dashboard
   ======================================== */
const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Dashboard Interativo da Pesquisa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visualização dinâmica dos resultados coletados sobre TI Verde.
          </p>
        </div>

        {/* Tabs de navegação */}
        <Tabs defaultValue="publico" className="w-full">
          {/* Lista de abas */}
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted/50 p-1 rounded-xl">
              <TabsTrigger
                value="publico"
                className="rounded-lg text-sm md:text-base font-medium data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
              >
                <span className="mr-2">🌱</span>
                Pesquisa ao Público
              </TabsTrigger>
              <TabsTrigger
                value="empresa"
                className="rounded-lg text-sm md:text-base font-medium data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
              >
                <span className="mr-2">🏢</span>
                Pesquisa as Empresas
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Conteúdo - Pesquisa ao Público */}
          <TabsContent value="publico" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {graficosPublico.map((grafico, index) => (
                <GraficoCard
                  key={index}
                  grafico={grafico}
                  delay={index * 150}
                />
              ))}
            </div>
          </TabsContent>

          {/* Conteúdo - Pesquisa as Empresas */}
          <TabsContent value="empresa" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {graficosEmpresa.map((grafico, index) => (
                <GraficoCard
                  key={index}
                  grafico={grafico}
                  delay={index * 150}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DashboardSection;
