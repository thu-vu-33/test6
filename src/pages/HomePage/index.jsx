import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomePagePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-sfcompact sm:gap-10 md:gap-10 gap-16 items-center justify-start mx-auto pb-6 w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="h-[950px] mx-auto w-full">
            <div className="h-[950px] m-auto w-full">
              <Img
                className="h-[950px] m-auto object-cover w-full"
                src="images/img_rectangle1.png"
                alt="rectangleOne"
              />
              <div className="absolute backdrop-opacity-[0.5] bg-black-900_e5 blur-[300.00px] h-[395px] inset-x-[0] mx-auto rounded-[357px] top-[24%] w-[56%]"></div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[24%] w-[35%]">
              <Img
                className="h-[137px] sm:h-auto object-cover w-[82%] md:w-full"
                src="images/img_spiderman.png"
                alt="spiderman"
              />
              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-center w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[107px] rounded-[18px] text-center text-xl"
                    color="white_A700_7f"
                    size="xs"
                    variant="outline"
                  >
                    CBFC:U/A
                  </Button>
                </div>
                <Text
                  className="text-white-A700_cc text-xl w-auto"
                  size="txtSFCompactRegular20"
                >
                  Action
                </Text>
                <div className="bg-blue_gray-100_cc h-[3px] rounded-[1px] w-[3px]"></div>
                <Text
                  className="text-white-A700_cc text-xl w-auto"
                  size="txtSFCompactRegular20"
                >
                  Adventure
                </Text>
                <div className="bg-blue_gray-100_cc h-[3px] rounded-[1px] w-[3px]"></div>
                <Text
                  className="text-white-A700_cc text-xl w-auto"
                  size="txtSFCompactRegular20"
                >
                  2h 28m
                </Text>
              </div>
              <div className="flex flex-col font-inter gap-[26px] items-center justify-start mt-[19px] w-full">
                <Text
                  className="text-base text-center text-white-A700_cc w-full"
                  size="txtInterRegular16"
                >
                  When a spell goes wrong, dangerous foes from other worlds
                  start to appear, forcing Peter to discover what it truly means
                  to be Spider-Man.
                </Text>
                <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-full">
                  <Button
                    className="border border-solid border-white-A700_33 cursor-pointer flex items-center justify-center min-w-[206px] rounded-[27px]"
                    leftIcon={
                      <Img
                        className="h-5 mr-3 my-0.5"
                        src="images/img_overflowmenu.svg"
                        alt="overflow_menu"
                      />
                    }
                    color="white_A700_e5"
                    size="lg"
                    variant="fill"
                  >
                    <div className="leading-[normal] text-left text-xl">
                      Watch Now
                    </div>
                  </Button>
                  <Button
                    className="border border-solid border-white-A700_33 cursor-pointer flex items-center justify-center min-w-[206px] rounded-[27px]"
                    leftIcon={
                      <Img
                        className="h-5 mt-[3px] mb-px mr-3"
                        src="images/img_arrowright.svg"
                        alt="arrow_right"
                      />
                    }
                    color="white_A700_19"
                    size="lg"
                    variant="fill"
                  >
                    <div className="leading-[normal] text-left text-xl">
                      More Info
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Header className="flex md:flex-col md:gap-5 items-center justify-center mt-[-NaNpx] mx-auto w-full z-[1]" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[-NaNpx] mx-auto w-auto md:w-full z-[1]">
            <div className="h-[299px] relative w-[23%] md:w-full">
              <div className="absolute flex flex-col font-sfcompact h-full inset-y-[0] items-end justify-end left-[0] my-auto w-auto">
                <div className="flex flex-col items-center justify-end w-[87%]">
                  <div className="flex relative w-full">
                    <Text
                      className="my-auto md:text-5xl text-[250px] text-center text-white-A700_e5"
                      size="txtSFCompactBlack250"
                    >
                      1
                    </Text>
                    <Img
                      className="h-[178px] mb-[34px] ml-[-40px] mt-auto object-cover rounded-[12px] w-[63%] z-[1]"
                      src="images/img_rectangle4.png"
                      alt="rectangleFour"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="absolute right-[0] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700 top-[3%]"
                size="txtInterMedium28"
              >
                Latest & Trending{" "}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[19%] md:w-full">
              <div className="flex relative w-full">
                <Text
                  className="my-auto md:text-5xl text-[250px] text-center text-white-A700_e5"
                  size="txtSFCompactBlack250"
                >
                  2
                </Text>
                <Img
                  className="h-[178px] mb-8 ml-[-64.41px] mt-auto object-cover rounded-[12px] w-[59%] z-[1]"
                  src="images/img_rectangle4_178x138.png"
                  alt="rectangleFour_One"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[19%] md:w-full">
              <div className="flex relative w-full">
                <Text
                  className="my-auto md:text-5xl text-[250px] text-center text-white-A700_e5"
                  size="txtSFCompactBlack250"
                >
                  3
                </Text>
                <Img
                  className="h-[178px] mb-[34px] ml-[-67.83px] mt-auto object-cover rounded-[12px] w-[58%] z-[1]"
                  src="images/img_rectangle4_1.png"
                  alt="rectangleFour_Two"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
              <div className="overflow-x-auto w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between overflow-auto w-full">
                  <div className="h-[299px] relative w-full">
                    <Text
                      className="absolute h-full inset-y-[0] left-[0] my-auto md:text-5xl text-[250px] text-center text-white-A700_e5"
                      size="txtSFCompactBlack250"
                    >
                      4
                    </Text>
                    <Img
                      className="absolute bottom-[11%] h-[178px] object-cover right-[0] rounded-[12px] w-[57%]"
                      src="images/img_rectangle4_2.png"
                      alt="rectangleFour_Three"
                    />
                  </div>
                  <Img
                    className="h-[178px] md:h-auto sm:mt-0 mt-[86px] object-cover rounded-[12px]"
                    src="images/img_rectangle4_3.png"
                    alt="rectangleFour_Four"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[15%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="md:text-5xl text-[250px] text-center text-white-A700_e5"
                  size="txtSFCompactBlack250"
                >
                  5
                </Text>
              </div>
            </div>
          </div>
          <List
            className="flex flex-col font-inter gap-[50px] items-center mt-[-8px] mx-auto w-auto z-[1]"
            orientation="vertical"
          >
            <div className="flex flex-col items-center justify-start my-0 w-full">
              <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtInterMedium28"
                  >
                    Top Searches
                  </Text>
                  <Button
                    className="border border-solid border-white-A700_33 cursor-pointer flex items-center justify-center mb-1 min-w-[120px]"
                    rightIcon={
                      <div className="ml-1.5 bg-white-A700 my-1">
                        <Img
                          src="images/img_arrowright_white_a700.svg"
                          alt="arrow_right"
                        />
                      </div>
                    }
                    shape="round"
                    color="white_A700_33"
                    size="xs"
                    variant="fill"
                  >
                    <div className="leading-[normal] text-base text-center">
                      View More
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-end justify-start overflow-auto w-full">
                  <div className="flex flex-col items-end justify-start w-auto md:w-full">
                    <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between w-full">
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle4_171x251.png"
                        alt="rectangleFour"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40245.png"
                        alt="rectangle40245"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40246.png"
                        alt="rectangle40246"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40247.png"
                        alt="rectangle40247"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40248.png"
                        alt="rectangle40248"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start my-0 w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtInterMedium28"
                  >
                    Action
                  </Text>
                  <Button
                    className="border border-solid border-white-A700_33 cursor-pointer flex items-center justify-center min-w-[120px]"
                    rightIcon={
                      <div className="ml-1.5 bg-white-A700 my-1">
                        <Img
                          src="images/img_arrowright_white_a700.svg"
                          alt="arrow_right"
                        />
                      </div>
                    }
                    shape="round"
                    color="white_A700_33"
                    size="xs"
                    variant="fill"
                  >
                    <div className="leading-[normal] text-base text-center">
                      View More
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-end justify-start overflow-auto w-full">
                  <div className="flex flex-col items-end justify-start w-auto md:w-full">
                    <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between w-full">
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle4_4.png"
                        alt="rectangleFour"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40245_171x251.png"
                        alt="rectangle40245"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40246_171x251.png"
                        alt="rectangle40246"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40247_171x250.png"
                        alt="rectangle40247"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40248_171x251.png"
                        alt="rectangle40248"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start my-0 w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtInterMedium28"
                  >
                    Romance & Drama
                  </Text>
                  <Button
                    className="border border-solid border-white-A700_33 cursor-pointer flex items-center justify-center min-w-[120px]"
                    rightIcon={
                      <div className="ml-1.5 bg-white-A700 my-1">
                        <Img
                          src="images/img_arrowright_white_a700.svg"
                          alt="arrow_right"
                        />
                      </div>
                    }
                    shape="round"
                    color="white_A700_33"
                    size="xs"
                    variant="fill"
                  >
                    <div className="leading-[normal] text-base text-center">
                      View More
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-end justify-start overflow-auto w-full">
                  <div className="flex flex-col items-end justify-start w-auto md:w-full">
                    <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between w-full">
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle4_5.png"
                        alt="rectangleFour"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40245_1.png"
                        alt="rectangle40245"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40246_1.png"
                        alt="rectangle40246"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40247_1.png"
                        alt="rectangle40247"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40248_1.png"
                        alt="rectangle40248"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start my-0 w-full">
              <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtInterMedium28"
                  >
                    Comedy
                  </Text>
                  <Button
                    className="border border-solid border-white-A700_33 cursor-pointer flex items-center justify-center mb-1 min-w-[120px]"
                    rightIcon={
                      <div className="ml-1.5 bg-white-A700 my-1">
                        <Img
                          src="images/img_arrowright_white_a700.svg"
                          alt="arrow_right"
                        />
                      </div>
                    }
                    shape="round"
                    color="white_A700_33"
                    size="xs"
                    variant="fill"
                  >
                    <div className="leading-[normal] text-base text-center">
                      View More
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-end justify-start overflow-auto w-full">
                  <div className="flex flex-col items-end justify-start w-auto md:w-full">
                    <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between w-full">
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle4_6.png"
                        alt="rectangleFour"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40245_2.png"
                        alt="rectangle40245"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40246_2.png"
                        alt="rectangle40246"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40247_2.png"
                        alt="rectangle40247"
                      />
                      <Img
                        className="h-[171px] md:h-auto object-cover rounded-[12px]"
                        src="images/img_rectangle40248_2.png"
                        alt="rectangle40248"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <Footer className="flex font-inter items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomePagePage;
