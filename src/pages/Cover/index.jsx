import React from "react";

import { Img } from "components";

const CoverPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="h-[960px] sm:h-auto object-cover w-full"
          src="images/img_laptop1.png"
          alt="laptopOne"
        />
      </div>
    </>
  );
};

export default CoverPage;
