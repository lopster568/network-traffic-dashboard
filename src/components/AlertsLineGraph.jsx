import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "../data.json";
import { useEffect } from "react";
import { useState } from "react";

const AlertsLineGraph = () => {
  const [alertsChartData, setAlertsChartData] = useState([]);

  useEffect(() => {
    const alertsOverTime = data.reduce((acc, alert) => {
      const time = new Date(alert.timestamp).toLocaleTimeString();
      acc[time] = (acc[time] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.entries(alertsOverTime).map(([time, alerts]) => ({
      time,
      alerts,
    }));

    setAlertsChartData(chartData);
  }, []);

  return (
    <>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart data={alertsChartData}>
          <XAxis stroke="#ccc" height={80} angle={-55} textAnchor="end" dataKey={"time"} />
          <YAxis stroke="#ccc" dataKey={"alerts"} />
          <Tooltip />
          <Legend margin={{ top: 5 }} />
          <Line type="monotone" dataKey="alerts" stroke="#e74c3c" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default AlertsLineGraph;
