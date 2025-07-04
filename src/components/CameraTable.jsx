import React from "react";
import { updateStatus } from "../utils/api";
import "./CameraTable.css";
import Cloud from "../assets/Cloud.svg";
import Device from "../assets/Device.svg";
import Block from "../assets/Block.svg";
import Tick from "../assets/Tick.svg";

const CameraTable = ({ cameras, onStatusChange, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>NAME</th>
        <th>HEALTH</th>
        <th>LOCATION</th>
        <th>RECORDER</th>
        <th>TASKS</th>
        <th>STATUS</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      {cameras.map((camera) => (
        <tr key={camera.id}>
          <td data-label="Name">
            <input type="checkbox" />
            <a href="#" className="camera-name">
              <span
                className={`status-dot ${
                  camera.current_status === "Online" ? "green" : "red"
                }`}
              ></span>
              {camera.name}
            </a>
          </td>
          <td data-label="Health">
             <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
    <img src={Cloud} alt="Cloud" />
    <div className={`health-badge ${camera.health?.cloud === "A" ? "green" : camera.health?.cloud === "-" ? "grey" : "orange"}`}>
      <span>{camera.health?.cloud || "-"}</span>
    </div>
    <img src={Device} alt="Device" />
    <div className={`health-badge ${camera.health?.device === "A" ? "green" : camera.health?.device === "-" ? "grey" : "orange"}`}>
      <span>{camera.health?.device || "-"}</span>
    </div>
  </div>
          </td>
          <td data-label="Location">{camera.location || "N/A"}</td>
          <td data-label="Recorder">{camera.recorder || "N/A"}</td>
          <td data-label="Tasks">
            {camera.tasks ? `${camera.tasks} Tasks` : "N/A"}
          </td>
          <td data-label="Status">
            <button
              className={`badge ${camera.status.toLowerCase()}`}
              onClick={async () => {
                const newStatus =
                  camera.status === "Active" ? "Inactive" : "Active";
                await updateStatus(camera.id, newStatus);
                onStatusChange(camera.id, newStatus);
              }}
            >
              {camera.status}
            </button>
          </td>
          <td data-label="Actions">
            <span>{camera.hasWarning === false ? <img src={Tick} alt="Tick"/> : <img src={Block} alt="Block"/>}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CameraTable;
