import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import data from "../data.json";
import { useState } from "react";
import { useEffect } from "react";

const AlertCategoriesBarGraph = () => {
  const [barGraphData, setBarGraphData] = useState([]);

  useEffect(() => {
    const alertCategories = data.reduce((acc, alert) => {
      if (alert.alert && alert.alert.category) {
        const category = alert.alert.category;
        acc[category] = (acc[category] || 0) + 1;
      }
      return acc;
    }, {});

    const chartData = Object.keys(alertCategories).map((category) => ({
      category,
      count: alertCategories[category],
    }));

    setBarGraphData(chartData);
  }, []);

  return (
    <ResponsiveContainer width={400} height={300}>
      <BarChart
        data={barGraphData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          stroke="#ccc"
          interval={0}
          fontSize={12}
          height={60}
          angle={-25}
          textAnchor="end"
          dataKey="category"
        />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#e67e22" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AlertCategoriesBarGraph;
