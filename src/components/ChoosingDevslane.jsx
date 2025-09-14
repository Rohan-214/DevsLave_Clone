import Choose from "./Choose";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage as fam } from '@fortawesome/free-regular-svg-icons/faMessage';
import { faUser as fau } from '@fortawesome/free-regular-svg-icons';
import { faBoltLightning as fal } from '@fortawesome/free-solid-svg-icons/faBoltLightning';
import { faArrowAltCircleDown as fac } from '@fortawesome/free-regular-svg-icons';
function ChoosingDevslane() {
    return (
        <>
            <div className='text-center text-5xl font-bold pt-20 '>Why Choose DevsLane?</div>
            <div className='flex justify-center gap-1 pt-20 pb-20 flex-wrap'>
                <Choose rotate="rotate-[-5deg]"
                    icon={<FontAwesomeIcon icon={fam} />}
                    color="bg-purple-600"
                    title="Exceptional Talent Pool"
                    discription="Our engineers are meticulously selected through a unique, proprietary program active in 1,500+ schools and colleges."
                />
                <Choose rotate="rotate-[5deg]"
                    icon={<FontAwesomeIcon icon={fau} />}
                    color="bg-indigo-600"
                    title="Hire Risk Free"
                    discription="Interview our engineers, give them a test task or hire them on 2-week free trial."
                />
                <Choose rotate="rotate-[-5deg]"
                    icon={<FontAwesomeIcon icon={fal} />}
                    color="bg-sky-500"
                    title="Seamless Team Integration"
                    discription="Our engineers quickly adapt to your workflow, processes, and tech stack."
                />
                <Choose rotate="rotate-[5deg]"
                    icon={<FontAwesomeIcon icon={fac} />}
                    color="bg-teal-600"
                    title="Flexibility and Agility"
                    discription="Hire instantly and ramp up or ramp down quickly with your changing needs."
                />
            </div>
        </>
    )
}

export default ChoosingDevslane;