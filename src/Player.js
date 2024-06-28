import PlayerAPI from "./PlayerAPI";
import { Link, useParams } from "react-router-dom";

const Player = () => {
  const { number } = useParams();
  const player = PlayerAPI.get(parseInt(number, 10));
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }
  return (
    <div>
      <h1>
        {player.name} (#{player.number})
      </h1>
      <h2>Position: {player.position}</h2>
      <Link to="/roster">Back</Link>
    </div>
  );
};

export default Player;
