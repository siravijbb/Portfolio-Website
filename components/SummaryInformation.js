import Socials from "./Socials.js"

export default function SummaryInformation(){

    const fbIcon = "fb_gvrvz0.png"
    const instaIcon = "insta_c3rkxa.png"
    const linkedinIcon = "linkedin_jvrtlj.png"
    const githubIcon = "github_zccvyq.png"

    return (
        <div className="bg-transparent flex mx-auto">
            <Socials link="https://www.facebook.com/SRBSiravijbb/" icon={fbIcon} />
            <Socials link="https://www.instagram.com/sierravij.b/" icon={instaIcon} />
            <Socials link="github.com/siravijbb" icon={githubIcon} />
        </div>
    )
}