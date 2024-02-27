import { ButtonComponent } from "../shadecn/button"
import { CalendarRangeComponent } from "../shadecn/calendarrange"
import { MenubarComponent } from "../shadecn/menubar"



export default function RibbonLayout({ props }: { props?: any }){

    const tlw = { h:props?.cph||"100%", w:props?.cpw||"100%" }

    return(
        <section className={`w-[${tlw.w}] h-[${tlw.h}] px-[24px] py-[12px] flex flex-col items-stretch justify-start`}>
            <div className="flex justify-between items-center pb-3">
                <div className="font-bold text-[2.1rem]">Minify</div>
                <div className="flex gap-3 items-center justify-end">
                    {/* calendar */} <CalendarRangeComponent/>
                    {/* download */} <ButtonComponent props={{ name:"Download" }}/>
                </div>
            </div>
            <div className=""><MenubarComponent props={{ css_cpw:"fit-content" }}/></div>
        </section>
    )
}