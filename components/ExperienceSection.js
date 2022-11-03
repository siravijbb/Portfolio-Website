import Skills from "./Skills"

export default function ExperienceSection(){ 
    return (
        <div id="ExperiencePart" className='h-72 pl-3 overflow-y-scroll w-fit 2xl:w-94 pt-2 2xl:pt-5'>
            <h1 className="text-main font-semibold 2xl:font-bold">Currently working</h1>
            <p className="font-thin sm:font-normal">
            Designing and analyzing the possibility failure in component.
            </p>
            <h1 className="text-main font-medium 2xl:font-semibold">Technologies used:</h1>
            <Skills skillText="Easy EDA Design" />
            <Skills skillText="Github" />
        </div>
    )
}