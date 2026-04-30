import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import CardPage from "../pages/cartao/page";
import ThankYouPage from "../pages/agradecimento/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cartao",
    element: <CardPage />,
  },
  {
    path: "/agradecimento",
    element: <ThankYouPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
