import { useState, useEffect } from 'react';

const Teamwise = () => {
  const [teamData, setTeamData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedBatsmen, setSelectedBatsmen] = useState([]);
  const [selectedBowlers, setSelectedBowlers] = useState([]);
  const [selectedAllRounders, setSelectedAllRounders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://score-board-server.up.railway.app/teamdata');
        const data = await response.json();
        setTeamData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const team = teamData.find((team) => team.teamName === selectedTeam);
    const batsmen = team ? team.players.Batsmen : [];
    const bowlers = team ? team.players.Bowlers : [];
    const allRounders = team ? team.players.AllRounders : [];

    setSelectedBatsmen(batsmen);
    setSelectedBowlers(bowlers);
    setSelectedAllRounders(allRounders);
  }, [selectedTeam, teamData]);

  return (
    <div className="container mx-auto pt-24">
      <h2 className="text-2xl font-bold mb-4">Teamwise Player Data</h2>

      {/* Team selection dropdown */}
      <div className="mb-4">
        <label htmlFor="teamSelect" className="text-lg font-semibold mr-2">
          Select Team:
        </label>
        <select
          id="teamSelect"
          className="border p-2"
          onChange={(e) => setSelectedTeam(e.target.value)}
          value={selectedTeam}
        >
          <option value="">Select a team</option>
          {teamData.map((team) => (
            <option key={team.teamName} value={team.teamName}>
              {team.teamName}
            </option>
          ))}
        </select>
      </div>

      {/* All-Rounders table */}
      {selectedAllRounders.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">All-Rounders Data</h3>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Player Name</th>
                <th className="border p-2">Matches</th>
                <th className="border p-2">Runs</th>
                <th className="border p-2">Wickets</th>
                <th className="border p-2">4s</th>
                <th className="border p-2">6s</th>
              </tr>
            </thead>
            <tbody>
              {selectedAllRounders.map((player) => (
                <tr key={player.id} className="border">
                  <td className="border p-2">{player.name}</td>
                  <td className="border p-2">{player.matches}</td>
                  <td className="border p-2">{player.runs}</td>
                  <td className="border p-2">{player.wickets}</td>
                  <td className="border p-2">{player.fours}</td>
                  <td className="border p-2">{player.sixes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Batsmen table */}
      {selectedBatsmen.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Batsmen Data</h3>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Player Name</th>
                <th className="border p-2">Matches</th>
                <th className="border p-2">Runs</th>
                <th className="border p-2">100s</th>
                <th className="border p-2">50s</th>
                <th className="border p-2">4s</th>
                <th className="border p-2">6s</th>
              </tr>
            </thead>
            <tbody>
              {selectedBatsmen.map((player) => (
                <tr key={player.id} className="border">
                  <td className="border p-2">{player.name}</td>
                  <td className="border p-2">{player.matches}</td>
                  <td className="border p-2">{player.runs}</td>
                  <td className="border p-2">{player.hundreds}</td>
                  <td className="border p-2">{player.fifties}</td>
                  <td className="border p-2">{player.fours}</td>
                  <td className="border p-2">{player.sixes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Bowlers table */}
      {selectedBowlers.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Bowlers Data</h3>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Player Name</th>
                <th className="border p-2">Matches</th>
                <th className="border p-2">Wickets</th>
                <th className="border p-2">Maiden Overs</th>
                <th className="border p-2">Runs Given</th>
              </tr>
            </thead>
            <tbody>
              {selectedBowlers.map((player) => (
                <tr key={player.id} className="border">
                  <td className="border p-2">{player.name}</td>
                  <td className="border p-2">{player.matches}</td>
                  <td className="border p-2">{player.wickets}</td>
                  <td className="border p-2">{player.maidenOvers}</td>
                  <td className="border p-2">{player.runsGiven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Teamwise;
