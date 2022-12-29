import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./about";
import ChildLayout from "./childLayout";
import Home from "./home";
import NotFound from "./notFound";

export default function ChildRoute() {
  return (
    <div>
      <h1>Child</h1>

      <Routes>
        <Route path="/" element={<ChildLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
