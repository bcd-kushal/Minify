import type { Metadata } from "next"
import { Outfit as FontSans } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

import { cn } from "@/lib/utils"
import FooterLayout from "@/components/layouts/footer"

const fontsans = FontSans({ subsets: ["latin"], variable:"--font-sans" })


export const metadata: Metadata = { title: "Minify - URL shortener", description: "Shorten, customize, decorate long URLs to your desired presentable choice.", keywords:["URL shortener", "Minify", "Short links", "Kushal Kumar Saha", "Website creator", "Web tool", "Link management", "URL optimization", "Link shortening service", "Web utility", "Custom short URLs", "Simplify URLs", "Web optimization", "Digital tools", "Kushal Saha's Minify", "URL branding", "Link shrinker", "URL shortener", "Web service SPA", "Efficient links", "Custom URL generator"] }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head><link rel="icon" href="/favicon.ico"/></head>
      <body className={cn("min-h-screen bg-background font-sans antialiased flex flex-col items-stretch justify-between", fontsans.variable)}>
        {children}
        <FooterLayout/> 
        <Toaster/>
      </body>
    </html>
  )
}
