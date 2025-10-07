import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <>
            <div className="flex justify-evenly h-35 items-center text-gray-500 bg-gray-200 px-10  ">
                <div className="flex gap-4">
                    <div className="flex">
                        <img className="w-5" src="/logo.svg" />
                        <img  className="w-20"  src="/devslane.svg" />
                    </div>
                    <div>+91 7300-970444</div>
                    <div className="border border-gray-400 "></div>
                    <div>Sector 63, Noida - 201301.</div>
                </div>
                <div className="text-2xl">
                    <a href="https://www.linkedin.com/company/devslane/"><FontAwesomeIcon icon = {faLinkedin} /></a>
                    <a href="https://x.com/devslane"><FontAwesomeIcon icon = {faTwitter} /></a>
                     <a href="https://www.facebook.com/devslane"><FontAwesomeIcon icon = {faFacebook} /></a>
                     <a href="https://www.instagram.com/devslane/?hl=en"><FontAwesomeIcon icon = {faInstagram} /></a>
                    
                </div>
                <div className="flex gap-4">
                    <a href="https://devslane.com/privacy-policy/">Privacy Policy</a>
                    <div className="border border-gray-400 "></div>
                    <div>© 2025, Escecion Technologies Pvt. Ltd.</div>

                </div>

            </div>
        </>
    )
}

export default Footer;