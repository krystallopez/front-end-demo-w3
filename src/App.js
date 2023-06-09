import React from "react";
import { About, Home, Greet, Me, Apprenticeship } from "./routes";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "apprenticeship",
        element: <Apprenticeship />,
      },
      {
        path: "me",
        element: <Me />,
      },
    ],
  },
  {
    path: "/greet/:name",
    element: <Greet />,
  },
]);

// how to set up using JSX
// const router2 = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="me" element={<Me />} />
//       <Route path="apprenticeship" element={<Apprenticeship />} />
//       <Route path="/greet/:name" element={<Greet />} />
//     </>
//   )
// );

function App() {
  return (
    <div className="mt-4 mx-auto h-75 w-75">
      <h1>{"Hello World"}</h1>
      {/* <RouterProvider router={router2} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="me" element={<Me />} />
          <Route path="apprenticeship" element={<Apprenticeship />} />
          <Route path="/greet/:name" element={<Greet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App };
