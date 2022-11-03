import Skills from './Skills'
import ButtonContainerAboutMe from './ButtonContainerAboutMe'

export default function Description(){
    return ( 
        <div className="ml-0 lg:ml-5 w-full lg:w-2/3 2xl:w-8/12 space-y-0 3xl:w-11/12">
            <p className="text-justify 2xl:font-medium mt-3 font-sans w-full h-fit sm:w-full px-2 sm:px-5 lg:pl-0 lg:pr-3 mb-5 lg:mb-3 xl:mb-8 2xl:mb-16 3xl:mb-10">
            My name is Oussama Dhraief and I am a 16 year-old Electrical Pre-Engineering student. 
            Currently works as Electrical Failure Analysis with experience in analyzing the possibility failure in component 
            and coming up with possible solutions and redundancy in preventions and reduction in failure. 
            Worked in team with 4-5 team members.Also in spare time works as Server Host in Garry’s Mods game using Personal computers.
            </p>
            <p className="font-semibold text-secondary px-5 lg:px-0 font-sans w-3/6">
                Hobbies and interests:
            </p>
            <Skills skillText="Coding" />
            <Skills skillText="Driving Scooter" />
            <Skills skillText="Video games" />
            <Skills skillText="Watching movies" />
            <Skills skillText="Listening to music" />
            <Skills skillText="Reading books" />
            <Skills skillText="Learning new things" />
            <ButtonContainerAboutMe />
        </div>
    )
}