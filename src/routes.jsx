import App from "./App";
import Home from "./components/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Compositions from "./components/pages/Compositions";

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/compositions',
        element: <Compositions />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }
    ]
  }
]

export default routes;