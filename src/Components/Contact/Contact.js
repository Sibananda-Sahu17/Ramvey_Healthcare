import React from 'react'
import contact from '../Images/contact.jpeg'
function Contact() {
    return (
        <div>
            <div className="">
                <div className="flex justify-center items-center">
                    <h1 className="flex absolute tracking-widest text-white text-center font-bold text-base p-19 sm:font-bold sm:text-2xl md:font-bold md:text-3xl lg:font-extrabold lg:text-4xl xl:font-extrabold xl:text-5xl">We are proud of our reputation <p />for delivering the highest quality work</h1>
                    <img className="w-full h-auto" src={contact} />
                </div>

                <div className="h-64 m-5 shadow border-2 text-center">
                    <h1 className="text-4xl font-bold">Kaymed Pharmaceuticals Pvt. Ltd.</h1>
                    <div className="flex justify-between flex-wrap m-5">
                        <div className="flex items-center w-auto bg-orange-300 flex-col">
                            <p>Please contact us using the information below.</p>
                            <i class="fa fa-map-signs">&nbsp; Registered Office&nbsp; </i>
                            <p>Mez &amp; First Floor, A-83, Okhla Phase - 2</p>
                            <p>South Delhi, Delhi -110020</p>
                        </div>
                        <div className="flex items-center bg-orange-300 flex-col">
                            <p>Please contact us using the information below.</p>
                            <i class="fa fa-map-signs">&nbsp; Registered Office&nbsp; </i>
                            <p>Mez &amp; First Floor, A-83, Okhla Phase - 2</p>
                            <p>South Delhi, Delhi -110020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
