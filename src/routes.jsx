import App from "./App";
import Home from "./components/Home";
import About from "./components/pages/About";
import Media from "./components/pages/media/Media";
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
        path: '/media',
        element: <Media />,
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