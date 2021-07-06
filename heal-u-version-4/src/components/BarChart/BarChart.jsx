
import { scaleBand, scaleLinear, max, format } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import './BarChart.css';

import { Card, Container } from 'react-bootstrap';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const xAxisLabelOffset = 50;

const BarChart = () => {
    const data = useData();
    console.log(data);

    if (!data) {
        return <pre>Loading...</pre>;
    }

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const yValue = d => d.Category;
    const xValue = d => d.Quantity;

    const siFormat = format('.2s');
    const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

    const yScale = scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .paddingInner(0.15);

    const xScale = scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, innerWidth]);

    return (
        <Container id="graph-container">
            <Card id="graph-card">
                <Card.Title id="graph-title">Emotion versus Relative Fulfillment</Card.Title>
                    <svg width={width} height={height}>
                        <g transform={`translate(${margin.left},${margin.top})`}>
                            <AxisBottom
                            xScale={xScale}
                            innerHeight={innerHeight}
                            tickFormat={xAxisTickFormat}
                            />
                            <AxisLeft yScale={yScale} />
                            <text
                            className="axis-label"
                            x={innerWidth / 2}
                            y={innerHeight + xAxisLabelOffset}
                            textAnchor="middle"
                            >
                            
                            </text>
                            <Marks
                            data={data}
                            xScale={xScale}
                            yScale={yScale}
                            xValue={xValue}
                            yValue={yValue}
                            tooltipFormat={xAxisTickFormat}
                            />
                        </g>
                    </svg>
                </Card>
        </Container>
        
        
    );
};
export default BarChart;

