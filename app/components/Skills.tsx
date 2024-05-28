import Heading from "./Heading";



const techSkills = ["Devops",
    "Vulnerability Assessment",
    "Cloud Security",];

const language = ["Python",
    "Bash",
    "Shell Scripting",
    "C++"
];

const tools = ["Git",
    "Jenkins",
    "Terraform",
    "Docker",
    "MariaDB",
    "MySQL",
    "AWS EC2",
    "AWS EKS", 
    "AWS Cloudformation", 
    "AWS S3", 
    "AWS DynamoDB", 
    "AWS Cloudwatch", 
    "AWS ECS",
    "Wireshark",
    "Kubernetes",
    "Nessus",
    "Splunk Enterprise",
    "Nmap"]

function Skills() {
    return (<div id="work" >
        <Heading title="Skills" />
        <div>
            <div className="text-[26px] font-semibold text-white">
                Tech Stack
            </div>
            <div className="py-[20px]">
                {techSkills.map((skill) => (
                    <SkillPoints skill={skill} />
                ))}
            </div>
        </div>

        <div>
            <div className="text-[26px] font-semibold text-white">
                Programming Language
            </div>
            <div className="py-[20px]">
                {language.map((lang) => (
                    <SkillPoints skill={lang} />
                ))}
            </div>
        </div>

        <div>
            <div className="text-[26px] font-semibold text-white">
                Tools
            </div>
            <div className="py-[20px] grid grid-cols-2 gap-2 ml-[30px]">
                {tools.map((tool) => (
                    <SkillPoints skill={tool} />
                ))}
            </div>
        </div>
    </div>
    )
}



export default Skills;



function SkillPoints({ skill }:any) {
    return (
        <div className="flex flex-row justify-center items-start py-[5px]">
            <div className="w-[20px] flex mt-[6px] justify-start">
                <div className="w-[8px] aspect-square bg-slate-900 rounded-[5px]">
                </div>
            </div>
            <div className="w-[90%]">
                {skill}
            </div>
        </div>
    );
}



