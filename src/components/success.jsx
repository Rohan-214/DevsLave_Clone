import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase as fas } from '@fortawesome/free-solid-svg-icons'
function success() {
    return (
        <div className=" bg-gradient-to-br from-blue-950 via-gray-950 to-purple-900 flex justify-center items-center gap-20  h-86 ">
            <div className="text-white flex flex-col justify-center bg-white/10  rounded-3xl p-7 ">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent le p-5 text-5xl font-bold flex     gap-4  "  >
                    <div className='text-blue-400 text-3xl'>
                        <FontAwesomeIcon icon={fas} />
                    </div>
                    <div>100+ </div>
                </div>
                <div>Successful projects delivered across industries</div>
            </div>
            <div className='text-white text-3xl'>Working with us will feel like having your own in-<br/>house team—without the overhead.</div>
        </div>
    )
}

export default success;