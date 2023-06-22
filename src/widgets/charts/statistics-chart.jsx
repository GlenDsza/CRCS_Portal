import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  ArrowsPointingOutIcon
} from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";

export function StatisticsChart({ color, chart, title, description, footer }) {
  var tempTitle;
  switch (title) {
    case 'Year-wise Distribution':
      tempTitle = 'year';
      break;
    case 'State-wise Distribution':
      tempTitle = 'state';
      break;
      case 'Sector-wise Distribution':
      tempTitle = 'sector';
      break;
      case 'Month-wise Distribution (2022)':
      tempTitle = 'month';
      break;
  }
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader variant="gradient" color={color}>
        <Chart {...chart} />
      </CardHeader>
      <CardBody className="p-6">
        <div>
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        </div>
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className=" flex justify-between border-t border-blue-gray-50 px-6 py-2">
          <Typography variant="small" className="font-normal text-blue-gray-600 my-auto">
            {footer}
        </Typography>
        <Button className="flex align-middle" onClick={()=>{navigate(`/dashboard/chart/${tempTitle}`)}} variant="gradient
        " color={color == "white" ? "pink" : color}>Open  <ArrowsPointingOutIcon className="ml-3" width={20} height={20}></ArrowsPointingOutIcon></Button>
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsChart.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsChart.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  chart: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
