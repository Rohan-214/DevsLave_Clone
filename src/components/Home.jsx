import Buttons from './common/Buttons';
import Success from './success';
import ChoosingDevslane from './ChoosingDevslane';
import ServiceRoot from './serviceRoot';
import Starting from './Starting';
import Working from './Working';
import IndustriesRoot from './IndustriesRoot';
import StoriesRoot from './StoriesRoot';
import Contact from './Contact';
function Home() {

    return (
        <>
            <div className='bg-gray-100'>
                <div class=" bg-gradient-to-br from-blue-950 via-gray-950 to-purple-900 flex flex-col h-178">
                    <div class="mx-75">
                        <div class="pt-30 text-7xl text-white font-bold">Experience Exceptional <br /> Software Engineering <span class="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent"><br />Risk-Free!</span></div>
                        <div class="pt-15 text-3xl pb-15 text-white ">A <span class="font-bold">No-Cost, 2-Week Trial</span> of Our Vetted Engineers to Jumpstart <br /> Your <span class="font-bold">Next Big Project</span></div>
                        <Buttons inputs="Start Your Free Trail" />
                    </div>
                </div>
                <ChoosingDevslane />
                <Success />
                <ServiceRoot />
                <Starting />
                <Working />
                <IndustriesRoot />
                <StoriesRoot />
                <Contact />
            </div>
        </>
    )
}

export default Home;
