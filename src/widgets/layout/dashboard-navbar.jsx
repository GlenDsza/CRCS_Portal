import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
} from "@/context";
import { useState } from "react";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const [menuOpen, setMenuOpen] = useState(false);

  const navList = (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-blue-gray-500"
      >
        <Link
          to="/dashboard/home"
          className="flex items-center transition-colors hover:text-blue-500"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-blue-gray-500"
      >
        <Link
          to="/dashboard/data"
          className="flex items-center transition-colors hover:text-blue-500"
        >
          Reg. Societies
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="group relative z-50 p-1 font-medium text-blue-gray-500"
      >
        <a
          onMouseEnter={() => {
            setMenuOpen(true);
          }}
          onMouseLeave={() => {
            setMenuOpen(false);
          }}
          href="#"
          className="flex items-center transition-colors hover:text-blue-500"
        >
          Forms &nbsp;{" "}
          <ChevronDownIcon
            strokeWidth={20}
            className={`inline h-3 w-3 transition-transform ${
              menuOpen ? "rotate-180" : ""
            }`}
          />
        </a>

        <ul className="absolute z-50 mr-4  hidden w-40 rounded-lg bg-white shadow-lg group-hover:block">
          <li>
            <a
              href="#"
              className="text-xxs block px-3 py-2 text-blue-gray-500 hover:bg-blue-gray-100"
            >
              Form I
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-xxs text-blue-gray-500 hover:bg-blue-gray-100"
            >
              Form II
            </a>
          </li>
        </ul>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-blue-gray-500"
      >
        <a
          href="#"
          className="flex items-center transition-colors hover:text-blue-500"
        >
          Application
        </a>
      </Typography>
    </ul>
  );
  return (
    <Navbar
      color={"white"}
      className={`"sticky shadow-blue-gray-500/5" top-4 z-40 rounded-xl px-2 py-3 shadow-md transition-all sm:px-4 md:px-6`}
      blurred={true}
    >
      <div className="flex">
        <div className="mr-3">
          <Avatar
            src="/img/favicon-32x32.png"
            width="30px"
            height="30px"
            alt="avatar"
            variant="rounded"
          />
        </div>

        <div className="w-100 flex flex-grow flex-row items-center justify-between gap-6">
          <div className="capitalize">
            <Typography
              variant="h5"
              className="text-xs sm:text-sm md:text-xl"
              color="blue-gray"
            >
              MULTI-STATE CO-OP. SOCIETIES
            </Typography>
            <Typography
              variant="h6"
              className="text-xs text-blue-gray-500 md:text-lg"
            >
              Ministry of Cooperation, Govt. of India
            </Typography>
            {/* <Breadcrumbs className={`mt-1 bg-transparent p-0 transition-all`}>
              <Link to={`/${layout}`}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
                >
                  {layout}
                </Typography>
              </Link>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {page}
              </Typography>
            </Breadcrumbs> */}
          </div>

          <div className="flex items-center">
            {/* <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Type here" />
          </div> */}

            <div className="hidden lg:block">{navList}</div>

            {/* <Link to="/dashboard/home">
              <Button
                variant="text"
                color="blue-gray"
                className="hidden items-center gap-1 px-4 xl:flex"
              >
                <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                Sign In
              </Button>
              <IconButton
                variant="text"
                color="blue-gray"
                className="grid xl:hidden"
              >
                <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
              </IconButton>
            </Link> */}
            <IconButton
              variant="text"
              className="ml-5 hidden md:block"
              color="blue-gray"
              onClick={() => null}
            >
              <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
            <IconButton
              variant="text"
              color="blue-gray"
              className="grid lg:hidden"
              onClick={() => setOpenConfigurator(dispatch, true)}
            >
              <Bars3Icon
                strokeWidth={3}
                className="h-6 w-6 text-blue-gray-500"
              />
            </IconButton>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
