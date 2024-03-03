
const REGISTERED_EMAILS:string[] = ["a@a.com"]

interface returnType { result:boolean, msg:string }
export const isEmailAuthentic = ({ email }: { email:string }):returnType => {
    if(email.length<6)
        return { result:false, msg:"Malformed email address" } 
    if(REGISTERED_EMAILS.includes(email))
        return { result:false, msg:"Email already registered" }
    return { result:true, msg:"" }
}