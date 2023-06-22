import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Radio,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS
import Chart from "react-apexcharts";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
    regiYearCount,
    sectoralCount,
    stateCount,
    monthCount,
} from "@/data/og-data";
import { useNavigate, useParams } from "react-router-dom";
import { StatisticsChart } from "@/widgets/charts";
import { statisticsCardsData, statisticsChartsData } from "@/data";
import { createLineChart, createPieChart, createBarChart, createHorBarChart } from '@/data/chartFunctions';


export function Charts() {
    

    const params = useParams();
    const title = params.title;
    var defaultChartType,chartData, chartVar, chartColor;
    
     
    switch (title) {
        case 'year':
            defaultChartType = 'line';
            chartData = regiYearCount;
            chartColor="#3ca0f2"
            break;
        case 'state':
            defaultChartType = 'pie';
            chartData = stateCount;
            chartColor = "#dc2366";
            break;
        case 'sector':
            defaultChartType = 'bar';
            chartData = sectoralCount;
            chartColor = "#60b664";
            break;
        case 'month':
            defaultChartType = 'hBar';
            chartData = monthCount;
            chartColor = "#fd9913";
            break;            
    }
    const [chartType, setChartType] = useState(defaultChartType);
    
    switch (chartType) {
        case 'line':
            chartVar = createLineChart(chartData);
            break;
        case 'pie':
            chartVar = createPieChart(chartData);
            break;
        case 'bar':
            chartVar = createBarChart(chartData);
            break;
        case 'hBar':
            chartVar = createHorBarChart(chartData);
            break;            
    }
   console.log(chartVar);
    return (
        <div className="z-0 mt-5">
            <div className="mb-18 h-100 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-1">
               
                <Card className={chartType == 'line' ? "block" : "hidden"}>
                    <CardBody style={{backgroundColor: chartType=='pie'?'white':chartColor, borderRadius: 10}} className="p-5" variant="gradient">
                        <Chart {...chartVar.chart} />
                    </CardBody>
                </Card>
                <Card className={chartType == 'pie' ? "block" : "hidden"}>
                    <CardBody style={{backgroundColor: chartType=='pie'?'white':chartColor, borderRadius: 10}} className="p-5" variant="gradient">
                        <Chart {...chartVar.chart} />
                    </CardBody>
                </Card>
                <Card className={chartType == 'bar' ? "block" : "hidden"}>
                    <CardBody style={{backgroundColor: chartType=='pie'?'white':chartColor, borderRadius: 10}} className=" p-5" variant="gradient">
                        <Chart {...chartVar.chart} />
                    </CardBody>
                </Card>
                <Card className={chartType == 'hBar' ? "block" : "hidden"}>
                    <CardBody style={{backgroundColor: chartType=='pie'?'white':chartColor, borderRadius: 10}} className="p-5" variant="gradient">
                        <Chart {...chartVar.chart} />
                    </CardBody>
                </Card>
            </div>
            {/* <div className=" mt-3 mb-12 flex gap-10 justify-center ">
                <Radio
                    id="line"
                    name="type"
                    label="Line Chart"
                    ripple={true}
                    onClick={()=>setChartType('line')}
                    checked = {chartType=='line'?true:false}
                />
                <Radio
                    id="pie"
                    name="type"
                    label="Pie Chart"
                    ripple={true}
                    onClick={()=>setChartType('pie')}
                    checked = {chartType=='pie'?true:false}
                />
                <Radio
                    id="bar"
                    name="type"
                    label="Bar Chart"
                    ripple={true}
                    onClick={()=>setChartType('bar')}
                    checked = {chartType=='bar'?true:false}
                />
                <Radio
                    id="hBar"
                    name="type"
                    label="Horizontal Bar Chart"
                    ripple={true}
                    onClick={()=>setChartType('hBar')}
                    checked = {chartType=='hBar'?true:false}
                />
            </div> */}
        </div>
    );

}

Charts.displayName = "/src/dashboard/charts.jsx";

export default Charts;
