import React from 'react'
import Career from '../Images/career.jpeg'
function Careers() {
    return (
        <div>
            <div className="flex justify-center items-center">
                <h1 className="flex absolute tracking-widest text-black text-center font-bold text-base p-19 sm:font-bold sm:text-2xl md:font-bold md:text-3xl lg:font-extrabold lg:text-4xl xl:font-extrabold xl:text-5xl">We are proud of our reputation <br />for delivering the highest quality work</h1>
                <img className="w-full" src={Career} />
            </div>

            
            <section className="">
                <div className="text-center">
                    <h1 className="text-2xl m-1 mt-3 font-bold sm:text-3xl sm:m-3 sm:mt-5 md:text-4xl md:m-5 md:mt-7 lg:text-5xl lg:m-7 lg:mt-5">Job@Ramvey</h1>                    
                </div>
                <div className="text-center">
                    <h3 className="text-xl m-1 mt-3 font-bold sm:text xl sm:m-3 sm:mt-5 md:text-2xl md:m-5 md:mt-7 lg:text-3xl lg:m-7 lg:mt-5">If you have the aspiration, we’ll keep you going!!</h3>                    
                </div>
                <div className="m-10">
                    <p className="my-5">Kaymed provides the best opportunity to sharpen your talent in the most competitive business that holds a bright future.</p>
                        {/* <br /><br /> */}
                        <p className="my-5">Our team has taken Kaymed Pharma to the heights that it has scaled and are now working to take it further up on its high growth trajectory.</p>
                        {/* <br /><br /> */}
                        <p className="my-5">Our people are our most valuable asset. Our culturally diverse workforce is one of our biggest strengths and the rich experience they bring, across varied skill-sets and backgrounds, is invaluable. We are proud that our workforce is bound together by our common values.</p>
                        <p className="my-5">We are committed to hiring exceptionally talented people and nurture them professionally. Our multi-dimensional work environment offers high growth opportunities through challenging roles with clear responsibilities and the opportunity to work on a variety of assignments. At Kaymed Pharma, our employees are provided with opportunities to enhance their technical and soft skills through continuous training and development programs.</p>
                        <p className="my-5">As an employee of Kaymed Pharma, you will work with an inspiring, approachable and visionary leadership. Our open, enabling and trust-based culture will offer you an exciting environment to work and grow.</p>
                    
                </div>
            </section>

        </div>
    )
}

export default Careers