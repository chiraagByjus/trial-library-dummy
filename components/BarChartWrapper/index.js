import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ReferenceLine,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
import { BarChart } from "recharts/es6/chart/BarChart";
import { YAxis } from "recharts/es6/cartesian/YAxis";
import { XAxis } from "recharts/es6/cartesian/XAxis";
import { Bar } from "recharts/es6/cartesian/Bar";
import { Tooltip } from "recharts/es6/component/Tooltip";
import { CartesianGrid } from "recharts/es6/cartesian/CartesianGrid";
import { ReferenceLine } from "recharts/es6/cartesian/ReferenceLine";
import { ResponsiveContainer } from "recharts/es6/component/ResponsiveContainer";
import { FallbackMessage } from "../FallbackMessage";

export const BarChartWrapper = ({
  barChartData = {},
  cartesianGridData = {},
  referenceLineData = {},
  xAxisData = {},
  yAxisData = {},
  tooltipData = {},
  bars = [],
  isResponsive = true,
  noDataFallbackMessage = "Data unavailable",
  fallbackMessageClassName,
}) => {
  const {
    width: bcWidth,
    height: bcHeight,
    dataPoints: bcDataPoints,
    margin: bcMargin,
    barCategoryGap: bcBarCategoryGap,
    barGap: bcBarGap,
    barSize: bcBarSize,
    ...bcProps
  } = barChartData;

  const { strokeDasharray: cgStrokeDasharray, ...cgProps } = cartesianGridData;
  const { strokeDasharray: rlStrokeDasharray, ...rlProps } = referenceLineData;
  const { dataKey: xDataKey, ...xAxisProps } = xAxisData;
  const { dataKey: yDataKey, ...yAxisProps } = yAxisData;
  const {
    itemStyle: ttItemStyle,
    wrapperStyle: ttWrapperStyle,
    cursor: ttCursor = false,
    content: toottipContent,
    ...tooltipProps
  } = tooltipData;

  const Container = ({ children, width, height, dataTestid }) => {
    let content = children;
    if (isResponsive) {
      content = (
        <ResponsiveContainer
          width={width}
          height={height}
          data-testid={dataTestid}
        >
          {children}
        </ResponsiveContainer>
      );
    }
    return content;
  };

  if (Object.keys(xAxisData).length === 0) {
    return <FallbackMessage message="X Axis data is missing" />;
  }

  if (Object.keys(yAxisData).length === 0) {
    return <FallbackMessage message="Y Axis data is missing" />;
  }

  if (bcDataPoints.length === 0 || bars.length === 0) {
    return (
      <FallbackMessage
        className={fallbackMessageClassName}
        message={noDataFallbackMessage}
      />
    );
  }

  return (
    <Container
      width={bcWidth}
      height={bcHeight}
      dataTestid="custom-barchart-container-element"
    >
      <BarChart
        width={bcWidth}
        height={bcHeight}
        data={bcDataPoints}
        margin={bcMargin}
        barCategoryGap={bcBarCategoryGap}
        barGap={bcBarGap}
        data-testid="custom-barchart-element"
        {...bcProps}
      >
        {Object.keys(cartesianGridData).length !== 0 ? (
          <CartesianGrid strokeDasharray={cgStrokeDasharray} {...cgProps} />
        ) : null}
        {Object.keys(referenceLineData).length !== 0 ? (
          <ReferenceLine strokeDasharray={rlStrokeDasharray} {...rlProps} />
        ) : null}
        {Object.keys(xAxisData).length !== 0 ? (
          <XAxis dataKey={xDataKey} {...xAxisProps} />
        ) : null}
        {Object.keys(yAxisData).length !== 0 ? (
          <YAxis dataKey={yDataKey} {...yAxisProps} />
        ) : null}
        {Object.keys(tooltipData).length !== 0 ? (
          <Tooltip
            itemStyle={ttItemStyle}
            wrapperStyle={ttWrapperStyle}
            cursor={ttCursor}
            content={toottipContent}
            {...tooltipProps}
          />
        ) : null}
        {bars.map(({ dataKey, fill, radius, opacity }, index) => (
          <Bar
            key={`bar-${index}`}
            dataKey={dataKey}
            fill={fill}
            radius={radius}
            opacity={opacity}
          />
        ))}
      </BarChart>
    </Container>
  );
};
