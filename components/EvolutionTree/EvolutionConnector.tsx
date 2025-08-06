interface EvolutionConnectorProps {
    type: 'horizontal' | 'vertical' | 'branch';
    count?: number;
}

export function EvolutionConnector({ type, count = 1 }: EvolutionConnectorProps) {
    if (type === 'horizontal') {
        return (
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white shadow-sm"></div>
                </div>
            </div>
        );
    }

    if (type === 'vertical') {
        return (
            <div className="flex flex-col items-center mt-8 md:justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full shadow-sm md:hidden"></div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg border-4 border-white my-2">
                    <div className="flex items-center gap-2">
                        <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
                        EVOLVES
                        <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
                    </div>
                </div>
                <div className="flex items-center relative">
                    <div className="w-6 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full hidden md:block" />
                    <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 translate-x-1/2">
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Evolves to"
                        >
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="url(#arrowGradient)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <defs>
                                <linearGradient
                                    id="arrowGradient"
                                    x1="9"
                                    y1="12"
                                    x2="15"
                                    y2="12"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#60A5FA" />
                                    <stop offset="1" stopColor="#A78BFA" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }

    // type === 'branch'
    return (
        <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full">
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className="relative">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white shadow-sm"></div>
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-purple-400"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
