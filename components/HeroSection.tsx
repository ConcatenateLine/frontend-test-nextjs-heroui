import SectionTitle from "./sectionTitle";

const HeroSection = () => {
    return (
        <div className="relative w-full overflow-hidden rounded-2xl rounded-b-none bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Pokémon Universe
                        <span className="block text-2xl md:text-3xl font-normal text-blue-200 mt-2">
                            Discover, Collect & Battle
                        </span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Explore the world of Pokémon with our comprehensive search engine, build your dream teams, and engage in
                        epic battles.
                    </p>

                </div>
            </div>
            <div className="flex justify-center pb-12">
                <SectionTitle text="Next.js 13" />
            </div>
        </div>
    );
}

export default HeroSection;
