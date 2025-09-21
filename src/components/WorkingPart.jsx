import { useState } from "react";

function WorkingPart({ number, title, discription, color }) {

        const [hover, sethover] = useState(false);


    return (

        <>

            <div className={`max-w-110 border-${color}-200  border-2 rounded-3xl p-10 flex transition-all duration-300 easy-out hover:-translate-y-1`}
                onMouseEnter={() => sethover(true)}
                onMouseLeave={() => sethover(false)}
            >
                <div className="flex flex-col gap-5">
                    <div className={`text-7xl font-bold bg-gradient-to-br from-${color}-600 to-110% bg-clip-text text-transparent `} >{number}</div>
                    <div className="text-2xl font-semibold">{title}</div>
                    <div className="text-gray-600">{discription}</div>
                </div>
                <div className={`text-6xl  text-${color}-500 transition-all duration-300 ${!hover && 'opacity-0'}`} >*</div>
            </div>


        </>
    )
}

export default WorkingPart;