import Branch from "./pages/Branch";
import FrontPage from "./pages/FrontPage";
import { Routes, Route } from "react-router-dom";


function App() {



  return (
    <div>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Gren" element={<Branch />} />
      </Routes>
    </div >
  );
}

export default App;
