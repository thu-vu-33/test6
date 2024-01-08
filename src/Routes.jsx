import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const InAppContent = React.lazy(() => import("pages/InAppContent"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const Cover = React.lazy(() => import("pages/Cover"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cover" element={<Cover />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/inappcontent" element={<InAppContent />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
