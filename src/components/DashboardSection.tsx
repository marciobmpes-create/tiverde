/* ========================================
   DashboardSection - Dashboards interativos
   Exibe dashboards reais via iframe
   ======================================== */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardItem {
  titulo: string;
  descricao: string;
  src: string;
}

const dashboards: DashboardItem[] = [
  {
    titulo: "Dashboard — Público",
    descricao: "Resultados e análises das respostas do público.",
    src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTvdA3H4pWRajC5QxF7dAT1QiomsJddYF5kheiDcoo8vrwx0P_3fCxaEBCPSEReQW24CbcMMn2ei3iB/pubhtml?widget=true&headers=false",
  },
  {
    titulo: "Dashboard — Empresa",
    descricao: "Resultados e análises das respostas coletadas com empresas.",
    src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR0I4I-lXjXFJw5px521B0lx90t5UlGGj1PO7hmLeZVfqNQVuuHjaN_eT33yYUeqzkBCC9CeMiZkvmO/pubhtml?widget=true&headers=false",
  },
];

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

        {/* Grid dos dashboards */}
        <div className="grid gap-10 md:gap-12">
          {dashboards.map((db, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border/60 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl text-card-foreground">
                  {db.titulo}
                </CardTitle>
                <p className="text-sm md:text-base text-muted-foreground mt-1">
                  {db.descricao}
                </p>
              </CardHeader>
              <CardContent className="px-4 pb-4 md:px-6 md:pb-6">
                <div
                  className="relative w-full rounded-lg overflow-hidden border border-border/40 bg-muted/30"
                  style={{ minHeight: "700px" }}
                >
                  <iframe
                    src={db.src}
                    title={db.titulo}
                    className="w-full h-full absolute inset-0 border-0"
                    style={{ minHeight: "700px" }}
                    loading="lazy"
                    allow="fullscreen"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
