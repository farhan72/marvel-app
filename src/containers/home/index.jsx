import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Banner from "../../components/banner";
import axios from "axios";
import { APIv1 } from "../../helper/authorization";

function Index() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetchComicsData();
  }, [comics]);
  function fetchComicsData() {
    const params = {
      dateDescriptor: "lastWeek",
      limit: 5,
    };
    axios
      .get(APIv1("comics", params))
      .then((result) => {
        const { data } = result;
        const comicData = data.data,
          { results } = comicData;
        setComics(results);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  return (
    <>
      <Banner dataComics={comics} />
    </>
  );
}

export default Index;
