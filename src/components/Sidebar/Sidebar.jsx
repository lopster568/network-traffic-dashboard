import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Dashboard</h1>
      <div className="profile">
        <img
          src="https://randomuser.me/api/portraits/men/34.jpg"
          alt="Profile"
        />
        <h3>Alex Hurley</h3>
        <p>
          As a Network Security Engineer, Alex Hurley plays a crucial role in
          safeguarding our organization's network infrastructure against threats
          and vulnerabilities by monitoring the network for alerts and
          identifying any malicious activities.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
