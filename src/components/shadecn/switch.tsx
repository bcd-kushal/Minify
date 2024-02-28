import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchComponent({ label, checked }: { label?:string, checked?:boolean }) {
  return (
    <div className="flex items-center space-x-2">
      <Switch checked={checked||false}/>
      <Label htmlFor="airplane-mode">{label}</Label>
    </div>
  )
}
