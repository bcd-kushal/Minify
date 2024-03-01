import Link from "next/link";


export default function CompaniesSection(){
    return(
        <section className="px-[24px] py-[64px] flex flex-col gap-2 items-stretch">
            <div className="text-xl text-center">Minify has helped people connect and reach better companies</div>
            <div className="flex md:flex-wrap gap-5 items-center justify-center py-6">
                {/* GOOGLE */}  <div><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg></div>
                {/* TWILIO */}  <div className="scale-[0.8]"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><g transform="matrix(.937042 0 0 .937042 0 .046624)" fill="#e31e26"><path d="M34.1 0C15.3 0 0 15.3 0 34.1s15.3 34.1 34.1 34.1C53 68.3 68.3 53 68.3 34.1S53 0 34.1 0zm0 59.3C20.3 59.3 9 48 9 34.1 9 20.3 20.3 9 34.1 9 48 9 59.3 20.3 59.3 34.1 59.3 48 48 59.3 34.1 59.3z"/><circle cx="42.6" cy="25.6" r="7.1"/><circle cx="42.6" cy="42.6" r="7.1"/><circle cx="25.6" cy="42.6" r="7.1"/><circle cx="25.6" cy="25.6" r="7.1"/></g></svg></div>
                {/* NETFLIX */} <div className=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="48" height="48"><path fill="#d32f2f" d="M10 0h3v16h-3zM4 0h3v16H4z" className="colorD32F2F svgShape"></path><path fill="#f44336" d="M13 16h-3L4 0h3z" className="colorF44336 svgShape"></path></svg></div>
            </div>
            <div className="text-center text-xs w-[300px] m-auto">If this app has helped you with your connections, let me know by reaching out through <Link href="https://portfolio.kushalkumarsaha.com#contact" className="font-semibold underline hover:text-[#3b82f6]">this contact form</Link>.</div>
        </section>
    )
}