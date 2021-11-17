import React from "react";
import RD from '../Images/R&D.jpg';
function License() {
    return (
        <section>
            <div>
                <div className="flex justify-center items-center">
                    <h1 className="flex absolute tracking-widest text-black text-center font-bold text-lg p-19 sm:font-bold sm:text-3xl md:font-bold md:text-4xl lg:font-extrabold lg:text-5xl xl:font-extrabold xl:text-6xl">Discovery of Ground Breaking Medicines</h1>
                    <img className="w-full h-100" src={RD} alt="RD" />
                </div>


                <section className="m-10">
                    <div className="font-bold">
                        <h3 className="text-2xl text-center m-1 mt-3 font-bold sm:text-3xl sm:m-3 sm:mt-5 md:text-4xl md:m-5 md:mt-7 lg:text-5xl lg:m-7 lg:mt-5">Kaymed Pharmaceuticals Pvt. Ltd.</h3>
                    </div>
                    <div className="">
                        <p className="my-5">Kaymed commenced its business in India in 2015 and is today a trusted name in the healthcare industry consistently serving the needs of millions of patients with high quality, affordable and innovative medicines across therapy areas. It has its registered office at 201, Flat no- 42B, Hanuman Lane, Connaught Place, New Delhi. We take great pride in launching our Products ranging in Pharma Brands. 
                            <p className="my-5">Kaymed is focused on increasing the momentum in the business through organic growth routes. Growth is well spread across geographies with focus on key segments.</p>                           
                        </p>

                        <h3 className="my-10 text-2xl">CIN: U51397DL2015PTC286392</h3>

                    </div>
                </section>      
            </div>
        </section>
    )
}
export default License;
                    


