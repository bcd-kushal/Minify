import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function LeftHeroSection(){
    return(
        <section className={`w-1/2 h-screen md:w-[100%] mx-[56px] px-[48px] md:mx-0 md:px-[24px] flex flex-col gap-3 justify-center`}>
            <div className="text-sm mb-8 flex gap-6 justify-start">
                <Badge className="rounded-2xl px-3">Version 1.1.3</Badge>
                <Link className="flex gap-2 items-center hover:underline" href="https://github.com/bcd-kushal/Minify/">What's new in the latest release <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg></Link>
            </div>
            <div className="text-xs mb-[-2px]">Presenting,</div>
            <div className="text-5xl font-bold">Minify</div>
            <div className="text-xl mt-3">A free and open-source URL shortener that simplifies and customizes the links you want to use/share.</div>
            <div className="flex gap-4 items-start justify-start mt-[32px]">
                <Button className="px-[24px] rounded">Go to Dashboard</Button>
                <Link href={`https://github.com/bcd-kushal/Minify/`} target="_blank">
                    <Button variant={`ghost`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"></path></svg>
                        &nbsp; GitHub
                    </Button>
                </Link>
            </div>
        </section>
    )
}