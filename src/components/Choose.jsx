function Choose({icon, color, rotate,title,discription}) {
    return (
        <>
            <div className={`${color} w-80 h-60 flex flex-col gap-3 text-white p-8 rounded-2xl transition-all duration-300 ease-in-out ${rotate} hover:rotate-0` }>
                <div className="text-3xl">{icon}</div>
                <div className='text-2xl'>{title}</div>
                <div className=''>{discription}</div>
            </div>

        </>
    )
}

export default Choose;  