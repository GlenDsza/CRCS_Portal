import {
    Card,
    CardBody,
    Radio,
} from "@material-tailwind/react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS
import Chart from "react-apexcharts";
import React, { useState } from "react";
import {
    regiYearCount,
    sectoralCount,
    stateCount,
    monthCount,
} from "@/data/og-data";
import { useParams } from "react-router-dom";
import { createLineChart, createPieChart, createBarChart, createHorBarChart } from '@/data/chartFunctions';


export function Charts() {
    
    const params = useParams();
    const title = params.title;
    var defaultChartType,chartData, chartVar, chartColor;
    
    switch (title) {
        case 'year':
            defaultChartType = 'line';
            chartData = regiYearCount;
            chartColor="#60b664"
            break;
        case 'state':
            defaultChartType = 'pie';
            chartData = stateCount;
            chartColor = "#dc2366";
            break;
        case 'sector':
            defaultChartType = 'bar';
            chartData = sectoralCount;
            chartColor = "#3ca0f2";
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
            chartVar.chart.options.xaxis.categories = Object.keys(chartData);
            break;
        case 'hBar':
            chartVar = createHorBarChart(chartData);
            break;            
    }
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
                        <Chart {...chartVar.chart } />
                    </CardBody>
                </Card>
                <Card className={chartType == 'hBar' ? "block" : "hidden"}>
                    <CardBody style={{backgroundColor: chartType=='pie'?'white':chartColor, borderRadius: 10}} className="p-5" variant="gradient">
                        <Chart {...chartVar.chart} />
                    </CardBody>
                </Card>
            </div>
            <div className=" mt-3 mb-12 flex gap-10 justify-center ">
                <Radio
                    id="line"
                    name="type"
                    label="Line Chart"
                    ripple={true}
                    onChange={()=>{}}
                    onClick={()=>{setChartType('line')}}
                    checked = {chartType=='line'?true:false}
                />
                
                {title != 'year' ? <>
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
                /></> : <></>}
                
            </div>
        </div>
    );

}

Charts.displayName = "/src/dashboard/charts.jsx";

export default Charts;
