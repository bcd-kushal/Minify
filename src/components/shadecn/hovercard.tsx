import { CalendarIcon } from "@radix-ui/react-icons"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Sticker } from "../custom/sticker"

export function HoverCardComponent() {
  return (
    <HoverCard>
      {/* TRIGGERER ==================================== */}
      <HoverCardTrigger className="m-0 md:w-[50%]" asChild>
        <Button variant="link" className="m-0 text-left hover:no-underline md:w-[100%]" style={{padding:"0", height:"fit-content"}}>
            <Sticker title="Link clicks" desc="Total times users went by shortened URL" highlight={`${2384}`}/>
        </Button>
      </HoverCardTrigger>

      {/* CONTENT ==================================== */}
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
