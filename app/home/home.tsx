"use client"

import Image from "next/image";
import LinkedIn from '../assets/linkedIn.png';
import Instagram from '../assets/insta.png';
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { useRef } from "react";
import Project from "../components/Project";








function Home() {

    const aboRef = useRef<null | HTMLDivElement>(null); 
    const expRef = useRef<null | HTMLDivElement>(null); 
    const eduRef = useRef<null | HTMLDivElement>(null); 
    const proRef = useRef<null | HTMLDivElement>(null); 
    const skiRef = useRef<null | HTMLDivElement>(null); 
    const conRef = useRef<null | HTMLDivElement>(null); 



    const aboScroll = () => {
        if (aboRef.current !== null) {
            aboRef.current.scrollIntoView();
        }
    };

    const expScroll = () => {
        if (expRef.current !== null) {
            expRef.current.scrollIntoView();
        }
    };
    const eduScroll = () => {
        if (eduRef.current !== null) {
            eduRef.current.scrollIntoView();
        }
    };
    const proScroll = () => {
        if (proRef.current !== null) {
            proRef.current.scrollIntoView();
        }
    };
    const skiScroll = () => {
        if (skiRef.current !== null) {
            skiRef.current.scrollIntoView();
        }
    };
    const conScroll = () => {
        if (conRef.current !== null) {
            conRef.current.scrollIntoView();
        }
    };

    return (
        <div >
            <div className="relative top-0 flex flex-row justify-center ">
                <div className=" top-0 sticky h-screen w-full flex justify-center hidden md:block">
                    <div className="flex flex-col items-start justify-center gap-[15px] h-full text-[22px] w-[40%] ml-[100px] pb-[150px]" style={{ fontWeight: 500 }}>
                        <div onClick={aboScroll}>
                            About Me
                        </div>
                        <div onClick={expScroll}>
                            Experience
                        </div>
                        <div onClick={eduScroll}>
                            Education
                        </div>
                        <div onClick={proScroll}>
                            Projects
                        </div>
                        <div onClick={skiScroll}>
                            Skills
                        </div>
                        <div onClick={conScroll}>
                            Contact
                        </div>
                        <div className="flex gap-[25px] py-[10px]">
                            <div>
                                <a href="https://linkedin.com/in/avakashverma98" target="_blank" ><Image className="aspect-square w-[25px]" src={LinkedIn} alt="linkedIn">
                                </Image>
                                </a>
                            </div>
                            <div>
                                <a href="https://instagram.com/_aaksh.v_/" target="_blank" ><Image className="aspect-square w-[25px]" src={Instagram} alt="Instagram">
                                </Image></a>
                            </div>
                        </div>
                        <div className="bg-white w-full h-[2px] mt-[10px]" >
                        </div>
                    </div>
                </div>




                <div className="min-w-[100%] flex justify-center md:justify-start md:min-w-[70%]">
                    <div className="md:pl-[20px] text-[18px] w-[80%]" >
                        <div ref={aboRef} className="pt-[100px]" id="aboutMe">
                            <div>
                                DevOps Engineer
                            </div>
                            <div className="text-[34px] font-bold">
                                Akash Verma
                            </div>
                            <div>
                                Hello! I'm Akash Verma, a passionate Computer Science graduate from Uttarakhand. Currently, based in Pune, India, with a dedication to mastering the dynamic field of Dev-Sec-Ops. With a knack for thriving under pressure and excelling in collaborative environments, I bring a unique blend of technical expertise, adaptability, and continuous learning to every project I undertake.
                            </div>

                            <div className="text-[20px] pt-[18px] font-semibold">
                                <a href="https://averma-zod.github.io/about/about.html" target="_blank" >Learn More</a>
                            </div>
                        </div>

                        <div ref={expRef}>
                            <Experience />
                        </div>

                        <div ref={eduRef}>
                            <Education />
                        </div>

                        <div ref={proRef}>
                            <Project />
                        </div>

                        <div ref={skiRef}>
                            <Skills />
                        </div>
                        <div ref={conRef}>
                            <Contact />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}


export default Home;

