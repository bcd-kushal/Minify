import Image from "next/image"
import { TableComponent } from "@/components/shadecn/table"
import { ToastComponent } from "@/components/shadecn/toast"
import { ComboboxComponent } from "@/components/shadecn/combobox"
import { ContextMenuComponent } from "@/components/shadecn/contextmenu"
import { DataTableComponent } from "@/components/shadecn/datatable"

import HeaderLayout from "@/components/layouts/header"
import FooterLayout from "@/components/layouts/footer"
import RibbonLayout from "@/components/layouts/ribbon"
import { NewURLForm } from "@/components/forms/newurl"
import { Sticker, StickerComponent } from "@/components/custom/sticker"
import { HoverCardComponent } from "@/components/shadecn/hovercard"
import { AccordionComponent } from "@/components/shadecn/accordian"

const LAYOUT_DIMENSIONS = { HEADER: { H:64 }, RIBBON: { H:123 }, FOOTER: { H:48 } }
const BODY_EXCLUDED_HEIGHT = LAYOUT_DIMENSIONS.HEADER.H + LAYOUT_DIMENSIONS.RIBBON.H + LAYOUT_DIMENSIONS.FOOTER.H


export default function Home() {
  const ACCORDIAN_DATA = [
    { question:"HELLO", answer:"HELLO TS" },
    { question:"HELLO", answer:"HELLO TS" },
    { question:"HELLO", answer:"HELLO TS" }
  ]
  
  return (
    <>
    <HeaderLayout props={{ cph:`${LAYOUT_DIMENSIONS.HEADER.H}px` }}/> {/* HEADER ================================================ */}

    {/* TITLE AND DATE SECTION ======================================== */}

    <RibbonLayout/> {/* BODY =================================================== */}

    <main className="px-[24px] flex items-stretch justify-stretch gap-5 md:flex-col" style={{minHeight:`calc(100dvh - ${BODY_EXCLUDED_HEIGHT}px)`}}>
      <div className="min-w-[300px]"><NewURLForm props={{cph:"fit"}}/></div>
      <div className="w-[100%] flex flex-col items-stretch justify-start gap-4 md:flex-col-reverse">
        <div className="flex w-[100%] items-center justify-start gap-4 scrollbar-hide pb-3 overflow-x-scroll md:flex-wrap md:justify-evenly">
          <HoverCardComponent/>
          <HoverCardComponent/>
        </div>
        <div className="">
          <DataTableComponent/>
          <AccordionComponent data={ACCORDIAN_DATA}/>
        </div>
      </div>
    </main>

    <FooterLayout props={{ cph:`${LAYOUT_DIMENSIONS.FOOTER.H}px` }}/> {/* FOOTER ==================================================== */}
    </>
  )
}
