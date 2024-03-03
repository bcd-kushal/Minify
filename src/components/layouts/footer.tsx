import Link from "next/link"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { TermsConditionsDialogComponent, ContactDialogComponent } from "../custom/termsConditions"
import { Button } from "../ui/button"
import { MinifyIcon } from "@/svgs/svgs"

export default function FooterLayout({ props }: { props?:{ cph?:string, cpw?:string } }){
    const tlw = { h:props?.cph||"32px", w:props?.cpw||"100%" }
    return(
        <footer className={`w-[${tlw.w}] h-[${tlw.h}] flex flex-col items-stretch justify-stretch gap-2 mt-8 px-[24px] py-[12px] border-t-[0.5px] bg-[#f7f7f7] dark:bg-[#111] md:pb-[5px]`}>
            <div className="flex items-center justify-start gap-3">
                <Link href="/" className="flex gap-3 text-[16px] items-baseline"><MinifyIcon dimensions="16"/>Minify</Link>
                <Button variant={"ghost"} className="text-blue-500 hover:text-blue-500 hover:bg-[#0066ff10]">• All systems normal</Button>
            </div>
            <div className="flex gap-1 justify-between sm:flex-col-reverse sm:gap-3">
                <div className="text-xs italic flex items-center text-gray-400 md:text-[0.5rem]"><Link href="https://kushalkumarsaha.com/" target="_blank">@dev-kushalkumar</Link> &nbsp; • {new Date().getFullYear()}</div>
                <div className="flex gap-8 items-center sm:gap-5">
                    <Link href="/" className="cursor-pointer hover:underline text-xs">Home</Link>
                    <Dialog><DialogTrigger asChild><span className="cursor-pointer hover:underline text-xs">Terms</span></DialogTrigger><TermsConditionsDialogComponent/></Dialog>
                    <Dialog><DialogTrigger asChild><span className="cursor-pointer hover:underline text-xs">Contact</span></DialogTrigger><ContactDialogComponent/></Dialog>
                    <Link href="https://github.com/bcd-kushal/Minify" target="_blank" className="cursor-pointer hover:underline text-xs">GitHub</Link>
                    <Link href="https://blogs.kushalkumarsaha.com/" target="_blank" className="cursor-pointer hover:underline text-xs">Blogs</Link>
                </div>
            </div>
        </footer>
    )
}