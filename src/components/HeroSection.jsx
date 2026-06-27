
export default function HeroSection(){
    return(
         <div className="bg-gray-50 py-16">
            
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                {/* Left content */}
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">
                        Welcome to Green Home
                    </h1>

                    <p className="mt-4 text-gray-600">
                        Discover high quality products at the best prices.
                    </p>

                    <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                        Shop Now
                    </button>
                </div>

                {/* Right content */}
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                        alt="hero"
                        className="rounded-xl shadow-lg"
                    />
                </div>

            </div>
        </div>
    );

}