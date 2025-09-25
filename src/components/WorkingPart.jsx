import { useState } from "react";

function WorkingPart({ number, title, discription, color }) {

    const [hover, sethover] = useState(false);

    const colorVariants = {
        purple: {
            border: 'border-purple-200',
            from: 'from-purple-600',
            text: 'text-purple-500'
        },
        green: {
            border: 'border-green-200',
            from: 'from-green-600',
            text: 'text-green-500'
        },
        // Add more color variants as needed
        blue: {
            border: 'border-blue-200',
            from: 'from-blue-600',
            text: 'text-blue-500'
        }
    }
    const selectedColor = colorVariants[color];
    return (



        <>
            <div className={`max-w-110 ${selectedColor.border}  border-2 rounded-3xl p-10 flex transition-all duration-300 easy-out hover:-translate-y-1`}
                onMouseEnter={() => sethover(true)}
                onMouseLeave={() => sethover(false)}
            >
                <div className="flex flex-col gap-5">
                    <div className={`text-7xl font-bold bg-gradient-to-br ${selectedColor.from} to-110% bg-clip-text text-transparent `} >{number}</div>
                    <div className="text-2xl font-semibold">{title}</div>
                    <div className="text-gray-600">{discription}</div>
                </div>
                <div className={`text-6xl  ${selectedColor.text} transition-all duration-300 ${!hover && 'opacity-0'}`} >*</div>
            </div>


        </>
    )
}

export default WorkingPart;