import { useEffect, useState } from "react";
import StartingScreen from "./pages/StartingScreen";
import ChoosingScreen from "./pages/ChoosingScreen";
import ShippingScreen from "./pages/ShippingScreen";
import "./App.css";
import { fetchFigureParts, fetchHarryPotterFigures } from "./services/figures";

const RANDOM_FIGURES_COUNT = 3;

function App() {
  const [displayedPage, setDisplayedPage] = useState(0);
  const [allMinifigures, setAllMinifigures] = useState([]);
  const [drawnMiniFigures, setDrawnMiniFigures] = useState([]);
  const [figureToShip, setFigureToShip] = useState(null);
  const [figureToShipParts, setFigureToShipParts] = useState([]);

  const randomizeFigures = () => {
    const drawnFigures = [];
    while (drawnFigures.length < RANDOM_FIGURES_COUNT) {
      const randomIdx = Math.floor(Math.random() * allMinifigures.length);
      if (!drawnFigures.includes(allMinifigures[randomIdx])) {
        drawnFigures.push(allMinifigures[randomIdx]);
      }
    }
    setDrawnMiniFigures(drawnFigures);
  };

  useEffect(() => {
    (async () => {
      const figures = await fetchHarryPotterFigures();
      setAllMinifigures(figures);
    })();
  }, []);

  useEffect(() => {
    if (allMinifigures.length) {
      randomizeFigures();
    }
  }, [displayedPage]);

  useEffect(() => {
    if (figureToShip?.set_num) {
      (async () => {
        const fetchedFigureParts = await fetchFigureParts(figureToShip.set_num);
        setFigureToShipParts(fetchedFigureParts);
      })();
    }
  }, [figureToShip]);

  return (
    <>
      {displayedPage === 0 && (
        <StartingScreen handlePageChange={setDisplayedPage} />
      )}
      {displayedPage === 1 && (
        <ChoosingScreen
          handlePageChange={setDisplayedPage}
          figures={drawnMiniFigures}
          handleSetFigureToShip={setFigureToShip}
        />
      )}
      {displayedPage === 2 && (
        <ShippingScreen
          handlePageChange={setDisplayedPage}
          figureToShip={figureToShip}
          figureToShipParts={figureToShipParts}
        />
      )}
    </>
  );
}

export default App;
