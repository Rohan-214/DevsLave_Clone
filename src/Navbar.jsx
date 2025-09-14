import react,{ useState, useEffect } from "react";


function Navbar(){

    const[isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handelScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handelScroll);
        return () => window.removeEventListener("scroll", handelScroll);

    }, []);


    return(
        <>
            <div className={` flex border-1 border-white/[.08] justify-around fixed top-0 left-0 w-full z-50 transition-all  hover:bg-white ${isScrolled ? "bg-white" : "bg-transparent"}`}>
                <div class= "flex gap-5 ">
                    <div class= {`flex gap-4 p-3 h-16  ${isScrolled ? "" : "invert"} `}>
                        <img class="max-w-10" src="https://devslane.com/logo.svg" alt="" />
                        <img class="max-w-36" src="https://devslane.com/devslane.svg" alt="" />
                    </div>
                        <div class="self-center hidden lg:block rounded-2xl p-2 bg-gradient-to-r from-pink-100 to-pink-200"><span class=""> Now developing faster with AI </span></div>
                </div>
                <div class="flex gap-10 self-center">
                    <div class={`flex gap-5 self-center ${isScrolled ? "" : "invert"}`}>
                        <a href="#">About us</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Blog</a>
                    </div>
                    <a class="bg-blue-500  rounded-md px-7 py-2 text-white"   href="#">Let's Chat</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;