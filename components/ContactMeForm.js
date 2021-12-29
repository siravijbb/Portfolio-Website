import { useEffect, useState } from "react"
import 'animate.css'

export default function ContactMeForm(){

const [formInputs,setFormInputs] = useState({name: "", email: "", message: ""})
const [submitted,setSubmitted] = useState(false)
const [dataError,setDataError] = useState(false)

const handleChange = (e) => {
    setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.value
    }) 
}

const handleSubmit = async () => {
    try {
        const res = await fetch('api/contacts', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formInputs)
        }).then((res) =>{
            if(res.status == 201){
                setFormInputs({name: "", email: "", message: ""})
                setSubmitted(true)
            }else{
                setDataError(false)
                setDataError(true)
            }
        }
        )
        
        
    } catch (error) {
        console.error(error)
    }
}


    if(submitted) 
    return (
        <div className="grid space-y-5 w-4/6 p-5 h-full rounded-xl text-medium font-bold text-center text-gray-900 animate-[bounce_1s] content-center">
            Sent ✔️
            <br></br>
            Thank you for you message !
        </div>
    )
    return(
        <form action="submit" onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }} className="grid w-full md:w-3/6 p-5 h-fit rounded-xl">
            <p className=" text-xl my-3 font-bold text-gray-900"><span className="text-zinc-400 text-medium font-thin">*</span> Full name: <span className="text-sm font-thin text-zinc-400">(4 characters at least)</span></p>
            <input type="text" name="name" value={formInputs.name} minLength={4} onChange={(e) => handleChange(e)} className=" border-2 rounded-lg border-gray-900 h-12" required />
        
            <p className="text-xl my-3 font-bold text-gray-900"><span className="text-zinc-400 text-medium font-thin">*</span> E-mail: <span className="text-sm font-thin text-zinc-400"></span></p>
            <input type="email" name="email" value={formInputs.email} onChange={(e) => handleChange(e)}  className="  border-2 rounded-lg border-gray-900 h-12" required />
        
            <p className="text-xl my-3 font-bold text-gray-900"><span className="text-zinc-400 text-medium font-thin">*</span> Message: <span className="text-sm font-thin text-zinc-400">(4 characters at least)</span></p>
            <textarea name="message" value={formInputs.message} onChange={(e) => handleChange(e)} cols={50} rows={4} className=" resize-none border-2 rounded-lg border-gray-900 h-32"  required />

            {dataError ? <p className="text-sm font-thin animate__animated animate__flash text-red-900 whitespace-nowrap"> Please check the information you entered before sending. </p> : null}
        
            <input type="submit" name="submit" className="bg-gray-900 w-fit mt-5 px-6 py-3 rounded-2xl font-bold text-xl font-mono text-white hover:bg-yellow-500 hover:scale-110 hover:cursor-pointer mx-auto my-10" />
    </form>
    )


}