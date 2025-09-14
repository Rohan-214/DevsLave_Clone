import react, { useState, useEffect } from "react";
import NavImages from "./NavImages";
import Buttons from "./components/common/Buttons";


function Navbar() {

    const [isScrolled, setScrolled] = useState(false);
    const [ishover, setIshover] = useState(false);

    useEffect(() => {
        const handelScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handelScroll);
        return () => window.removeEventListener("scroll", handelScroll);

    }, []);


    return (
        <>
            <div
                className={`flex border-1 border-white/[.08] justify-around fixed top-0 left-0 w-full z-50 transition-all hover:bg-white ${isScrolled ? "bg-white" : "bg-transparent"}`}
                onMouseEnter={() => setIshover(true)}
                onMouseLeave={() => setIshover(false)}
            >
                <div class="flex gap-5 ">
                    <NavImages isScrolled={isScrolled} ishover={ishover} />
                    <div class="self-center hidden lg:block rounded-2xl p-2 bg-gradient-to-r from-pink-100 to-pink-200"><span class=""> Now developing faster with AI </span></div>
                </div>
                <div class="flex gap-10 self-center">
                    <div class={`flex gap-5 self-center ${(isScrolled || ishover) ? "" : "invert"}`}>
                        <a href="#">About us</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Blog</a>
                    </div>
                    <Buttons inputs="Lets' Chat"/>
                </div>
            </div>
        </>
    );
}

export default Navbar;