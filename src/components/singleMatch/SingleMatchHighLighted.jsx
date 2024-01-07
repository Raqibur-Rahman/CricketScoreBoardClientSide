import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const SingleMatchHighLighted = () => {
  const [matchData, setMatchData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://score-board-server.up.railway.app/scoreboard');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMatchData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = (matchId) => {
    navigate(`/detailsById/${matchId}`);
  };

  const calculateTeamTotal = (battingScoreboard, bowlingScoreboard) => {
    const totalScore = battingScoreboard.reduce((total, player) => total + player.runs, 0);
    const totalWickets = bowlingScoreboard.reduce((total, bowler) => total + bowler.wickets, 0);
    return { totalScore, totalWickets };
  };

  return (
    <div className="container mx-auto">
      {matchData ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
          {matchData.map((match) => (
            <div key={match.matchId} className="bg-slate-100 shadow-md rounded-lg p-4 m-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-lg font-semibold">{match.type}</p>
                </div>
                <p className="text-gray-700 text-sm">{match.date}</p>
              </div>

              <div className="mt-4">
                {match.teams && match.teams.map((team, index) => (
                  <div key={team.country} className={`flex items-center mb-4 ${index !== 0 ? 'border-t-2 pt-4' : ''}`}>
                    <img src={team.flag} alt={team.country} className="w-8 h-8 mr-3" />
                    <p className="text-lg font-semibold">{team.country}</p>
                    <p className="text-gray-700 ml-auto">{`${calculateTeamTotal(
                      team.battingScoreboard,
                      team.bowlingScoreboard
                    ).totalScore}/${calculateTeamTotal(
                      team.battingScoreboard,
                      team.bowlingScoreboard
                    ).totalWickets}`}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center mt-4">
                <button
                  onClick={() => handleDetailsClick(match.matchId)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-700"
                >
                  Details
                </button>



              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default SingleMatchHighLighted;
