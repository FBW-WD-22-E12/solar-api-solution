import { useEffect, useState } from "react";
import axios from "axios";
import SateliteDetail from "./SateliteDetail";
import SearchComponent from "./SearchComponent";
import FilteringComponent from "./FilteringComponent";

const Satellites = () => {
  const [satellites, setSatellites] = useState([]);
  const [filtering, setFiltering] = useState("");

  const getdata = async () => {
    const response = await axios.get(
      `http://localhost:3001/satellite/${filtering}`
    );
    if (filtering === "") {
      setSatellites(response.data);
    } else {
      setSatellites([response.data.data]);
    }
  };

  const getSateliteName = (name) => {
    setFiltering(`/find/${name}`);
  };

  const filterData = (value) => {
    setFiltering(value);
  };

  useEffect(() => {
    getdata();
  }, [filtering]);

  return (
    <>
      <h1>Satellites</h1>
      <FilteringComponent filterData={filterData} />
      <SearchComponent getSateliteName={getSateliteName} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Density</th>
            <th>Radius</th>
            <th>Magnitude</th>
          </tr>
        </thead>
        <tbody>
          {satellites.map((satelite) => (
            <SateliteDetail key={satelite.id} satelite={satelite} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Satellites;
