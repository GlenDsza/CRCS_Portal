import { HomeIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import { Home, Grid, Society, Charts } from "@/pages/dashboard";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <HomeModernIcon {...icon} />,
        name: "Societies",
        path: "/data",
        element: <Grid />,
      },
      {
        icon: <HomeModernIcon {...icon} />,
        name: "Society",
        path: "/society/:id",
        element: <Society />,
      },
      {
        icon: <HomeModernIcon {...icon} />,
        name: "Chart",
        path: "/chart/:title",
        element: <Charts/>,
      },
    ],
  },
];

export default routes;
