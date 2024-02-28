import { ProfileIcon } from "../custom/profileIcon"
import { AvatarComponent } from "../shadecn/avatar"
import { ComboboxComponent } from "../shadecn/combobox"
import { InputComponent } from "../shadecn/input"
import { MinifyIcon } from "../../svgs/minifyIcon"


export default function HeaderLayout({ props }: { props?: { cpw?:string, cph?:string } }){

    const tlw = { w:props?.cpw||"100%", h:props?.cph||"64px", gap:"10px" }
    return(
        <nav className={`w-[${tlw.w}] h-[${tlw.h}] flex gap-2 items-center justify-between px-[24px] py-[12px] backdrop-blur-md bg-[#fff5] dark:bg-[#0a0a0a50] border-b-[0.5px] sticky top-0 z-20`}>
            {/* NAME ============================= */}
            <div className="flex gap-4 items-center justify-start">
                {/* SVG ICON --------- */}
                <div><MinifyIcon/></div>

                {/* ACCOUNTS --------- */}
                <div className="md:hidden">/</div>
                <div className="md:hidden"><ComboboxComponent props={{ data:[{}] }}/></div>
            </div>

            {/* MIDDLE SECTION =================== */}
            <div className=""></div>
            
            {/* RIGHT SECTION ==================== */}
            <div className="flex gap-5 justify-end items-center md:gap-2">
                {/*SEARCH BAR ===>*/} <InputComponent props={{placeholder:"Search"}}/>  
                {/*PROFILE    ===>*/} <ProfileIcon/> 
            </div>
        </nav>
    )
}