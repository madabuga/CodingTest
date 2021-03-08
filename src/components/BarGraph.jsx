import React from 'react';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { scaleLinear, scaleBand } from '@visx/scale';


function BarGraph(props) {

    const data = props.numberOfPosts;
    console.log(props)

    const width = 800;
    const height = 500;
    const margin = { top: 20, bottom: 70, left: 20, right: 20 };

    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const x = d => d.month;
    const y = d => +d.numbers;

    const xScale = scaleBand({
        range: [0, xMax],
        round: true,
        domain: data.map(x),
        padding: 0.4,
    });
    const yScale = scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(y))],
    });

    const compose = (scale, accessor) => data => scale(accessor(data));
    const xPoint = compose(xScale, x);
    const yPoint = compose(yScale, y);

    return (
        <svg width={width} height={height}>
            {data.map((d, i) => {
                const barHeight = yMax - yPoint(d);
                return (
                    <Group key={`bar-${i}`} left={50} top={20}>
                        <AxisBottom scale={xScale} top={yMax} />
                        <AxisLeft scale={yScale} left={10} />
                        <Bar
                            x={xPoint(d)}
                            y={yMax - barHeight}
                            height={barHeight}
                            width={xScale.bandwidth()}
                            fill="black"
                        />
                    </Group>
                );
            })}
        </svg>
    );
}

export default BarGraph;