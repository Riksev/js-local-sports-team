import { Routes, Route } from "react-router-dom";
import Roster from "./Roster";
import Schedule from "./Schedule";
import Home from "./Home";

const Main = () => (
  <main>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/roster/*" element={<Roster />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  </main>
);

export default Main;
