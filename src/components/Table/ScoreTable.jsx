import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ScoreTable = () => {
  const [matchData, setMatchData] = useState(null);


  const { matchId } = useParams();
  console.log("scoreTable ", matchId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://score-board-server.up.railway.app/scoreboard/${matchId}`);
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
  }, [matchId]);

  const calculateTeamTotal = (battingScoreboard, bowlingScoreboard) => {
    const totalScore = battingScoreboard.reduce((total, player) => total + player.runs, 0);
    const totalWickets = bowlingScoreboard.reduce((total, bowler) => total + bowler.wickets, 0);
    const totalOvers = bowlingScoreboard.reduce((total, bowler) => total + bowler.overs, 0);
    return { totalScore, totalWickets, totalOvers };
  };

  return (
    <div className="container mx-auto p-4 pt-24">
      {matchData ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">{`Match ID: ${matchData.matchId}`}</h2>
          <p className="mb-2">{`Type: ${matchData.type}`}</p>
          <p className="mb-4">{`Date: ${matchData.date}`}</p>

          {/* Display batting and bowling scoreboards for each team */}
          {matchData.teams.map((team, index) => (
            <div key={team.country} className={`mt-6 ${index !== 0 ? 'border-t-2 pt-4' : ''}`}>
              <h3 className="text-xl font-semibold">{`Team: ${team.country}`}</h3>

              {/* Display batting scoreboard in a table */}
              <h4 className="text-lg font-semibold mt-2">Batting Scoreboard</h4>
              <table className="w-full table-auto mb-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">BATTERS</th>
                    <th className="border p-2">RUNS</th>
                    <th className="border p-2">B</th>
                    <th className="border p-2">4s</th>
                    <th className="border p-2">6s</th>
                    <th className="border p-2">SR</th>
                  </tr>
                </thead>
                <tbody>
                  {team.battingScoreboard.map((player) => (
                    <tr key={player.batter} className="border">
                      <td className="border p-2">{player.batter}</td>
                      <td className="border p-2">{player.runs}</td>
                      <td className="border p-2">{player.balls}</td>
                      <td className="border p-2">{player.fours}</td>
                      <td className="border p-2">{player.sixes}</td>
                      <td className="border p-2">{player.strikeRate}</td>
                    </tr>
                  ))}
                  {/* Display total runs, wickets, and overs */}
                  <tr className="bg-gray-200 font-semibold">
                    <td className="border p-2">TOTAL</td>
                    <td className="border p-2"></td>
                    <td className="border p-2"></td>
                    <td className="border p-2"></td>
                    <td className="border p-2"></td>
                    <td className="border p-2">{`${calculateTeamTotal(
                      team.battingScoreboard,
                      team.bowlingScoreboard
                    ).totalScore}/${calculateTeamTotal(
                      team.battingScoreboard,
                      team.bowlingScoreboard
                    ).totalWickets}(${calculateTeamTotal(
                      team.battingScoreboard,
                      team.bowlingScoreboard
                    ).totalOvers})`}</td>
                  </tr>
                </tbody>
              </table>

              {/* Display bowling scoreboard in a table */}
              <h4 className="text-lg font-semibold mt-4">Bowling Scoreboard</h4>
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">BOWLERS</th>
                    <th className="border p-2">O</th>
                    <th className="border p-2">MO</th>
                    <th className="border p-2">RUNS</th>
                    <th className="border p-2">WKTS</th>
                    <th className="border p-2">ECO</th>
                  </tr>
                </thead>
                <tbody>
                  {team.bowlingScoreboard.map((bowler) => (
                    <tr key={bowler.bowler} className="border">
                      <td className="border p-2">{bowler.bowler}</td>
                      <td className="border p-2">{bowler.overs}</td>
                      <td className="border p-2">{bowler.maidens}</td>
                      <td className="border p-2">{bowler.runs}</td>
                      <td className="border p-2">{bowler.wickets}</td>
                      <td className="border p-2">{bowler.economy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default ScoreTable;
