import Heading from "./common/Heading";
import Story from "./Story"
function StoriesRoot() {
    return (
        <>
            <Heading title="Stories of Success" />
            <div className="flex flex-col items-center justify-center gap-7 ">                                                                                         
                <Story
                    link="https://www.aqai.io/"
                    name="/aqai.svg"
                    type="logo"
                    discription="Transforming the way people and organisations adapt to change."
                    image="https://devslane.com/static/5e532cdf82fca972f5779ef8f20a4fa1/29687/aqai-story.webp"
                    content="Over the past years, our collaboration with DevsLane has been instrumental in shaping AQai’s journey. From the inception of our platform to its growth, DevsLane has been an integral part of our success story.
                As we reflect on this journey, we recognize the remarkable contributions made by each member of your team—your expertise, dedication, and unwavering support have been invaluable. Together, we built something extraordinary."
                    userImage="https://devslane.com/static/f094adc0a84a4154aadb5270e14f40cd/416c3/ross_thornley.webp"
                    userName="Ross Thornley"
                    userDesignation="Co-Founder & CEO at AQai"
                    color="bg-[#A9C46E]"
                />
                <Story
                    link="https://www.mymatrixrent.com/"
                    name="https://devslane.com/client-logos/matrix.png"
                    type="circle"
                    discription="Revolutionizing Tenant Analysis in the $500 Billion Rental Housing Market"
                    image="https://devslane.com/static/2c93f410cca003eeb8890dbd31d1e428/29687/matrix-story.webp"
                    content="DevsLane has been an integral part of our organization since inception. From the earliest days of wireframes to a platform that now supports over 15,000 MAUs, we have relied on DevsLane at every turn. Their ability to grapple with complex business use cases and always find the best technical solutions has made them an indispensable resource and a great partner. When we have had tight deadlines or needed to scale up/down our operations, I can’t say enough how valuable it is to have trusted teammates who always deliver."
                    userImage="https://devslane.com/static/86b5fa4a2d212d00e76e57c2ebfca2d0/4d842/sipho_simela.webp"
                    userName="Sipho Simela"
                    userDesignation="Founder & CEO at Matrix Rental Solutions"
                    color="bg-[#A35C7A]"
                />
                <Story
                    link="https://www.featherpms.com/"
                    name="https://devslane.com/client-logos/feather.png"
                    type="logo"
                    discription="Next-Gen Vacation Rental Management Software"
                    image="https://devslane.com/static/b109a6d8574875050a1111f0bc06d33a/509a3/feather-story.webp"
                    content="Our long-standing relationship with DevsLane since 2019 has been a key part of our success at FeatherPMS. From the beginning, they've shown impressive technical capabilities, adapting quickly to the fast-paced and highly technical nature of our industry, being professional property management. Their team's flexibility—whether for regular standing meetings or last-minute discussions—has made working together seamless and efficient.

With their support, we've been able to build our SaaS product from the ground up, even with a small team. They've fully immersed themselves in our business, taking ownership of their work and collaborating closely with our product team to help the platform evolve and improve over time.

DevsLane has been a dependable and skilled partner, and we’re grateful for the positive and productive relationship we’ve built with them."
                    userImage="https://devslane.com/static/6d720882de98d31776f7c2398a5a4426/416c3/quinn_foster.webp"
                    userName="Quinn Foster"
                    userDesignation="Co-Founder at FeatherPMS"
                    color="bg-[#2A7A93]"
                />
                <Story
                    link="https://bodhi.app/"
                    name="https://devslane.com/client-logos/bodhi.jpeg"
                    type="logo"
                    discription="Accurate and Insightful Astrological Counseling to 1 Million+ Users."
                    image="https://devslane.com/static/4d42a4f0bf45d08f89e43e3bd6d0ae10/c1587/bodhi-story.webp"
                    content="Working with DevsLane has been an absolute game-changer for our business. From the very beginning, they demonstrated a deep understanding of our vision and translated it into a product that exceeded our expectations. The team was incredibly professional, responsive, and creative throughout the development process."
                    userImage="https://devslane.com/static/dd2159b70c2d5bbefa864b0aab242e62/482be/sachin_goel.webp"
                    userName="Sachin Goel"
                    type2="length"
                    userDesignation="Founder & CEO at Bodhi App"
                    color="bg-[#CBA35C]"
                />
                <Story
                    link="https://relevvo.com/"
                    name="/relevvo.svg"
                    type="logo"
                    discription="Relevvo’s AI develops hyper-relevant campaigns for Marketing and Sales teams based on the digital footprint of your ideal accounts."
                    image="https://devslane.com/static/c20bef6990232460d3e679540f691134/29687/relevvo-story.webp"
                    content="Over the past three years, I've had the privilege of working closely with DevsLane, and I can confidently say they've been an exceptional technology partner that consistently delivered what we needed and beyond.

DevsLane Engineers have demonstrated considerable technical depth, evidenced from how often they've been able to tackle complex problems and delivered intelligent solutions, well-tested code with pretty quick turnaround times. This has been critical for the pace with which our startup needs to move. To succeed in our fast-paced startup environment and iterate rapidly, it's required them to seamlessly integrate with our processes which they aligned with quickly and consistently. I've also been impressed by their high sense of ownership and commitment to continuous improvement. Their engineers proactively seek feedback and I've observed sustained improvement over time.

DevsLane's adaptability with our evolving needs has been instrumental in us achieving our goals, whether it's scaling up resources on short notice, ramping up new talent with minimal disruption, swift issue resolution etc. they've proven to be an incredibly agile partner. DevsLane has been less like a vendor and more like an extension of our own team."
                    userImage="https://devslane.com/static/9dbfffc933ed8aaf4f5df31f908a08a3/cb487/tushar_shanbhag.webp"
                    userName="Tushar Shanbhag"
                    userDesignation="Co-founder at Relevvo"
                    color="bg-[#A9BFAB]"
                />
            <button className="text-xl bg-black text-white px-5 py-2 flex items-center justify-center rounded-md " >Discover All Success Stories</button>
            </div>
        </>
    )

}
export default StoriesRoot;
