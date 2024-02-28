import type { Metadata } from "next"
import { Outfit as FontSans } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

import { cn } from "@/lib/utils"

const fontsans = FontSans({ subsets: ["latin"], variable:"--font-sans" })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("min-h-[100dvh] bg-background font-sans antialiased flex flex-col items-stretch justify-between", fontsans.variable)}>
        { children }
        <Toaster/>
      </body>
    </html>
  )
}
