import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin as linkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
function Story({link, name, discription, content, type, type2, image, userImage, userName, userDesignation, color}) {

    return (
        <>
            
                <div className= {`flex justify-center items-center w-2/3 p-7 rounded-3xl ${color}`}>
                    <div className="p-5 flex flex-col gap-5">
                        <a href= {link}>
                            <img className={` ${type == "circle" ? "w-20" : "w-64" }`} src={name} alt="" srcset="" />
                            <div className="text-3xl font-semibold text-white ">{discription}</div>
                        </a>
                        <div className="  text-white flex  gap-2 pl-5 w-130">
                            <div className="border-1 "></div>
                            <div>
                                <p className="whitespace-pre-line">
                                    {content}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <img className="max-w-12 rounded-full" src={userImage} alt="" />
                            <div className="text-white">
                                <div className="flex items-center gap-2 ">
                                    <div className="font-bold ">{userName} </div>
                                    <div className="text-blue-500 text-2xl flex items  "><FontAwesomeIcon icon={linkedin} /></div>
                                </div>
                                <div className="text-sm font-light">{userDesignation}</div>
                            </div>
                        </div>
                    </div>
                    <img className={` ${type2 === "length" ? "w-120" : "w-1/2" } `}  src={image} alt="" />
                </div>
                
    
        </>
    )

}
export default Story;
