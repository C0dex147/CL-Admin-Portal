import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    nba: 3490,
    mlb: 4300,
    nfl: 2100,
    nhl: 2500,
    pga: 1900,
  },
  {
    name: "Mon",
    nba: 2490,
    mlb: 3300,
    nfl: 1100,
    nhl: 1500,
    pga: 900,
  },
  {
    name: "Tues",
    nba: 2790,
    mlb: 3700,
    nfl: 2300,
    nhl: 2100,
    pga: 2000,
  },
  {
    name: "Wed",
    nba: 3090,
    mlb: 4100,
    nfl: 2800,
    nhl: 2000,
    pga: 1600,
  },
  {
    name: "Thurs",
    nba: 2190,
    mlb: 2600,
    nfl: 1800,
    nhl: 1300,
    pga: 1000,
  },
  {
    name: "Fri",
    nba: 3490,
    mlb: 4300,
    nfl: 2100,
    nhl: 2500,
    pga: 1900,
  },
  {
    name: "Sat",
    nba: 3690,
    mlb: 4500,
    nfl: 2600,
    nhl: 2900,
    pga: 2200,
  },
];

export const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Traffic Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="nba"
              stackId="1"
              stroke="#8884d8"
              fill="rgb(255, 187, 40)"
            />
            <Area
              type="monotone"
              dataKey="mlb"
              stackId="1"
              stroke="#82ca9d"
              fill="rgb(0, 136, 254)"
            />
            <Area
              type="monotone"
              dataKey="nfl"
              stackId="1"
              stroke="#ffc658"
              fill="rgb(0, 196, 159)"
            />
            <Area
              type="monotone"
              dataKey="nhl"
              stackId="1"
              stroke="#ffc658"
              fill="rgb(255, 128, 66"
            />
            <Area
              type="monotone"
              dataKey="pga"
              stackId="1"
              stroke="#e211d1"
              fill="rgb(254, 0, 178)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
