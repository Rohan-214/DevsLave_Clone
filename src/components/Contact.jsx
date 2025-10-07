import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Contactlinks from "./contactlinks";
function Contact() {
    return (
        <div className="flex justify-center items-center pt-20 pb-20 ">
            <div className="flex  w-2/3 rounded-2xl    ">
                <div className="flex flex-col gap-5 bg-blue-700 w-1/3 rounded-l-2xl  p-20">
                    <Contactlinks
                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                        text="Email"
                        content="contact.us@devslane.com"
                    />
                    <Contactlinks
                        icon={<FontAwesomeIcon icon={faPhone} />}
                        text="phone"
                        content="+91 7300-970444"
                    />
                    <Contactlinks
                        icon={<FontAwesomeIcon icon={faLinkedin} />}
                        text="LinkedIn"
                        content="Connect with us"
                        link = "https://www.linkedin.com/company/devslane/posts/?feedView=all"
                    />
                    <div className="border border-gray-500 " ></div>
                    <div className="text-white text-lg font-semibold">We can't wait to hear from you!</div>
                </div>
                <form className="flex flex-col gap-2 p-20 font-semibold w-2/3 rounded-r-2xl bg-white">
                    <div className="text-3xl">Fill the form</div>
                    <label className="pt-5" for="name">Name *</label>
                    <input className="border border-gray-400 rounded-md w-full py-1" type="text" name="name" id="name" />
                    <label className="pt-5" for="email">Company Email *</label>
                    <input className="border border-gray-400 rounded-md w-full py-1" type="email" name="email" id="email" />
                    <label className="pt-5" for="message">Tell us about your requirements *</label>
                    <textarea className="border border-gray-400 rounded-md w-full py-1 h-20" name="message" id="message" cols="10" rows="10"></textarea>
                    <div className="flex gap-5 pt-5">
                        <button className="bg-black  w-42 rounded-md  text-white cursor-pointer">Send Message</button>
                        <div className="text-gray-500 w-1/2 text-sm">By sending this form I confirm that I have read and accept the <a className="underline" href="https://devslane.com/privacy-policy/"> Privacy Policy.</a></div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contact;
