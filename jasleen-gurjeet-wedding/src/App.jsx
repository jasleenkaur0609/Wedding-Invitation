// src/App.jsx

import { useState } from "react";
import OpeningScreen from "./components/opening/OpeningScreen";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <main>
      {!opened ? (
        <OpeningScreen
          onOpen={() => setOpened(true)}
        />
      ) : (
        <section className="after-opening">
          <h1>Jasleen &amp; Gurjeet</h1>
        </section>
      )}
    </main>
  );
}

export default App;