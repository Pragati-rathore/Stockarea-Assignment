import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWarehouses } from '../actions/warehouseaction';
import styled from 'styled-components'; // Import styled-components

const WarehouseCard = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const WarehouseList = () => {
  const dispatch = useDispatch();
    const fetchWarehouseData = async () => {
      try {
        const response = await fetch('warehouses.json');
        const data = await response.json();
        console.log(data);
        dispatch(setWarehouses(data)); // Dispatch the action
      } catch (error) {
        console.error('Error fetching warehouse data:', error);
      }
    };

    fetchWarehouseData();
  const warehouses = useSelector((state) => state.warehouses);
  const [searchText, setSearchText] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedCluster, setSelectedCluster] = useState('All');
  const [minSpaceAvailable, setMinSpaceAvailable] = useState('');

  // Filter the warehouses based on search and filter criteria
  const filteredWarehouses = warehouses.filter((warehouse) => {
    const nameMatches = warehouse.name.toLowerCase().includes(searchText.toLowerCase());
    const cityMatches =
      selectedCity === 'All' || warehouse.city.toLowerCase() === selectedCity.toLowerCase();
    const clusterMatches =
      selectedCluster === 'All' || warehouse.cluster.toLowerCase() === selectedCluster.toLowerCase();
    const spaceAvailableMatches =
      minSpaceAvailable === '' || warehouse.space_available >= parseInt(minSpaceAvailable, 10);

    return nameMatches && cityMatches && clusterMatches && spaceAvailableMatches;
  });

  return (
    <div className="warehouse-list">
      <h1>Warehouse Listing</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by warehouse name, city, cluster, or space available"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Filter Dropdowns */}
        <select
  value={selectedCity}
  onChange={(e) => setSelectedCity(e.target.value)}
>
  <option value="All">All Cities</option>
  <option value="Delhi">Delhi</option>
  <option value="Chennai">Chennai</option>
  <option value="Indore">Indore</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Bangalore">Bangalore</option>
  <option value="Guwahati">Guwahati</option>
</select>

<select
  value={selectedCluster}
  onChange={(e) => setSelectedCluster(e.target.value)}
>
  <option value="All">All Clusters</option>
  <option value="cluster-a-32">cluster-a-32</option>
  <option value="cluster-a-1">cluster-a-1</option>
  <option value="cluster-a-21">cluster-a-21</option>
  <option value="cluster-a-2">cluster-a-2</option>
  <option value="cluster-v-2">cluster-v-2</option>
</select>

        <input
          type="number"
          placeholder="Min Space Available"
          value={minSpaceAvailable}
          onChange={(e) => setMinSpaceAvailable(e.target.value)}
        />
      </div>

      {/* Warehouse List */}
      <div>
        {filteredWarehouses.map((warehouse) => (
            <Link to={`/edit/${warehouse.id}`} key={warehouse.id}>
          <WarehouseCard key={warehouse.id}>
            <h2>{warehouse.name}</h2>
            <p>City: {warehouse.city}</p>
            <p>Cluster: {warehouse.cluster}</p>
            {/* Add more warehouse details here */}
          </WarehouseCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WarehouseList;
