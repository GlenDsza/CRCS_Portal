import randomColor from 'randomcolor';
import { chartsConfig } from '@/configs';

export const createLineChart = (chartData) => {

    const LineChart = {
        type: 'line',
        height: 400,
        series: [
            {
                data: Object.values(chartData),
            },
        ],
        options: {
            ...chartsConfig,
            colors: ['#fff'],
            stroke: {
                lineCap: 'round',
                width: 2
            },
            markers: {
                size: 5,
            },
            xaxis: {
                ...chartsConfig.xaxis,
                categories: Object.keys(chartData),
            },
        },
    };

    const LineChartData = {
        chart: LineChart,
    }

    return LineChartData;
};


export const createPieChart = (chartdata) => {
    const threshold = 5;
    const total = Object.values(chartdata).reduce((acc, value) => acc + value, 0);
    const filteredchartdata = Object.entries(chartdata).reduce((filtered, [key, value]) => {
        if (value >= threshold) {
            filtered[key] = value;
        } else {
            filtered['Others'] = (filtered['Others'] || 0) + value;
        }
        return filtered;
    }, {});

    const series = Object.values(filteredchartdata);
    const labels = Object.keys(filteredchartdata);

    const colors = randomColor({
        count: labels.length,
        hue: 'red',
        luminosity: 'bright',
    });

    const PieChart = {
        type: 'pie',
        height: 400,
        series,
        options: {
            legend: {
                show: true,
                fontSize: '15px',
                position: 'bottom',
                horizontalAlign: 'center',
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
                enabled: false,
            },
            labels: labels,
            colors,
        },
    };

    const PieChartData = {
            chart: PieChart,
        }

    return PieChartData;
};

export const createBarChart = (chartData) => {
  console.log(chartData);
  const barChart = {
    type: 'bar',
    height: 400,
    series: [
      {
        data: Object.values(chartData),
      },
    ],
    
    options: {
      ...chartsConfig,
      colors: '#fff',
      plotOptions: {
        bar: {
          columnWidth: 30,
          borderRadius: 5,
          horizontal: false,
        },
      },
            xaxis: {
        ...chartsConfig.xaxis,
        categories: Object.keys(chartData),
        labels: { style: { fontSize: 12, colors: 'white' } },
      },
    },
  };

  const BarChartData ={
        chart: barChart,
    }
    console.log(barChart)
  return BarChartData;
};

export const createHorBarChart = (chartData) => {
  const HorBarChart = {
    type: 'bar',
    height: 400,
    series: [
      {
        name: 'Month Count',
        data: Object.values(chartData),
      },
    ],
    options: {
      ...chartsConfig,
      colors: '#fff',
      plotOptions: {
        bar: {
          columnWidth: '20%',
          borderRadius: 5,
          horizontal: true,
        },
      },
      tooltip: {
        enabled: false,
      },
      xaxis: {
        ...chartsConfig.xaxis,
        labels: { style: { fontSize: 10, colors: 'white' } },
        categories: [
            Object.keys(chartData)
        ],
      },
      // annotations: {
      //   points: Object.keys(chartData).map((key) => ({
      //     x: chartData[key],
      //     y: key,
      //     marker: {
      //       size: 4,
      //       fillColor: '#fff',
      //       strokeColor: '#333',
      //       strokeWidth: 2,
      //     },
      //     label: {
      //       text: chartData[key].toString(),
      //       offsetY: 15,
      //       offsetX: 18,
      //       style: {
      //         fontSize: '12px',
      //         fontWeight: 'bold',
      //         color: '#333',
      //       },
      //     },
      //   })),
      // },
    },
  };

  const HorBarChartData = {
        chart: HorBarChart,
      }
  
  return HorBarChartData;
};
