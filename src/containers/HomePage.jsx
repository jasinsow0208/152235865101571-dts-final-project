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
          url: "https://famanagement.azurewebsites.net/api/Values",
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
