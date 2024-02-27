import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function AvatarComponent({ props }: { props?: { img:string } }) {
    const AVATAR = props?.img || "https://github.com/bcd-kushal.png"
    return (
      <Avatar className="hover:cursor-pointer">
        <AvatarImage src={AVATAR} alt="" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  