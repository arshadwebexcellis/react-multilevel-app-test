import * as React from "react";
import { Routes, Route, Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import About from "./about";
import ChildRoute from "./child/childRoute";
import Home from "./home";
import MainLayout from "./mainLayout";
import NotFound from "./notFound";

export default function App() {
  return (
    <div>
      <h1>Main APP</h1>

      <p>
        This example demonstrates some of the core features of React Router including nested <code>&lt;Route&gt;</code>
        s, <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a "*" route (aka "splat route") to render
        a "not found" page when someone visits an unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="child-app" element={<ChildRoute />}>
            <Route path="*" element={<ChildRoute />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
