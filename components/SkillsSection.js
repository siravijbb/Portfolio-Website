import WebSkill from './WebSkill'


export default function SkillsSection(){

    const html = "html_pxk3rn.svg"
    const css = "css_gyaf7z.svg"
    const js = "js_imr3bo.svg"
    const react = "react_ak0sla.svg"
    const next = "next_csitru.svg"
    const node = "node_nj2kde.svg"
    const express = "express_n1saii.png"
    const mongo = "mongo_uqpcud.svg"
    const ts = "ts_t6ipoc.svg"
    const firebase = "firebase_ztz5rt.png"
    const git = "git_b23wnr.svg"
    const tailwind = "tailwind_k1zaze.png"
    const threejs = "Three.js_Icon.svg_i13nrx.png"
    const Python = "python_1xvq9x.svg"
    const Clang = "c_1xvq9x.svg"
    const Cplusplus = "cplus_1xvq9x.svg"
    const Arduino = "arduino_1xvq9x.svg"


    return ( 
        <div id="SkillsPart" className='h-72 overflow-y-scroll overflow-x-hidden flex flex-wrap gap-3 md:gap-3 pt-3 px-5 md:py-5 justify-center'>
            <WebSkill srcPath={html} altText="HTML Icon" hoverText="HTML" />
            <WebSkill srcPath={css} altText="CSS Icon" hoverText="CSS" />
            <WebSkill srcPath={js} altText="Javascript Icon" hoverText="JavaScript" />
            <WebSkill srcPath={react} altText="ReactJS Icon" hoverText="ReactJS" />
            <WebSkill srcPath={next} altText="Next.js Icon" hoverText="Next.js" />
            <WebSkill srcPath={node} altText="Node.js Icon" hoverText="Node.js" />
            <WebSkill srcPath={express} altText="Express.js Framework Icon" hoverText="Express.js" />
            <WebSkill srcPath={mongo} altText="MongoDB Mongoose Icon" hoverText="MongoDB" />
            <WebSkill srcPath={ts} altText="TypeScript Icon" hoverText="TypeScript" />
            <WebSkill srcPath={firebase} altText="Firebase Icon" hoverText="Firebase" />
            <WebSkill srcPath={tailwind} altText="Tailwind Icon" hoverText="Tailwind" />
            <WebSkill srcPath={git} altText="Git Icon" hoverText="Git" />
            <WebSkill srcPath={threejs} altText="Three.js Icon" hoverText="Three.js" />
            <WebSkill srcPath={Clang} altText="C Icon" hoverText="C" />
            <WebSkill srcPath={Cplusplus} altText="C++ Icon" hoverText="C++" />
            <WebSkill srcPath={Python} altText="Python Icon" hoverText="Python" />
            <WebSkill srcPath={Arduino} altText="Arduino Icon" hoverText="Arduino" />
        </div>
    )
}