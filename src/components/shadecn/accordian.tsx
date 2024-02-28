import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface DataProps { question:string, answer:string }
interface AccordianProps {
    data:DataProps[],
    cpw?:string,
    cph?:string,
}

export function AccordionComponent({ data, ...x }: AccordianProps) {
    if(Object.keys(data).length===0)
        return <></>

    return (
        <Accordion type="single" collapsible className="w-full md:hidden">
            {data.map((qna,index) => (
                <AccordionItem value={`item-${index+1}`} key={qna.question}>
                    <AccordionTrigger>{qna.question}</AccordionTrigger>
                    <AccordionContent>{qna.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
