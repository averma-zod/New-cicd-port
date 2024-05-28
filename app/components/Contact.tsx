import Heading from "./Heading";






function Contact() {
    return (<div id="work" >
        <Heading title="Contact" />
        <div className="mb-[100px]">
            <ContactPoint title="Phone" detail="+91 8433113387" />
            <ContactPoint title="Email" detail="avakashverma98@gmail.com" />
        </div>
    </div>)
}


export default Contact;




function ContactPoint({ title, detail }:any) {
    return (
        <div id='' className="py-[20px]">
            <div className="text-slate-400">{title}</div>
            <div className="text-white">
               {detail}
            </div>
        </div>
    )
}
