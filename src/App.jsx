import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import useCameraData from "./hooks/useCameraData";
import SearchBar from "./components/SearchBar";
import FilterControls from "./components/FilterControl";
import CameraTable from "./components/CameraTable";
import Pagination from "./components/Pagination";
import BrandLogo from "./assets/BrandLogo.svg"
import Search from "./assets/icon.svg";

const CameraDashboard = () => {
  const { cameras, setCameras, loading } = useCameraData();
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleStatusChange = (id, newStatus) => {
    const updated = cameras.map((cam) =>
      cam.id === id ? { ...cam, status: newStatus } : cam
    );
    setCameras(updated);
  };

  const handleDelete = (id) => {
    const updated = cameras.filter((cam) => cam.id !== id);
    setCameras(updated);
  };

  const uniqueLocations = [...new Set(cameras.map((cam) => cam.location))];

  const filtered = cameras.filter((cam) => {
    return (
      cam.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (locationFilter ? cam.location === locationFilter : true) &&
      (statusFilter ? cam.status === statusFilter : true)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const totalItems = filtered.length;

  if (loading) return <p>Loading cameras...</p>;

  return (
    <div className="container">
      <div className="logo-container"> <img src={BrandLogo} alt="BrandLogo"  className="brandLogo"/></div>
      <div className="header">
        <div>
          <div>
            <h1>Cameras</h1>
            <p>Manage your cameras here</p>
          </div>

           <div
            className="filters"
            style={{ display: "flex", marginBottom: 16 }}
          >
            <FilterControls
              locationFilter={locationFilter}
              statusFilter={statusFilter}
              onLocationChange={setLocationFilter}
              onStatusChange={setStatusFilter}
              locations={uniqueLocations}
            />
          </div>
         
        </div>
        
        <div className="controls">
         
           <div className="search">
              <input type="text" placeholder="Search" />
              <img src={Search} alt=""/>
          </div>
        </div>
      </div>
      <CameraTable
        cameras={currentItems}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage = {itemsPerPage}
        totalItems = {totalItems}
      />
    </div>
  );
};

export default CameraDashboard;
