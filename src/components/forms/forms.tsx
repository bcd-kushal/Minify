import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { CheckboxComponent } from "../shadecn/checkbox"

interface CardProps {
    title?: string,
    desc?: string,
    cph?:string, cpw?:string,
}

// ====[ SIGNIN FORM ]====================================

export function SigninForm({ props }: { props?: CardProps }) {
    return (
        <Card className={`max-w-screen w-fit h-fit py-[24px] px-[12px] flex flex-col gap-[15px]`} >
            <CardHeader>
                <CardTitle className="text-3xl">Signin</CardTitle>
                <CardDescription>Dont have an account? <Link href="/register" className="text-[#3b82f6] hover:underline">Register</Link></CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="mb-2">Username or email</Label>
                            <Input id="name" type="text" placeholder="" />
                        </div>
                        <div className="flex flex-col space-y-1.5 mt-1">
                            <Label htmlFor="framework" className="mb-2">Password</Label>
                            <Input id="password" type="password" placeholder="" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex">
                <Button>Signin</Button>
            </CardFooter>
        </Card>
    )
}

// ====[ REGISTRATION FORM ]====================================

export function RegistrationForm({ props }: { props?: CardProps }) {
    return (
        <Card className={`max-w-screen w-fit h-fit py-[24px] px-[12px] flex flex-col gap-[15px]`} >
            <CardHeader>
                <CardTitle className="text-3xl">Register</CardTitle>
                <CardDescription>Welcome to Minify!</CardDescription>
            </CardHeader>
            <CardContent className="max-w-screen w-[350px]">
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="my-1">Username</Label>
                            <Input id="name" type="text" placeholder="" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="my-1">Email address</Label>
                            <Input id="name" type="email" placeholder="" />
                        </div>
                        <div className="flex flex-col space-y-1.5 mt-1">
                            <Label htmlFor="framework" className="my-1">Password</Label>
                            <Input id="password" type="password" placeholder="" />
                        </div>
                        <div className="flex flex-col space-y-1.5 mt-1">
                            <CheckboxComponent/>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Register</Button>
                <CardDescription className="text-xs">Already a user? <Link href="/signin" className="text-[#3b82f6] hover:underline text-xs">Signin</Link></CardDescription>
            </CardFooter>
        </Card>
    )
}


// ====[ NEW URL FORM ]====================================

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