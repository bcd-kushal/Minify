import { AccordionComponent } from "../shadecn/accordian";


export default function FAQSection(){
    const QNA_DATA = [
        { question:"Who are you, and why did you build Minify?", answer:"I'm Kushal Kumar - a software devloper, digital artist by passion, currently working and shaping my future." },
        { question:"How much does it cost to run Minify?", answer:"It's not much. I host it on Vercel and the database is up on the free tier of DataStax." },
        { question:"What is the tech stack used to build Minify?", answer:"NextJS, ShadCN/UI, Tailwind, Cassandra, Redis, Docker" },
        { question:"How many shortened URLs can I create?", answer:"A total of 150 shortened URLs to each account at any time instance." },
    ]
    return(
        <section className="px-[24px] py-[64px] flex gap-4 md:flex-col items-center md:items-end">
            {/* HEADER --------------------------- */}
            <div className="w-1/2 md:w-[100%] pr-[80px] md:pr-0 md:pb-[20px] flex flex-col gap-3 items-stretch justify-start">
                <div className="text-3xl font-bold">Frequently Asked Questions</div>
                <div className="">Here are some questions I often get asked about Minify.</div>
            </div>

            {/* QNA SECTION ---------------------- */}
            <AccordionComponent data={QNA_DATA}/>
        </section>
    )
}