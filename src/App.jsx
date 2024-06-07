import { Route, Routes } from "react-router-dom";
import ViewFrontend from "./views/ViewFrontend/ViewFrontend.jsx";
import ViewBackend from "./views/ViewBackend/ViewBackend.jsx";
import ViewExtensions from "./views/ViewExtensions/ViewExtensions.jsx"
import ViewCourses from "./views/ViewCourses/ViewCourses.jsx";
import NoPage from "./components/NoPage/NoPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<ViewCourses />}/>
        <Route path="/front-end" element={<ViewFrontend />} />
        <Route path="/back-end" element={<ViewBackend />} />
        <Route path="/extensions" element={<ViewExtensions />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
