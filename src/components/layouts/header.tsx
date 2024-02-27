import { ProfileIcon } from "../custom/profileIcon"
import { AvatarComponent } from "../shadecn/avatar"
import { ComboboxComponent } from "../shadecn/combobox"
import { InputComponent } from "../shadecn/input"


export default function HeaderLayout({ props }: { props?: { cpw?:string, cph?:string } }){

    const tlw = { w:props?.cpw||"100dvw", h:props?.cph||"64px", gap:"10px" }
    return(
        <nav className={`w-[${tlw.w}] h-[${tlw.h}] flex gap-2 items-center justify-between px-[24px] py-[12px] bg-white border-b-[0.5px] sticky top-0`}>
            {/* NAME ============================= */}
            <div className="flex gap-4 items-center justify-start">
                <div>/.</div>
                <div>/</div>
                <div><ComboboxComponent props={{ data:[{}] }}/></div>
            </div>

            {/* MIDDLE SECTION =================== */}
            <div className=""></div>
            
            {/* RIGHT SECTION ==================== */}
            <div className="flex gap-5 justify-end items-center">
                <InputComponent props={{placeholder:"Search"}}/>
                <ProfileIcon/>
            </div>
        </nav>
    )
}