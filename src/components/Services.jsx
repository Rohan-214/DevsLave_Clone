import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight as far } from "@fortawesome/free-solid-svg-icons";
function Services({ title, discription, icon, key1, key2, key3, key4 }) {
    const [ishover, setIshover] = useState(false);
    return (
        < >
            <div className="flex justify-between w-1/3 h-64 rounded-xl shadow-lg p-11 bg-white "
                onMouseEnter={() => setIshover(true)}
                onMouseLeave={() => setIshover(false)}
            >
                <div className={`flex flex-col gap-5 w-2/3 ${(ishover) ? "transtion-all -translate-y-5 ease-in-out duration-300" : ""} `}>
                    <div className="text-2xl font-bold">{title}</div>
                    <div className="text-sm">{discription}</div>
                    <div className="flex gap-2 ">
                        <div className="bg-gray-100 rounded-full px-2 text-xs">{key1}</div>
                        <div className="bg-gray-100 rounded-full px-2 text-xs">{key2}</div>
                        <div className="bg-gray-100 rounded-full px-2 text-xs">{key3}</div>
                        <div className="bg-gray-100 rounded-full px-2 text-xs">{key4}</div>
                    </div>
                    <button className={`bg-black text-white ml-1 px-4 py-1  rounded-md cursor-pointer self-start ${(ishover) ? "" : "hidden"}`}>Lets chat  <FontAwesomeIcon icon={far} /></button>
                </div>
                <img className={`self-center rounded-md h-25 ${(ishover) ? "transtion-all  translate-5 scale-120 ease-in-out duration-300" : ""} `} src={icon} alt="" />
            </div>

        </>
    )
}
export default Services;