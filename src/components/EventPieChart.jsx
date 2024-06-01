import data from "../data.json";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const EventPieChart = () => {
  const eventCounts = data.reduce((acc, alert) => {
    const eventType = alert.event_type;
    acc[eventType] = (acc[eventType] || 0) + 1;
    return acc;
  }, {});

  const eventData = Object.keys(eventCounts).map((eventType) => ({
    eventType,
    count: eventCounts[eventType],
  }));

  console.log(eventData);

  const COLORS = ["#54bebe", "#d7658b", "#e1a692"];

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={eventData}
        dataKey="count"
        nameKey="eventType"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {eventData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default EventPieChart;
