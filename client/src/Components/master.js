import React from "react";
import { useParams } from "react-router-dom";

//Components
import Delivery from "./Delivery";


const Master = () => {
  const { type } = useParams();

  return<> {type=== "deli/>very" && <Deliver} </>;
};

export default Master;
