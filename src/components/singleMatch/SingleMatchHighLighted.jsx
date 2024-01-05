import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from "../../../public/data2.json";

const SingleMatchHighLighted = () => {
    const [matchData, setMatchData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setMatchData(data);
    }, []);

    // Function to handle the "Details" button click
    const handleDetailsClick = (matchId) => {
        // Navigate to the details route with the specific matchId
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
                <div>
                    <div className='grid grid-cols-4 gap-4 '>
                        {matchData.matches.map(match => (
                            <div key={match.matchId} className='bg-teal-100 justify-between rounded-md p-1 m-1'>
                                <div className='flex justify-between rounded-md '>
                                    <p>{`Type: ${match.type}`}</p>
                                    <p>{`Date: ${match.date}`}</p>
                                </div>
                                {match.teams.map(team => (
                                    <div key={team.country}>
                                        <div className='flex justify-between'>
                                            <p>{team.country}</p>
                                            {/* Manually calculating total score and total wickets */}
                                            <p>{`${calculateTeamTotal(team.battingScoreboard, team.bowlingScoreboard).totalScore}/${calculateTeamTotal(team.battingScoreboard, team.bowlingScoreboard).totalWickets}`}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-center">
                                    {/* Pass the matchId to the handleDetailsClick function */}
                                    <button onClick={() => handleDetailsClick(match.matchId)} className="btn btn-outline btn-success">Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading match data...</p>
            )}
        </div>
    );
};

export default SingleMatchHighLighted;
