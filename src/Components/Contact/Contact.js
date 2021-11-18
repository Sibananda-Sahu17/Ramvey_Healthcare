import React from 'react'
import contact from '../Images/contact.jpeg'
function Contact() {
    return (
        <div>
            <section className="shadow border-2">
                <div>
                    <div className="flex justify-center items-center">
                        <h1 className="flex absolute tracking-widest text-white text-center font-bold text-base p-19 sm:font-bold sm:text-2xl md:font-bold md:text-3xl lg:font-extrabold lg:text-4xl xl:font-extrabold xl:text-5xl">We are proud of our reputation <br />for delivering the highest quality work</h1>
                        <img className="w-full h-auto" src={contact} alt="contact" />
                    </div>

                    <div className="flex justify-between h-64 m-5">
                        <div className="bg-orange-300">1</div>
                        <div className="bg-red-500 ">2</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
