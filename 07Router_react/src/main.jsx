import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github.jsx";
import { githubInfoLoader } from "./utils/githubInfoLoader";
import Layout from "./Layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// method 1
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>,
  ),
);

// ln 49: the router takes data from githubinfoloader and passes it to github component already so when it loads the data is already there
// calling api directly in component will lead to delay in fetching at rendering data, so using loader is better and optimized approach

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
