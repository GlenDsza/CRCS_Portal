import {
  UserPlusIcon,
  NewspaperIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import { data, regiYearCount, sectoralCount, stateCount } from "./og-data";

var diffChangeInYearPer =
  ((regiYearCount["2022"] - regiYearCount["2021"]) / regiYearCount["2021"]) * 100;
var totalTillPrevYear = data.length - regiYearCount["2022"];

var highestValue = -Infinity;
var activeSector = "",
  activeState = "";

for (var key in sectoralCount) {
  if (sectoralCount.hasOwnProperty(key)) {
    if (sectoralCount[key] > highestValue) {
      highestValue = sectoralCount[key];
      activeSector = key;
    }
  }
}

highestValue = -Infinity;
for (var key in stateCount) {
  if (stateCount.hasOwnProperty(key)) {
    if (stateCount[key] > highestValue) {
      highestValue = stateCount[key];
      activeState = key;
    }
  }
}

export const statisticsCardsData = [
  {
    color: "blue",
    icon: HomeModernIcon,
    title: "Total Reg. Societies",
    value: data.length,
    footer: {
      value: totalTillPrevYear,
      label: " societies were registered till previous year",
    },
  },
  {
    color: "pink",
    icon: ArrowTrendingUpIcon,
    title: `${activeSector} Sector`,
    value: sectoralCount[`${activeSector}`],
    footer: {
      value: activeSector,
      label: "sector with most no. of registered societies",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Registrations in 2022",
    value: regiYearCount["2022"],
    footer: {
      color: diffChangeInYearPer >= 0 ? "text-green-500" : "text-red-500",
      value:
        diffChangeInYearPer >= 0
          ? `${diffChangeInYearPer.toFixed(0)}%`
          : `${diffChangeInYearPer.toFixed(0)}%`,
      label: ` increase in registrations than last year`,
    },
  },
  {
    color: "green",
    icon: NewspaperIcon,
    title: `${
      activeState.charAt(0) + activeState.slice(1).toLowerCase()
    } State`,
    value: stateCount[`${activeState}`],
    footer: {
      value: activeState.charAt(0) + activeState.slice(1).toLowerCase(),
      label: "state with most no. of registered societies",
    },
  },
];

export default statisticsCardsData;
