import React, { useState, useEffect } from 'react';

const Teamwise = () => {
  const [teamData, setTeamData] = useState([
    {
      teamName: 'Team A',
      players: {
        Batsmen: [
          { id: 1, name: 'Player 1', role: 'Batsman', matches: 20, runs: 800, hundreds: 2, fifties: 5, fours: 80, sixes: 20 },
          { id: 2, name: 'Player 2', role: 'Batsman', matches: 18, runs: 700, hundreds: 1, fifties: 3, fours: 60, sixes: 10 },
          { id: 7, name: 'Player 7', role: 'Batsman', matches: 25, runs: 900, hundreds: 3, fifties: 7, fours: 90, sixes: 25 },
          { id: 8, name: 'Player 8', role: 'Batsman', matches: 22, runs: 750, hundreds: 1, fifties: 5, fours: 70, sixes: 15 },
          { id: 9, name: 'Player 9', role: 'Batsman', matches: 15, runs: 600, hundreds: 1, fifties: 2, fours: 50, sixes: 12 },
        ],
        Bowlers: [
          { id: 3, name: 'Player 3', role: 'Bowler', matches: 25, wickets: 30, maidenOvers: 5, runsGiven: 400 },
          { id: 4, name: 'Player 4', role: 'Bowler', matches: 22, wickets: 28, maidenOvers: 4, runsGiven: 350 },
          { id: 10, name: 'Player 10', role: 'Bowler', matches: 20, wickets: 25, maidenOvers: 3, runsGiven: 320 },
          { id: 11, name: 'Player 11', role: 'Bowler', matches: 18, wickets: 22, maidenOvers: 2, runsGiven: 300 },
          { id: 12, name: 'Player 12', role: 'Bowler', matches: 15, wickets: 20, maidenOvers: 1, runsGiven: 280 },
        ],
        AllRounders: [
          { id: 5, name: 'Player 5', role: 'All-Rounder', matches: 15, runs: 500, wickets: 10, fours: 30, sixes: 15 },
          { id: 6, name: 'Player 6', role: 'All-Rounder', matches: 20, runs: 450, wickets: 15, fours: 25, sixes: 12 },
          { id: 13, name: 'Player 13', role: 'All-Rounder', matches: 18, runs: 400, wickets: 12, fours: 20, sixes: 10 },
          { id: 14, name: 'Player 14', role: 'All-Rounder', matches: 25, runs: 550, wickets: 18, fours: 35, sixes: 18 },
          { id: 15, name: 'Player 15', role: 'All-Rounder', matches: 22, runs: 600, wickets: 20, fours: 40, sixes: 20 },
        ],
      },
    },
    // Add more teams as needed
  ]);

  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedBatsmen, setSelectedBatsmen] = useState([]);
  const [selectedBowlers, setSelectedBowlers] = useState([]);
  const [selectedAllRounders, setSelectedAllRounders] = useState([]);

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

      {/* Batsmen table */}
      {selectedBatsmen.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Batsmen Data</h3>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
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
              <tr className="bg-gray-200">
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

      {/* All-Rounders table */}
      {selectedAllRounders.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">All-Rounders Data</h3>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
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
    </div>
  );
};

export default Teamwise;
