function Contactlinks({ icon, text, content,link }) {
    return (
        <>
            <a href={`${link}`} className="flex gap-4 text-white ">
                <div className="text-2xl">{icon}</div>
                <div>
                    <div className="text-xl">{text}</div>
                    <div>{content}</div>
                </div>
            </a>
        </>
    )
}

export default Contactlinks;