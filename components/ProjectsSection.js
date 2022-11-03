import ProjectComponent from './ProjectComponent'

export default function ProjectsSection(){
    return (
        <div id="ProjectsPart" className='h-72 overflow-x-hidden mt-5 md:mt-0 pt-0 md:pt-3 lg:pt-2 md:pl-5 2xl:pl-5 space-y-3 pb-14 overflow-y-scroll'>
            <ProjectComponent linkToProject="https://github.com/oussamadhraief/Oussama-Dhraief-Portfolio" projectTitle="Portfolio-Website" projectDescription="My portfolio website created with Next.js (ReactJS), Three.js, Tailwind CSS, Node.js and MongoDB." stars="17" forks="8" />
            <ProjectComponent linkToProject="https://github.com/KNACKSAT2-TGPS" projectTitle="KNACKSAT2 TGPS Project" projectDescription=" Sattlelite buiding training Program for Thai-German Pre Engineering School. As I'm In the PCB design" stars="2" forks="2" />
            <ProjectComponent linkToProject="https://github.com/siravijbb/E2-Gmod-random" projectTitle="E2-Gmod-random" projectDescription="Random E2 script for Garry's Mod" stars="1" forks="0" />
            <ProjectComponent linkToProject="https://github.com/siravijbb/hacktoberfest-museum" projectTitle="Hacktoberfest Museum" projectDescription="maintainer for museum Hacktoberfest 2022" stars="1" forks="0" />
         
        </div>
    )
}