import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home/Home";
import MatchMaking from "./MatchMaking/MatchMaking";
import Not_Found from "./Home/Not_Found";
import GamePage from "./Game/GamePage";
import OneOnOne from "./Home/OneOnOne";

export default function BRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path={`/matchmaking`}
                    element={<MatchMaking />}
                />
                <Route
                    path={`/game`}
                    element={<GamePage />}
                />
                <Route
                    path={`/one`}
                    element={<OneOnOne />}
                />
                <Route path='*' element={<Not_Found />}
                />
            </Routes>
        </BrowserRouter >
    )
}