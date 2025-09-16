import image1 from "../assets/team_aug.webp";
import image2 from "../assets/img2.webp";
import image3 from "../assets/img3.webp";
import image4 from "../assets/img4.webp";
import image5 from "../assets/img5.webp";
import image6 from "../assets/img6.webp";
import image7 from "../assets/img7.webp";
import image8 from "../assets/img8.webp";
import Services from "./Services";
function ServiceRoot() {
    return (
        <div className="bg-gray-100">
            <div className='text-center text-5xl  font-bold pt-20 '>Services we provide</div>
            <div className="flex justify-center gap-2 pt-20 pb-20 flex-wrap ">
                <Services title={"Team Augmentation"}
                    discription={"Add experienced, vetted engineers to your team with transparent accountability and expertise tailored to your goals."}
                    key1={"Cultural fit"}
                    key2={"Top 1%"}
                    key3={"Instant hire"}
                    icon={image1}
                />
                <Services title={"MVP Development"}
                    discription={"Bring Your Vision to Life with MVP Development: Launch Fast, Iterate Smarter."}
                    key1={"MVP"}
                    key2={"Rapid Prototyping"}
                    key3={"Agile Development"}
                    icon={image2}
                />
                <Services title={"AI Development"}
                    discription={"Leverage the power of artificial intelligence to stay ahead of the competition."}
                    key1={"RAG"}
                    key2={"LangChain"}
                    key3={"LlamaIndex"}
                    key4={"AutoGPT"}
                    icon={image3}
                />
                <Services title={"Full-Stack Development"}
                    discription={"Work with a complete team led by a dedicated tech lead or project manager, ensuring alignment, ownership, and results."}
                    key1={"Node.js"}
                    key2={"React"}
                    key3={"Python"}
                    key4={"AWS"}
                    icon={image4}
                />
                <Services title={"Blockchain Development"}
                    discription={"Unlock the Future with Custom Blockchain Solutions: Secure, Scalable, and Innovative."}
                    key1={"Smart Contracts"}
                    key2={"Web3"}
                    key3={"NFT Development"}
                    icon={image5}
                />
                <Services title={"App Development"}
                    discription={"From concept to app store, we create mobile applications that combine intuitive design with robust functionality."}
                    key1={"React Native"}
                    key2={"Flutter"}
                    key3={"Desktop"}
                    key4={"Mobile"}
                    icon={image6}
                />
                <Services title={"UI/UX"}
                    discription={"Transform Ideas into Stunning Experiences: Intuitive, User-Centric, and Visually Engaging UI/UX Designs."}
                    key1={"Wireframing"}
                    key2={"Figma"}
                    key3={"XD"}
                    icon={image7}
                />
                <Services title={"DevOps"}
                    discription={"Streamline Your Development Pipeline: Agile, Automated, and Reliable DevOps Solutions."}
                    key1={"Kubernetes"}
                    key2={"Docker"}
                    key3={"AWS"}
                    key4={"IaC"}
                    icon={image8}
                />


            </div>
        </div>
    )
}

export default ServiceRoot;