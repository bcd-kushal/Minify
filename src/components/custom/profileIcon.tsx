import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ReactComponentElement } from "react"
import { AvatarComponent } from "../shadecn/avatar"
import { SwitchComponent } from "../shadecn/switch"


export function ProfileIcon() {
    /*  my account
        ---
        plans - tier
        settings
        features >
        ---
        dark mode - on
        ---
        github 
        support
        api
        blogs
        ---
        log out
    */
    return (
        <DropdownMenu>
            {/* TRIGGERER -------------------------------------------------- */}
            <DropdownMenuTrigger asChild>
                <AvatarComponent/>
            </DropdownMenuTrigger>

            {/* DROPDOWN CONTENT -------------------------------------------- */}
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuSeparator /> 
                <DropdownMenuItem> Plans <DropdownMenuShortcut>Free</DropdownMenuShortcut> </DropdownMenuItem>
                <DropdownMenuItem> Settings </DropdownMenuItem>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Features</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>Link management</DropdownMenuItem>
                            <DropdownMenuItem>Customized links</DropdownMenuItem>
                            <DropdownMenuItem>Analytics</DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>



                <DropdownMenuSeparator /> 
                <DropdownMenuGroup>
                    <DropdownMenuItem> Dark mode 
                        <DropdownMenuShortcut> <SwitchComponent checked={true}/> </DropdownMenuShortcut> 
                    </DropdownMenuItem>
                </DropdownMenuGroup>



                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuItem>About Minify</DropdownMenuItem>
                
                
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut><svg className="dark:fill-white scale-80" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="12" width="12" version="1.1" id="Capa_1" viewBox="0 0 384.971 384.971" xmlSpace="preserve"><g><g id="Sign_Out"><path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03    C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03    C192.485,366.299,187.095,360.91,180.455,360.91z"/><path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279    c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179    c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"/></g><g></g><g></g><g></g><g></g><g></g><g></g></g></svg></DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
