import Heading from "./common/Heading";
import WorkingPart from "./WorkingPart";

function Working() {


    return (
        <div className="bg-gray-100">
            <Heading title="How it works" />
            <div className="flex flex-wrap justify-center gap-10  pb-20">
                <WorkingPart
                    number="01"
                    title="Share Your Needs"
                    discription="Tell us about your project or engineering challenges, and we'll match you with the right engineer(s)."
                    color="purple"
                />
                <WorkingPart
                    number="02"
                    title="Start Collaborating"
                    discription="Our engineers will work with your team for 2-weeks, fully dedicated to your goals and tasks."
                    color="green"
                />
                <WorkingPart
                    number="03"
                    title="Decide with Confidence"
                    discription="If we're a great fit, you can continue working with us. If not, no strings attached."
                    color="blue"
                />
            </div>
        </div>
    )
}

export default Working;