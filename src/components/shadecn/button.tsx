import { Button } from "@/components/ui/button"

export function ButtonComponent({ props }: { props?:{ name:string } }) {
  return <Button>{props?.name}</Button>
}
