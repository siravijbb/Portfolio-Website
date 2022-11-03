import EducationElement from './EducationElement'

export default function EducationSection(){
    return (
        <div id="EducationPart" className='h-72 pl-3 overflow-y-scroll space-y-8 sm:space-y-24 py-5 2xl:py-10'>  
            <EducationElement year="2020-Now" institute="Thai-German Pre Engineering" degree="Vocational 's degree of Electrical Works" />
            <EducationElement year="2016-2020" institute="Assumption Collge Thonburi" degree="High school diploma"/>
        </div> 
    )
}