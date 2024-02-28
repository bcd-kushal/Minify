import { Input } from "@/components/ui/input"

export type __InputType = "text" | "email"

export function InputComponent({ props }: { props?: { type?:__InputType, placeholder?:string } }) {
  return <Input type={ props?.type||"text" } placeholder={props?.placeholder||""} className="md:shadow-none md:border-none md:text-right" />
}
