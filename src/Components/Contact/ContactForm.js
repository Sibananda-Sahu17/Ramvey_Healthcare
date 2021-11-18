import React from 'react'

function ContactForm() {
    return (
        <div className="flex flex-wrap">
            <div className="">
                <div className="text-xl m-1 mt-3 text-center font-bold sm:text xl sm:m-3 sm:mt-5 md:text-2xl md:m-5 md:mt-7 lg:text-3xl lg:m-7 lg:mt-5">
                    <h1>Get in Touch!!</h1>
                </div>

                <form className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <input
                            className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                            placeholder="Name*"
                        />
                        <input
                            className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                            placeholder="Email*"
                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                            placeholder="Mobile No*"
                        />
                        <input
                            className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                            placeholder="Address*"
                        />
                    </div>
                    <textarea
                        className="shadow-inner bg-gray-200 p-3 rounded-md focus:outline-none text-lg"
                        placeholder="Message*"
                        rows="3"
                    />

                    <button
                        type="submit"
                        className="bg-gray-700 p-3 mx-16 lg:mx-32 rounded-md text-white font-medium hover:bg-gray-500 hover:text-black focus:outline-none">
                        SUBMIT NOW
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
