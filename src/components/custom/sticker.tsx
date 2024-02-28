import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface StickerProps {
    title: string, desc: string,
    cph?: string, cpw?: string,
    highlight?: string,
}

export function StickerComponent({ props }: { props?: StickerProps }) {
    const tlw = { w: props?.cpw || "[100%]", h: props?.cph || "[100%]" }
    return (
        <Card className={`w-${tlw.w} h-${tlw.h}`} style={{ boxShadow: "none" }}>
            <CardHeader>
                <CardTitle>+ New URL</CardTitle>
                <CardDescription>New shortened URL to your original link</CardDescription>
            </CardHeader>
            <CardContent>
                HELLO
            </CardContent>
        </Card>
    )
}

export function Sticker({ title, desc, highlight, ...x }: StickerProps) {
    const tlw = { w: x?.cpw||"[100%]", h: x?.cph||"[100%]" }
    return (
        <div className={`w-${tlw.w} rounded-xl border bg-card text-card-foreground shadow min-w-[250px] md:min-w-[90px]`}>
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">{title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <div className="p-6 pt-0">
                <div className="text-2xl font-bold">{highlight}</div>
                <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
        </div>
    )
}