import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[88px] sm:h-auto object-cover w-full"
          src="images/img_ellipse16_88x1280.png"
          alt="ellipseSixteen"
        />
        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] md:mt-0 mx-[50px] my-6 w-[93%] md:w-full">
          <Img
            className="h-[27px] md:mt-0 my-1.5"
            src="images/img_frame311.svg"
            alt="frame311"
          />
          <ul className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-start justify-start md:ml-[0] ml-[30px] md:mt-0 my-1.5 w-auto sm:w-full common-row-list">
            <li>
              <Text
                className="text-white-A700_cc text-xl"
                size="txtSFCompactRegular20"
              >
                Home
              </Text>
            </li>
            <li>
              <Text
                className="text-white-A700_cc text-xl"
                size="txtSFCompactRegular20"
              >
                Movies
              </Text>
            </li>
            <li>
              <Text
                className="text-white-A700_cc text-xl"
                size="txtSFCompactRegular20"
              >
                Series
              </Text>
            </li>
            <li>
              <Text
                className="text-white-A700_cc text-xl"
                size="txtSFCompactRegular20"
              >
                Trending
              </Text>
            </li>
            <li>
              <Text
                className="text-white-A700_cc text-xl"
                size="txtSFCompactRegular20"
              >
                Categories
              </Text>
            </li>
          </ul>
          <div className="flex flex-row gap-[9px] items-center justify-between md:ml-[0] ml-[226px] w-[30%] md:w-full">
            <div className="bg-black-900_19 border border-solid border-white-A700_33 flex flex-row items-start justify-between p-2 rounded-[19px] w-[87%]">
              <Text
                className="ml-[5px] mt-0.5 text-base text-white-A700_99"
                size="txtInterRegular16WhiteA70099"
              >
                Search Movies, Series...
              </Text>
              <Img
                className="h-[19px] mr-[7px] w-[19px]"
                src="images/img_rewind.svg"
                alt="rewind"
              />
            </div>
            <Img
              className="h-[39px] md:h-auto rounded-[50%] w-[39px]"
              src="images/img_ellipse14.png"
              alt="ellipseFourteen"
            />
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
