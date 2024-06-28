import { Routes, Route } from "react-router-dom";
import Player from "./Player";
import FullRoster from "./FullRoster";

const Roster = () => (
  <div>
    <h2>This is a roster page</h2>
    <Routes>
      <Route exact path="/" element={<FullRoster />} />
      <Route path=":number" element={<Player />} />
    </Routes>
  </div>
);

export default Roster;
