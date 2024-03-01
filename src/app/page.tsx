import LeftHeroSection from "@/components/landing/hero/leftSection"
import { LAYOUT_DIMENSIONS } from "../../utils/layout_dimensons"
import RightHeroSection from "@/components/landing/hero/rightSection"
import CompaniesSection from "@/components/landing/companies"
import StatsSection from "@/components/landing/statsSection"
import FeaturesSection from "@/components/landing/featuresSection"
import FAQSection from "@/components/landing/faqSection"

const BODY_EXCLUDED_HEIGHT = LAYOUT_DIMENSIONS.HEADER.H + LAYOUT_DIMENSIONS.RIBBON.H + LAYOUT_DIMENSIONS.FOOTER.H

export default function Home() {
  const ACCORDIAN_DATA = [
    { question:"HELLO", answer:"HELLO TS" },
    { question:"HELLO", answer:"HELLO TS" },
    { question:"HELLO", answer:"HELLO TS" }
  ]
  
  return (
    <main/*  style={{minHeight:`calc(100dvh - ${BODY_EXCLUDED_HEIGHT}px)`}} */>
      <div className="h-screen w-[100%] flex gap-2 items-stretch justify-stretch md:flex-col">
        <LeftHeroSection/>
        <RightHeroSection/>
      </div>
      <CompaniesSection/>
      <StatsSection/>
      <FeaturesSection/>
      <FAQSection/>
    </main>
  )
}
