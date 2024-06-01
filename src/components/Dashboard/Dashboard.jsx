import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import geoData from "../../geodata.json";
import AlertCategoriesBarGraph from "../AlertCategoriesBarGraph";
import AlertsLineGraph from "../AlertsLineGraph";
import EventPieChart from "../EventPieChart";
import MapDistribution from "../MapDistribution";
import "./Dashboard.css";
import info from "../../assets/info.svg";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash-content">
        <h1 className="dash-title pulsate">Network Monitoring Dashboard</h1>
        <div className="tile tile-max">
          <div className="info">
            <h2>
              Alerts Over Time{" "}
              <span>(Number of alerts received over time)</span>{" "}
            </h2>
            <img data-tooltip-id="my-tooltip-1" src={info} alt="info" />
            <ReactTooltip
              id="my-tooltip-1"
              place="top"
              variant="dark"
              content="Helps in identifying patterns and trends in alert activity over time by showing the number of alerts recorded over a specific period."
              offset={0}
              style={{ maxWidth: "300px" }}
            />
          </div>
          <div className="chart-container">
            <AlertsLineGraph />
          </div>
        </div>
        <div className="tile tile-pie">
          <div className="info">
            <h2>
              Alerts by Category{" "}
              <span>(Number of alerts in each category)</span>
            </h2>
            <img data-tooltip-id="my-tooltip-2" src={info} alt="info" />
            <ReactTooltip
              id="my-tooltip-2"
              place="top"
              variant="dark"
              content="It is useful for understanding the most common types of alerts and focusing on the most prevalent security issues by displaying the number of alerts categorized by type. "
              offset={0}
              style={{ maxWidth: "300px" }}
            />
          </div>

          <div className="chart-container">
            <AlertCategoriesBarGraph />
          </div>
        </div>
        <div className="tile tile-2">
          <div className="info">
            <h2>
              Event Type Distribution{" "}
              <span>(Distribution of network events)</span>
            </h2>
            <img data-tooltip-id="my-tooltip-3" src={info} alt="info" />
            <ReactTooltip
              id="my-tooltip-3"
              place="top"
              variant="dark"
              content="It helps in assessing the diversity of event types and recognizing which event types are most frequent by illustrating the distribution of various event types recorded."
              offset={0}
              style={{ maxWidth: "300px" }}
            />
          </div>
          <div className="chart-container">
            <EventPieChart />
          </div>
        </div>
        <div className="tile tile-max">
          <div className="info">
            <h2>
              Geographical Distribution
              <span>
                (Geographical Distribution of the IP addresses triggering the
                alerts)
              </span>
            </h2>
            <img data-tooltip-id="my-tooltip-4" src={info} alt="info" />
            <ReactTooltip
              id="my-tooltip-4"
              place="top"
              variant="dark"
              content="This map highlights the geographical locations where alerts were triggered. It is helpful for visualizing the source and spread of alerts across different regions, enabling targeted response and resource allocation."
              offset={0}
              style={{ maxWidth: "300px" }}
            />
          </div>
          <div className="chart-container">
            <MapDistribution alertData={geoData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
