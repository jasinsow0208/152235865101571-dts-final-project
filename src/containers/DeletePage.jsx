import React, { useState, useEffect } from "react";
import Axios from "axios";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DeleteFixedAssets from "../components/DeleteFixedAssets";

import { useParams } from "react-router-dom";

const DeletePage = () => {
  const [fixedAsset, setFixedAsset] = useState({});
  let params = useParams();
  console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          method: "get",
          url: `http://jasinsowandi-001-site5.btempurl.com/api/values/${params.id}`,
          withCredentials: false,
        });

        setFixedAsset(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <DeleteFixedAssets Data={fixedAsset} />
      <Footer />
    </>
  );
};

export default DeletePage;
