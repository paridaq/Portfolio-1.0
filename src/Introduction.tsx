import React from "react"
import Screenshot from "./assets/Screenshot (1).png"

const Introduction=()=>{


    return(
        <>
        <div className="px-4 py-8 sm:px-6 lg:px-8 text-2xl sm:text-3xl lg:text-4xl">
        <h1 className="mb-20">Hi I am Biswajit Parida</h1>
        <div className="flex flex-col sm:flex-row items-center">
            <div className="mb-4 sm:mb-0 sm:mr-4">
            <img src={Screenshot} alt="snap" className="w-50 h-30 sm:w-50 sm:h-40 rounded-lg" />
            </div>
            <div className="text-xl sm:text-xl">
            <h1 >Biswjit paridas  </h1>
            <h1>here i am going to conquerer the world</h1>
            <h1>kdfjnlv</h1>
            <h1>kdfjnlv</h1>
            </div>
        </div>
        </div>
        </>
    )
}

export default Introduction