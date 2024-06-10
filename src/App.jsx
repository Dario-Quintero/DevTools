import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ViewHome from "./views/ViewHome/ViewHome.jsx";
import ViewFrontend from "./views/ViewFrontend/ViewFrontend.jsx";
import ViewBackend from "./views/ViewBackend/ViewBackend.jsx";
import ViewExtensions from "./views/ViewExtensions/ViewExtensions.jsx";
import ViewCourses from "./views/ViewCourses/ViewCourses.jsx";
import ViewSearch from "./views/ViewSearch/ViewSearch.jsx";
import NoPage from "./Components/NoPage/NoPage.jsx";

function App() {
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-mode", "dark")
  }, []);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<ViewHome />} />
        <Route path="/front-end" element={<ViewFrontend />} />
        <Route path="/back-end" element={<ViewBackend />} />
        <Route path="/extensions" element={<ViewExtensions />} />
        <Route path="/courses" element={<ViewCourses />} />
        <Route path="/search" element={<ViewSearch />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
