import Heading from "./Heading";






const roles1 = ["Provided patching solutions using Ansible, reducing manual effort by 70%.",
    "Automated Features and manual tasks using Python with Pandas, os and shutil, and Shell scripts. Used Git for version control and Bitbucket for managing repositories.",
    "Conducted debugging and troubleshooting of Windows, and Linux systems. Resolving over 20 customer-reported JIRA tickets promptly.",
    "Analysed TCPdump output to diagnose network anomalies, such as unusual traffic patterns, packet loss, and network latency, using Wireshark for in-depth packet inspection and protocol analysis, and developed custom filters and dissectors in Wireshark to extract relevant data.",
    "Implemented Terraform for Infrastructure as Code(IaaC) to automate deployment of Network components process, resulting in a 40% reduction in provisioning time. Used AWS S3 buckets and DynamoDB for statefile remote backends."];


const roles2 = ["Installed, configured, and managed Splunk Enterprise environments, Created Alerts and dashboards for monitoring  performance and log analysis through Splunk.",
    "Utilized Wireshark and tcpdump to analyse network traffic and diagnose issues related to HTTP/HTTPS, and TCP protocols. Resolved 15+ ServiceNow Incidents reported by customer.",
    "Utilized Jenkins for code building, testing, integrating with Splunk for real-time monitoring.",
    "Collaborated with IT teams to create DockerFile for handling peak traffic periods using Kubernetes Pods."];


const roles3 = ["Identified security vulnerabilities, initiated customer tickets over ServiceNow.",
    "Prepared a shell script for automatic upgradation of Splunk servers.",
    "Subject Matter Expert for incident response team, presenting performance enhancement proposals and optimizing Splunk resource utilization."];





function Experience() {
    return (
        <div id="work" >
            <Heading title="Work Experience" />
            <WorkExperience company="Zscaler" position="Software Engineer" year="Aug 2023 - Present" roles={roles1} />
            <WorkExperience company="Robert Bosch" position="Software Engineer" year="Feb 2022 – July 2023" roles={roles2} />
            <WorkExperience company="Infosys" position="Software Engineer" year="Sep 2020 – Feb 2022" roles={roles3} />
        </div>
    )
}



function WorkExperience({ company, position, year, roles }:any) {

    return (
        <div id='experience' className="py-[20px]">
            <div>
                {company}
            </div>
            <div className="text-[26px] font-semibold py-[4px]">
                {position}
            </div>
            <div>
                {year}
            </div>

            <div className="py-[20px]">
                {roles.map((roled:any) => (
                    <ExperiencePoint key={roled.id} role={roled} />
                ))}
            </div>

        </div>
    )
}



export default Experience;



function ExperiencePoint({ role }:any) {
    return (
        <div className="flex flex-row justify-center items-start py-[6px]">
            <div className="w-[20px] flex mt-[6px] justify-start">
                <div className="w-[8px] aspect-square bg-slate-900 rounded-[5px]">
                </div>
            </div>
            <div className="w-[90%]">
                {role}
            </div>
        </div>
    );
}
