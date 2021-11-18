import React from 'react'

function AddressDetails() {
    return (
        <div>
            <div>
                <p>Please contact us using the information below.</p>
              </div>

              <div className="flex flex-col w-1/2">
                <div className="flex flex-row flex-wrap items-center">
                  <p className="mt-6">Registered Office</p>
                  <p className="items-center flex justify-center">Mez &amp; First Floor, A-83, Okhla Phase - 2</p>
                  <p>South Delhi, Delhi -110020 </p>
                </div>

                <div className="my-6">
                  <p>+91-8948333866</p>
                </div>
                <div className="my-6">
                  <p>info@kaymedpharma.com</p>
                </div>
              </div>
        </div>
    )
}

export default AddressDetails
