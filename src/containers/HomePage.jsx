import React, { useState, useEffect } from "react";
import Axios from "axios";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DataFixedAssets from "../components/DataFixedAssets";

const HomePage = () => {
  const [fixedAssets, setFixedAssets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          method: "get",
          url: "http://jasinsowandi-001-site5.btempurl.com/api/values",
          withCredentials: false,
        });

        setFixedAssets(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <DataFixedAssets Data={fixedAssets} />
      <Footer />
    </>
  );
};

export default HomePage;
