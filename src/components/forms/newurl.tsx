import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CardProps {
    title?: string,
    desc?: string,
    cph?:string, cpw?:string,
}

export function NewURLForm({ props }: { props?: CardProps }) {
    const tlw = { w:props?.cpw||"[100%]", h:props?.cph||"[100%]" }
    return (
        <Card className={`w-${tlw.w} h-${tlw.h}`} style={{boxShadow:"none"}}>
            <CardHeader>
                <CardTitle>+ New URL</CardTitle>
                <CardDescription>New shortened URL to your original link</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Long link</Label>
                            <Input id="name" placeholder="Original URL" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Alias</Label>
                            <Input id="name" placeholder="Customized URL" />
                            {/* <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Next.js</SelectItem>
                                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                    <SelectItem value="astro">Astro</SelectItem>
                                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                </SelectContent>
                            </Select> */}
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Shorten URL</Button>
            </CardFooter>
        </Card>
    )
}
