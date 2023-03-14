import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense, lazy } from "react";
import "./index.css";
import Loader from "./components/Loader.jsx";

const LazyLayout = lazy(() => import("./layout/Layout"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <LazyLayout />
    </Suspense>
  </React.StrictMode>
);
