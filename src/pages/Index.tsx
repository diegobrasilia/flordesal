import { LangProvider } from "@/contexts/LangContext";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { MenuSection } from "@/components/MenuSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ReservationSection } from "@/components/ReservationSection";
import { SiteFooter } from "@/components/SiteFooter";

const Index = () => {
  return (
    <LangProvider>
      <SiteHeader />
      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <ReviewsSection />
        <ReservationSection />
      </main>
      <SiteFooter />
    </LangProvider>
  );
};

export default Index;
