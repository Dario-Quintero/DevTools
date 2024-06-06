import { Route, Routes } from "react-router-dom";
import ViewHome from "./views/ViewHome/ViewHome.jsx";
import ViewFrontend from "./views/ViewFrontend/ViewFrontend.jsx";
import ViewBackend from "./views/ViewBackend/ViewBackend.jsx";
import NoPage from "./Components/NoPage/NoPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<ViewHome />}/>
        <Route path="/front-end" element={<ViewFrontend />} />
        <Route path="/back-end" element={<ViewBackend />} />
        <Route path="/extension" element={<ViewHome />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
