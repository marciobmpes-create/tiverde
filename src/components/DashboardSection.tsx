/* ========================================
   DashboardSection - Dashboard com dados fictícios
   Gráficos usando Recharts para visualizar
   dados sobre sustentabilidade em TI
   ======================================== */

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

/* ---- Dados fictícios em formato JSON ---- */

/* Consumo de energia por setor (em GWh) */
const consumoEnergia = [
  { setor: "Data Centers", valor: 200 },
  { setor: "Escritórios", valor: 150 },
  { setor: "Telecomunicações", valor: 120 },
  { setor: "Dispositivos", valor: 180 },
  { setor: "Nuvem", valor: 90 },
];

/* Distribuição do lixo eletrônico por tipo */
const lixoEletronico = [
  { tipo: "Computadores", valor: 30 },
  { tipo: "Celulares", valor: 25 },
  { tipo: "TVs/Monitores", valor: 20 },
  { tipo: "Baterias", valor: 15 },
  { tipo: "Outros", valor: 10 },
];

/* Cores para o gráfico de pizza */
const CORES = [
  "hsl(152, 60%, 36%)",
  "hsl(140, 60%, 45%)",
  "hsl(160, 40%, 55%)",
  "hsl(130, 35%, 65%)",
  "hsl(145, 25%, 75%)",
];

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold text-center mb-2 text-foreground">
          📊 Dashboard — Dados sobre TI Verde
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Visualização de dados fictícios para fins acadêmicos sobre o impacto
          ambiental da tecnologia.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Gráfico de barras - Consumo de energia */}
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-card-foreground">
              Consumo de Energia por Setor (GWh)
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={consumoEnergia}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(140, 15%, 88%)" />
                <XAxis
                  dataKey="setor"
                  tick={{ fontSize: 12, fill: "hsl(150, 10%, 45%)" }}
                />
                <YAxis tick={{ fontSize: 12, fill: "hsl(150, 10%, 45%)" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(120, 20%, 99%)",
                    border: "1px solid hsl(140, 15%, 88%)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="valor" fill="hsl(152, 60%, 36%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de pizza - Lixo eletrônico */}
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-card-foreground">
              Distribuição do Lixo Eletrônico (%)
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={lixoEletronico}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  dataKey="valor"
                  nameKey="tipo"
                  label={({ tipo, valor }) => `${tipo}: ${valor}%`}
                  labelLine={false}
                  fontSize={11}
                >
                  {lixoEletronico.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={CORES[index % CORES.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  wrapperStyle={{ fontSize: "12px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Nota sobre dados fictícios */}
        <p className="text-xs text-muted-foreground text-center mt-6">
          * Todos os dados apresentados são fictícios e foram criados para fins educacionais.
        </p>
      </div>
    </section>
  );
};

export default DashboardSection;
