import { RegistrationForm } from "@/components/forms/forms"
import { MinifyIcon } from "@/svgs/svgs"
import Link from "next/link"

export default function RegisterPage(){
    return(
        <>
            <Link href="/" className="absolute top-6 left-6"><MinifyIcon/></Link>
            <section className="flex justify-center px-[24px] items-center min-h-[calc(100vh-118px)] md:min-h-[calc(100vh-138px)] md:px-[30px] md:mt-[30px]">
                <RegistrationForm/>
            </section>
        </>
    )
}