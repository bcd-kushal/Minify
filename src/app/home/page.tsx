import { DataTableComponent } from "@/components/shadecn/datatable"
import { NewURLForm } from "@/components/forms/forms"
import { HoverCardComponent } from "@/components/shadecn/hovercard"
import { AccordionComponent } from "@/components/shadecn/accordian"
import { LAYOUT_DIMENSIONS } from "../../../utils/layout_dimensons"

const BODY_EXCLUDED_HEIGHT = LAYOUT_DIMENSIONS.HEADER.H + LAYOUT_DIMENSIONS.RIBBON.H + LAYOUT_DIMENSIONS.FOOTER.H

export default function Home() {
  const ACCORDIAN_DATA = [
    { question:"HELLO", answer:"HELLO TS" },
    { question:"HELLO", answer:"HELLO TS" },
    { question:"HELLO", answer:"HELLO TS" }
  ]
  
  return (
    <main className="px-[24px] flex items-stretch justify-stretch gap-5 md:flex-col" style={{minHeight:`calc(100dvh - ${BODY_EXCLUDED_HEIGHT}px)`}}>
      
      {/* LEFT SIDE ~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="min-w-[300px]"><NewURLForm props={{cph:"fit"}}/></div>
      
      {/* RIGHT SIDE ~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="w-[100%] flex flex-col items-stretch justify-start gap-4 md:flex-col-reverse">
        {/* ANALYTICS */}
        <div className="flex w-[100%] items-center justify-start gap-4 scrollbar-hide pb-3 overflow-x-scroll md:flex-wrap md:justify-evenly">
          <HoverCardComponent/>
          <HoverCardComponent/>
        </div>
        {/* ALL URLS TABLE */}
        <div className="">
          <DataTableComponent/>
          <AccordionComponent data={ACCORDIAN_DATA}/>
        </div>
      </div>
    </main>
  )
}
