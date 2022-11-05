import Image from "next/image"
import SocialMediaLink from "./SocialMediaLink"

export default function ContactMeOnSocials(){

    const fb = "f2_thoute_ic2j8v.png"
    const insta = "i2_mbsbcg_h6vqn5.png"
    const linked = "l2_pchcac_hryahv.png"
    const git = "g2_d8lcsl_n4iklv.png"
    const robot = "robot_dkwhr2.gif"

    return( 
        <div id="ContactMeImage" className="w-11/12 p-5 md:p-0 md:w-1/2 lg:w-4/6 h-[520px] md:min-h-full relative space-y-11">
                <h1 className="text-center text-xl font-bold font-mono mt-5 text-main">Get in touch with me or leave me a review !</h1>
                <div className="flex space-x-3 w-fit mx-auto content-center my-auto">
                <SocialMediaLink smLogo={fb} hoverText="Facebook" altText="Facebook Icon" smLink="https://www.facebook.com/SRBSiravijbb/" />
                <SocialMediaLink smLogo={insta} hoverText="Instagram" altText="Instagram Icon" smLink="https://www.instagram.com/sierravij.b/" />
                <SocialMediaLink smLogo={git} hoverText="Github" altText="Github Icon" smLink="https://github.com/siravijbb" />
                </div>
            </div>
    )
}