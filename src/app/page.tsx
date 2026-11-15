import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBrands from "@/components/sections/TrustedBrands";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import LiftCollection from "@/components/sections/LiftCollection";
import AboutDevine from "@/components/sections/AboutDevine";
import ExperienceCarousel from "@/components/sections/ExperienceCarousel";
import Technology from "@/components/sections/Technology";
import InstallationProcess from "@/components/sections/InstallationProcess";
import Gallery from "@/components/sections/Gallery";
import SafetyStandards from "@/components/sections/SafetyStandards";
import VideoExperience from "@/components/sections/VideoExperience";
import Projects from "@/components/sections/Projects";
import CustomerReviews from "@/components/sections/CustomerReviews";
import Consultation from "@/components/sections/Consultation";
import ContactUs from "@/components/sections/ContactUs";
import BlogInsights from "@/components/sections/BlogInsights";
import ImageBand from "@/components/ui/ImageBand";

const Band = ({ bg, children }: { bg: string; children: React.ReactNode }) => (
  <div className="w-full" style={{ background: bg }}>
    {children}
  </div>
);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBrands />
        <Band bg="linear-gradient(180deg,#f4f7fd,#eaf0fa)"><WhyChooseUs />
          <ImageBand images={[
            { src: "/images/lift-r6061.jpg", alt: "MRL passenger elevator cabin", caption: "Silent MRL cabins" },
            { src: "/images/lift-r7066.jpg", alt: "Home villa elevator", caption: "Elegant home lifts" },
            { src: "/images/lift-r6051.jpg", alt: "Automatic passenger lift", caption: "Smooth automatic doors" },
          ]} />
        </Band>
        <Band bg="linear-gradient(180deg,#fcf7ef,#f8efe0)"><LiftCollection /></Band>
        <Band bg="linear-gradient(180deg,#eef7f3,#e2f1ea)"><AboutDevine /></Band>
        <Band bg="linear-gradient(180deg,#f6f1fb,#ece3f6)"><ExperienceCarousel /></Band>
        <Band bg="linear-gradient(180deg,#eaf4fc,#dcecf8)"><Technology /></Band>
        <Band bg="linear-gradient(180deg,#fff4ee,#fde6da)"><InstallationProcess />
          <ImageBand images={[
            { src: "/images/factory-floor1.jpg", alt: "Elevator manufacturing floor", caption: "Precision manufacturing" },
            { src: "/images/motor-heavy.jpg", alt: "Gearless traction motor", caption: "PMSG gearless motor" },
            { src: "/images/team.jpg", alt: "Devine installation team", caption: "Expert installation team" },
          ]} />
        </Band>
        <Band bg="linear-gradient(180deg,#f3f7ee,#e7efdc)"><Gallery /></Band>
        <Band bg="linear-gradient(180deg,#eef1fb,#e0e5f6)"><SafetyStandards /></Band>
        <Band bg="linear-gradient(180deg,#fbf6ea,#f5ecd6)"><VideoExperience /></Band>
        <Band bg="linear-gradient(180deg,#ecf6f8,#dcedf1)"><Projects /></Band>
        <Band bg="linear-gradient(180deg,#fdf1f4,#f8e3e9)"><CustomerReviews />
          <ImageBand images={[
            { src: "/images/lift-r7066.jpg", alt: "Residence elevator project", caption: "Bhubaneswar Residence" },
            { src: "/images/lift-r6053.jpg", alt: "Hospital elevator project", caption: "City Hospital" },
            { src: "/images/lift-r6051.jpg", alt: "Hotel elevator project", caption: "Grand Hotel Lobby" },
          ]} />
        </Band>
        <Band bg="linear-gradient(180deg,#f0f5fc,#e3ebf8)"><Consultation /></Band>
        <Band bg="linear-gradient(180deg,#f6f4ee,#ece8dc)"><ContactUs /></Band>
        <Band bg="linear-gradient(180deg,#eef5f0,#e1ede5)"><BlogInsights /></Band>
      </main>
      <Footer />
    </>
  );
}
