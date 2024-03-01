import HeaderLayout from "@/components/layouts/header"
import RibbonLayout from "@/components/layouts/ribbon"
import { LAYOUT_DIMENSIONS } from "../../../utils/layout_dimensons"

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>){
    return(
        <>
            <HeaderLayout props={{ cph:`${LAYOUT_DIMENSIONS.HEADER.H}px` }}/>
            <RibbonLayout/> 
            {children}
        </>
    )
}