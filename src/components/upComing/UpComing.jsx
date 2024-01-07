import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const UpComing = () => {
    const [upcomingMatches, setUpcomingMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleDetailsClick = (match) => {
        Swal.fire({
            title: `${match.type} Match Details`,
            html: `
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-lg font-semibold mb-2">Date:</p>
            <p class="text-gray-700">${match.date}</p>
          </div>
          <div>
            <p class="text-lg font-semibold mb-2">Venue:</p>
            <p class="text-gray-700">${match.venue}</p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-lg font-semibold mb-2">Teams:</p>
          <ul class="list-disc list-inside">
            <li class="flex items-center mb-2">
              <img src="${match.teams[0].flag}" alt="${match.teams[0].name}" class="w-8 h-8 mr-3" />
              <p class="text-gray-700">${match.teams[0].name}</p>
            </li>
            <li class="flex items-center">
              <img src="${match.teams[1].flag}" alt="${match.teams[1].name}" class="w-8 h-8 mr-3" />
              <p class="text-gray-700">${match.teams[1].name}</p>
            </li>
          </ul>
        </div>
      `,
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: 'Close',
            confirmButtonColor: '#48BB78',
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://score-board-server.up.railway.app/upcomings');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUpcomingMatches(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="pt-24 container mx-auto">
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="flex items-center justify-center h-screen">
                        <span className="loading loading-ring loading-lg"></span>
                        <span className="loading loading-ring loading-lg"></span>
                        <span className="loading loading-ring loading-lg"></span>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                    {upcomingMatches.map((match) => (
                        <div key={match.id} className="bg-white shadow-md rounded-lg p-4 m-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold">{`Upcoming Match - ${match.type}`}</p>
                                </div>
                                <p className="text-gray-700 text-sm">{match.date}</p>
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center mb-4 border-t-2 pt-4">
                                    <img src={match.teams[0].flag} alt={match.teams[0].name} className="w-8 h-8 mr-3" />
                                    <p className="text-lg font-semibold">{match.teams[0].name}</p>
                                    <p className="text-gray-700 ml-auto">Team Details</p>
                                </div>

                                <div className="flex items-center mb-4 border-t-2 pt-4">
                                    <img src={match.teams[1].flag} alt={match.teams[1].name} className="w-8 h-8 mr-3" />
                                    <p className="text-lg font-semibold">{match.teams[1].name}</p>
                                    <p className="text-gray-700 ml-auto">Team Details</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mt-4">
                                <button
                                    onClick={() => handleDetailsClick(match)}
                                    className="btn btn-outline btn-neutral text-black px-4 py-2 rounded-md hover:bg-black focus:outline-none "
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UpComing;
