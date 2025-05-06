import React from 'react';
import './ActivityDashboard.css';
import { FaSearch, FaPlus, FaStar } from 'react-icons/fa';

const logs = [
  {
    date: '2023-10-01',
    activity: 'Planted Seeds',
    description: 'Planted tomato and cucumber seeds',
    rating: 5,
    status: 'Completed',
    user: '👨‍🌾',
    action: 'View',
  },
  {
    date: '2023-10-02',
    activity: 'Watering',
    description: 'Watered all vegetable beds',
    rating: 5,
    status: 'In Progress',
    user: '🧑‍🌾',
    action: 'Edit',
  },
  {
    date: '2023-10-03',
    activity: 'Fertilizing',
    description: 'Applied chemical fertilizer',
    rating: 5,
    status: 'Completed',
    user: '👨🏼‍🌾',
    action: 'Delete',
  },
  {
    date: '2023-10-04',
    activity: 'Weeding',
    description: 'Removed weeds from the garden',
    rating: 5,
    status: 'Pending',
    user: '👴',
    action: 'View',
  },
  {
    date: '2023-10-05',
    activity: 'Harvest',
    description: 'Harvested ripe tomatoes',
    rating: 5,
    status: 'Completed',
    user: '👮‍♂️',
    action: 'Edit',
  },
  {
    date: '2023-10-06',
    activity: 'Pest Control',
    description: 'Applied pesticide on crops',
    rating: 5,
    status: 'In Progress',
    user: '🧑🏻‍🌾',
    action: 'Delete',
  },
];

const ActivityDashboard = () => {
  return (
    <div className="activity-dashboard">
      <h2>New Activity Log</h2>
      <div className="form-section">
        <input type="text" placeholder="Planting, Inspection, Pesticide Application..." />
        <input type="date" />
        <input type="text" placeholder="Vegetable..." />
        <textarea placeholder="Write something..." />
        <button className="add-log-btn"><FaPlus /> Add Log</button>
      </div>

      <div className="filter-section">
        <div className="tags">
          <span className="tag">Vegetable</span>
          <span className="tag">All Activities</span>
        </div>
        <div className="search">
          <FaSearch />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <h3>Activity Logs</h3>
      <table className="logs-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Logged By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.date}</td>
              <td>{log.activity}</td>
              <td>{log.description}</td>
              <td>{[...Array(log.rating)].map((_, i) => <FaStar key={i} color="#f1c40f" />)}</td>
              <td><select defaultValue={log.status}>
                <option>Completed</option>
                <option>In Progress</option>
                <option>Pending</option>
              </select></td>
              <td>{log.user}</td>
              <td><button className={`action-btn ${log.action.toLowerCase()}`}>{log.action}</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="dashboard-footer">
        <p>Made with <span className="logo">Yisily</span></p>
      </footer>
    </div>
  );
};

export default ActivityDashboard;
