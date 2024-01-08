import React from "react";

import { Button, Img, Line, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[133px] items-start justify-between w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-[7%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-lg text-white-A700_cc"
                  size="txtInterMedium18"
                >
                  Company
                </Text>
                <ul className="flex flex-col gap-2 items-start justify-start md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-white-A700_7f"
                      size="txtInterRegular16WhiteA7007f"
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-white-A700_7f"
                      size="txtInterRegular16WhiteA7007f"
                    >
                      Careers
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[17px] items-start justify-start w-[12%] md:w-full">
              <Text
                className="text-lg text-white-A700_cc"
                size="txtInterMedium18"
              >
                Need Help
              </Text>
              <ul className="flex flex-col gap-[7px] items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-white-A700_7f"
                    size="txtInterRegular16WhiteA7007f"
                  >
                    Visit Help Center?
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-white-A700_7f"
                    size="txtInterRegular16WhiteA7007f"
                  >
                    Share Feedback
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-[15%] md:w-full">
              <Text
                className="text-lg text-white-A700_cc"
                size="txtInterMedium18"
              >
                View Website in
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-11 items-center justify-end p-[7px] w-full"
                style={{
                  backgroundImage: "url('images/img_group1000005219.svg')",
                }}
              >
                <div className="flex flex-row gap-3.5 items-start justify-center mt-[3px] w-[74%] md:w-full">
                  <Img
                    className="h-[11px] mt-1"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <SelectBox
                    className="font-inter leading-[normal] text-left text-white-A700_e5 text-xl w-[74%] sm:w-full"
                    placeholderClassName="text-white-A700_e5"
                    indicator={
                      <Img
                        className="h-[5px] mr-[0] outline-white-A700_cc outline-[0.5px] outline w-2.5"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="language"
                    options={languageOptionsList}
                    isSearchable={false}
                    placeholder="English"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[10%] md:w-full">
              <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                <Text
                  className="text-lg text-white-A700_cc"
                  size="txtInterMedium18"
                >
                  Social Media
                </Text>
                <div className="flex flex-row gap-3.5 items-center justify-start w-[90%] md:w-full">
                  <Button
                    className="border border-solid border-white-A700_33 flex items-center justify-center rounded-[21px] w-[43%]"
                    color="white_A700_33"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-5"
                      src="images/img_instagram1.svg"
                      alt="instagramOne"
                    />
                  </Button>
                  <Button
                    className="border border-solid border-white-A700_33 flex items-center justify-center rounded-[21px] w-[43%]"
                    color="white_A700_33"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_television.svg" alt="television" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[14%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-lg text-white-A700_cc"
                  size="txtInterMedium18"
                >
                  Download Our App
                </Text>
              </div>
              <Img
                className="h-[41px] md:h-auto mt-[31px] object-cover rounded-[20px] w-[97%]"
                src="images/img_rectangle5.png"
                alt="rectangleFive"
              />
              <Img
                className="h-[41px] md:h-auto mt-[17px] object-cover rounded-[20px] w-[97%]"
                src="images/img_rectangle4_41x157.png"
                alt="rectangleFour_Two"
              />
            </div>
          </div>
          <Line className="bg-white-A700_33 h-px mt-[46px] w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[19px] w-[93%] md:w-full">
            <ul className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full common-column-list">
              <li>
                <Text
                  className="text-base text-white-A700_7f"
                  size="txtInterRegular16WhiteA7007f"
                >
                  © 2023 STREAM X. All Rights Reserved.
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-white-A700_7f"
                  size="txtInterRegular16WhiteA7007f"
                >
                  Terms Of Use{" "}
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-white-A700_7f"
                  size="txtInterRegular16WhiteA7007f"
                >
                  Privacy Policy
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-white-A700_7f"
                  size="txtInterRegular16WhiteA7007f"
                >
                  FAQ
                </Text>
              </li>
            </ul>
            <Img
              className="h-[27px]"
              src="images/img_frame311.svg"
              alt="frame311_One"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
