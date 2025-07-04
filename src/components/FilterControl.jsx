 
import React from "react";
import Location from "../assets/Location.svg";
import "./FilterControl.css"


const FilterControls = ({ locationFilter, statusFilter, onLocationChange, onStatusChange, locations=[] }) => (
//   <div className="custom-select-wrapper" style={{ display: "flex", gap: "10px"}}>
//     <span className="icon-left"><img src={Location} /></span>
//     <select className="custom-select" style={{color: "#A0A0A0", border:"1px solid #ccc", borderRadius:"6px"}} value={locationFilter} onChange={(e) => onLocationChange(e.target.value)}>
//       <option value="">Locations</option>
//       {locations.map((loc, idx) => (
//         <option key={idx} value={loc}>
//           {loc}
//         </option>
//       ))}
//     </select>
    
//     <span className="icon-left"><img src={Location} /></span>
//     <select className="custom-select" style={{color: "#A0A0A0", border:"1px solid #ccc", borderRadius:"6px"}} value={statusFilter} onChange={(e) => onStatusChange(e.target.value)}>
//       <option value="">Status</option>
//       <option value="Active">Active</option>
//       <option value="Inactive">Inactive</option>
//     </select>
//   </div>

<div className="filters" style={{ display: "flex", gap: "10px" }}>
  <div className="custom-select-container">
    <span className="icon">
      <img src={Location} alt="Location" />
    </span>
    <select
      value={locationFilter}
      onChange={(e) => onLocationChange(e.target.value)}
    >
      <option value="">Location</option>
      {locations.map((loc, idx) => (
        <option key={idx} value={loc}>
          {loc}
        </option>
      ))}
    </select>
  </div>

  <div className="custom-select-container">
    <span className="icon">
      <img src={Location} alt="Status" />
    </span>
    <select
      value={statusFilter}
      onChange={(e) => onStatusChange(e.target.value)}
    >
      <option value="">Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  </div>
</div>

);

export default FilterControls;
