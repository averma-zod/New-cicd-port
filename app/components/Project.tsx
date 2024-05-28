import Heading from "./Heading";

import Image from "next/image";

import ProjectImage from '../assets/project.png';



function Project() {
    return (<div id="work" >
        <Heading title="Project" />
        <div id="project_container" className="py-[20px]">

            
                <div id="project_content" className="flex flex-row items-center justify-start w-full">
                    
                <a href="https://averma-zod.github.io/project/devsecops.html" className="w-[160%]"><div id="project_Image" className="w-[100%]">
                        <Image src={ProjectImage} alt="ProjectImage" className="w-[100%]">
                        </Image>
                    </div>
                    </a>
                    <div className="pl-[20px] text-[20px]">
                        <div>
                            Concept
                        </div>
                        <div className="text-[26px] font-semibold text-white">
                            SAST with CI/CD
                        </div>
                        <div className="">
                            Implemented CI/CD pipeline using Jenkins, Utilized Docked for building NodeJS webApp, integrated security checks with OWASP Dependency Check and Trivy. Monitored the whole process using Prometheus, Node Extractor, and Grafana
                        </div>
                    </div>
                </div>
        </div>
    </div>)
}


export default Project;