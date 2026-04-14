/* ========================================
   Index - Página principal do site TI Verde
   Reúne todas as seções em uma single-page
   ======================================== */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EficienciaSection from "@/components/EficienciaSection";
import LixoSection from "@/components/LixoSection";
import CloudSection from "@/components/CloudSection";
import DataCentersSection from "@/components/DataCentersSection";
import ODS12Section from "@/components/ODS12Section";
import DashboardSection from "@/components/DashboardSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Menu de navegação fixo no topo */}
      <Navbar />

      {/* Seções do site em ordem */}
      <HeroSection />
      <EficienciaSection />
      <LixoSection />
      <CloudSection />
      <DataCentersSection />
      <ODS12Section />
      <DashboardSection />

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Index;
