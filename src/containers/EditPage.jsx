import React from "react";
//import Axios from "axios";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EditFixedAssets from "../components/EditFixedAssets";

import { useParams } from "react-router-dom";

const EditPage = () => {
  //  const [fixedAsset, setFixedAsset] = useState({});
  let params = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await Axios({
  //         method: "get",
  //         url: `https://famanagement.azurewebsites.net/api/Values/${params.id}`,
  //         withCredentials: false,
  //       });

  //       setFixedAsset(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  //   //console.log("Dari EditPage:", fixedAsset);
  // }, []); // eslint-disable-line
  return (
    <>
      <NavBar />
      <EditFixedAssets Data={params.id} />
      <Footer />
    </>
  );
};

export default EditPage;
