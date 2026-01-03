

const Hero = ()=>{
    return (
        <div className="flex flex-col justify-center items-center mt-5 px-5">
            <img src="https://zerodha.com/static/images/landing.svg" alt="Stock trading platform hero image" className="max-w-full h-87.5 mb-5" />

            <div className="mt-5 flex flex-col text-center">
                <h2 className="text-3xl font-semi mb-4">Invest in everything</h2>
                <p className="text-lg mb-6">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            </div>

            <div className="mt-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign up for Free</button>
            </div>
        </div>
    )
}

export default Hero
