import react, { useEffect, useState } from "react";

function NavImages({ isScrolled,ishover }) {
    return (
        <>
            <div class={`flex gap-4 p-3 h-16  ${isScrolled || ishover  ? "" : "invert"} `}>
                <img class="max-w-10" src="https://devslane.com/logo.svg" alt="" />
                <img class="max-w-36" src="https://devslane.com/devslane.svg" alt="" />
            </div>
        </>
    )
}
export default NavImages;