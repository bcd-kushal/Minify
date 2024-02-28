import { ButtonComponent } from "../shadecn/button"
import { CalendarRangeComponent } from "../shadecn/calendarrange"
import { MenubarComponent } from "../shadecn/menubar"



export default function RibbonLayout({ props }: { props?: any }){

    const tlw = { h:props?.cph||"100%", w:props?.cpw||"100%" }

    return(
        <section className={`w-[${tlw.w}] h-[${tlw.h}] px-[24px] py-[12px] flex flex-col items-stretch justify-start md:pt-[48px] md:mb-3`}>
            <div className="flex justify-between items-center pb-3 md:flex-col">
                <div className="font-bold text-[2.1rem] md:self-start md:mb-2">Minify</div>
                <div className="flex gap-3 items-center justify-end max-w-[100dvw] md:self-start">
                    {/* calendar */} <CalendarRangeComponent className="w-[100%]"/>
                    {/* download */} <ButtonComponent props={{ name:"Download" }}/>
                </div>
            </div>
            <div className="md:hidden"><MenubarComponent props={{ css_cpw:"fit-content" }}/></div>
        </section>
    )
}