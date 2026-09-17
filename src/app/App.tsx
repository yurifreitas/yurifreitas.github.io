import { Cases } from "@/components/organisms/Cases";
import { CommandPalette } from "@/components/organisms/CommandPalette";
import { Contact } from "@/components/organisms/Contact";
import { Domains } from "@/components/organisms/Domains";
import { Engagement } from "@/components/organisms/Engagement";
import { Experience } from "@/components/organisms/Experience";
import { Featured } from "@/components/organisms/Featured";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Rankings } from "@/components/organisms/Rankings";
import { Services } from "@/components/organisms/Services";
import { TechStack } from "@/components/organisms/TechStack";
import { Writing } from "@/components/organisms/Writing";
import { WorkIndex } from "@/components/organisms/WorkIndex";
import { PageLayout } from "@/components/templates/PageLayout";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";

export function App() {
  const { t } = useLocale();
  useReveal();

  return (
    <PageLayout skipLabel={t(ui.a11y.skip)} header={<Header />} footer={<Footer />} overlay={<CommandPalette />}>
      <Hero />
      <Cases />
      <Experience />
      <Domains />
      <TechStack />
      <Rankings />
      <Featured />
      <Writing />
      <Services />
      <Engagement />
      <WorkIndex />
      <Contact />
    </PageLayout>
  );
}
