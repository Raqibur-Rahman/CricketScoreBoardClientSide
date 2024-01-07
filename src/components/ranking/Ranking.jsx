import { useState, useEffect } from 'react';

const Ranking = () => {
  const [rankingsData, setRankingsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://score-board-server.up.railway.app/ranking');
        const data = await response.json();
        setRankingsData(data[0]);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto pt-24">

      {loading ? (
        // Loading state
        <div className="flex items-center justify-center h-screen">
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </div>
      ) : (
        <div>
          {/* Team Rankings */}
          <div className="flex justify-center bg-gray-100 mt-1">
            <h2 className="text-lg font-semibold p-4 border-b">Team Rankings</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(rankingsData.teamRankings).map(([format, teams]) => (
              <div key={format} className="bg-white overflow-hidden shadow-md rounded-lg">
                <h2 className="text-lg font-semibold p-4 border-b bg-gray-100">{format.toUpperCase()} Team Rankings</h2>
                <table className="w-full table-auto">
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className="px-4 py-2 border p-2">Rank</th>
                      <th className="px-4 py-2 border p-2">Team</th>
                      <th className="px-4 py-2 border p-2">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((team, teamIndex) => (
                      <tr key={team.rank}>
                        <td className="px-4 py-2 border p-2">{teamIndex + 1}</td>
                        <td className="px-4 py-2 border p-2">{team.team}</td>
                        <td className="px-4 py-2 border p-2">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* Batting Rankings */}
          <div className="flex justify-center bg-gray-100 mt-1">
            <h2 className="text-lg font-semibold p-4 border-b">Batting Rankings</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(rankingsData.battingRankings).map(([format, players]) => (
              <div key={format} className="bg-white overflow-hidden shadow-md rounded-lg">
                <h2 className="text-lg font-semibold p-4 border-b bg-gray-100">{format.toUpperCase()} Batting Rankings</h2>
                <table className="w-full table-auto">
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className="px-4 py-2 border p-2">Rank</th>
                      <th className="px-4 py-2 border p-2">Player</th>
                      <th className="px-4 py-2 border p-2">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player, playerIndex) => (
                      <tr key={player.rank}>
                        <td className="px-4 py-2 border p-2">{playerIndex + 1}</td>
                        <td className="px-4 py-2 border p-2">{player.player}</td>
                        <td className="px-4 py-2 border p-2">{player.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* Bowling Rankings */}
          <div className="flex justify-center bg-gray-100 mt-1">
            <h2 className="text-lg font-semibold p-4 border-b">Bowling Rankings</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(rankingsData.bowlingRankings).map(([format, players]) => (
              <div key={format} className="bg-white overflow-hidden shadow-md rounded-lg">
                <h2 className="text-lg font-semibold p-4 border-b bg-gray-100">{format.toUpperCase()} Bowling Rankings</h2>
                <table className="w-full table-auto">
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className="px-4 py-2 border p-2">Rank</th>
                      <th className="px-4 py-2 border p-2">Player</th>
                      <th className="px-4 py-2 border p-2">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player, playerIndex) => (
                      <tr key={player.rank}>
                        <td className="px-4 py-2 border p-2">{playerIndex + 1}</td>
                        <td className="px-4 py-2 border p-2">{player.player}</td>
                        <td className="px-4 py-2 border p-2">{player.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>


          {/* Bowling Rankings */}
          <div className="flex justify-center bg-gray-100 mt-1">
            <h2 className="text-lg font-semibold p-4 border-b">All Rounder Rankings</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(rankingsData.allRounderRankings).map(([format, players]) => (
              <div key={format} className="bg-white overflow-hidden shadow-md rounded-lg">
                <h2 className="text-lg font-semibold p-4 border-b bg-gray-100">{format.toUpperCase()} All Rounder Rankings</h2>
                <table className="w-full table-auto">
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className="px-4 py-2 border p-2">Rank</th>
                      <th className="px-4 py-2 border p-2">Player</th>
                      <th className="px-4 py-2 border p-2">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player, playerIndex) => (
                      <tr key={player.rank}>
                        <td className="px-4 py-2 border p-2">{playerIndex + 1}</td>
                        <td className="px-4 py-2 border p-2">{player.player}</td>
                        <td className="px-4 py-2 border p-2">{player.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}



    </div>
  );
};

export default Ranking;
