import Swal from "sweetalert2";


const UpComing = () => {
    const handleDetailsClick = () => {
        Swal.fire('Any fool can use a computer')
    }
    return (
        <div className="pt-24 container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                {/* Upcoming Match Card */}
                <div className="bg-white shadow-md rounded-lg p-4 m-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p className="text-lg font-semibold">Upcoming Match - OneDay</p>
                        </div>
                        <p className="text-gray-700 text-sm">January 15, 2024</p>
                    </div>

                    <div className="mt-4">
                        {/* Match Details */}
                        <div className="flex items-center mb-4 border-t-2 pt-4">
                            {/* Team A */}
                            <img src="teamA-flag.png" alt="Team A" className="w-8 h-8 mr-3" />
                            <p className="text-lg font-semibold">Team A</p>
                            <p className="text-gray-700 ml-auto">Team A Details</p>
                        </div>

                        {/* Team B */}
                        <div className="flex items-center mb-4 border-t-2 pt-4">
                            <img src="teamB-flag.png" alt="Team B" className="w-8 h-8 mr-3" />
                            <p className="text-lg font-semibold">Team B</p>
                            <p className="text-gray-700 ml-auto">Team B Details</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-4">
                        <button
                            onClick={handleDetailsClick}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-700"
                        >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpComing;
