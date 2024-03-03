"use client"
import { SigninForm } from "@/components/forms/forms"
import Link from "next/link"
import { MinifyIcon } from "@/svgs/svgs"

export default function Homepage(){
    return(
        <section className="px-[24px] flex justify-center items-center h-[calc(100vh-118px)] md:h-[calc(100vh-138px)]">
            <Link href="/" className="absolute top-6 left-6"><MinifyIcon/></Link>
            <SigninForm/>
        </section>
    )
}