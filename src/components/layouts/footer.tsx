import Link from "next/link"
import { DropdownComponent } from "../shadecn/dropdown"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faC, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Button } from "../ui/button"


export default function FooterLayout({ props }: { props?:{ cph?:string, cpw?:string } }){

    const tlw = { h:props?.cph||"32px", w:props?.cpw||"100dvw" }
    const FOOTER_LINKS = [
        { name:"Home", link:"" },
        { name:"Documentation", link:"" },
        { name:"Help", link:"" },
        { name:"Changelog", link:"" },
        { name:"Blogs", link:"" },
    ]
    return(
        <footer className={`w-[${tlw.w}] h-[${tlw.h}] flex flex-col items-stretch justify-stretch gap-2 mt-8 px-[24px] py-[12px] border-t-[0.5px] bg-[#f7f7f7]`}>
            <div className="flex items-center justify-start gap-3">
                <div className="">Minify</div>
                <Button variant={"ghost"} className="text-blue-500 hover:text-blue-500 hover:bg-[#0066ff10]">• All systems normal</Button>
            </div>
            <div className="flex gap-1 justify-between">
                <div className="text-xs italic flex items-center">@dev-kushalkumar • {new Date().getFullYear()}</div>
                <div className="flex gap-8 items-center">
                    {FOOTER_LINKS.map(link => (
                        <Link href={link.link} className="text-xs" key={link.name}>{link.name}</Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}