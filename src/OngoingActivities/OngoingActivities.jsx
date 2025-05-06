import React from 'react';
import './OngoingActivities.css';
import { FaPlus, FaPaperclip, FaComment } from 'react-icons/fa';

const OngoingActivities = () => {
  return (
    <div className="dashboard">
      <h2 className="section-title">Ongoing Activities</h2>

      {/* Top Metrics */}
      <div className="metrics-grid">
        <MetricCard title="Harvesting progress" value="120" trend="+85%" />
        <MetricCard title="Planting seeds" value="50" trend="+45%" />
        <MetricCard title="Watering schedule" value="30" trend="-60%" down />
      </div>

      {/* Tasks */}
      <h3 className="subsection-title">Current Tasks & Activities</h3>
      <div className="tasks-grid">
        {taskData.map((task, i) => (
          <TaskCard key={i} {...task} />
        ))}
      </div>

      {/* Reports */}
      <div className="reports-header">
        <div>
          <h3 className="subsection-title">Logs & Reports</h3>
          <p className="subtitle">Manage Logs & Reports</p>
        </div>
        <button className="create-btn"><FaPlus /> Create New</button>
      </div>

      <div className="metrics-grid">
        <MetricCard title="Crop Yield" value="1350" trend="-87%" down />
        <MetricCard title="Water Usage" value="5000" trend="-65%" down />
        <MetricCard title="Fertilizer Efficiency" value="300" trend="+92%" />
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, trend, down }) => (
  <div className="metric-card">
    <p className="metric-title">{title}</p>
    <div className="metric-info">
      <span className="metric-value">{value}</span>
      <span className={`metric-trend ${down ? 'down' : 'up'}`}>{trend}</span>
    </div>
    <div className="chart-placeholder"></div>
  </div>
);

const TaskCard = ({ title, tags, comments, attachments, people }) => (
  <div className="task-card">
    <h4 className="task-title">{title}</h4>
    <div className="task-tags">
      {tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
    </div>
    <div className="task-meta">
      <div className="task-icons">
        <span><FaComment /> {comments}</span>
        <span><FaPaperclip /> {attachments}</span>
      </div>
      <div className="task-avatars">
        {people.map((p, i) => <span key={i} className="avatar">{p}</span>)}
      </div>
    </div>
  </div>
);

const taskData = [
  {
    title: 'Water the tomato plants',
    tags: ['urgent', 'morning'],
    comments: 3,
    attachments: 1,
    people: ['👨‍🌾', '👩‍🌾'],
  },
  {
    title: 'Harvest ripe strawberries',
    tags: ['afternoon', 'priority'],
    comments: 3,
    attachments: 1,
    people: ['👨‍🌾', '👩‍🌾', '👨‍🌾'],
  },
  {
    title: 'Check soil moisture levels',
    tags: ['evening', 'routine'],
    comments: 3,
    attachments: 1,
    people: ['👩‍🌾', '👩‍🌾'],
  },
  {
    title: 'Repair the irrigation system',
    tags: ['weekend', 'critical'],
    comments: 3,
    attachments: 1,
    people: ['👨‍🌾', '👩‍🌾', '👩‍🌾'],
  },
];

export default OngoingActivities;
