import { BarChartWrapper } from ".";

export default {
  title: "Components/BarChartWrapper",
  component: BarChartWrapper,
};

const Template = (args) => <BarChartWrapper {...args} />;

export const Basic = Template.bind();
let data = [
  {
    timeframe: "May 2022",
    testAttended: 3,
    testConducted: 5,
  },
  {
    timeframe: "Jun 2022",
    testAttended: 2,
    testConducted: 4,
  },
  {
    timeframe: "Jul 2022",
    testAttended: 2,
    testConducted: 3,
  },
  {
    timeframe: "Aug 2022",
    testAttended: 0,
    testConducted: 2,
  },
  {
    timeframe: "Sep 2022",
    testAttended: 4,
    testConducted: 6,
  },
  {
    timeframe: "Oct 2022",
    testAttended: 4,
    testConducted: 5,
  },
];

Basic.args = {
  isResponsive: true,
  barChartData: {
    width: "100%",
    height: 300,
    dataPoints: data,
    maxBarSize: 40,
    barGap: 0,
    barCategoryGap: "35%",
  },
  cartesianGridData: { vertical: false, stroke: "#8f8f8f" },
  xAxisData: {
    dataKey: "timeframe",
    tick: {
      fill: "#404040",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
    },
    interval: 0,
  },
  yAxisData: {
    showYAxis: true,
    tick: {
      fill: "#404040",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
    },
  },
  tooltipData: {
    content: "JSX",
  },
  bars: [
    {
      dataKey: "testConducted",
      fill: "#8c69ff",
      radius: [6, 6, 0, 0],
    },
    {
      dataKey: "testAttended",
      fill: "#c4b1ff",
      radius: [6, 6, 0, 0],
    },
  ],
  referenceLineData: {
    y: 5,
    stroke: "#8f8f8f",
    strokeDasharray: "6 6",
    id: "test-refference",
  },
  noDataFallbackMessage: "Data unavailable",
  fallbackMessageClassName: "testFallbackClass",
};
