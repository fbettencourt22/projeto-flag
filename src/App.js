import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Watchlist } from "./components/Watchlist/Watchlist";
import { Watched } from "./components/Watched/Watched";
import { Add } from "./components/Add/Add";
import { GlobalProvider } from "./components/context/GlobalState";
import "./App.css";
import { Home } from "./components/HomePage/Home";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
          <Route path="/watched" element={<Watched />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
