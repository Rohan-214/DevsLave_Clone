function Industries({title, discription, icon}) {

    console.log(discription , title );
    return (
        <>

            <div className={`bg-white rounded-3xl shadow-lg w-50 h-50 text-center flex flex-col items-center gap-2 ${!discription ? "justify-center" : "pt-5" } `}>
                <div className="text-4xl">{icon}</div>
                <div className={`font-semibold text-xl flex items-center justify-center-safe pt-5 `}>{title}</div>
                <div className="text-sm ">{discription}</div>
            </div>
        </>
    )
}

export default Industries;