import React from "react";
import { useParams } from "react-router-dom";
import { routesData } from "./formsComponentData";
const FullScreen = () => {
  const { id } = useParams();
  const Component = routesData[id - 1].component;
  return (
    <div className="">
      <Component />
    </div>
  );
};

export default FullScreen;
