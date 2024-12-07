import { Route, Routes } from "react-router-dom";

import ViewHome from "@views/ViewHome/ViewHome.js";
import ViewFrontend from "@views/ViewFrontend/ViewFrontend.js";
import ViewBackend from "@views/ViewBackend/ViewBackend.js";
import ViewExtensions from "@views/ViewExtensions/ViewExtensions.js";
import ViewCourses from "@views/ViewCourses/ViewCourses.js";
import ViewSearch from "@views/ViewSearch/ViewSearch.js";
import NoPage from "@components/NoPage/NoPage.js";

import { ThemeProvider } from "providers/theme-provider";

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;
