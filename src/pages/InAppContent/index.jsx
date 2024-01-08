import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import InAppContentCrew from "components/InAppContentCrew";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const InAppContentPage = () => {
  const inAppContentCrewPropList = [
    { jobtitle: "Wednesday Adams ", username: "Jenna Ortega" },
    { jobtitle: "Enid Sinclair", username: "Emma Myers" },
    { jobtitle: "Morticia Addams", username: "Catherine Zeta Jones " },
    { jobtitle: "Gomez Addams", username: "Luis Guzman" },
  ];

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-sfcompact items-end justify-start mx-auto pb-5 w-full">
        <div className="flex flex-col gap-[33px] items-center w-full">
          <div className="md:h-[678px] h-[797px] md:px-5 relative w-full">
            <div className="md:h-[678px] h-[797px] m-auto w-full">
              <Img
                className="absolute h-[678px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                src="images/img_rectangle1_678x1280.png"
                alt="rectangleOne"
              />
              <Img
                className="absolute bottom-[31%] h-[140px] left-[0] object-cover w-[37%]"
                src="images/img_ellipse5.png"
                alt="ellipseFive"
              />
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[93%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row font-sfcompact gap-[15px] items-center justify-center w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="border border-solid border-white-A700_7f flex flex-col items-start justify-start px-3 py-1.5 rounded-[18px] w-auto">
                        <Text
                          className="text-white-A700_cc text-xl w-auto"
                          size="txtSFCompactRegular20"
                        >
                          CBFC:U/A
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-white-A700_cc text-xl w-auto"
                      size="txtSFCompactRegular20"
                    >
                      Drama
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
                      7h 28m
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between mt-[31px] w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-[21px] items-center justify-between w-[37%] md:w-full">
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
                          <div className="mr-3 outline-white-A700_d8 outline-[1px] outline my-1">
                            <Img src="images/img_bookmark.svg" alt="bookmark" />
                          </div>
                        }
                        color="white_A700_19"
                        size="lg"
                        variant="fill"
                      >
                        <div className="leading-[normal] text-left text-xl">
                          Add Watchlist
                        </div>
                      </Button>
                    </div>
                    <Img
                      className="h-[55px]"
                      src="images/img_group1000005239.svg"
                      alt="group1000005239"
                    />
                  </div>
                  <Text
                    className="mt-14 text-base text-white-A700_cc w-full"
                    size="txtInterRegular16"
                  >
                    <>
                      Wednesday Addams, a teenager who possesses psychic
                      powers.Wednesday&#39;s cold, emotionless personality and
                      her defiant nature make it difficult for her to connect
                      with her schoolmates and cause her to run afoul of the
                      school&#39;s principal Larissa Weems. However, she
                      discovers she has inherited her mother&#39;s psychic
                      abilities which allow her to solve a local murder mystery.
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <Header className="absolute flex md:flex-col md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
            <Img
              className="absolute bottom-[29%] h-[138px] left-[4%] object-cover w-1/4"
              src="images/img_logowednesday500x281.png"
              alt="logowednesdayFifty"
            />
          </div>
          <div className="flex flex-col font-inter gap-5 items-start justify-start max-w-[1230px] mx-auto overflow-auto md:px-5 w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.12px] w-full"
              size="txtInterMedium28"
            >
              Top Cast
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-6 h-12 md:h-auto items-start justify-start w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[56%] md:w-full"
                  orientation="horizontal"
                >
                  {inAppContentCrewPropList.map((props, index) => (
                    <React.Fragment key={`InAppContentCrew${index}`}>
                      <InAppContentCrew
                        className="flex flex-row gap-3 items-center justify-start w-auto"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
                <InAppContentCrew className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto" />
                <List
                  className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[27%] md:w-full"
                  orientation="horizontal"
                >
                  <InAppContentCrew
                    className="flex flex-row gap-3 items-center justify-start w-auto"
                    username="Hunter Doohan"
                    jobtitle="Tyler"
                  />
                  <InAppContentCrew
                    className="flex flex-row gap-3 items-center justify-start w-auto"
                    username="Murray Bartlett"
                    jobtitle="Frank"
                  />
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter items-start mt-[57px] md:px-10 sm:px-5 px-[50px] w-full">
          <div className="flex flex-row gap-[22px] items-center justify-start w-[19%] md:w-full">
            <Button
              className="cursor-pointer font-semibold min-w-[91px] rounded-[16px] text-base text-center tracking-[0.08px]"
              color="gray_900_03"
              size="xs"
              variant="fill"
            >
              Episodes
            </Button>
            <Text
              className="text-base text-white-A700_7e tracking-[0.08px]"
              size="txtInterMedium16"
            >
              User Reviews
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-inter items-center mt-[42px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1232px] mx-auto overflow-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="ml-0.5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                size="txtInterMedium28"
              >
                1-8 Episodes
              </Text>
              <List
                className="sm:flex-col flex-row gap-3.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center ml-0.5 md:ml-[0] mt-[21px] w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start rounded-[18px] w-full">
                  <div className="h-[196px] relative rounded-[18px] w-full">
                    <Img
                      className="h-[196px] m-auto object-cover rounded-[18px] w-full"
                      src="images/img_rectangle40250.png"
                      alt="rectangle40250"
                    />
                    <div className="absolute bottom-[11%] flex flex-col gap-3 inset-x-[0] items-start justify-start mx-auto w-[91%]">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-white-A700_99 text-xs tracking-[0.06px]"
                          size="txtInterSemiBold12"
                        >
                          Episode 1
                        </Text>
                        <Text
                          className="text-white-A700_cc text-xs tracking-[0.06px]"
                          size="txtInterRegular12"
                        >
                          59m
                        </Text>
                      </div>
                      <Text
                        className="text-sm text-white-A700 tracking-[0.07px]"
                        size="txtInterSemiBold14"
                      >
                        Wednesday’s child Is Full of Woe{" "}
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] h-[3px] inset-x-[0] mx-auto w-[99%]">
                      <Line className="bg-white-A700_33 h-[3px] m-auto w-full" />
                      <Line className="absolute bg-white-A700_cc h-[3px] inset-y-[0] left-[0] my-auto rounded-[1px] w-[65%]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start rounded-[18px] w-full">
                  <div className="h-[196px] relative rounded-[18px] w-full">
                    <Img
                      className="h-[196px] m-auto object-cover rounded-[18px] w-full"
                      src="images/img_rectangle40250_196x301.png"
                      alt="rectangle40250"
                    />
                    <div className="absolute bottom-[12%] flex flex-col gap-[11px] inset-x-[0] items-start justify-start mx-auto w-[91%]">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-white-A700_99 text-xs tracking-[0.06px]"
                          size="txtInterSemiBold12"
                        >
                          Episode 2
                        </Text>
                        <Text
                          className="text-white-A700_cc text-xs tracking-[0.06px]"
                          size="txtInterRegular12"
                        >
                          48m
                        </Text>
                      </div>
                      <Text
                        className="text-sm text-white-A700 tracking-[0.07px]"
                        size="txtInterSemiBold14"
                      >
                        Friend or Woe
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] h-[3px] inset-x-[0] mx-auto w-[99%]">
                      <Line className="bg-white-A700_33 h-[3px] m-auto w-full" />
                      <Line className="absolute bg-white-A700_cc h-[3px] inset-y-[0] left-[0] my-auto rounded-[1px] w-[51%]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start rounded-[18px] w-full">
                  <div className="h-[196px] relative rounded-[18px] w-full">
                    <Img
                      className="h-[196px] m-auto object-cover rounded-[18px] w-full"
                      src="images/img_rectangle40250_1.png"
                      alt="rectangle40250"
                    />
                    <div className="absolute bottom-[12%] flex flex-col gap-[11px] inset-x-[0] items-start justify-start mx-auto w-[91%]">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-white-A700_99 text-xs tracking-[0.06px]"
                          size="txtInterSemiBold12"
                        >
                          Episode 3
                        </Text>
                        <Text
                          className="text-white-A700_cc text-xs tracking-[0.06px]"
                          size="txtInterRegular12"
                        >
                          48m
                        </Text>
                      </div>
                      <Text
                        className="text-sm text-white-A700 tracking-[0.07px]"
                        size="txtInterSemiBold14"
                      >
                        Friend or Woe
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] h-[3px] inset-x-[0] mx-auto w-[99%]">
                      <Line className="bg-white-A700_33 h-[3px] m-auto w-full" />
                      <Line className="absolute bg-white-A700_cc h-[3px] inset-y-[0] left-[0] my-auto rounded-[1px] w-[90%]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start rounded-[18px] w-full">
                  <div className="h-[196px] relative rounded-[18px] w-full">
                    <Img
                      className="absolute h-[196px] inset-[0] justify-center m-auto object-cover rounded-[18px] w-full"
                      src="images/img_rectangle40250_2.png"
                      alt="rectangle40250"
                    />
                    <div className="absolute bottom-[11%] flex flex-col gap-3 inset-x-[0] items-start justify-start mx-auto w-[91%]">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-white-A700_99 text-xs tracking-[0.06px]"
                          size="txtInterSemiBold12"
                        >
                          Episode 4
                        </Text>
                        <Text
                          className="text-white-A700_cc text-xs tracking-[0.06px]"
                          size="txtInterRegular12"
                        >
                          49m
                        </Text>
                      </div>
                      <Text
                        className="text-sm text-white-A700 tracking-[0.07px]"
                        size="txtInterSemiBold14"
                      >
                        Woe What a Night
                      </Text>
                    </div>
                    <Line className="absolute bg-white-A700_33 bottom-[0] h-[3px] inset-x-[0] mx-auto w-[99%]" />
                    <Line className="absolute bg-white-A700_cc bottom-[0] h-[3px] inset-x-[0] mx-auto rounded-[1px] w-full" />
                  </div>
                </div>
              </List>
              <div className="flex flex-row md:gap-10 items-center justify-between mt-[59px] w-[96%] md:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtInterMedium28"
                >
                  More Like this
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
              <div className="flex flex-col items-end justify-start md:ml-[0] ml-[3px] mt-5 w-[99%] md:w-full">
                <div className="flex flex-col items-end justify-start w-auto md:w-full">
                  <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between w-[99%]">
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
          <div className="flex flex-col items-center justify-start max-w-[1229px] mt-[30px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-end justify-start overflow-auto w-full">
              <div className="flex flex-col items-end justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between w-full">
                  <Img
                    className="h-[171px] md:h-auto object-cover rounded-[12px]"
                    src="images/img_rectangle4_5.png"
                    alt="rectangleFour_One"
                  />
                  <Img
                    className="h-[171px] md:h-auto object-cover rounded-[12px]"
                    src="images/img_rectangle40245_1.png"
                    alt="rectangle40245_One"
                  />
                  <Img
                    className="h-[171px] md:h-auto object-cover rounded-[12px]"
                    src="images/img_rectangle40246_1.png"
                    alt="rectangle40246_One"
                  />
                  <Img
                    className="h-[171px] md:h-auto object-cover rounded-[12px]"
                    src="images/img_rectangle40247_1.png"
                    alt="rectangle40247_One"
                  />
                  <Img
                    className="h-[171px] md:h-auto object-cover rounded-[12px]"
                    src="images/img_rectangle40248_1.png"
                    alt="rectangle40248_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-16 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default InAppContentPage;
