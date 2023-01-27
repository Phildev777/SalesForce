import React, { useEffect, useState } from "react";
import axios from "axios";
import MainContainerTest from "../components/MainContainerTest";
// import {UserContext} from "../App";

function Services() {
  const [dataService, setDataService] = useState([]);

  const fe = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/service`)
      .then((res) => {
        setDataService(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fe();
  }, []);

  return (
    <div>
      <MainContainerTest dataService={dataService} />
    </div>
  );
}

export default Services;
