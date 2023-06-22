import { React, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
} from "@/context";

export function Configurator() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openConfigurator } =
    controller;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <aside
      className={`fixed top-0 right-0 z-50 h-screen w-80 bg-white px-2.5 shadow-lg transition-transform duration-300 ${openConfigurator ? "translate-x-0" : "translate-x-96"
        }`}
    >
      <div className="flex items-start justify-between  pt-4">
        <div className="flex items-center">
          <img src="/img/sideicon.png" style={{ width: '80px', height: 'auto' }} alt="Logo" />
          <Typography variant="h5" className="ml-5" color="blue-gray">
            MSCS
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => setOpenConfigurator(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
        </IconButton>
      </div>
      <hr className="border-b-2 border-blue-gray-400 my-4" />
      <div className="flex-grow">
        <ul className="py-2">
          <li className="px-4 py-2 hover:bg-gray-200">
            <Typography
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
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
          <Typography
              variant="small"
              color="blue-gray"
              className="p-1 font-medium text-blue-gray-500"
            >
              <Link
                to="/dashboard/data"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                Reg. Socities
              </Link>
            </Typography>
          </li>
          <li
            className="px-4 py-2 flex justify-between items-center hover:bg-gray-200 cursor-pointer"
            onClick={handleDropdownToggle}
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="p-1 font-medium text-blue-gray-500"
            >
              <Link
                to="/"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                Forms
              </Link>
            </Typography>
            <ChevronDownIcon
              className={`h-5 w-5 ${isDropdownOpen ? "transform rotate-180" : ""}`}
            />
          </li>
          {isDropdownOpen && (
            <ul className="pl-8">
              <li className="py-2 hover:bg-gray-100">
              <Typography
              variant="small"
              color="blue-gray"
              className="p-1 font-medium text-blue-gray-500"
            >
              <Link
                to="/"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                Form I
              </Link>
            </Typography>
              </li>
              <li className="py-2 hover:bg-gray-100">
              <Typography
              variant="small"
              color="blue-gray"
              className="p-1 font-medium text-blue-gray-500"
            >
              <Link
                to="/"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                Form II
              </Link>
            </Typography>
              </li>
            </ul>
          )}
          <li className="px-4 py-2 hover:bg-gray-200">
          <Typography
              variant="small"
              color="blue-gray"
              className="p-1 font-medium text-blue-gray-500"
            >
              <a
                href="https://github.com/GlenDsza/CRCS_Portal"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                View source-code
              </a>
            </Typography>
          </li>
        </ul>
      </div>

    </aside>
  );
}

Configurator.displayName = "/src/widgets/layout/configurator.jsx";

export default Configurator;
