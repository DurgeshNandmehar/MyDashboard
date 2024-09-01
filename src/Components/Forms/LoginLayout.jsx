import React, { useState } from "react";
import MyButton from "../../CustomComponents/MyButton";

import { useParams } from "react-router-dom";
import { routesData } from "./formsComponentData";

const LoginLayout = ({ start }) => {
  const { id } = useParams();
  const [index, setIndex] = useState(start);
  const Component = routesData[index].component;

  return (
    <div className="mb-10">
      <div className="mb-5 ">
        <div className="flex justify-center flex-wrap gap-3 text-sm">
          <MyButton
            onClick={() =>
              window.open(
                "/MyDashboard/Login/" + routesData[index].path,
                "_blank"
              )
            }
            bgColor="bg-[#162D3A]"
          >
            View Full Screen{id}
          </MyButton>
          <MyButton
            bgColor="bg-[#162D3A]"
            onClick={() => setIndex(index > 0 ? index - 1 : index)}
          >
            {index == 0 ? "Disabled" : "Previous"}
          </MyButton>
          <MyButton
            bgColor="bg-[#162D3A]"
            onClick={() =>
              setIndex(index < routesData.length - 1 ? index + 1 : index)
            }
          >
            {index == routesData.length - 1 ? "Not More Pages" : "Next"}
          </MyButton>
        </div>
      </div>
      {<Component />}
    </div>
  );
};

export default LoginLayout;
