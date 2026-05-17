/* ========================================
   DashboardSection - Pesquisas reais
   Exibe os formulários incorporados das
   pesquisas com Público e com Empresas
   organizados em abas responsivas.
   ======================================== */

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/* ---- Configuração das pesquisas reais ---- */
/* Cada item representa um gráfico/pesquisa incorporada.
   Para adicionar mais, basta inserir novos objetos nos arrays. */

type Pesquisa = {
  titulo: string;
  descricao?: string;
  src: string;
  height: number; // altura original do embed
};

const pesquisasPublico: Pesquisa[] = [
  {
    titulo: "Pesquisa com o Público",
    descricao:
      "Formulário aplicado ao público geral para avaliar percepção sobre TI Verde.",
    src: "https://docs.google.com/forms/d/e/1FAIpQLSe1NVwCDwgyfw4Fg5cjDwdaKj9ogGI18DulQPtRugwoltPBYw/viewform?embedded=true",
    height: 4039,
  },
];

const pesquisasEmpresas: Pesquisa[] = [
  {
    titulo: "Pesquisa com Empresas",
    descricao:
      "Formulário aplicado a empresas para mapear práticas sustentáveis de TI.",
    src: "https://docs.google.com/forms/d/e/1FAIpQLSdioqrmDMFRGsvkaiexm1HuS5jazEIC8xmkFP0iU58Em1mahw/viewform?embedded=true",
    height: 2982,
  },
];

/* ---- Card individual com iframe responsivo ---- */
const PesquisaCard = ({ pesquisa }: { pesquisa: Pesquisa }) => {
  const [carregado, setCarregado] = useState(false);
  const [erro, setErro] = useState(false);

  return (
    <Card className="card-hover fade-in-up overflow-hidden border-primary/10">
      <CardHeader>
        <CardTitle className="text-lg text-card-foreground">
          {pesquisa.titulo}
        </CardTitle>
        {pesquisa.descricao && (
          <p className="text-sm text-muted-foreground">{pesquisa.descricao}</p>
        )}
      </CardHeader>
      <CardContent>
        <div
          className="relative w-full rounded-md overflow-hidden bg-muted/40"
          style={{ height: `${Math.min(pesquisa.height, 800)}px` }}
        >
          {/* Estado de carregamento / erro */}
          {!carregado && !erro && (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground animate-pulse">
              Carregando pesquisa…
            </div>
          )}
          {erro && (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground px-4 text-center">
              Não foi possível carregar a pesquisa no momento. Tente novamente
              mais tarde.
            </div>
          )}

          {/* Iframe real da pesquisa */}
          <iframe
            src={pesquisa.src}
            title={pesquisa.titulo}
            className="w-full h-full border-0"
            loading="lazy"
            onLoad={() => setCarregado(true)}
            onError={() => setErro(true)}
          >
            Carregando…
          </iframe>
        </div>
      </CardContent>
    </Card>
  );
};

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-foreground">
          📊 Dashboard — Pesquisas de Campo
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Resultados reais coletados nas pesquisas aplicadas ao público e às
          empresas sobre práticas de TI Verde.
        </p>

        {/* Navegação por abas */}
        <Tabs defaultValue="publico" className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="publico">Público</TabsTrigger>
            <TabsTrigger value="empresas">Empresas</TabsTrigger>
          </TabsList>

          {/* Aba Público */}
          <TabsContent value="publico">
            <div className="grid gap-6 md:grid-cols-1">
              {pesquisasPublico.map((p, i) => (
                <PesquisaCard key={i} pesquisa={p} />
              ))}
            </div>
          </TabsContent>

          {/* Aba Empresas */}
          <TabsContent value="empresas">
            <div className="grid gap-6 md:grid-cols-1">
              {pesquisasEmpresas.map((p, i) => (
                <PesquisaCard key={i} pesquisa={p} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DashboardSection;
