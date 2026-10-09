
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Prelude from "../pages/Prelude/Prelude";
import Welcome from "../pages/Welcome/Welcome";
import Invitation from "../pages/Invitation/Invitation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prelude />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
