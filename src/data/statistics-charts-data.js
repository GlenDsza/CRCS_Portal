import { chartsConfig } from "@/configs";
import {
  regiYearCount,
  sectoralCount,
  stateCount,
  monthCount,
} from "./og-data";
import randomColor from "randomcolor";
const yearCountChart = {
  type: "line",
  height: 280,
  series: [
    {
      name: "Registration Year",
      data: [
        regiYearCount[16],
        regiYearCount[17],
        regiYearCount[18],
        regiYearCount[19],
        regiYearCount[20],
        regiYearCount[21],
        regiYearCount[22],
      ],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#fff"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    },
  },
};

const threshold = 5; // Threshold value to group smaller values under "Others"
const total = Object.values(stateCount).reduce((acc, value) => acc + value, 0);
const filteredStateCount = Object.entries(stateCount).reduce(
  (filtered, [key, value]) => {
    if (value >= threshold) {
      filtered[key] = value;
    } else {
      filtered["Others"] = (filtered["Others"] || 0) + value;
    }
    return filtered;
  },
  {}
);
const series = Object.values(filteredStateCount);
const labels = Object.keys(filteredStateCount);

const colors = randomColor({
  count: labels.length,
  hue: "red",
  luminosity: "bright",
});

const stateChart = {
  type: "pie",
  height: 325,
  series,
  options: {
    legend: {
      show: true,
      fontSize: "8px",
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      itemMargin: {
        horizontal: 5,
        vertical: 0.5,
      },
    },
    plotOptions: {
      pie: {
        customScale: 1.05,
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels (percentage values)
    },
    labels,
    colors,
  },
};

const sectoralCountChart = {
  type: "bar",
  height: 280,
  series: [
    {
      name: "Sectoral Count",
      data: [
        sectoralCount.Agro,
        sectoralCount.Bank,
        sectoralCount.Construction,
        sectoralCount.Credit,
        sectoralCount.Dairy,
        sectoralCount.Federation,
        sectoralCount.Fisheries,
        sectoralCount.Health,
        sectoralCount.Housing,
        sectoralCount.Marketing,
        sectoralCount.Textile,
        sectoralCount.Others,
      ],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#fff",
    plotOptions: {
      bar: {
        offsetY: -100,
        columnWidth: "20%",
        borderRadius: 2,
        // horizontal: true,
      },
    },

    tooltip: {
      enabled: false,
    },

    xaxis: {
      ...chartsConfig.xaxis,
      labels: { style: { fontSize: 10, colors: "white" } },
      categories: [
        "Agro",
        "Bank",
        "Construction",
        "Credit",
        "Dairy",
        "Federation",
        "Fisheries",
        "Health",
        "Housing",
        "Marketing",
        "Textile",
        "Others",
      ],
    },
    annotations: {
      points: Object.keys(sectoralCount).map((key) => ({
        x: key,
        y: sectoralCount[key],
        marker: {
          size: 4,
          fillColor: "#fff",
          strokeColor: "#333",
          strokeWidth: 2,
        },
        label: {
          text: sectoralCount[key].toString(),
          offsetY: -2,
          style: {
            fontSize: "12px",
            fontWeight: "bold",
            color: "#333",
          },
        },
      })),
    },
  },
};

const monthCountChart = {
  type: "bar",
  height: 280,
  series: [
    {
      name: "Month Count",
      data: [
        monthCount.January,
        monthCount.Febuary,
        monthCount.March,
        monthCount.April,
        monthCount.May,
        monthCount.June,
        monthCount.July,
        monthCount.August,
        monthCount.September,
        monthCount.October,
        monthCount.November,
        monthCount.December,
      ],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#fff",
    plotOptions: {
      bar: {
        offsetY: -100,
        columnWidth: "20%",
        borderRadius: 5,
        horizontal: true,
      },
    },

    tooltip: {
      enabled: false,
    },

    xaxis: {
      ...chartsConfig.xaxis,
      labels: { style: { fontSize: 10, colors: "white" } },
      categories: [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    annotations: {
      points: Object.keys(monthCount).map((key) => ({
        x: monthCount[key],
        y: key,
        marker: {
          size: 4,
          fillColor: "#fff",
          strokeColor: "#333",
          strokeWidth: 2,
        },
        label: {
          text: monthCount[key].toString(),
          offsetY: 15,
          offsetX: 18,
          style: {
            fontSize: "12px",
            fontWeight: "bold",
            color: "#333",
          },
        },
      })),
    },
  },
};

export const statisticsChartsData = [
  {
    color: "blue",
    title: "Year-wise Distribution",
    description: "No. of societies registered in a particular year",
    footer: "Last updated on DD-MM-YYYY",
    chart: yearCountChart,
  },
  {
    color: "white",
    title: "State-wise Distribution",
    description: "Number of Societies registered in each state",
    footer: "Last updated on DD-MM-YYYY",
    chart: stateChart,
  },
  {
    color: "green",
    title: "Sector-wise Distribution",
    description: "No. of societies registered under particular sector",
    footer: "Last updated on DD-MM-YYYY",
    chart: sectoralCountChart,
  },
  {
    color: "orange",
    title: "Month-wise Distribution (2022)",
    description: "No. of societies registered per month last Year",
    footer: "Last updated on DD-MM-YYYY",
    chart: monthCountChart,
  },
];

export default statisticsChartsData;
