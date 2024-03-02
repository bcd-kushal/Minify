"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { ReloadIcon } from "@radix-ui/react-icons"

// BUTTON ==============================================
export function ButtonComponent({ props }: { props?:{ name:string, cpw?:string } }) {
  const [ windowWidth, setWindowWidth ] = useState(0)
  useEffect(() => {
    window.addEventListener("resize",() => setWindowWidth(prev=>window.innerWidth))
    return () => {}
  })
  
  const download_label = windowWidth<850? "↓" : (props?.name||"Download")
  return <Button className={`w-${props?.cpw||"100%"} md:aspect-square`}>{download_label}</Button>
}


// RELOADING BUTTON =====================================
interface ReloadProps { text?:string }
export function LoadingButtonComponent({ text }: ReloadProps) {
  return ( <Button disabled><ReloadIcon className="mr-2 h-4 w-4 animate-spin" />{ text || "Please wait" }</Button> )
}