import Heading from "./common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet as faw } from "@fortawesome/free-solid-svg-icons/faWallet";
import Industries from "./Industries";

function IndustriesRoot() {
    return (
        <>
            <div className="bg-gray-100">
                <Heading title="Industries We Serve" />
                <div className="flex justify-center gap-4 pb-20 flex-wrap ">

                    <Industries title="Fintech"
                        discription="Scalable platforms for secure financial operations."
                        icon={<FontAwesomeIcon icon={faw} />}
                    />
                    <Industries title="HealthTech"
                        discription="Intuitive solutions that improve patient care and compliance."
                        icon={<FontAwesomeIcon icon={faw} />}
                    />
                    <Industries title="EdTech"
                        discription="Engaging platforms that redefine learning experiences."
                        icon={<FontAwesomeIcon icon={faw} />}
                    />
                    <Industries title="eCommerce"
                        discription="Seamless user experiences for modern consumers."
                        icon={<FontAwesomeIcon icon={faw} />}
                    />
                    <Industries title="Blockchain"
                        discription="Smart contracts and decentralized applications for the future."
                        icon={<FontAwesomeIcon icon={faw} />}
                    />
                    <Industries title="And many more..."
                    />

                </div>
            </div>


        </>
    )
}

export default IndustriesRoot;