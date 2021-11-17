import React from 'react'
import companyPic from '../Images/companyPic.jpeg'
function Company() {

    return (
        <div className="">
            <div className="flex justify-center items-center">
                <h1 className="flex absolute tracking-widest text-white text-center font-bold text-base p-19 sm:font-bold sm:text-2xl md:font-bold md:text-3xl lg:font-extrabold lg:text-4xl xl:font-extrabold xl:text-5xl">We are proud of our reputation <br />for delivering the highest quality work</h1>
                <img className="w-full h-auto " src={companyPic} />
            </div>


            <section className="">
                <div className="text-center">
                    <h1 className="text-2xl m-1 mt-3 font-bold sm:text-3xl sm:m-3 sm:mt-5 md:text-4xl md:m-5 md:mt-7 lg:text-5xl lg:m-7 lg:mt-5">The pioneer years</h1>
                </div>
                <div className="m-10">
                    <p className="my-5">Kaymed is one strong family today from diverse origins, cultures and academic stream. By bringing together the best abilities, experience and knowledge all on a single platform, thus leveraging differences in expertise and perspective, Kaymed has achieved remarkable results.
                        {/* <br /><br /> */}
                        <p className="my-5">Kaymed commenced its business in India in 2015 and is today a trusted name in the healthcare industry consistently serving the needs of millions of patients with high quality, affordable and innovative medicines across therapy areas. It has its registered office at 201, Flat no- 42B, Hanuman Lane, Connaught Place, New Delhi. We take great pride in launching our Products ranging in Pharma Brands.</p>
                        {/* <br /><br /> */}
                        <p className="my-5">Kaymed is focused on increasing the momentum in the business through organic growth routes. Growth is well spread across geographies with focus on key segments.</p>
                    </p>
                </div>
            </section>


            <section className="">
                <div className="text-center">
                    <h3 className="text-xl m-1 mt-3 font-bold sm:text-2xl sm:m-3 sm:mt-5 md:text-3xl md:m-5 md:mt-7 lg:text-4xl lg:m-7 lg:mt-5">Vision &amp; Mission</h3>
                </div>
                <article>

                    <div className="m-10">
                        <h4 className="mt-10 mb-8 text-lg font-bold">People, Progress, Purpose &amp; Social Responsibility</h4>
                        <p className="my-5">Our Vision is to become a leading global pharmaceutical company by providing high quality, affordable and innovative solutions for patients with diverse medical needs.</p>
                        {/* <br />
                                <br /> */}
                        <p className="my-5">Consistent growth and sustainability is a multidimensional aspiration for all at Kaymed. We mainly focus on providing quality and affordable medicines to billions of ailing patients across geographies and bridging the gap of unmet needs of medical fraternity through continuous innovation. Our basic business philosophy, by its very nature, serves a social responsibility hence we have a far better reason than profits alone to drive our Performance.</p>
                        {/* <br /><br /> */}
                        <p className="my-5">As a part of our Corporate Social Responsibility the Company intends to make a positive difference to society. Our aim is to deliver superior and sustainable value to all our customers, employees and to the society.
                        </p>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Company
// text-white m-16 ml-12 text-xs font-extrabold sm:m-20 sm:ml-12 sm:text-2xl sm:font-extrabold sm:mt-32 sm:ml-25 sm:text-3xl sm:font-bold xl:p-35 xl:pl-20 xl:text-5xl xl:font-bold